import AsyncStorage from '@react-native-async-storage/async-storage';
// запись токена в локальное хранилище
export const setStoreToken = async (value) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    console.log(error.message)
  };
};
// удаления токена из локального хранилища
export const removeStoreToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error.message)
  };
};
// получение токена
export const getStoreToken = async () => {
  try {
    return await AsyncStorage.getItem('token')
  } catch (error) {
    console.log(error.message)
  };
};