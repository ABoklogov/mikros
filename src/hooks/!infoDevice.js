import { Platform } from 'react-native';
import { getInstanceId } from 'react-native-device-info';

// получает id приложения (экземпляра)
export const getAppId = async () => {
  try {
    if (Platform.OS === 'ios') {
      // TODO: сделать получение Id экземпляра для ios
    } else {
      const instanceId = await getInstanceId();
      return instanceId;
    };
  } catch (error) {
    console.log(error.message)
  };
};