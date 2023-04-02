import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeartRate from '../../images/heart_rate.svg';
import BloodPressure from '../../images/Blood_Pressure.svg';
import ActiveCalories from '../../images/Active_Calories.svg';
import UpdateIcon from '../../images/ic_update.svg';
import LogOutIcon from '../../images/Log_Out.svg';
import Card from '../../components/Card';
import Button from '../../components/Button';
import CustomAlert from '../../components/CustomAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
const data = [
  {
    title: 'Heart Rate',
    value: '125',
    unit: 'bpm',
    icon: HeartRate,
    color: '#BEF0D8',
  },
  {
    title: 'Blood Pressure',
    value: '125/85',
    unit: '(m)',
    icon: BloodPressure,
    color: '#C3E3F6',
  },
  {
    title: 'Active Calories',
    value: '125',
    unit: '',
    icon: ActiveCalories,
    color: '#E5D1EC',
  },
];

const BgColor = {
  1: '#BEF0D8',
  2: '#C3E3F6',
  3: '#E5D1EC',
};

const Home = () => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
       const getUsername = new Promise((resolve, reject) => {
            AsyncStorage.getItem('username').then(value => resolve(value));
        }) 
        getUsername.then(value => setUsername(value)); 
    }, [])
    

  const logout = async () => {
      await AsyncStorage.clear();
      RNRestart.restart();
  };
  return (
    <View>
      <StatusBar backgroundColor={'#5292EB'} />
      <View style={styles.Headers}>
        <Text style={styles.HeaderTitle}>
          Welcome <Text style={{fontWeight: '600'}}>{username}!</Text>
        </Text>
        <TouchableOpacity
          style={styles.logoutContainer}
          onPress={() => {console.log("clicked"),setIsAlertVisible(!isAlertVisible)}}>
          <LogOutIcon />
          <Text style={styles.HeaderTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DataContainer}>
        <Text style={styles.Title}>HEALTH DATA</Text>
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
        <View style={styles.updateContainer}>
          <View>
            <Text style={styles.updateDate}>Last update on</Text>
            <Text style={styles.updateDate}>23/03/2023 12:00 PM</Text>
          </View>
          <Button Icon={UpdateIcon} title="UPDATE" />
        </View>
      </View>
      {isAlertVisible && (
        <CustomAlert
          isvisible={isAlertVisible}
          onclose={() => setIsAlertVisible(false)}
          onOk={() => logout()}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Headers: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#5292EB',
    height: 60,
    paddingTop: 20,
    alignItems: 'center',
  },
  HeaderTitle: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
  },
  Title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  DataContainer: {
    paddingHorizontal: 20,
  },
  updateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  updateDate: {
    fontWeight: '500',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
