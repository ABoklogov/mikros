import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { SelectCountry } from 'react-native-element-dropdown';
// import components

// import vars
import { colors, radius } from 'res/vars';
import { text } from 'res/palette';

export default Sort = ({
  sort,
  setSort,
  sortData
}) => {
  console.log("🚀 ~ sort:", sort)
  console.log("🚀 ~ setSort:", setSort)
  console.log("🚀 ~ sortData:", sortData)

  return (
    <SelectCountry
      style={styles.dropdown}
      containerStyle={styles.containerStyle}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      activeColor={colors.lightGrey}
      maxHeight={200}
      value={sort}
      data={sortData}
      valueField="value"
      labelField="lable"
      placeholder="Сортировать по ..."
      onChange={e => setSort(e.value)}
    />
  )
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 200,
    backgroundColor: colors.transparentGrey,
    borderRadius: radius.input,
    paddingHorizontal: 8,
  },
  containerStyle: {
    borderRadius: radius.input,
  },
  placeholderStyle: {
    ...text,
    color: colors.grey,
  },
  selectedTextStyle: {
    ...text,
  },
});

Sort.propTypes = {
  sort: PropTypes.string,
  setSort: PropTypes.func,
  sortData: PropTypes.arrayOf(PropTypes.object),
};
