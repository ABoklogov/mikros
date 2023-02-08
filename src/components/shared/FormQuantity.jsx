import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { addToBasket } from 'store/basket/basketOperations';
// import icons

// import vars
import { baseText, text } from 'res/palette';
import { radius, colors } from 'res/vars';

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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={decrement}
        style={[styles.btn, styles.decrement]}
      >
        <Text style={styles.textBtn}> - </Text>
      </TouchableOpacity>
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

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={increment}
        style={[styles.btn, styles.increment]}
      >
        <Text style={styles.textBtn}> + </Text>
      </TouchableOpacity>
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
    width: '20%',
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
    width: '60%',
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
