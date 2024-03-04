import React, { useContext } from "react";
import { WorkoutContext } from "../WorkoutContext";
import { RadioButton, } from "react-native-paper";
import styles from "../Styles";
import { View } from "react-native";

export default function Settings() {

    const { unit, setUnit } = useContext(WorkoutContext);

    return (
        <View style={styles.container}>
        <RadioButton.Group onValueChange={(newUnit) => setUnit(newUnit)} value={unit}>
            <View style={styles.radioButtonContainer}>
                <View style={styles.radiobutton}>
                    <RadioButton.Item labelStyle={styles.customFont} labelVariant="headlineLarge" label="Kilometers" value="Km" />
                </View>
                <View style={styles.radiobutton}>
                    <RadioButton.Item labelStyle={styles.customFont} labelVariant="headlineLarge" label="Miles" value="Mi" />
                </View>
            </View>
        </RadioButton.Group>
        </View>
    );
  }