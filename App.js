import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/homePage/index';
import LoginPage from './src/loginPage/index';
import CreateAccountPage from './src/createAccountPage/';
import MainPage from './src/mainPage/index';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			
			<Stack.Navigator>

				<Stack.Screen
					name="HomePage"
					component={HomePage}
					options={{
						headerShown:false
					}}
				/>

				<Stack.Screen
					name="LoginPage"
					component={LoginPage}
					options={{
						headerShown:false
					}}
				/>

				<Stack.Screen
					name="CreateAccountPage"
					component={CreateAccountPage}
					options={{
						headerShown:false
					}}
				/>

				<Stack.Screen
					name="MainPage"
					component={MainPage}
					options={{
						headerShown:false,
						gestureEnabled: false,
						datachPreviousScreen: false,
						headerLeft: null,
					}}
				/>

			</Stack.Navigator>

    	</NavigationContainer>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
