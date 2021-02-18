import React from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native'

const LoadingIndicator = () => {
  return (
    <SafeAreaView style={Styles.containerSection}>
      <ActivityIndicator size={50} color="#ED2E45" />
      {/* <Text style={Styles.loadingText}>Loading...</Text> */}
    </SafeAreaView>
  )
}

export default LoadingIndicator;

const Styles = StyleSheet.create({
  containerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600"
  }
})