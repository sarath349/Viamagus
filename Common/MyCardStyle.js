import {StyleSheet, Dimensions} from 'react-native';
import {FONT_HEAVY, FONT_ULTRA_LIGHT} from '../Assets/Fonts/Font';
const {width, height} = Dimensions.get('window');
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
    overflow: 'hidden',
  },
  bgImg: {
    width: width * 0.93,
    height: height / 6,
  },
  bgImg1: {
    // alignSelf: 'flex-end',
    // marginTop: 60,
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 0,
    right: 20,
    zIndex: 2,
  },
  elli: {
    // alignSelf: 'flex-end',
    // marginTop: 75,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 140,
    height: 60,
  },
  buttonContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: -30,
    marginTop: 30,
  },
  buttonText: {
    color: '#D2BAF5',
    fontSize: 15,
    fontWeight: '600',
  },
  startingInText: {
    color: '#D2BAF5',
    marginRight: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  underOverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startingInContainer: {flexDirection: 'row', alignItems: 'center'},
  bitCoinText: {
    color: '#D2BAF5',
    fontSize: 16,
    marginLeft: 20,
    fontWeight: '600',
  },
  bitCoinSubText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 20,
    fontWeight: '600',
    zIndex: 4,
  },
  subHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  predictionText: {
    marginLeft: 20,
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  underButton: {
    width: 180,
    backgroundColor: '#452C55',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  overButton: {
    width: 180,
    backgroundColor: '#6231AD',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  underText: {color: '#fff', marginLeft: 5, fontWeight: '600'},
  playerChartContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: -30,
    marginTop: 30,
  },
  playerText: {color: '#000', fontSize: 15, fontWeight: '600'},
  playerContainer: {flexDirection: 'row', alignItems: 'center'},
  barContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  leftBar: {
    height: 15,
    width: 250,
    backgroundColor: '#FE4190',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightBar: {
    height: 15,
    width: 110,
    backgroundColor: '#2DABAD',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  predictionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  predOverUnderText: {color: '#B5C0C8', fontSize: 16},
  yellowCircle: {height: 15, width: 15},
  poolContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  amtText: {
    color: '#333',
    fontSize: 14,
    fontFamily: FONT_ULTRA_LIGHT,
  },
});
export default styles;
