import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Nav from "./navigation/nav";

const App = () => {
	return (
		<NavigationContainer>
			<Nav />
		</NavigationContainer>
	);
};

export default App;
