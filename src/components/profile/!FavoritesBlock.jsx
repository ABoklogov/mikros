import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import components
import FavoriteIcon from 'components/icons/tabs_icons/FavoriteIcon';
// import vars
import { strings, fonts, colors, mHorizontal, heightText } from 'res/vars';
import { text, title } from 'res/palette';

export default FavoritesBlock = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { auth } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.box]}>
        <View style={styles.icon}>
          <FavoriteIcon
            color={colors.blue}
            isFull={false}
            size={30}
          />
        </View>
        <Text style={styles.title}>Избранное</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>{strings.profileText.favorite}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(strings.nameMainScreens.catalog)}
        >
          <Text style={styles.btnText}>
            {/* Перейти в корзину */}
            Перейти в каталог
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
  text: {
    ...text,
    fontFamily: fonts.light,
  },
  btnText: {
    ...text,
    fontFamily: fonts.light,
    color: colors.blue,
  }
});