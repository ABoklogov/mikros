import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from "react-native";
import PropTypes from 'prop-types';
// import components
import InputSearch from 'components/search_form/InputSearch';
// import ErrorMessage from 'components/shared/ErrorMessage';

export default SearchForm = ({ opensKeyboard }) => {
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [idTimerMessage, setIdTimerMessage] = useState(null);

  // таймер для сообщения об ошибки
  useEffect(() => {
    clearTimeout(idTimerMessage);
    let currentIdTimerMessage = setTimeout(() => {
      setMessage('');
    }, 3000);
    setIdTimerMessage(currentIdTimerMessage);
  }, [message]);

  const submitState = () => {
    if (!state) {
      setMessage('Условия поиска не заданы');
      return
    };
    console.log("🚀 ~ state", state)
    setState('');
  };

  const onChangeSearch = (value) => {
    setState(value)
  };

  return (
    <View style={styles.container}>
      <InputSearch
        stateKey={state}
        onChange={onChangeSearch}
        submit={submitState}
        opensKeyboard={opensKeyboard}
      />
      <View style={styles.errorMessage}>
        {/* <ErrorMessage message={message} /> */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  errorMessage: {
    position: 'absolute',
    top: '102%',
  }
});

SearchForm.propTypes = {
  opensKeyboard: PropTypes.func,
};
