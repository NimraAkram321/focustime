import React from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import {Timing} from '../components/TIming';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject,onClearSubject ,onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = React.useState(false);
  const [onProgress, setOnProgress] = React.useState(1);
  const [minutes,setMinutes]=React.useState(0.1);


  const onEnd=(reset)=>{
Vibration.vibrate(PATTERN)
setIsStarted(false)
setOnProgress(1)
reset();
onTimerEnd(focusSubject)
  } 
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setOnProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: spacing.xxxl,
          height: spacing.sm,
          marginTop: 10,
          marginRight: 'none',
        }}>
        <ProgressBar progress={onProgress} color={colors.progressBar} />
      </View>
      <View style={styles.timeButton} >
        <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.button}>
        {!isStarted && (
          <RoundedButton size={100} title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton size={100} title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearButton}>
      <RoundedButton size={45} title='-' onPress={onClearSubject}/>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  countdown: {
    flex: 0.5,
    //justifyContent: 'center',
    //alignItems: 'center',

    paddingLeft: 50,
    paddingTop: 50,
  },
  timeButton:{
    flex:0.5,
   marginLeft:44,
    paddingTop:60,
    flexDirection:'row',
    alignItems:'center',
  },
  button: {
    flex: 0.3,
    flexDirection: 'row',

    paddingTop: 10,
    marginTop: 30,
    paddingLeft: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton:{
     alignItems:'center',
     //flexDirection:'row',
     marginTop:30,
     marginLeft:50,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
