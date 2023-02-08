import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors } from 'res/vars';
import { text } from 'res/palette';

export default Header = ({
  linkBack,
  paramslinkBack,
  title,
  parentTitle
}) => {
  // const [currentTitle, setCurrentTitle] = useState(title);
  const navigation = useNavigation();

  const toBack = () => {
    navigation.navigate(linkBack, paramslinkBack);
    // setCurrentTitle(parentTitle);
  };

  return (
    <View style={styles.component}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toBack}
      >
        <Text>назад</Text>
      </TouchableOpacity>

      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    borderColor: 'tomato',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGrey,
  },

});

Header.propTypes = {
  linkBack: PropTypes.string,
  title: PropTypes.string,
  parentTitle: PropTypes.string,
};