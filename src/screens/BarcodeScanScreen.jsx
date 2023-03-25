import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  ActivityIndicator
} from 'react-native';
import { fetchBarcode } from 'store/scaner/scanerOperation';
import { removeProduct } from 'store/scaner/scanerSlice';
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
  const { scaner } = useSelector(state => state);
  const dispatch = useDispatch();
  const [barcode, setBarcode] = useState(null);

  // при изменении barcode, если его нет, открываем сканер
  useEffect(() => {
    if (!barcode) openScaner();
  }, [barcode]);

  // открывает нативный модуль сканера
  const openScaner = () => {
    ScannerModule.openCustomScanner(false, false, barcodeTypes, onBarcodeRead);
  };

  // получает и записывает в state номер штрих-кода
  const onBarcodeRead = (code) => {
    setBarcode(code);
    dispatch(fetchBarcode(code));
  };

  // очищает из state номер штрих - кода
  const removeBarcode = () => {
    setBarcode(null);
    dispatch(removeProduct());
    if (!barcode) openScaner();
  };

  if (scaner.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={colors.blue}
        />
      </View>
    )
  } else if (scaner.error) {
    return (
      <View style={styles.container}>
        {
          barcode &&
          <>
            <Text style={styles.barcodeText}>
              {strings.textNotProductScan}
            </Text>
            <View style={styles.btnScan}>
              <MainButton
                text={strings.textBtnReturnScan}
                onPress={removeBarcode}
              />
            </View>
          </>
        }
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {
          scaner.product &&
          <>
            <Text style={styles.barcodeText}>
              {scaner.product.NAME}
            </Text>
            <Text style={styles.barcodeText}>
              {`${scaner.product.PRICE} руб.`}
            </Text>
            <Text style={styles.barcodeText}>
              {`Артикул: ${scaner.product.PROPERTYS.CML2_ARTICLE}`}
            </Text>

            <View style={styles.btnScan}>
              <MainButton
                text={strings.textBtnReturnScan}
                onPress={removeBarcode}
              />
            </View>
          </>
        }
      </View>
    )
  }
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
    marginBottom: 20,
  }
});