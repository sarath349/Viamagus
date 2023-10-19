import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const MiniCard = ({title, description, imageUrl, multi}) => {
  return (
    <ScrollView style={styles.miniCard} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        <Image source={imageUrl} style={styles.miniImage} />
        <View style={{width: '75%', marginLeft: 10}}>
          <Text style={styles.miniTitle}>
            {title} <Text style={{color: '#FFA600'}}>{multi}</Text>
          </Text>
          <Text style={styles.miniDescription}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  miniCard: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  miniImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  miniTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  miniDescription: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default MiniCard;
