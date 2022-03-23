import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Nav = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 30,
					right: 30,
					elevation: 0,
					backgroundColor: "#c4c4c4",
					opacity: 70,
					borderRadius: 10,
					height: 60,
					shadowColor: "#000000",
					shadowOpacity: 0.06,
					shadowOffset: { width: 5, height: 5 },
				},
				tabBarLabelStyle: {
					display: "none",
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: () => <Icon name="home" size={32} />,
				}}
			/>

			<Tab.Screen
				name="Watch"
				component={Stopwatch}
				options={{
					tabBarIcon: () => <Icon name="watch" size={32} />,
				}}
			/>

			<Tab.Screen
				name="Account"
				component={Account}
				options={{
					tabBarIcon: () => <Icon name="account" size={32} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default Nav;
