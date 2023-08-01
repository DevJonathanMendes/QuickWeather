import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useColorScheme } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen
						name='modal'
						options={{
							presentation: 'modal',
							headerTitle: 'Cidade',
							animation: 'slide_from_right',
						}}
					/>
				</Stack>
			</ThemeProvider>
		</>
	);
}

export { ErrorBoundary } from 'expo-router';
export const unstable_settings = { initialRouteName: '(tabs)' };

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	return (
		<>
			{!loaded && <SplashScreen />}
			{loaded && <RootLayoutNav />}
		</>
	);
}
