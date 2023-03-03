import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  NativeModules
} from 'react-native';
// import { fetchBarcode } from 'store/scaner/scanerOperation';
// import { removeProduct } from 'store/scaner/scanerSlice';
// import icons

// import components

// import vars
// import { colors, strings, mHorizontal } from 'res/vars';
// import { title } from 'res/palette';

const { ScannerModule } = NativeModules;

export default BarcodeScanScreen = () => {
    const onBarcodeRead = (event) => {
        console.log(event)
    };

var barcodeTypes = [
    'QR_CODE',
    'EAN_13'
]
    useEffect(() => {
        ScannerModule.openCustomScanner(false, false, barcodeTypes, onBarcodeRead);
    }, []);
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
});