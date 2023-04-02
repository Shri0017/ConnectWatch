import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CustomAlert(props) {
  const { isvisible = false, onclose = () => { }, onOk = () => { } } = props;

  return (
    <Modal
      visible={isvisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => onclose()}>
      <View style={[styles.centeredView, , styles.BlurBackground]}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Confirm Logout</Text>
          <Text style={styles.description}>
            Are you sure you want to logout?
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.cancel]}
              onPress={() => onclose()}>
              <Text style={{color: '#00A44D', fontWeight: 'bold'}}>CANCEL</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.logout]}
              onPress={() => onOk()}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>LOGOUT</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    width: '85%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 9,
    paddingHorizontal: 17,
    shadowColor: '#00A44D',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  logout: {
    backgroundColor: '#00A44D',
  },
  cancel: {
    backgroundColor: 'white',
    borderColor: '#00A44D',
    borderWidth: 1,
  },
});
