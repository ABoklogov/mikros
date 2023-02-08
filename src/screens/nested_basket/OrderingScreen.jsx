import { StyleSheet, View, Text } from 'react-native';
import { fonts } from 'res/vars';

export default OrderingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fonts.medium }}>OrderingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});