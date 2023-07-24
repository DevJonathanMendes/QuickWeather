import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { Link, Tabs } from 'expo-router';

import Colors from '../../constants/Colors';

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={25} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				tabBarShowLabel: false,
				tabBarStyle: { backgroundColor: 'transparent' },
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					headerTitle: 'Cidade, Estado',
					headerStyle: { backgroundColor: 'transparent' },
					tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<Feather
										name='calendar'
										size={25}
										color={Colors[colorScheme ?? 'light'].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='tabOne'
				options={{
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										color={Colors[colorScheme ?? 'light'].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='tabTwo'
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
				}}
			/>
		</Tabs>
	);
}
