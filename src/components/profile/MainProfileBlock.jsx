// import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import components
import Item from 'components/shared/Item';
// import icons
import OrderHistoryIcon from 'components/icons/OrderHistoryIcon';
import ProfileIcon from 'components/icons/tabs_icons/ProfileIcon';
import PaymentIcon from 'components/icons/PaymentIcon';
import SubscriptionIcon from 'components/icons/SubscriptionIcon';
// import FavoriteIcon from 'components/icons/tabs_icons/FavoriteIcon';
// import vars
import { strings, colors } from 'res/vars';
import { text } from 'res/palette';

export default MainProfileBlock = () => {
  const { auth } = useSelector(state => state);
  // const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.firstItem}>
        <Item
          text={'Мои данные'}
          link={auth.isLoggedIn ? strings.nameNestedProfile.profileInfo : strings.nameNotTabs.logIn}
        >
          <ProfileIcon size={30} color={colors.blue} />
        </Item>
      </View>

      {/* <View style={styles.item}>
        <Item
          text={'Избранное'}
          link={strings.nameNestedProfile.favorite}
        >
          <FavoriteIcon
            color={colors.blue}
            isFull={false}
            size={30}
          />
        </Item>
      </View> */}

      <View style={styles.item}>
        <Item
          text={'История заказов'}
          link={auth.isLoggedIn ? strings.nameNestedProfile.orderHistory : strings.nameNotTabs.logIn}
        >
          <OrderHistoryIcon />
        </Item>
      </View>

      <View style={styles.item}>
        <Item
          text={'Оплата без заказа'}
          link={strings.nameNestedProfile.payment}
        >
          <PaymentIcon />
        </Item>
      </View>

      <View style={styles.lastItem}>
        <Item
          text={'Подписка'}
          link={strings.nameNestedProfile.subscription}
        >
          <SubscriptionIcon />
        </Item>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 20,
  },
  firstItem: {
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  item: {
    paddingTop: 3,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  lastItem: {
    paddingTop: 3,
  }
});