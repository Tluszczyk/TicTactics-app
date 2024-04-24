/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { AuthenticationProvider } from "./providers/AuthenticationProvider";

import { RootStackParamList } from "./common/props";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthView } from "./views/AuthView/AuthView";
import { HomeView } from "./views/HomeView/HomeView";
import { ProfileView } from "./views/ProvileView/ProfileView";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
	return (
		<AuthenticationProvider>
			<NavigationContainer>
				<Stack.Navigator 
					initialRouteName="Auth"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="Home" component={HomeView} />
					<Stack.Screen name="Auth" component={AuthView} />
					<Stack.Screen name="Profile" component={ProfileView} />
				</Stack.Navigator>
			</NavigationContainer>
		</AuthenticationProvider>
	);
}

export default App;
