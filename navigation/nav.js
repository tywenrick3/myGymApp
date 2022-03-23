import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
//screens
import Home from "../screens/Home";
import Stopwatch from "../screens/Stopwatch";
import Profile from "../screens/Profile";

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
					borderRadius: 10,
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
					tabBarIcon: ({ focused }) => <Icon name="home" size={32} />,
				}}
			/>

			<Tab.Screen
				name="Watch"
				component={Stopwatch}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon name="watch" size={32} />
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => <Icon name="user" size={32} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default Nav;
