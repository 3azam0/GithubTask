/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import PropTypes from 'prop-types';
import { Calendar, } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
 const Calendarr = ({onDayPress,marked,onDismiss}) => {
    return (
        <View style={styles.calndarWrapper}>
        <View
          style={styles.row}>
          <Text>Select Date</Text>
          <Icon onPress={onDismiss} size={20} color="#CCD4DD" name="close-circle" />
        </View>
        <Calendar
          style={styles.calendar}
          hideExtraDays
          onDayPress={onDayPress}
          minDate={'2019-01-10'}
          maxDate={new Date()}
          markedDates={marked}
          theme={{ todayTextColor: '#68DDBA' }}
        />
      </View>
    );
  
};


export default Calendarr

Calendarr.propTypes = {
  onDayPress: PropTypes.func,
  onDismiss: PropTypes.func,
  marked: PropTypes.object,

  
};

