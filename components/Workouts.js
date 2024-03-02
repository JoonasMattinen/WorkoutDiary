import React, { useContext, useEffect, useState } from 'react';
import { WorkoutContext } from '../WorkoutContext';
import { Button, ScrollView, Text, View } from 'react-native';
import { Card, Chip, IconButton } from 'react-native-paper';
import styles from '../Styles';

export default function Workouts() {
  const { workouts, unit } = useContext(WorkoutContext);

  const [totals, setTotals] = useState({ run: 0, bike: 0, swim: 0 });

  useEffect(() => {
    const initialTotals = { run: 0, bike: 0, swim: 0 };

    workouts.forEach((workout) => {
      const distance =
        unit === "Mi"
          ? Number(workout.distance) * 0.62
          : Number(workout.distance);
      if (workout.workoutType in initialTotals) {
        initialTotals[workout.workoutType] += distance;
      }
    });

    setTotals(initialTotals);
  }, [workouts, unit]);

  return (
    <View>
      <ScrollView>
        <Card style={styles.addWorkoutContainer}>
          <Card.Content style={styles.card}>
            <Chip style={styles.chip} icon="run">
              {totals.run.toFixed(0)} {unit}
            </Chip>
            <Chip style={styles.chip} icon="bike">
              {totals.bike.toFixed(0)} {unit}
            </Chip>
            <Chip style={styles.chip} icon="swim">
              {totals.swim.toFixed(0)} {unit}
            </Chip>
          </Card.Content>
        </Card>
        {workouts.map((workout, index) => (
          <Card style={styles.addWorkoutContainer} key={index} mode="outlined">
            <Card.Content>
              <IconButton icon={workout.workoutType} mode="contained" />
              <Card.Title title={"Day: " + workout.date} />
              <Text>Distance:
                {unit === "Mi"
                  ? (workout.distance * 0.62).toFixed(0)
                  : workout.distance}
                {unit}
              </Text>
              <Text>Duration:{workout.duration}Min</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}


