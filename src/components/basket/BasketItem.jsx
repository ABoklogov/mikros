import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
// import components
import Card from 'components/shared/Card';
import VendorCode from 'components/shared/VendorCode';
import FavoriteButton from 'components/shared/FavoriteButton';
// import icons
import CloseIcon from 'components/icons/CloseIcon';
// import vars
import { mHorizontal, strings, colors } from 'res/vars';
import { baseText, miniText, miniTitle } from 'res/palette.js';

export default BasketItem = ({
  name,
  price,
  vendorCode,
  quantity,
  unit
}) => {
  // const navigation = useNavigation();
  const sliceName = (value) => {
    return value.length < 38 ? value : `${value.slice(0, 60)} ...`;
  };
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.img}>

        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.vendorCodeBox}>
              <VendorCode vendorCode={''} />
            </View>

            <View style={styles.iconsBox}>
              <View style={styles.favoriteIcon}>
                <FavoriteButton />
              </View>
              <CloseIcon />
            </View>
          </View>

          <View style={styles.nameBox}>
            <Text style={styles.name}>{sliceName(name)}</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.price}>{price.slice(0, -2)} ₽/{unit}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  img: {
    height: 100,
    width: '30%',
    backgroundColor: colors.lightGrey,
  },
  content: {
    width: '70%',
    paddingLeft: 10,
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  favoriteIcon: {
    marginRight: 15,
  },
  vendorCodeBox: {
    // borderColor: 'aqua',
    // borderWidth: 1,
    marginBottom: 5,
  },
  nameBox: {
    // borderColor: 'blue',
    // borderWidth: 1,
    marginBottom: 5,
  },
  name: {
    ...miniText,
  },
  priceBox: {
    // borderColor: 'green',
    // borderWidth: 1,
  },
  price: {
    ...miniTitle
  }
});

BasketItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  unit: PropTypes.string,
};
