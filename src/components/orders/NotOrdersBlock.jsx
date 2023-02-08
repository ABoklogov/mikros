import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import components
import MainButton from 'components/shared/MainButton';
// import vars
import { strings, fonts, colors } from 'res/vars';
import { text } from 'res/palette';

export default NotOrdersBlock = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subBox}>
        <Text style={[styles.text, styles.textGrey]}>
          {strings.profileText.orderHistory}
        </Text>
      </View>
      <View style={styles.saleTextBox}>
        <Text style={[styles.text, styles.textGreen]}>Скидка 10%</Text>
        <Text style={styles.text}> на первый заказ</Text>
      </View>

      <MainButton
        text={'Перейти к товарам'}
        onPress={() => navigation.navigate(strings.nameMainScreens.catalog)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  subBox: {
    marginBottom: 5,
  },
  text: {
    ...text,
    textAlign: 'center'
  },
  textGrey: {
    color: colors.grey,
  },
  textGreen: {
    fontFamily: fonts.bold,
    color: colors.green,
  },
  saleTextBox: {
    flexDirection: 'row',
    marginBottom: 15,
  }
});