package com.mikros;

import android.content.pm.PackageManager;

import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;

import android.widget.ImageButton;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.Result;
import com.google.zxing.ResultPoint;
import com.journeyapps.barcodescanner.BarcodeCallback;
import com.journeyapps.barcodescanner.BarcodeResult;
import com.journeyapps.barcodescanner.CaptureManager;
import com.journeyapps.barcodescanner.DecoratedBarcodeView;
import com.journeyapps.barcodescanner.ViewfinderView;

import java.util.Arrays;
import java.util.List;


public class ScannerActivity extends ReactActivity implements DecoratedBarcodeView.TorchListener, BarcodeCallback {
    private CaptureManager capture;
    private DecoratedBarcodeView barcodeScannerView;
    private ImageButton switchFlashlightButton;
    //private ViewfinderView viewfinderView;
    private boolean isFlashOn = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_custom_scanner);

        startScanning();

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

        barcodeScannerView.decodeSingle(new BarcodeCallback() {
            @Override
            public void barcodeResult(BarcodeResult result) {
                Log.d("LogTrack", "barcodeResult");
                if (result != null) {
                    Log.d("LogTrack", "result = " + result.getResult().toString());
                    Log.d("LogTrack", "result = " + result.getResultMetadata().toString());
                }
            }

            @Override
            public void possibleResultPoints(List<ResultPoint> resultPoints) {

            }
        });
    }

    private void startScanning() {

    }



    @Override
    protected void onResume() {
        super.onResume();
        capture.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        capture.onPause();
    }

    @Override
    protected void onDestroy() {
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

    @Override
    public void barcodeResult(BarcodeResult result) {

    }

    @Override
    public void possibleResultPoints(List<ResultPoint> resultPoints) {

    }


}