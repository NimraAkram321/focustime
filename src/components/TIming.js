import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from './RoundedButton';
export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton style={styles.button}
        size={65}
        onPress={() => {
          onChangeTime(10);
        }}
        title="10"
      />
      <RoundedButton style={styles.button}
        size={65}
        onPress={() => {
          onChangeTime(15);
        }}
        title="15"
      />
       <RoundedButton style={styles.button}
        size={65}
        onPress={() => {
          onChangeTime(20);
        }}
        title="20"
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flexDirection: 'row',
    flex:  1,
    marginTop:1,
    //textAlign: 'center',
    alignItems:'center'
    //alignItems: 'center',
   // paddingHorizontal:30,
    //marginTop:1,
    
   
    
  },
  button:{
    margin:10,
  }
  
});
