import { NavigationContainer } from '@react-navigation/native';
import useRoute from 'router/router';

export default Main = () => {
  const routing = useRoute();

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
};