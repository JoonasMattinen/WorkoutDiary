import React, { useContext } from 'react';
import { WorkoutContext } from '../WorkoutContext';
import { Modal, Pressable, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SegmentedButtons, TextInput , Button, Chip } from 'react-native-paper';
import styles from '../Styles';
import { Text } from 'react-native';


export default function AddWorkout() {

  const { visible, setVisible, date, setDate, workoutType, setWorkoutType, distance, setDistance, duration, setDuration, workouts, setWorkouts, unit } = useContext(WorkoutContext);

  const validateDistance = (input) => {
    const distance = input.replace(',', '.');
    const numericDistance = parseFloat(distance);
    
    if (isNaN(numericDistance) || numericDistance > 200 || numericDistance < 0) {
      Alert.alert('Invalid value', 'Value must be between 0 and 200');
      setDistance('');
    } else {
      setDistance(distance);
    }
  }

  const validateDuration = (duration) => {
    if (duration > 400 || duration < 0) {
      Alert.alert('Invalid value', 'value must be between 0 and 200');
      setDuration('');
    }
    else {
      setDuration(duration);
    }
  }

  

  const handleDate = (date) => {
    setDate(date.dateString);
    setVisible(false);
  }

  const addWorkout = () => {
    console.log("Entered Distance: ", distance);
  
    // Convert distance to kilometers if the current unit is miles
    const distanceInKilometers = unit === "Mi" ? parseFloat(distance) / 0.621371 : parseFloat(distance);
  
    const newWorkout = {
      date,
      workoutType,
      distance: distanceInKilometers,
      duration,
    };
  
    setWorkouts([...workouts, newWorkout]);
  
    setDate('');
    setWorkoutType('');
    setDistance('');
    setDuration('');
  
    console.log("Updated Workouts Array: ", workouts);
  };
  

  return (
    <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.header}>
        <Text style={styles.customFont}>Workout Diary</Text>
        </View>
          <SegmentedButtons
            style={styles.segmentedButtons}
            value={workoutType}
            onValueChange={setWorkoutType}
            buttons={[
              { icon: 'run', value: 'run', label: 'Running', checkedColor: '#D17B0F', labelStyle: styles.customFontSmall},
              { icon: 'bike', value: 'bike', label: 'Cycling', checkedColor: '#D17B0F', labelStyle: styles.customFontSmall},
              { icon: 'swim', value: 'swim', label: 'Swimming', checkedColor: '#D17B0F', labelStyle: styles.customFontSmall},
            ]}
          />
        </SafeAreaView>      
        <TextInput
          label={`Distance (${unit})`}
          keyboardType='numeric'
          value={distance}
          onChangeText={validateDistance}
          clearButtonMode='while-editing'
          returnKeyType='done'
        />
        <TextInput
          label="Duration (Min)"
          keyboardType='numeric'
          value={duration}
          onChangeText={validateDuration}
          clearButtonMode='while-editing'
          returnKeyType='done'
        />
        <Modal visible={visible} transparent={true}>
          <Calendar 
          style={styles.calendar}
          onDayPress={handleDate} 
          disableAllTouchEventsForDisabledDays={true}
          />          
        </Modal>
        <Pressable style={styles.pressable} onPress={() => setVisible(true)}>
          <Chip icon={'calendar'} style={styles.pressableText}>{date || 'Select date'}</Chip>
        </Pressable>
        <Button style={styles.addWorkoutButton} icon='send' mode='elevated' title="Add Workout" onPress={addWorkout}
        disabled={date === '' || workoutType === '' || distance === '' || duration === ''}
        labelStyle={styles.customFont}> Add Workout</Button>
      </View>
    </TouchableWithoutFeedback>
  );
};
