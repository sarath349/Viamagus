import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../Assets/Images/Images';

export default function header({title, left, right}) {
  return (
    <View style={styles.headerContainer}>
      {left && <Image source={Images.left} style={{height: 20, width: 20}} />}
      <Text style={styles.title}>{title}</Text>
      {right && <Image source={Images.right} style={{height: 20, width: 20}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#333333',
    alignSelf: 'center',
  },
});
