import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';
// import icons
import InfoIcon from 'components/icons/InfoIcon';
import PasswordVisibilityIcon from 'components/icons/PasswordVisibilityIcon';
// import vars
import { colors } from 'res/vars.js';
import { text, input } from 'res/palette.js';

export default InputPassword = ({
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
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
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

  return (
    <View style={styles.inputPassword}>
      <TextInput
        style={{
          ...styles.input,
          borderColor: changeColorBorder(),
        }}
        textAlign={'left'}
        secureTextEntry={isHiddenPassword}
        placeholder={placeholder}
        onFocus={chengeFocusInput}
        onBlur={() => setIsFocus(false)}
        value={stateKey}
        onChangeText={(value) => onChange(value)}
        onSubmitEditing={submit}
        autoComplete={'password'}
        placeholderTextColor={colors.grey}
        cursorColor={colors.blue}
      />
      {
        error &&
        <View style={styles.errMsg}>
          <ErrorMessage message={errorMessage} />
        </View>
      }

      <View style={styles.blockBtns}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsHiddenPassword(!isHiddenPassword)}
        >
          <PasswordVisibilityIcon
            visibility={isHiddenPassword}
            color={colors.grey}
          />
        </TouchableOpacity>

        {
          infoText &&
          <View style={styles.infoIcon}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={showAlert}
            >
              <InfoIcon />
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPassword: {
    position: 'relative',
  },
  input: {
    ...text,
    ...input,
  },
  errMsg: {
    position: 'absolute',
    top: '100%',
  },
  blockBtns: {
    position: 'absolute',
    top: '50%',
    right: 5,
    transform: [
      { translateX: 0 },
      { translateY: -18 },
    ],
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 5,
    marginLeft: 5,
  }
});

InputPassword.propTypes = {
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