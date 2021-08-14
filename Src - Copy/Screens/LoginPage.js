import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LoginPage = ({navigation}) => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[mobileNumber, setmobileNumber] = useState('');

  useEffect(()=>{
    getData();
  },[]);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData')
        .then(value => {
          if(value != null){
            let user = JSON.parse(value);
            setName(user.Name);
            setEmail(user.Email);
            setPassword(user.Password);
            setmobileNumber(user.MobileNumber);
          }
        })
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <View style={styles.body}>
      {/* <View style={styles.InnerBody}> */}
      <Text style={styles.LoginHeaderText}>LOGIN PAGE</Text>
      <TextInput
        placeholder={email}
        placeholderTextColor="black"
        style={styles.TextInputField}
      />
      <TextInput
        placeholder={name}
        placeholderTextColor="black"
        style={styles.TextInputField}
      />
      <TextInput
        placeholder={mobileNumber}
        placeholderTextColor="black"
        style={styles.TextInputField}
      />
      <TextInput
      secureTextEntry={true}
        placeholder={password}
        placeholderTextColor="black"
        style={styles.TextInputField}
      />
     
      <View style={styles.ButtonRows}>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.ButtonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#f26d63',
    borderWidth: 1,
  },
  //   InnerBody:{
  //     width:"90%",
  //     alignItems:"center",
  //     justifyContent:"center",

  //     borderWidth:1,
  //     flex:.5,
  //     borderRadius:50,
  //     backgroundColor:"#f26d63",
  //   },
  LoginHeaderText: {
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 1,
    backgroundColor: '#dbc9c8',
    borderRadius: 100,
    padding: '5%',
  },
  TextInputField: {
    borderWidth: 1,
    width: '80%',
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  ButtonRows: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  LoginButton: {
    borderWidth: 1,
    margin: 10,
    width: '35%',
    height: 45,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: '3%',
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LoginPage;
