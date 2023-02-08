import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';
import { logIn } from 'store/auth/authOperations';
import { resultLogIn } from 'store/auth/authSlice';
import { fetchBasket } from 'store/basket/basketOperations';
// import components
import Input from 'components/shared/Input';
import InputPassword from 'components/auth/InputPassword';
import MainButton from 'components/shared/MainButton';
import Title from 'components/shared/Title';
import MainModal from 'components/shared/MainModal';
// import vars
import { strings, fonts } from 'res/vars';
import { text } from 'res/palette';

const initialState = {
  email: '',
  password: '',
};

export default FormLogIn = ({
  opensKeyboard,
  setShowBackdrop,
  showBackdrop
}) => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [state, setState] = useState(initialState);
  // ошибки
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  // сообщения об ошибках
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  // активность кнопки
  const [activeBtn, setActiveBtn] = useState(false);
  // параметры входа
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Если вход успешный и нет ошибки показываем модалку с переходом в каталог, а иначе - модалку с ошибкой
  useEffect(() => {
    if (auth.authorization === 'success') {
      toglleModalSuccess();
      dispatch(resultLogIn(''));
      // Загружаем корзину пользователя
      dispatch(fetchBasket());
    } else if (auth.authorization === 'rejected') {
      dispatch(resultLogIn(''));
      toglleModalError();
    } else {
      return
    };
  }, [auth.authorization]);

  useEffect(() => {
    // если все поля заполнены, делаем кнопку активной
    if (state.email && state.password) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    };
  }, [state.email, state.password]);

  const submitState = () => {
    // если кнопка не активна, выходим
    if (!activeBtn) return;
    // проверяем валидность емейла
    if (errorEmail) {
      setMessageEmail('некорректная почта');
      return
    } else if (errorPassword) {
      setMessagePassword('не менее 6 символов');
      return
    } else {
      // очищаем state
      setErrorEmail(false);
      setErrorPassword(false);
      setMessageEmail('');
      setMessagePassword('');
      // setState(initialState);

      dispatch(logIn(state));
      console.log(state);
    };
  };

  const onChangeEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errEmail = !re.test(value);

    setErrorEmail(errEmail);
    setState((prevState) => ({ ...prevState, email: value }))
  };
  const onChangePassword = (value) => {
    // Пароль: минимум 6 символов):
    (value.length > 5) ? setErrorPassword(false) : setErrorPassword(true);
    setState((prevState) => ({ ...prevState, password: value }))
  };

  const toglleModalSuccess = () => {
    setSuccess(!success);
    setShowBackdrop(!showBackdrop);
  };
  const redirectCatalog = () => {
    navigation.navigate(strings.nameMainScreens.catalog);
    toglleModalSuccess();
  };
  const toglleModalError = () => {
    setError(!error);
    setShowBackdrop(!showBackdrop);
  };

  return (
    <View style={styles.form}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.titleBox}>
          <Title text={'Вход'} />
        </View>

        <View style={styles.inputBox}>
          <Input
            name={'email'}
            autoFocus={true}
            placeholder={strings.placeholders.email}
            opensKeyboard={opensKeyboard}
            stateKey={state.email}
            onChange={onChangeEmail}
            error={errorEmail}
            errorMessage={messageEmail}
            infoTitle={strings.alertInputs.email.title}
            infoText={strings.alertInputs.email.text}
          />
        </View>

        <InputPassword
          placeholder={strings.placeholders.password}
          opensKeyboard={opensKeyboard}
          stateKey={state.password}
          onChange={onChangePassword}
          error={errorPassword}
          errorMessage={messagePassword}
        // infoTitle={strings.alertInputs.password.title}
        // infoText={strings.alertInputs.password.text}
        />

        <View style={styles.button}>
          <MainButton
            text={'Войти'}
            onPress={submitState}
            active={activeBtn}
          />
        </View>
        {/* модалка при успешном входе */}
        {
          <MainModal
            modalVisible={success}
            removeModal={toglleModalSuccess}
            name={'auth'}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalTopText}>
                {`Добро пожаловать ${auth.user.name}`}
              </Text>
              <Text style={styles.modalBottomText}>
                Вы успешно вошли!
              </Text>

              <MainButton
                text={'Перейти в каталог'}
                onPress={redirectCatalog}
              />
            </View>
          </MainModal>
        }
        {/* модалка при ошибке входа */}
        {
          <MainModal
            modalVisible={error}
            removeModal={toglleModalError}
            name={'auth'}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalTopText}>Ошибка</Text>
              <Text style={styles.modalBottomText}>
                Почта или пароль неверны!
              </Text>

              <MainButton
                text={'Ok'}
                onPress={toglleModalError}
              />
            </View>
          </MainModal>
        }
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    justifyContent: 'flex-start',
  },
  titleBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
  // модалка 
  modalView: {
    minWidth: 250,
  },
  modalTopText: {
    ...text,
    marginBottom: 10,
    fontFamily: fonts.bold,
    marginTop: 20,
    textAlign: "center",
  },
  modalBottomText: {
    ...text,
    marginBottom: 20,
    textAlign: "center",
  }
});

FormLogIn.propTypes = {
  opensKeyboard: PropTypes.func,
  setShowBackdrop: PropTypes.func,
  showBackdrop: PropTypes.bool,
};