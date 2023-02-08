import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
// import icons
import FavoriteIcon from 'components/icons/tabs_icons/FavoriteIcon';
// import vars
import { colors } from 'res/vars';

export default FavoriteButton = () => {
  const [inFavorite, setInFavorite] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setInFavorite(!inFavorite)}
    >
      <FavoriteIcon
        size={23}
        color={colors.blue}
        isFull={inFavorite}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

// FavoriteButton.propTypes = {
//   vendorCode: PropTypes.string,
// };
