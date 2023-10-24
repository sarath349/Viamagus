import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../Assets/Images/Images';
import {FONT_MEDIUM} from '../Assets/Fonts/Font';

export default function header({title, left, right}) {
  return (
    <View style={styles.headerContainer}>
      {left && <Image source={Images.left} style={{height: 30, width: 30}} />}
      <Text style={styles.title}>{title}</Text>
      {right && <Image source={Images.right} style={{height: 30, width: 30}} />}
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
    fontWeight: '500',
    color: '#727682',
    alignSelf: 'center',
    fontFamily: FONT_MEDIUM,
  },
});
