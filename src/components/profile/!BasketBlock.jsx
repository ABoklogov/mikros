import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import components
import BasketIcon from 'components/icons/tabs_icons/BasketIcon';
// import vars
import { strings, fonts, colors, activeOpacity } from 'res/vars';
import { text, title } from 'res/palette';

export default BasketBlock = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { auth } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.box]}>
        <View style={styles.icon}>
          <BasketIcon
            color={colors.blue}
            isFull={false}
            size={30}
          />
        </View>
        <Text style={styles.title}>Корзина</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textEmptyBasket}>{strings.profileText.basket}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => navigation.navigate(strings.nameMainScreens.basket)}
        >
          <Text style={styles.btnText}>
            Перейти в корзину
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  box: {
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    ...title,
  },
  textEmptyBasket: {
    ...text,
    fontFamily: fonts.light,
    color: colors.grey,
  },
  btnText: {
    ...text,
    fontFamily: fonts.light,
    color: colors.blue,
  }
});