import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../images/splash_logo.svg';
import icHide from '../../../images/ic_hide.svg';
import InputItem from '../../../components/InputItem';
import CheckBox from '@react-native-community/checkbox';
import Error from '../../../images/error.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    username: '',
    password: '',
  });

  const loginPress = async () => {
    if (!userName || !password) {
      if (!userName)
        setError(prev => ({...prev, username: 'Username is required'}));
      if (!password)
        setError(prev => ({...prev, password: 'Password is required'}));
    } else {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('username', userName);
        navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.loginContainer}>
        <InputItem
          label={'Username'}
          onchange={value => {
            setUserName(value);
          }}
          value={userName}
        />
        {error.username && (
          <View style={styles.errorContainer}>
            <Error />
            <Text>{error.username}</Text>
          </View>
        )}
        <InputItem
          label={'Password'}
          onchange={value => setPassword(value)}
          value={password}
          secure={!showPassword}
          onIconCllick={() => setShowPassword(!showPassword)}
          RightIcon={icHide}
        />
        {error.password && (
          <View style={styles.errorContainer}>
            <Error />
            <Text>{error.password}</Text>
          </View>
        )}
        <Text style={styles.forgotpassword}>FORGOT PASSWORD?</Text>
        <View style={styles.rememberContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{color: '#365B72'}}>Remember me</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => loginPress()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000001A',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: '30%',
  },
  loginContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    paddingTop: 20,
    width: '100%',
    paddingHorizontal: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  forgotpassword: {
    alignSelf: 'flex-end',
    color: '#26A44D',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  rememberContainer: {
    marginVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#00A44D',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 40,
    borderRadius: 20,
    shadowColor: '#00A44D',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
