import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // чтобы не прыгала нижняя навигация при первой загрузке
import { Provider as StoreProvider } from 'react-redux';
// import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { StatusBar, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { store } from 'store/index';
//import components
import Main from 'components/Main';
//import vars
import { colors } from 'res/vars';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

export default App = () => {
  // закрытие заставки
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        {/* <PaperProvider theme={theme}> */}
        <StatusBar
          backgroundColor={colors.grey}
          barStyle="dark-content"
          hidden={false}
        />
        <Main />
        {/* </PaperProvider> */}
      </StoreProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});


