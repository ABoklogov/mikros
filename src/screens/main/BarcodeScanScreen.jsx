import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  NativeModules
} from 'react-native';
// import { fetchBarcode } from 'store/scaner/scanerOperation';
// import { removeProduct } from 'store/scaner/scanerSlice';
// import icons

// import components
import MainButton from 'components/shared/MainButton';
// import vars
import { colors, strings, mHorizontal } from 'res/vars';
import { title } from 'res/palette';

const { ScannerModule } = NativeModules;

export default BarcodeScanScreen = () => {
  const [barcode, setBarcode] = useState(null);
  console.log("🚀 ~ barcode:", barcode)

  var barcodeTypes = [
      'QR_CODE',
      'EAN_13'
  ]
  useEffect(() => {
    if (!barcode) {
      // ScannerModule.openScanner(true, null, onBarcodeRead);
      ScannerModule.openCustomScanner(false, false, barcodeTypes, onBarcodeRead);
    };
  }, [barcode]);

  const onBarcodeRead = (code) => {
    setBarcode(code);
    console.log(code);
  };

  const removeBarcode = () => {
    setBarcode(null);
    if (!barcode) {
      // ScannerModule.openScanner(true, null, onBarcodeRead);
      ScannerModule.openCustomScanner(false, false, barcodeTypes, onBarcodeRead);
    };
  };

    // useEffect(() => {
    //     ScannerModule.openCustomScanner(false, false, barcodeTypes, onBarcodeRead);
    // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.barcodeText}>
        {barcode}
      </Text>

      <View style={styles.btnScan}>
        <MainButton
          text={strings.textBtnOpenScan}
          onPress={removeBarcode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnScan: {
    position: 'absolute',
    zIndex: 5,
    bottom: 100,
    marginHorizontal: mHorizontal.baseBlock,
  },
  barcodeText: {
    ...title,
    color: colors.black,
  }
});