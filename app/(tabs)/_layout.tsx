import React from 'react';
import { Link, Tabs } from 'expo-router';
import Colors from '../../constants/Colors';
import { Icon } from '../../components/base/Themed';
import { Pressable, useColorScheme } from 'react-native';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					headerTitle: 'Cidade, Estado',
					tabBarIcon: ({ color }) => (
						<Icon name='cloud' size={25} color={color} />
					),
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<Icon
										name='calendar'
										style={{ marginRight: 16, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='devProfile'
				options={{
					title: 'Dev Profile',
					tabBarIcon: ({ color }) => (
						<Icon name='user' size={25} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
