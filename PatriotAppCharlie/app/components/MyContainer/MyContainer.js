import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const MyContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

MyContainer.propTypes = {
  children: PropTypes.any,
};

export default MyContainer
