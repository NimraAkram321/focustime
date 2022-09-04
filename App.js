import * as React from 'react';
import { Text, View, StyleSheet,Platform,StatusBar } from 'react-native';

import Constants from 'expo-constants';
import {colors} from './src/utils/colors';
import { Focus } from './src/features/focus.jsx';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory'



export default function App() {
  const [currentSubject, setCurrentSubject]=React.useState()
  const [history,setHistory]= React.useState([])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      {!currentSubject ? (
      <>
      <Focus addSubject={setCurrentSubject}/>
      <FocusHistory history={history}/>
      </>
      ):( 
       <Timer focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([...history,subject])
        }} 
        onClearSubject={() =>{setCurrentSubject(null)}}/>)}
      
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
     paddingTop:Platform.OS==='android'?StatusBar.currentHeight :0,
     paddingLeft:10,

     backgroundColor: colors.darkPurple, 
  },
  text :{
    color:colors.white
  }
 
  
});
