import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native'
import {fontSize} from '../utils/sizes'
import {colors}  from '../utils/colors'

export const FocusHistory=({history})=>{

  if(!history || !history.length) return <Text  style={style.title}>We havn't focused on anything yet:</Text>;

  const renderItem =({item})=><Text style={style.list}>-  {item}</Text>
  return (
    <View style={style.container}>
    <Text  style={style.title}>Things we focused on:</Text>
    <FlatList 
    data={history}
    renderItem={renderItem}
    />
    </View>
  )
}

const style =StyleSheet.create({
  container:{
    flex:1,
   paddingLeft:30
  },
  title:{
    
    fontSize:fontSize.md,
    fontWeight:'bold',
  },
  list:{
    paddingTop:7,
  }
})