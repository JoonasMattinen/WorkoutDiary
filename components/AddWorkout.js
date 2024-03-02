import React, { useContext } from 'react';
import { WorkoutContext } from '../WorkoutContext';
import { Modal, Pressable, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SegmentedButtons, TextInput , Button, Chip } from 'react-native-paper';
import styles from '../Styles';
import { Text } from 'react-native';


export default function AddWorkout() {

  const { visible, setVisible, date, setDate, workoutType, setWorkoutType, distance, setDistance, duration, setDuration, workouts, setWorkouts, unit } = useContext(WorkoutContext);

  const validateDistance = (distance) => {
    if (distance > 200 || distance < 0) {
      Alert.alert('Invalid value', 'value must be between 0 and 200');
      setDistance('');
    }
    else {
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
    setDate(date.dateString); // Assuming you want to store the date as a string
    setVisible(false);
  }

  const addWorkout = () => {
    // Create a new workout object with the current state values
    const newWorkout = {
      date,
      workoutType,
      distance,
      duration,
    };

    // Add the new workout to the workouts array
    setWorkouts([...workouts, newWorkout]);
    // Optionally, reset the form fields here
    setDate('');
    setWorkoutType('');
    setDistance('');
    setDuration('');
    console.log(workouts); // Log the updated workouts array for debugging
  };

  return (
    <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
      <View style={styles.addWorkoutContainer}>
        <SafeAreaView>
        <View style={styles.header}>
        <Text style={styles.customFont}>Workout Diary</Text>
        </View>
          <SegmentedButtons
            style={styles.segmentedButtons}
            value={workoutType}
            onValueChange={setWorkoutType}
            buttons={[
              { icon: 'run', value: 'run', label: 'Running', checkedColor: '#D17B0F'},
              { icon: 'bike', value: 'bike', label: 'Cycling', checkedColor: '#D17B0F'},
              { icon: 'swim', value: 'swim', label: 'Swimming', checkedColor: '#D17B0F'},
            ]}
          />
        </SafeAreaView>      
        <TextInput
          label={`Distance (${unit})`}
          keyboardType='number-pad'
          value={distance}
          onChangeText={validateDistance}
          clearButtonMode='while-editing'
        />
        <TextInput
          label="Duration(min)"
          keyboardType='number-pad'
          value={duration}
          onChangeText={validateDuration}
          clearButtonMode='while-editing'
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
        > Add Workout</Button>
      </View>
    </TouchableWithoutFeedback>
  );
};
