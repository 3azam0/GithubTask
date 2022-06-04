/* eslint-disable react-native/no-inline-styles */
import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

import PropTypes from 'prop-types';

const Loader = ({ loading }) => {
  const { colors } = useTheme();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          zIndex: 5,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <ActivityIndicator size="large" color="#68DDBA" />
      </View>
    );
  }
  return null;
};

export default Loader;

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};
