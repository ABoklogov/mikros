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
import { registration } from 'store/auth/authOperations';
import { registerUser } from 'store/auth/authSlice';
import API from 'services/utility-api';
// import components
import HeaderRegistration from 'components/auth/HeaderRegistration';
import InputPassword from 'components/auth/InputPassword';
import InputPhone from 'components/auth/InputPhone';
import CityList from 'components/auth/CityList';
import Input from 'components/shared/Input';
import MainButton from 'components/shared/MainButton';
import Title from 'components/shared/Title';
import MainModal from 'components/shared/MainModal';
// import vars
import { strings, fonts } from 'res/vars';
import { text } from 'res/palette';

const initialState = {
  name: '',
  city: '',
  phone: '',
  email: '',
  password: '',
};

export default FormRegistration = ({
  opensKeyboard,
  setShowBackdrop,
  showBackdrop
}) => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [state, setState] = useState(initialState);
  const [firstStep, setFirstStep] = useState(true); // первый шаг
  // повторный пароль
  const [repeatPassword, setRepeatPassword] = useState('');
  // ошибки
  const [errorName, setErrorName] = useState(true);
  const [errorCity, setErrorCity] = useState(true);
  const [errorPhone, setErrorPhone] = useState(true);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(true);
  // сообщения об ошибках
  const [messageName, setMessageName] = useState('');
  const [messageCity, setMessageCity] = useState('');
  const [messagePhone, setMessagePhone] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messageRepeatPassword, setMessageRepeatPassword] = useState('');
  // активность кнопок
  const [activeBtnGoStep, setActiveBtnGoStep] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  // параметры регистрации
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // список городов
  const [listCity, setListCity] = useState([]);

  useEffect(() => {
    // если регистрация прошла успешно, то показываем алерт с переходом на экран авторизации
    if (auth.registered === 'success') {
      toglleModalSuccess();
      dispatch(registerUser(''));
      // если регистрация закончилась ошибкой, показываем алерт ошибки и возвращаемся на первый этап регистрации
    } else if (auth.registered === 'rejected') {
      dispatch(registerUser(''));
      toglleModalError();
    } else {
      return
    };
  }, [auth.registered]);

  useEffect(() => {
    // если все поля заполнены, делаем кнопку активной
    if (state.name && state.city && state.phone) {
      setActiveBtnGoStep(true);
    } else {
      setActiveBtnGoStep(false);
    };

    // если все поля заполнены, делаем кнопку активной
    if (state.email && state.password && repeatPassword) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    };
  }, [
    state.name,
    state.city,
    state.phone,
    state.email,
    state.email,
    state.password,
    repeatPassword
  ]);

  // следит, чтобы пароли совпадали
  useEffect(() => {
    (state.password !== repeatPassword) ? setErrorRepeatPassword(true) : setErrorRepeatPassword(false);
  }, [state.password, repeatPassword]);

  const goToNextStep = () => {
    // если кнопка не активна, выходим
    if (!activeBtnGoStep) return;
    // проверяем поэтапно все инпуты, если вся валидация проходит, переходим на второй этап регистрации
    if (errorName) {
      setMessageName('введите корректное имя');
      setErrorName(true);
      return
    } else if (errorCity) {
      setMessageCity('введите название города');
      setErrorCity(true);
      return
    } else if (errorPhone) {
      setMessagePhone('введите корректный номер телефона');
      setErrorPhone(true);
      return
    } else {
      // переходим на пророй шаг регистрации
      setFirstStep(false);
      console.log('submitState', state);
    };
  };

  const submitState = () => {
    // если кнопка не активна, выходим
    if (!activeBtn) return;
    // проверяем поэтапно все инпуты, если вся валидация проходит, отправляем стейт
    if (errorEmail) {
      setMessageEmail('некорректная почта');
      return
    } else if (errorPassword) {
      setMessagePassword('не менее 6 символов');
      return
    } else if (errorRepeatPassword) {
      setMessageRepeatPassword('пароли не совпадают');
      return
    } else {
      // очищаем state
      setErrorEmail(false);
      setErrorPassword(false);
      setErrorRepeatPassword(false);
      setMessageEmail('');
      setMessagePassword('');
      setMessageRepeatPassword('');
      // setRepeatPassword('');
      // setState(initialState);
      // setActiveBtn(false);

      dispatch(registration(state));
      console.log('submitState', state);
    };
  };

  const onChangeName = (value) => {
    // Имя или название организации может содержать любые символы и должно быть больше 2 символов
    (value.length > 2) ? setErrorName(false) : setErrorName(true);
    setState((prevState) => ({ ...prevState, name: value }));
  };
  const onChangeCity = async (value) => {
    // Набор из букв и цифр(латиница + кириллица):
    // const re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    // const errCity = !re.test(value);
    // setErrorCity(errCity);
    (value.length > 2) ? setErrorCity(false) : setErrorCity(true);
    setState((prevState) => ({ ...prevState, city: value }));

    // ищем подходящие города
    if (state.city.length < 5) {
      const { suggestions } = await API.fetchAddress(value);
      console.log("🚀 города", suggestions)
      // фильтруем массив по наличию города и сохраняем
      setListCity(suggestions.filter(el => el.data.city));
    }
  };
  const onChangePhone = (value) => {
    // const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    // const errPhone = !re.test(value);
    // setErrorPhone(errPhone);
    (value.length >= 7) ? setErrorPhone(false) : setErrorPhone(true);
    setState((prevState) => ({ ...prevState, phone: value }));
  };

  const onChangeEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errEmail = !re.test(value);

    setErrorEmail(errEmail);
    setState((prevState) => ({ ...prevState, email: value }));
  };

  const onChangePassword = (value) => {
    // Пароль: минимум 6 символов):
    (value.length > 5) ? setErrorPassword(false) : setErrorPassword(true);
    setState((prevState) => ({ ...prevState, password: value }));
  };

  const toglleModalSuccess = () => {
    setSuccess(!success);
    setShowBackdrop(!showBackdrop);
  };
  const toglleModalError = () => {
    setError(!error);
    setShowBackdrop(!showBackdrop);
  };
  const pressToCity = (value) => {
    (value.length > 2) ? setErrorCity(false) : setErrorCity(true);
    setState((prevState) => ({ ...prevState, city: value }));
    setListCity([]);
  };

  return (
    <View style={styles.form}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.titleBox}>
          <Title text={'Регистрация'} />
        </View>
        <View style={styles.headerBox}>
          <HeaderRegistration
            firstStep={firstStep}
            setFirstStep={setFirstStep}
            goToNextStep={goToNextStep}
          />
        </View>

        {/* первый шаг регистрации */}
        {firstStep && (
          <View>
            <View style={styles.inputBox}>
              <Input
                name={'name'}
                autoFocus={true}
                placeholder={strings.placeholders.name}
                opensKeyboard={opensKeyboard}
                stateKey={state.name}
                onChange={onChangeName}
                error={errorName}
                errorMessage={messageName}
                infoTitle={strings.alertInputs.name.title}
                infoText={strings.alertInputs.name.text}
              />
            </View>

            <View style={styles.inputBox}>
              <Input
                name={'city'}
                placeholder={strings.placeholders.city}
                opensKeyboard={opensKeyboard}
                stateKey={state.city}
                onChange={onChangeCity}
                error={errorCity}
                errorMessage={messageCity}
                infoTitle={strings.alertInputs.city.title}
                infoText={strings.alertInputs.city.text}
              />
              {/* список найденных городов */}
              <CityList
                listCity={listCity}
                selectCity={pressToCity}
              />
            </View>

            <InputPhone
              placeholder={strings.placeholders.phone}
              opensKeyboard={opensKeyboard}
              stateKey={state.phone}
              onChange={onChangePhone}
              error={errorPhone}
              errorMessage={messagePhone}
              infoTitle={strings.alertInputs.phone.title}
              infoText={strings.alertInputs.phone.text}
            />

            <View style={styles.button}>
              <MainButton
                text={'Далее'}
                onPress={goToNextStep}
                active={activeBtnGoStep}
              />
            </View>
          </View>
        )}

        {/* второй шаг регистрации */}
        {!firstStep && (
          <View>
            <View style={styles.inputBox}>
              <Input
                name={'email'}
                autoFocus={true}
                placeholder={strings.placeholders.higherEmail}
                opensKeyboard={opensKeyboard}
                stateKey={state.email}
                onChange={onChangeEmail}
                error={errorEmail}
                errorMessage={messageEmail}
                infoTitle={strings.alertInputs.email.title}
                infoText={strings.alertInputs.email.text}
              />
            </View>

            <View style={styles.inputBox}>
              <InputPassword
                placeholder={strings.placeholders.inventionPassword}
                opensKeyboard={opensKeyboard}
                stateKey={state.password}
                onChange={onChangePassword}
                error={errorPassword}
                errorMessage={messagePassword}
              // infoTitle={strings.alertInputs.password.title}
              // infoText={strings.alertInputs.password.text}
              />
            </View>

            <InputPassword
              placeholder={strings.placeholders.repeatPassword}
              opensKeyboard={opensKeyboard}
              stateKey={repeatPassword}
              onChange={setRepeatPassword}
              error={errorRepeatPassword}
              errorMessage={messageRepeatPassword}
            // infoTitle={strings.alertInputs.password.title}
            // infoText={strings.alertInputs.password.text}
            />

            <View style={styles.button}>
              <MainButton
                text={'Зарегистрироваться'}
                onPress={submitState}
                active={activeBtn}
              />
            </View>
          </View>
        )}

        {/* модалка при успешной регистрации */}
        {
          <MainModal
            modalVisible={success}
            removeModal={toglleModalSuccess}
            name={'auth'}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalBottomText}>
                Регистрация прошла успешно! Войдите, чтобы продолжить.
              </Text>

              <MainButton
                text={'Вход'}
                onPress={() => {
                  navigation.navigate(strings.nameNestedProfile.logIn);
                }}
              />
            </View>
          </MainModal>
        }
        {/* модалка при ошибке регистрации */}
        {
          <MainModal
            modalVisible={error}
            removeModal={toglleModalError}
            name={'auth'}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalTopText}>Ошибка</Text>
              <Text style={styles.modalBottomText}>
                Регистрация не удалась. Попробуйте зарегистрироваться с другой почтой.
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
  headerBox: {
    marginBottom: 20,
  },
  titleBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    position: 'relative',
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
    marginTop: 15,
    textAlign: "center",
  },
});

FormRegistration.propTypes = {
  opensKeyboard: PropTypes.func,
  setShowBackdrop: PropTypes.func,
  showBackdrop: PropTypes.bool,
};
