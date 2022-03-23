import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/style1";
import { Card } from "react-native-paper";
// put each card in a touchable opactity to see more details

const Stopwatch = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Card>
				<Text style={styles.paragraph}>Stopwatch</Text>
			</Card>
		</View>
	);
};

export default Stopwatch;
