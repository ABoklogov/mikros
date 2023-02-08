import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
// import components
import ErrorMessage from 'components/shared/ErrorMessage';
import InfoIcon from 'components/icons/InfoIcon';
// import vars
import { colors } from 'res/vars.js';
import { baseText, text, input } from 'res/palette.js';

export default Input = ({
  name,
  autoFocus,
  stateKey,
  onChange,
  submit,
  opensKeyboard,
  placeholder,
  error,
  errorMessage,
  infoTitle,
  infoText,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const chengeFocusInput = () => {
    setIsFocus(true);
    opensKeyboard();
  };

  const showAlert = () => {
    Alert.alert(
      infoTitle,
      infoText,
    );
  };

  const changeColorBorder = () => {
    let colorBorder = colors.transparentGrey;

    if (isFocus && error) {
      colorBorder = colors.red;
    } else if (isFocus && !error && !stateKey) {
      colorBorder = colors.blue;
    } else if (isFocus && !error && stateKey) {
      colorBorder = colors.blue;
    } else if (!isFocus && error && stateKey) {
      colorBorder = colors.red;
    } else if (!isFocus && !error && stateKey) {
      colorBorder = colors.blue;
    };

    return colorBorder;
  };

  const keyboardType = () => {
    if (name === 'email') return 'email-address';
    if (name === 'phone') return 'phone-pad';
    return 'default';
  };

  const autoComplete = () => {
    if (name === 'email') return 'email';
    if (name === 'name') return 'name';
    if (name === 'city') return 'postal-address-locality';
    if (name === 'phone') return 'tel';
    return 'off';
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          ...styles.input,
          borderColor: changeColorBorder(),
        }}
        autoFocus={autoFocus}
        textAlign={'left'}
        keyboardType={keyboardType()}
        placeholder={placeholder}
        onFocus={chengeFocusInput}
        onBlur={() => setIsFocus(false)}
        value={stateKey}
        onChangeText={(value) => onChange(value)}
        onSubmitEditing={submit}
        autoComplete={autoComplete()}
        placeholderTextColor={colors.grey}
        cursorColor={colors.blue}
      />
      {
        error &&
        <View style={styles.errMsg}>
          <ErrorMessage message={errorMessage} />
        </View>
      }

      {
        infoText &&
        <TouchableOpacity
          style={styles.inputInfoBtn}
          activeOpacity={0.8}
          onPress={showAlert}
        >
          <View style={styles.inputInfoBtnText}>
            <InfoIcon />
          </View>
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    ...text,
    ...input,
    paddingRight: 40,
    textAlign: 'left',
  },
  errMsg: {
    position: 'absolute',
    top: '100%',
  },
  inputInfoBtn: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [
      { translateX: 0 },
      { translateY: -10 },
    ]
  },
  inputInfoBtnText: {
    ...text,
    textAlign: 'center',
    color: colors.blue,
  },
});

Input.propTypes = {
  name: PropTypes.string,
  autoFocus: PropTypes.bool,
  opensKeyboard: PropTypes.func,
  onChange: PropTypes.func,
  submit: PropTypes.func,
  stateKey: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  infoTitle: PropTypes.string,
  infoText: PropTypes.string,
};