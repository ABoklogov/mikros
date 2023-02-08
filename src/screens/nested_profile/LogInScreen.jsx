import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
// import components
import FormLogIn from 'components/auth/FormLogIn';
import Link from 'components/shared/Link';
// import vars
import { strings, colors } from 'res/vars';
import { text } from 'res/palette';

export default LogInScreen = () => {
  const { auth } = useSelector(state => state);
  const navigation = useNavigation();
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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
            <Text style={styles.loader}>Пожалуйста подождите</Text>
          </View>
        )
      }

      {showBackdrop && <View style={styles.backdrop}></View>}

      <TouchableWithoutFeedback onPress={removesKeyboard}>
        <View style={styles.container}>
          <View style={styles.formLogIn}>
            <FormLogIn
              opensKeyboard={opensKeyboard}
              setShowBackdrop={setShowBackdrop}
              showBackdrop={showBackdrop}
            />
          </View>

          <Link
            text={strings.textLinkLogIn}
            onPress={() => navigation.navigate(strings.nameNestedProfile.registration)}
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
    height: '100%',
    backgroundColor: colors.white,
  },
  formLogIn: {
    marginBottom: 25,
    marginHorizontal: 15,
  },
  backdrop: {
    position: 'absolute',
    zIndex: 99,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: colors.backdrop,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    ...text
  }
});