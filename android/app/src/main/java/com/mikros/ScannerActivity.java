package com.mikros;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ImageButton;

import com.facebook.react.ReactActivity;
import com.google.zxing.ResultMetadataType;
import com.google.zxing.ResultPoint;
import com.journeyapps.barcodescanner.BarcodeCallback;
import com.journeyapps.barcodescanner.BarcodeResult;
import com.journeyapps.barcodescanner.CaptureManager;
import com.journeyapps.barcodescanner.DecoratedBarcodeView;

import java.util.List;


public class ScannerActivity extends ReactActivity implements DecoratedBarcodeView.TorchListener {
    private CaptureManager capture;
    private DecoratedBarcodeView barcodeScannerView;
    private ImageButton switchFlashlightButton;
    //private ViewfinderView viewfinderView;
    private Handler handler;
    private boolean isFlashOn = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_custom_scanner);

        barcodeScannerView = findViewById(R.id.zxing_barcode_scanner);
        barcodeScannerView.setTorchListener(this);

        switchFlashlightButton = findViewById(R.id.switch_flashlight);

        //ViewfinderView viewfinderView = findViewById(R.id.zxing_viewfinder_view);

        if (!hasFlash()) {
            switchFlashlightButton.setVisibility(View.GONE);
        }

        capture = new CaptureManager(this, barcodeScannerView);
        capture.initializeFromIntent(getIntent(), savedInstanceState);
        capture.decode();
        barcodeScannerView.decodeContinuous(new BarcodeCallback() {
            @Override
            public void barcodeResult(BarcodeResult result) {
                Log.d("LogTrack", "barcodeResult");
                if (result != null) {
                    String eanExtension = "";
                    //Toast.makeText(getApplication(), result.getResult().toString() + " " + result.getResultMetadata().toString(), Toast.LENGTH_LONG).show();
                    if (result.getResultMetadata().containsKey(ResultMetadataType.UPC_EAN_EXTENSION)) {
                        Log.d("LogTrack", "UPC_EAN_EXTENSION = true");
                        eanExtension = result.getResultMetadata().get(ResultMetadataType.UPC_EAN_EXTENSION).toString();
                    }

                    onScanSuccess(result.getResult().toString(), eanExtension);
                    return;
                }
            }

            @Override
            public void possibleResultPoints(List<ResultPoint> resultPoints) {

            }
        });
    }

    private void onScanSuccess(String key, String key5) {
        Intent intent = getIntent();
        intent.putExtra("key", key);
        intent.putExtra("key5", key5);
        setResult(RESULT_OK, intent);
        finish();
    }


    @Override
    protected void onResume() {
        Log.d("LogTrack", "onResume");
        super.onResume();
        capture.onResume();
    }


    @Override
    public void onBackPressed() {

        Log.d("LogTrack", "onBackPressed");
        Intent intent = getIntent();
        setResult(RESULT_CANCELED, intent);
        finish();
    }

    @Override
    protected void onPause() {
        Log.d("LogTrack", "onPause");
        super.onPause();
        capture.onPause();
    }

    @Override
    protected void onDestroy() {
        Log.d("LogTrack", "onDestroy");
        super.onDestroy();
        capture.onDestroy();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        capture.onSaveInstanceState(outState);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        return barcodeScannerView.onKeyDown(keyCode, event) || super.onKeyDown(keyCode, event);
    }

    /**
     * Check if the device's camera has a Flashlight.
     *
     * @return true if there is Flashlight, otherwise false.
     */
    private boolean hasFlash() {
        return getApplicationContext().getPackageManager()
                .hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH);
    }

    public void switchFlashlight(View view) {
        if (isFlashOn) {
            barcodeScannerView.setTorchOff();
        } else {
            barcodeScannerView.setTorchOn();
        }
    }

    @Override
    public void onTorchOn() {
        switchFlashlightButton.setBackground(getResources().getDrawable(R.drawable.ic_flash_off));
        isFlashOn = true;
    }

    @Override
    public void onTorchOff() {
        switchFlashlightButton.setBackground(getResources().getDrawable(R.drawable.ic_flash_on));
        isFlashOn = false;
    }
}