import { StyleSheet, View, Text } from 'react-native';
// import components
import EmptyFavoriteBlock from 'components/EmptyFavoriteBlock';
// import vars
import { colors, mHorizontal } from 'res/vars';

export default DefaultScreenFavorites = () => {

  return (
    <View style={styles.container}>
      <View style={styles.emptyBox}>
        <EmptyFavoriteBlock />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  emptyBox: {
    paddingTop: 30,
    marginHorizontal: mHorizontal.baseBlock,
  }
});