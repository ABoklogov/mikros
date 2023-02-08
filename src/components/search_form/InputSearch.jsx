import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import PropTypes from 'prop-types';
//import components
import SearchIcon from 'components/icons/SearchIcon';
// import vars
import { colors, strings } from 'res/vars.js';
import { text, input } from 'res/palette.js';

export default InputSearch = ({
  stateKey,
  onChange,
  submit,
  opensKeyboard,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const chengeFocusInput = () => {
    setIsFocus(true);
    opensKeyboard();
  };

  return (
    <View style={styles.containerInput}>
      <TextInput
        style={{ ...styles.input, borderColor: isFocus ? colors.blue : colors.transparentGrey }}
        textAlign={'left'}
        keyboardType={'web-search'}
        placeholder={strings.placeholders.search}
        onFocus={chengeFocusInput}
        onBlur={() => setIsFocus(false)}
        value={stateKey}
        onChangeText={(value) => onChange(value)}
        onSubmitEditing={submit}
        returnKeyType={'search'}
        placeholderTextColor={colors.grey}
        cursorColor={colors.blue}
      />
      <View style={styles.searchIcon}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={submit}
        >
          <SearchIcon color={isFocus ? colors.blue : colors.grey} />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  containerInput: {
    position: 'relative',
  },
  input: {
    ...text,
    ...input,
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: [
      { translateX: 0 },
      { translateY: -10 },
    ]
  },
});

InputSearch.propTypes = {
  opensKeyboard: PropTypes.func,
  onChange: PropTypes.func,
  submit: PropTypes.func,
  stateKey: PropTypes.string,
};
