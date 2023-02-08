import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
// import components

// import vars
import { baseText } from 'res/palette';
import { colors, fonts } from 'res/vars';

export default OrderItem = ({
  id,
  date,
  status,
  price,
  paymentSystems
}) => {

  // определяет статус заказа
  const definesStatus = () => {
    let totalStatus = '';
    switch (status) {
      case 'N':
        totalStatus = 'Не обработан менеджером';
        break;
      case 'F':
        totalStatus = 'Отправлен клиенту';
        break;
      case 'A':
        totalStatus = 'Принят менеджером';
        break;
      case 'G':
        totalStatus = 'В наборе';
        break;
      case 'P':
        totalStatus = 'Формируется к отправке';
        break;
      case 'O':
        totalStatus = 'Отменён';
        break;
      case 'PC':
        totalStatus = 'Оплата заказа';
        break;
      case 'DF':
        totalStatus = 'Отгружен';
        break;
      case 'DN':
        totalStatus = 'Ожидает обработки';
        break;

      default:
        break;
    };
    return totalStatus;
  };

  const definesPayment = () => {
    let totalPayment = '';

    switch (paymentSystems) {
      case 1:
        totalPayment = 'Наличные';
        break;
      case 10:
        totalPayment = 'Счёт на оплату по безналу';
        break;
      case 14:
        totalPayment = 'Банковские карты';
        break;
      case 15:
        totalPayment = 'Банковские карты 2';
        break;
      case 2:
        totalPayment = 'Наложенный платеж';
        break;
      case 4:
        totalPayment = 'Яндекс.Деньги';
        break;
      case 5:
        totalPayment = 'Банковские карты 3';
        break;
      case 6:
        totalPayment = 'QIWI';
        break;
      case 7:
        totalPayment = 'Оплата в платежной системе Web Money';
        break;
      case 8:
        totalPayment = 'Квитанция на оплату в банке';
        break;
      case 11:
        totalPayment = 'Банковские карты 4';
        break;
      case 12:
        totalPayment = 'Внутренний счёт';
        break;
      case 13:
        totalPayment = 'Банковские карты 5';
        break;

      default:
        break;
    };

    return totalPayment;
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>дата заказа: </Text>
        <Text style={styles.text}>{date}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>номер заказа: </Text>
        <Text style={styles.text}>{id}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>сумма заказа: </Text>
        <Text style={styles.text}>{price.slice(0, -2)} ₽</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>статус заказа: </Text>
        <Text style={styles.text}>{definesStatus()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>платежная система: </Text>
        <Text style={styles.text}>{definesPayment()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  label: {
    ...baseText,
    color: colors.grey,
  },
  text: {
    ...baseText,
  }
});

OrderItem.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.string,
  paymentSystems: PropTypes.number,
};
