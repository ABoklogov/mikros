// import { useEffect, useState, useCallback } from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'store/index';
//import components
import Main from 'components/Main';
//import vars
import { colors } from 'res/vars';

export default App = () => {


  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={colors.grey}
        barStyle="dark-content"
        hidden={false}
      />
      <Main />
    </Provider>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});


