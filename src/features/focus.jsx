import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';


export const Focus= ({addSubject}) => {
  const [subject, setSubject]=React.useState(null)
 
  return(

   <View style={style.container}>
       <View style={style.textContainer}>
        <TextInput style={style.textInput} onChangeText={setSubject} label="what you want to foucs on ?"/>
        <View style={style.button}>
        <RoundedButton title='+' size={50} onPress= {()=> addSubject(subject)}/>
        </View>
      </View>

   </View>
)}
const style= StyleSheet.create({
  container:{
    flex:1,
  },
  textInput:{
    flex:1,
    marginRight:10,
  },
  button:{
    justifyContent:'center'
  },
  textContainer:{
    
    flex:0.5,
    padding:25,
    justifyContent:'top',
    flexDirection:'row',
  }
})