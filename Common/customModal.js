import React from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const CustomModal = ({visible, closeModal}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>
            Your Prediction is Under
          </Text>
          <Text style={{fontSize: 16, fontWeight: '600', marginTop: 20}}>
            ENTRY TICKETS
          </Text>
          <ScrollPicker
            dataSource={['1', '2', '3', '4', '5', '6']}
            selectedIndex={1}
            renderItem={(data, index) => {
              return (
                <View key={index}>
                  <Text style={{fontSize: 20}}>{data}</Text>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              //
            }}
            wrapperHeight={180}
            wrapperBackground="#FFFFFF"
            itemHeight={60}
            highlightColor="#6231AD"
            highlightBorderWidth={2}
          />
          {/* <Button title="Close Modal" onPress={closeModal} /> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text>You Can Win</Text>
              <Text style={{color: '#03A67F'}}>$2000</Text>
            </View>
            <View>
              <Text>Total</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Submit my prediction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  button: {
    backgroundColor: '#6231AD',
    width: 390,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default CustomModal;
