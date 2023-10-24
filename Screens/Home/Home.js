import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Common/Header';
import MyCard from '../../Common/MyCard';
import styles from './MyComponentStyle';
const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={'Today’s Games'} />
      <MyCard />
    </View>
  );
};

export default Home;
