import React, { useContext, useEffect, useState } from "react";
import { WorkoutContext } from "../WorkoutContext";
import { Button, ScrollView, Text, View } from "react-native";
import { Card, Chip, IconButton } from "react-native-paper";
import styles from "../Styles";

export default function Workouts() {
  const { workouts, unit } = useContext(WorkoutContext);

  const [totals, setTotals] = useState({ run: 0, bike: 0, swim: 0 });

  useEffect(() => {
    const initialTotals = { run: 0, bike: 0, swim: 0 };

    workouts.forEach((workout) => {
      const distance =
        unit === "Mi"
          ? Number(workout.distance) * 0.621371
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
        <Card style={styles.container}>
          <Card.Content style={styles.card}>
            <Chip style={styles.chip} icon="run">
              {totals.run.toFixed(2)} {unit}
            </Chip>
            <Chip style={styles.chip} icon="bike">
              {totals.bike.toFixed(2)} {unit}
            </Chip>
            <Chip style={styles.chip} icon="swim">
              {totals.swim.toFixed(2)} {unit}
            </Chip>
          </Card.Content>
        </Card>
        {workouts.map((workout, index) => (
          <Card style={styles.container} key={index} mode="outlined">
            <Card.Content style={styles.card}>
              <IconButton icon={workout.workoutType} mode="outlined" />
              <Text style={styles.customFontSmall}>Day: {workout.date}</Text>
              <View style={styles.cardContent}>
                <Text style={styles.customFontSmall}>
                  Distance:{" "}
                  {unit === "Mi"
                    ? (parseFloat(workout.distance) * 0.621371).toFixed(2)
                    : parseFloat(workout.distance).toFixed(2)}
                  {unit}
                </Text>
                <Text style={styles.customFontSmall}>
                  Duration: {workout.duration} Min
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
