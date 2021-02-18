import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

const ErrorCard = () => {
  return (
    <SafeAreaView style={styles.errorContainer}>
      <View>
        <Image source={require('../../../assets/img/no-wifi.png')} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.errorHead}>Connection Error</Text>
        <Text style={styles.subText}>
          Please check your network connectivity and try again
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ErrorCard;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    justifyContent: 'center',
  },
  img: {
    height: 120, 
    width: 120
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 10, 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  errorHead: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});