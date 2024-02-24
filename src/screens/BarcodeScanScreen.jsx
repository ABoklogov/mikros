import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
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
  const isLoading = useSelector(state => state.scaner.isLoading);
  const scanerError = useSelector(state => state.scaner.error);
  const scanerProduct = useSelector(state => state.scaner.product);

  const navigation = useNavigation();
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
    if (code === 'onBackPressed') {
      navigation.goBack();
    } else {
      setBarcode(code);
      dispatch(fetchBarcode(code));
      console.log("🚀 ~ onBarcodeRead ~ code:", code)
    };
  };

  // очищает из state номер штрих - кода
  const removeBarcode = () => {
    setBarcode(null);
    dispatch(removeProduct());
    if (!barcode) openScaner();
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={colors.blue}
        />
      </View>
    )
  } else if (scanerError) {
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
          scanerProduct &&
          <>
            <Text style={styles.barcodeText}>
              {scanerProduct.NAME}
            </Text>
            <Text style={styles.barcodeText}>
              {`${scanerProduct.PRICE} руб.`}
            </Text>
            <Text style={styles.barcodeText}>
              {`Артикул: ${scanerProduct.PROPERTYS.CML2_ARTICLE}`}
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