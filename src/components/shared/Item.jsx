import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from 'prop-types';
// import icons
import ArrowIcon from "components/icons/ArrowIcon";
// import vars
import { activeOpacity } from 'res/vars';
import { text } from 'res/palette';

export default Item = ({
  children,
  text,
  link,
  data,
  callback
}) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (callback) callback();
    navigation.navigate(link, data)
  };

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
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
    // borderColor: 'tomato',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 8,
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
