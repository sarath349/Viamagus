import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../../Common/Header';
import Images from '../../Assets/Images/Images';
import MyCard from '../../Common/MyCard';
import MiniCard from '../../Common/MiniCard';
import {
  FONT_BOLD,
  FONT_HEAVY,
  FONT_MEDIUM,
  FONT_NORMAL,
  FONT_SEMI_BOLD,
} from '../../Assets/Fonts/Font';
const {height, width} = Dimensions.get('window');
const cardData = [
  {
    multi: '*3',
    key: '1',
    title: 'First Stripe Earned',
    description: 'Top 10% of highest spending players in a month',
    imageUrl: Images.list,
  },
  {
    multi: '',
    key: '2',
    title: 'Born Winner',
    description: 'Top 10% of highest spending players in a month',
    imageUrl: Images.list,
  },
  {
    multi: '',
    key: '3',
    title: 'Trader of the Month',
    description: 'Won 7 under-over games in a row',
    imageUrl: Images.list,
  },
  {
    multi: '',
    key: '4',
    title: 'Rising Start',
    description: 'Top 10% of highest spending players in a month',
    imageUrl: Images.list,
  },
  {
    multi: '',
    key: '5',
    title: 'Jackpot',
    description: 'Top 10% of highest spending players in a month',
    imageUrl: Images.list,
  },
  {
    multi: '',
    key: '6',
    title: 'Rising Start',
    description: 'Top 10% of highest spending players in a month',
    imageUrl: Images.list,
  },
  {
    multi: '',
    key: '7',
    title: 'Impossible',
    description: 'Top 10% of highest spending players in a month',
    imageUrl: Images.list,
  },
];
const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title={'Profile'} left={true} right={true} />
        <View style={styles.proContainer}>
          <Image source={Images.proPic} style={styles.proPic} />
          <Text style={{fontFamily: FONT_HEAVY, fontSize: 17, fontWeight: 500}}>
            Jina Simons
          </Text>
          <Text>6000 Pts</Text>
          <Text style={styles.des}>
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
          <View style={styles.logOut}>
            <Image source={Images.LogOut} style={{height: 22, width: 24}} />
            <Text style={styles.logoutText}>Logout</Text>
          </View>

          <View style={styles.statusContainer}>
            <Image
              source={Images.star}
              style={{position: 'absolute', marginTop: -20, marginLeft: 170}}
            />
            <View
              style={{
                alignItems: 'flex-start',
                marginHorizontal: 20,
                width: 160,
              }}>
              <Text style={{color: '#727682', fontWeight: '600'}}>
                Under Or Over
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image source={Images.upArrow} />
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 24,
                    color: '#4F4F4F',
                    fontWeight: '700',
                  }}>
                  81 %
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                marginHorizontal: 10,
                width: 160,
              }}>
              <Text style={{color: '#727682', fontWeight: '600'}}>Top</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image source={Images.downArrow} />
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 24,
                    color: '#4F4F4F',
                    fontWeight: '700',
                  }}>
                  -51 %
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 50,
          alignItems: 'center',
        }}>
        <Text>Game Played</Text>
        <Text>Badges</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cardData}
        renderItem={({item}) => (
          <MiniCard
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            multi={item.multi}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  proContainer: {
    alignItems: 'center',
    margin: 20,
  },
  proPic: {
    width: 80,
    height: 80,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  des: {
    color: '#727682',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    marginTop: 20,
    fontFamily: FONT_SEMI_BOLD,
  },
  logOut: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  statusContainer: {
    borderWidth: 1,
    borderColor: '#EEEAF3',
    width: width * 0.9,
    flexDirection: 'row',
    paddingVertical: 30,
    // justifyContent: 'space-around',
    marginTop: 40,
  },
  logoutText: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 5,
    fontFamily: FONT_NORMAL,
  },
});
