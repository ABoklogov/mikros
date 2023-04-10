import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import components
import MainButton from 'components/shared/MainButton';
// import vars
import { strings, sizeText } from 'res/vars';
import { text } from 'res/palette';

export default AuthBtnBlock = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.authBox}>
      <Text style={styles.authText}>{strings.basketText.textAuth}</Text>
      <MainButton
        text={'Вход или регистрация'}
        onPress={() => navigation.navigate(strings.nameNotTabs.logIn)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  authBox: {
    marginHorizontal: 15,
    paddingTop: 15,
    marginBottom: 15,
  },
  authText: {
    ...text,
    textAlign: 'center',
    marginBottom: 15,
  }
});