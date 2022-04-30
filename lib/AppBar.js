import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const STATUS_BAR = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

const AppBar = () => {
  return <View style={styles.containerHeader}></View>;
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#000000',
    paddingTop: STATUS_BAR,
  },
});

export default AppBar;
