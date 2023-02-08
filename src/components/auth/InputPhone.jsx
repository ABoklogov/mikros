import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
// import TextInputMask from 'react-native-text-input-mask';
import MaskInput from 'react-native-mask-input'
// import components
import ErrorMessage from 'components/shared/ErrorMessage';
import InfoIcon from 'components/icons/InfoIcon';
// import vars
import { colors } from 'res/vars.js';
import { text, input } from 'res/palette.js';

export default InputPhone = ({
  placeholder,
  opensKeyboard,
  stateKey,
  onChange,
  error,
  errorMessage,
  infoTitle,
  infoText,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(stateKey);

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

  const ONE_MASK = ["+", /\d/, " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/];
  const TWO_MASK = [/\d/, " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/];
  const THREE_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  const changeMask = () => {
    switch (value[0]) {
      case '7':
        return ONE_MASK;
      case '8':
        return TWO_MASK;
      default:
        return THREE_MASK;
    };
  };

  const localChageText = (masked, unmasked) => {
    if (unmasked[0] === '9') {
      let changed = unmasked.replace("9", "7 (9")
      setValue(changed);
      onChange(changed);
      return
    };
    setValue(unmasked);
    onChange(masked);
  };

  return (
    <View style={styles.container}>
      <MaskInput
        style={{
          ...styles.input,
          borderColor: changeColorBorder(),
        }}
        mask={changeMask}
        value={stateKey}
        onChangeText={localChageText}
        placeholder={placeholder}
        onFocus={chengeFocusInput}
        onBlur={() => setIsFocus(false)}
        textAlign={'left'}
        keyboardType={'phone-pad'}
        autoComplete={'tel'}
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
          <InfoIcon />
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
  }
});

InputPhone.propTypes = {
  opensKeyboard: PropTypes.func,
  onChange: PropTypes.func,
  stateKey: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  infoTitle: PropTypes.string,
  infoText: PropTypes.string,
};