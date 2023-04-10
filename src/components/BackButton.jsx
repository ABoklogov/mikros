import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import icons
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
// import vars
import { activeOpacity } from 'res/vars';

export default BackButton = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity
      onPress={goBack}
      activeOpacity={activeOpacity}
      style={styles.button}
    >
      <ArrowBackIcon />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingRight: 20,
  }
});