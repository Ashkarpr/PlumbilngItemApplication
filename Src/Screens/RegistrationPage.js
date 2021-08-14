import React,{useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { openDatabase } from 'react-native-sqlite-storage';
import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase(
  {
    name:'MainDB',
    location:'default',
  },
  ()=> { },
  error => {console.log(error) }
);

const RegitrationPage = ({navigation}) => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[mobileNumber, setmobileNumber] = useState('');

    useEffect(()=>{
      createTable();
      getData();
    }, []);

    const createTable=()=> {
      db.transaction((tx)=>{
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS "
          +"Users "
          +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Name TEXT, MobileNumber INTEGER, Password TEXT );"
        )
      })
    }
   
    const getData = () => {
      try {
        AsyncStorage.getItem('UserData')
          .then(value => {
            if(value != null){
              navigation.navigate("LoginPage");
            }
          })
      } catch (error) {
        console.log(error);
  
      }
    }

    const setData= async ()=>{
        if(name.length==0 || email.length==0 || password.length==0 || mobileNumber.length==0){
            Alert.alert('warning', 'please write your data')
        }else{
           try {
            //  var user = {
            //   Email: email,
            //    Name:name,
            //    MobileNumber:mobileNumber,
            //    Password: password,
            // }
            //    await AsyncStorage.setItem('UserData', JSON.stringify(user));
              db.transaction((tx))
               navigation.navigate("LoginPage");
           } catch (error) {
               console.log (error)
           }
        }
    }

  return (
    <View style={styles.body}>
      {/* <View style={styles.InnerBody}> */}
      <Text style={styles.LoginHeaderText}>SIGNUP HERE</Text>
      <TextInput
        placeholder="Enter Your Email Id "
        onChangeText={(value)=>setEmail(value)}
        placeholderTextColor="black"
        style={styles.TextInputField}
      />
      <TextInput
        placeholder="Enter Your Name "
        onChangeText={(value)=>setName(value)}
        placeholderTextColor="black"
        style={styles.TextInputField}
      />
      <TextInput
        placeholder="Enter Mobile Number"
        onChangeText={(value)=>setmobileNumber(value)}
        placeholderTextColor="black"
        keyboardType="numeric"
        style={styles.TextInputField}
      />
      <TextInput
        placeholder="Enter Password"
        onChangeText={(value)=>setPassword(value)}
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.TextInputField}
      />
      <View style={styles.ButtonRows}>
        <TouchableOpacity  onPress={() => setData()} style={styles.LoginButton}>
          <Text style={styles.ButtonText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.LoginButton}>
          <Text style={styles.ButtonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("LoginPage")} style={{backgroundColor:"red",borderRadius:50,padding:2}}>
          <Text style={{color:"white"}}>Have an Account?</Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '5%',
    width: '100%',
    alignSelf: 'center',
    
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

export default RegitrationPage;
