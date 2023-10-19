import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Common/Header';
import MyCard from '../../Common/MyCard';
const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={'Today’s Games'} />
      <MyCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
