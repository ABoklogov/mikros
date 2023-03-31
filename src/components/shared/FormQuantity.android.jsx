// import { useNavigation } from "@react-navigation/native";
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable
} from 'react-native';
import PropTypes from 'prop-types';
// import { addToBasket } from 'store/basket/basketOperations';
// import vars
import { radius, colors } from 'res/vars';
import { baseText, text, rippleMainBtn } from 'res/palette';

export default FormQuantity = ({
  quantity,
  onChange,
  submit,
  setShowForm,
}) => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch();

  const increment = () => {
    onChange(quantity + 1);
  };

  const decrement = () => {
    onChange(quantity - 1);
    if (quantity - 1 === 0) {
      setShowForm(false);
    };
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={rippleMainBtn}
        onPress={decrement}
        style={[styles.btn, styles.decrement]}
      >
        <Text style={styles.textBtn}> - </Text>
      </Pressable>
      <TextInput
        style={styles.input}
        textAlign={'center'}
        keyboardType={'numeric'}
        onBlur={submit}
        value={String(quantity)}
        onChangeText={(value) => onChange(+value)}
        onSubmitEditing={submit}
        cursorColor={colors.blue}
      />

      <Pressable
        android_ripple={rippleMainBtn}
        onPress={increment}
        style={[styles.btn, styles.increment]}
      >
        <Text style={styles.textBtn}> + </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 25,
  },
  btn: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  increment: {
    borderBottomRightRadius: radius.card,
    borderTopRightRadius: radius.card,
  },
  decrement: {
    borderTopLeftRadius: radius.card,
    borderBottomLeftRadius: radius.card,
  },
  textBtn: {
    ...text,
    color: colors.white,
  },
  input: {
    width: '50%',
    height: '100%',
    ...baseText,
    paddingBottom: 0,
    paddingTop: 0,
    borderWidth: 1,
    borderColor: colors.blue,
  }
});

FormQuantity.propTypes = {
  submit: PropTypes.func,
  onChange: PropTypes.func,
  quantity: PropTypes.number,
};
