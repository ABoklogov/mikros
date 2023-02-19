package com.mikros; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;
// import com.facebook.react.bridge.Promise;

public class ScannerModule extends ReactContextBaseJavaModule {
  ScannerModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "ScannerModule";
  }
  
  @ReactMethod
  public void fetchBarcode(String image, Callback callBack) {
    Log.d("ScannerModule", "------------ Картинка штрих-кода" + image);

    String code = "777777777777777";
    callBack.invoke(code);
  }
  // @ReactMethod
  // public void fetchBarcode(String image, Promise promise) {
  //   Log.d("ScannerModule", "Картинка штри-кода" + image);

  //   try {
  //     String code = "123456789";
  //     promise.resolve(code);
  //   } catch(Exception e) {
  //     promise.reject("fetchBarcode error", e);
  //   }
  // }
}