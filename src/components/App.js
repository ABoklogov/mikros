import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // чтобы не прыгала нижняя навигация при первой загрузке
import { Provider as StoreProvider } from 'react-redux';
import { StatusBar, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { store } from 'store/index';
//import components
import Main from 'components/Main';
//import vars
import { colors } from 'res/vars';

export default App = () => {
  // закрытие заставки
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <StatusBar
          backgroundColor={colors.grey}
          barStyle="dark-content"
          hidden={false}
        />
        <Main />
      </StoreProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});


