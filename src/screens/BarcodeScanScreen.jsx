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
const barcodeTypes = [
  'QR_CODE',
  'EAN_13'
];

export default BarcodeScanScreen = () => {
  const [barcode, setBarcode] = useState(null);
  console.log("🚀 ~ barcode:", barcode)

  // при изменении barcode, если его нет, открываем сканер
  useEffect(() => {
    if (!barcode) openScaner();
  }, [barcode]);

  // открывает нативный модуль сканера
  const openScaner = () => {
    // ScannerModule.openScanner(true, null, onBarcodeRead);
    ScannerModule.openCustomScanner(false, false, barcodeTypes, onBarcodeRead);
  };
  // получает и записывает в state номер штрих-кода
  const onBarcodeRead = (code) => {
    setBarcode(code);
    console.log(code);
  };
  // очищает из state номер штрих - кода
  const removeBarcode = () => {
    setBarcode(null);
    if (!barcode) openScaner();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.barcodeText}>
        {barcode}
      </Text>

      {
        // если есть barcode показываем кнопку "сканировать еще"
        barcode &&
        <View style={styles.btnScan}>
          <MainButton
            text={strings.textBtnOpenScan}
            onPress={removeBarcode}
          />
        </View>
      }
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