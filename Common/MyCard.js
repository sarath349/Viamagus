import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../Assets/Images/Images';
import CustomModal from './customModal';
const {width, height} = Dimensions.get('window');
const MyCard = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <ImageBackground source={Images.bgImg} style={styles.bgImg}>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginLeft: -30,
              marginTop: 30,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#D2BAF5', fontSize: 15, fontWeight: '600'}}>
                Under or Over
              </Text>
              <Image source={Images.excla} style={{marginLeft: 5}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#D2BAF5',
                  marginRight: 10,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                Starting in
              </Text>
              <Image source={Images.Clock} style={{marginRight: 10}} />
              <Text style={{color: '#D2BAF5', fontSize: 15, fontWeight: '600'}}>
                03:23:12
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#D2BAF5',
              fontSize: 16,
              marginLeft: 20,
              fontWeight: '600',
            }}>
            Bitcoin price will be under
          </Text>
          <Text
            style={{
              color: '#fff',

              fontSize: 16,
              marginLeft: 20,
              fontWeight: '600',
            }}>
            $24,524 at 7 a ET on 22nd Jan’21
          </Text>
          {/* <Image source={Images.bgImg1} style={styles.bgImg1} /> */}
          <Image source={Images.elli} style={styles.elli} />
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}>
        <View>
          <Text>PRIZE POOL</Text>
          <Text>$12,000</Text>
        </View>
        <View>
          <Text>UNDER</Text>
          <Text>3.25x</Text>
        </View>
        <View>
          <Text>OVER</Text>
          <Text>1.25x</Text>
        </View>
        <View>
          <Text>ENTRY FEES</Text>
          <Text>5</Text>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginVertical: 20,
          fontSize: 16,
          fontWeight: '600',
        }}>
        What’s your prediction?
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={{
            width: 180,
            backgroundColor: '#452C55',
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image source={Images.arrowdown} />
          <Text style={{color: '#fff', marginLeft: 5, fontWeight: '600'}}>
            UNDER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            width: 180,
            backgroundColor: '#6231AD',
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image source={Images.arrowup} />
          <Text style={{color: '#fff', fontWeight: '600', marginLeft: 5}}>
            OVER
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginLeft: -30,
          marginTop: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Images.vector1} style={{marginRight: 5}} />
          <Text style={{color: '#000', fontSize: 15, fontWeight: '600'}}>
            355 Players
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Images.vector2} style={{marginRight: 10}} />
          <Text style={{color: '#000', fontSize: 15, fontWeight: '600'}}>
            View chart
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <View
          style={{
            height: 15,
            width: 250,
            backgroundColor: '#FE4190',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}></View>
        <View
          style={{
            height: 15,
            width: 110,
            backgroundColor: '#2DABAD',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <Text style={{color: '#B5C0C8', fontSize: 16}}>
          232 predicted under
        </Text>
        <Text style={{color: '#B5C0C8', fontSize: 16}}>123 predicted over</Text>
      </View>
      <CustomModal visible={isModalVisible} closeModal={toggleModal} />
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: 'white',
    // borderRadius: 10, // You can adjust the border radius for rounded corners
    // Add shadow properties for both Android (elevation) and iOS (shadow properties)
    elevation: 5, // Android
    shadowColor: 'black', // iOS
    shadowOffset: {width: 2, height: 2}, // iOS
    shadowOpacity: 0.5, // iOS
    shadowRadius: 5, // iOS
    borderRadius: 5,
    paddingBottom: 10,
  },
  bgImg: {
    width: width * 0.93,
    height: height / 6,
  },
  bgImg1: {
    width: 60,
    height: 60,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 60,
  },
  elli: {
    alignSelf: 'flex-end',
    width: 150,
    height: 60,
    position: 'absolute',
    marginTop: 75,
  },
});
