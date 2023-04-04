import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
// import components
import MainButton from 'components/shared/MainButton';
// import vars
import { strings } from 'res/vars';
import { text } from 'res/palette';

export default EmptyFavoriteBlock = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require('assets/images/empty-favorites.png')} />
      </View>
      <Text style={styles.emptyText}>
        {strings.favoritesText.emptyText}
      </Text>
      <MainButton
        text={'Перейти к товарам'}
        onPress={() => navigation.navigate(strings.nameMainScreens.catalog)}
      />
      {/* здесь будет список рекомендованных товаров */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  img: {
    alignItems: 'center',
  },
  emptyText: {
    ...text,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  }
});

