import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
// import components
import FormRegistration from 'components/auth/FormRegistration';
import Link from 'components/shared/Link';
// import vars
import { strings, colors } from 'res/vars';
// import { text } from 'res/palette';

export default RegistrationScreen = () => {
  const { auth } = useSelector(state => state);
  const navigation = useNavigation();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
  useEffect(() => {
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyboard(false));
    return () => keyboardDidHide.remove();
  }, []);

  const removesKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const opensKeyboard = () => setIsShowKeyboard(true);

  return (
    <View style={styles.wrapper}>
      {
        auth.isLoading && (
          <View style={styles.backdrop}>
            <ActivityIndicator
              size="large"
              color={colors.blue}
            />
          </View>
        )
      }

      {showBackdrop && <View style={styles.backdrop}></View>}

      <TouchableWithoutFeedback onPress={removesKeyboard}>
        <View style={{
          ...styles.container,
          // paddingTop: isShowKeyboard ? 15 : 0
        }}>
          <View style={styles.formRegistration}>
            <FormRegistration
              opensKeyboard={opensKeyboard}
              setShowBackdrop={setShowBackdrop}
              showBackdrop={showBackdrop}
            />
          </View>
          <Link
            text={strings.textLinkRegistration}
            onPress={() => navigation.navigate(strings.nameNotTabs.logIn)}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  container: {
    paddingTop: 50,
    backgroundColor: colors.white,
    height: '100%'
  },
  formRegistration: {
    marginBottom: 25,
    marginHorizontal: 15,
  },
  backdrop: {
    position: 'absolute',
    zIndex: 5,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: colors.backdrop,
    justifyContent: 'center',
    alignItems: 'center',
  },
});