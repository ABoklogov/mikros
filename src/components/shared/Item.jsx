import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from 'prop-types';
// import { colors, radius } from 'res/vars';
import { text } from 'res/palette';
import ArrowIcon from "components/icons/ArrowIcon";

export default Item = ({ children, text, link }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(link)}
      style={styles.btn}
    >

      <View style={styles.container}>
        <View style={styles.icon}>
          {children}
        </View>

        <Text style={styles.text}>
          {text}
        </Text>
      </View>

      <ArrowIcon />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    ...text,
  }
});

Item.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
