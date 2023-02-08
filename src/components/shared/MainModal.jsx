import {
  StyleSheet,
  View,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import ProfileBlock from 'components/shared/ProfileBlock';
import CloseButton from 'components/shared/CloseButton';

export default MainModal = ({
  children,
  modalVisible,
  removeModal,
  name,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={name === 'auth' ? null : removeModal}
      >
        <View style={styles.centeredView}>
          <ProfileBlock>
            <View style={styles.modalView}>
              {
                name !== 'auth' &&
                <View style={styles.closeBtn}>
                  <CloseButton onPress={removeModal} />
                </View>
              }
              {children}
            </View>
          </ProfileBlock>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    marginTop: 10,
  },
  closeBtn: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});

MainModal.propTypes = {
  modalVisible: PropTypes.bool,
  removeModal: PropTypes.func,
  name: PropTypes.string,
};
