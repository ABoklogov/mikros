import { useEffect } from 'react';
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { colors } from 'res/vars.js';

export default BasketIcon = ({ color, size }) => {
  const basketItems = useSelector(state => state.basket.items);
  const navigation = useNavigation();
  // счетчик у иконки
  useEffect(() => {
    if (basketItems.length > 0) {
      navigation.setOptions({
        tabBarBadge: basketItems.length,
      });
    } else {
      navigation.setOptions({
        tabBarBadge: null,
      });
    };
  }, [basketItems.length]);

  return (
    (basketItems.length > 0) ? (
      <Svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 28 28"
      >
        <Path
          d="M12.265 25.428c.972 0 1.76-.776 1.76-1.732s-.788-1.732-1.76-1.732c-.971 0-1.76.776-1.76 1.732s.789 1.732 1.76 1.732ZM21.356 25.428c.972 0 1.76-.776 1.76-1.732s-.788-1.732-1.76-1.732-1.76.776-1.76 1.732.788 1.732 1.76 1.732ZM9.213 15.749l-1.91-8.324 4.669-5.177L17.037 5.7l5.454-3.45 2.792 5.176-1.877 8.314a2.265 2.265 0 0 1-2.218 1.752H11.43a2.263 2.263 0 0 1-2.217-1.742Z"
          fill={color}
        />
        <Path
          d="M2.552 4.07 6.53 5.316s.469.798.77 2.109m.003 0 1.91 8.324a2.263 2.263 0 0 0 2.217 1.742h9.758a2.265 2.265 0 0 0 2.218-1.752l1.877-8.314-2.792-5.177L17.037 5.7l-5.065-3.45-4.669 5.176Z"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ) : (
      <Svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 31 30"
      >
        <Path
          d="M13.685 27.621a1.936 1.936 0 1 0 0-3.871 1.936 1.936 0 0 0 0 3.871ZM23.686 27.621a1.936 1.936 0 1 0 0-3.871 1.936 1.936 0 0 0 0 3.871Z"
          fill={color}
        />
        <Path
          d="m3 3.75 4.375 1.393s.516.893.847 2.357l2.1 9.303a2.497 2.497 0 0 0 2.439 1.947h10.734a2.5 2.5 0 0 0 2.44-1.958L28 7.5M28 7.5 7.357 5.143"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  )
};

BasketIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

BasketIcon.defaultProps = {
  color: colors.darkGrey,
  size: 25,
}