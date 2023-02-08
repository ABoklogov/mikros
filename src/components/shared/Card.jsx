import {
  StyleSheet,
  View
} from "react-native";
import { Shadow } from 'react-native-shadow-2';
import { colors, radius } from 'res/vars';

export default Card = ({ children }) => {
  return (
    <Shadow
      distance={5}
      radius={radius.card}
      startColor={'#00000010'}
      offset={[0, 3]}
      style={{ width: '100%' }}
    >
      <View style={styles.wrapper}>
        {children}
      </View>
    </Shadow>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.card,
    backgroundColor: colors.white,
  },
});