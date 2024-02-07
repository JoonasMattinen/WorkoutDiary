import React, { useContext } from 'react';
import { WorkoutContext } from '../WorkoutContext';
import { Modal, Pressable, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SegmentedButtons, TextInput , Button, Chip } from 'react-native-paper';
import styles from '../Styles';


export default function AddWorkout() {

  const { visible, setVisible, date, setDate, workoutType, setWorkoutType, distance, setDistance, duration, setDuration, workouts, setWorkouts, unit } = useContext(WorkoutContext);



  function handleDate(selectedDate) {
    setDate(selectedDate.dateString); // Assuming you want to store the date as a string
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
      <View style={styles.addWorkouContainer}>
        <SafeAreaView>
          <SegmentedButtons
            style={styles.segmentedButtons}
            value={workoutType}
            onValueChange={setWorkoutType}
            buttons={[
              { icon: 'run', value: 'run', label: 'Running' },
              { icon: 'bike', value: 'bike', label: 'Cycling' },
              { icon: 'swim', value: 'swim', label: 'Swimming' },
            ]}
          />
        </SafeAreaView>      
        <TextInput
          label={`Distance (${unit})`}
          keyboardType='number-pad'
          value={distance}
          onChangeText={setDistance}
          clearButtonMode='while-editing'
        />
        <TextInput
          label="Duration(min)"
          keyboardType='number-pad'
          value={duration}
          onChangeText={setDuration}
          clearButtonMode='while-editing'
        />
        <Modal visible={visible} transparent={true}>
          <Calendar onDayPress={handleDate} />
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
