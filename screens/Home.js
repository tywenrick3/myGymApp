import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/style1";
import { Card } from "react-native-paper";
// put each card in a touchable opactity to see more details

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView vertical={true}>
				<Card>
					<Text style={styles.paragraph}>Fitness Update Card</Text>
				</Card>
				<Card>
					<Text style={styles.paragraph}>Another Update Card</Text>
				</Card>
				<Card>
					<Text style={styles.paragraph}>last one</Text>
				</Card>
			</ScrollView>
		</View>
	);
};

export default Home;
