import React, { useContext } from "react";
import { WorkoutContext } from "../WorkoutContext";
import { Card, RadioButton, } from "react-native-paper";
import styles from "../Styles";

export default function Settings() {

    const { unit, setUnit } = useContext(WorkoutContext);

    return (
        <Card style={styles.radiobuttonContainer} mode="outlined">
            <RadioButton.Group onValueChange={(newUnit) => setUnit(newUnit)} value={unit}>
                <RadioButton.Item style={styles.radiobutton} label="Kilometers" value="Km" />
                <RadioButton.Item style={styles.radiobutton} label="Miles" value="Mi" />
            </RadioButton.Group>
        </Card>
    );
  }