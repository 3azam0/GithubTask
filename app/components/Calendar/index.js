/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Calendar as Calendarr } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';
import styless from './styles.js';
const Calendar = ({ onDayPress, marked, onDismiss }) => {
  const { colors } = useTheme();
  const styles = styless(colors);

  return (
    <View style={styles.calndarWrapper}>
      <View style={styles.row}>
        <Text style={styles.select}>Select Date</Text>
        <Icon onPress={onDismiss} size={20} color={colors.border} name="close-circle" />
      </View>
      <Calendarr
        //   style={styles.calendar}
        hideExtraDays
        onDayPress={onDayPress}
        minDate={'2019-01-10'}
        maxDate={new Date()}
        markedDates={marked}
        theme={{
          backgroundColor: 'red',
          calendarBackground: colors.white,
          textSectionTitleColor: colors.txtBlack,
          monthTextColor: colors.txtBlack,
          selectedDayBackgroundColor: '#68DDBA',
          todayTextColor: '#68DDBA',
          dayTextColor: colors.txtBlack,
          textDisabledColor: colors.border,
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: colors.green,
          disabledArrowColor: '#d9e1e8',
        }}
      />
    </View>
  );
};

export default Calendar;

Calendar.propTypes = {
  onDayPress: PropTypes.func,
  onDismiss: PropTypes.func,
  marked: PropTypes.object,
};
