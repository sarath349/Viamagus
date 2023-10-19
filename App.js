import React from 'react';
import Route from './Route';
import {SafeAreaView, StyleSheet} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Route />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default App;
