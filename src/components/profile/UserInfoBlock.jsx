import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'store/auth/authOperations';
import { fetchBasket } from 'store/basket/basketOperations';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import MainModal from 'components/shared/MainModal';
import Link from 'components/shared/Link';
// import vars
import { colors } from 'res/vars';
import { text, miniTitle, baseText } from 'res/palette';

const avatar = require('assets/images/default-avatar.png');

export default UserInfoBlock = ({ setShowBackdrop }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const [modalVisible, setModalVisible] = useState(false);

  const name = auth.user.name.trim();
  const lastName = auth.user.lastName.trim();
  const email = auth.user.email;
  const phone = auth.user.phone;

  const showModal = () => {
    setModalVisible(true);
    setShowBackdrop(true);
  };
  const removeModal = () => {
    setModalVisible(false);
    setShowBackdrop(false);
  };
  const logOutBtn = () => {
    removeModal();
    dispatch(logOut());
    // Проверяем корзину пользователя
    dispatch(fetchBasket());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.img} />
        <View style={styles.info}>
          <View style={styles.item}>
            {name && <Text style={styles.name}>
              {name}
            </Text>}

            {lastName && <Text style={styles.name}>
              {lastName}
            </Text>}
          </View>

          {email && (
            <View style={[styles.box, styles.item]}>
              <Text style={styles.label}>E-mail: </Text>
              <Text style={styles.text}>{email}</Text>
            </View>
          )}

          {phone && (
            <View style={styles.box}>
              <Text style={styles.label}>Телефон: </Text>
              <Text style={styles.text}>{phone}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <Link
          text={'Выйти'}
          onPress={showModal}
        />
      </View>

      <MainModal
        modalVisible={modalVisible}
        removeModal={removeModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Вы действительно хотите выйти из профиля?
          </Text>

          <MainButton
            text={'Выйти'}
            onPress={logOutBtn}
          />
        </View>
      </MainModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  info: {},
  item: {
    marginBottom: 8,
  },
  img: {
    marginRight: 15,
  },
  name: {
    ...miniTitle,
  },
  box: {
    flexDirection: 'row',
  },
  label: {
    ...baseText,
    color: colors.grey,
  },
  text: {
    ...baseText
  },
  modalView: {
    maxWidth: 300,
  },
  modalText: {
    ...text,
    marginBottom: 15,
    textAlign: "center",
  }
});

UserInfoBlock.propTypes = {
  setShowBackdrop: PropTypes.func,
};
