// import { useNavigation } from "@react-navigation/native";
// import { useEffect } from "react";
// import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import components
// import CloseButton from 'components/shared/CloseButton';
// import vars
import { colors } from 'res/vars';
// import { text } from 'res/palette';


export default FilterCatalogScreen = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>FilterCatalogScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});