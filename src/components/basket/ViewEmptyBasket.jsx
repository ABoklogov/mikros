import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from 'react-native';
// import components
import MainButton from 'components/shared/MainButton';
// import vars
import { mHorizontal, strings } from 'res/vars';
import { text } from 'res/palette.js';

export default ViewEmptyBasket = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.msgBox}>
        <Text style={styles.message}>
          {strings.profileText.basket}
        </Text>
      </View>
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
    height: '100%',
    marginHorizontal: mHorizontal.baseBlock,
    paddingTop: 100,
    paddingBottom: 100,
  },
  message: {
    ...text,
    textAlign: 'center',
  },
  msgBox: {
    marginBottom: 20,
  }
});