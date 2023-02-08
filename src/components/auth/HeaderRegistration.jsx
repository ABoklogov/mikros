import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, sizeText } from 'res/vars.js';
import { text } from 'res/palette.js';

export default HeaderRegistration = ({
  firstStep,
  setFirstStep,
  goToNextStep
}) => {
  const activeText = (step) => {
    if (step === 1) {
      return {
        fontSize: firstStep ? sizeText.normal : sizeText.light,
        color: firstStep ? colors.blue : colors.grey,
      };
    } else {
      return {
        fontSize: !firstStep ? sizeText.normal : sizeText.light,
        color: !firstStep ? colors.blue : colors.grey,
      };
    };
  };

  return (
    <View style={styles.container}>
      <View style={{
        ...styles.subBox,
        borderBottomColor: firstStep ? colors.blue : colors.transparentGrey
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setFirstStep(true)}
          style={styles.button}
        >
          <Text style={{
            ...styles.text,
            ...activeText(1),
          }}>
            1 шаг
          </Text>
          {
            firstStep &&
            <Text style={{
              ...styles.text,
              ...activeText(1),
            }}> - 0 вас</Text>
          }
        </TouchableOpacity>
      </View>

      <View style={{
        ...styles.subBox,
        borderBottomColor: !firstStep ? colors.blue : colors.transparentGrey
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={goToNextStep}
          style={styles.button}
        >
          <Text style={{
            ...styles.text,
            ...activeText(2),
          }}>
            2 шаг
          </Text>
          {
            !firstStep &&
            <Text style={{
              ...styles.text,
              ...activeText(2),
            }}> - связь с вами</Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 25,
  },
  subBox: {
    flexDirection: 'row',
    width: '50%',
    borderBottomWidth: 2,
    justifyContent: 'center'
  },
  text: {
    ...text,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 4,
    paddingTop: 4,
    width: '100%',
  }
});

HeaderRegistration.propTypes = {
  firstStep: PropTypes.bool,
  setFirstStep: PropTypes.func,
  goToNextStep: PropTypes.func,
};