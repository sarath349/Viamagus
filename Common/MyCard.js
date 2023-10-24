import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../Assets/Images/Images';
import CustomModal from './customModal';
import styles from './MyCardStyle';

const MyCard = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={{overflow: 'hidden'}}>
        <ImageBackground source={Images.bgImg} style={styles.bgImg}>
          <View style={styles.buttonContainer}>
            <View style={styles.underOverContainer}>
              <Text style={styles.buttonText}>Under or Over</Text>
              <Image source={Images.excla} style={{marginLeft: 5}} />
            </View>
            <View style={styles.startingInContainer}>
              <Text style={styles.startingInText}>Starting in</Text>
              <Image source={Images.Clock} style={{marginRight: 10}} />
              <Text style={styles.buttonText}>03:23:12</Text>
            </View>
          </View>
          <Text style={styles.bitCoinText}>Bitcoin price will be under</Text>
          <Text style={styles.bitCoinSubText}>
            $24,524 at 7 a ET on 22nd Jan’21
          </Text>
          {/* <Image source={Images.bgImg1} style={styles.bgImg1} /> */}
          <Image source={Images.elli} style={styles.elli} />
        </ImageBackground>
      </View>
      <View style={styles.subHeadingContainer}>
        <View style={styles.poolContainer}>
          <Text>PRIZE POOL</Text>
          <Text style={styles.amtText}>$12,000</Text>
        </View>
        <View style={styles.poolContainer}>
          <Text>UNDER</Text>
          <Text amtText>3.25x</Text>
        </View>
        <View style={styles.poolContainer}>
          <Text>OVER</Text>
          <Text amtText>1.25x</Text>
        </View>
        <View style={styles.poolContainer}>
          <Text>ENTRY FEES</Text>
          <Text amtText>
            5 <Image source={Images.yellowCircle} style={styles.yellowCircle} />
          </Text>
        </View>
      </View>
      <Text style={styles.predictionText}>What’s your prediction?</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.underButton}>
          <Image source={Images.arrowdown} />
          <Text style={styles.underText}>UNDER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal} style={styles.overButton}>
          <Image source={Images.arrowup} />
          <Text style={styles.underText}>OVER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.playerChartContainer}>
        <View style={styles.playerContainer}>
          <Image source={Images.vector1} style={{marginRight: 5}} />
          <Text style={styles.playerText}>355 Players</Text>
        </View>
        <View style={styles.playerContainer}>
          <Image source={Images.vector2} style={{marginRight: 10}} />
          <Text style={styles.playerText}>View chart</Text>
        </View>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.leftBar}></View>
        <View style={styles.rightBar}></View>
      </View>
      <View style={styles.predictionContainer}>
        <Text style={styles.predOverUnderText}>232 predicted under</Text>
        <Text style={styles.predOverUnderText}>123 predicted over</Text>
      </View>
      <CustomModal visible={isModalVisible} closeModal={toggleModal} />
    </View>
  );
};

export default MyCard;
