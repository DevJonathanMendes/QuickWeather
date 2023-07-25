import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import Feather from '@expo/vector-icons/Feather';
import { ViewCentralized, ViewFlex } from '../../components/StyledView';
import {
	BoldText,
	CurrentTemperature,
	MaxTemperature,
	MinTemperature,
	NormalText,
} from '../../components/StyledText';
import Week from '../../components/Week';
import { CurrentDay } from '../../components/CurrentDay';

export default function Home() {
	return (
		<ViewFlex>
			<View style={{ flex: 4 }}>
				<CurrentDay />
			</View>
			<View style={{ flex: 2 }}>
				<Week />
			</View>
			<View
				darkColor='#0195B9'
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: 78,
						height: 78,
						padding: 8,
						borderRadius: 100,
						backgroundColor: '#ffffff3f',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<Feather name='thermometer' size={30} color='#fff' />
					<NormalText style={{ fontSize: 14 }}>60%</NormalText>
				</View>
				<View
					style={{
						width: 78,
						height: 78,
						padding: 8,
						borderRadius: 100,
						backgroundColor: '#ffffff3f',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<Feather name='droplet' size={30} color='#fff' />
					<NormalText style={{ fontSize: 14 }}>0 mm</NormalText>
				</View>
				<View
					style={{
						width: 78,
						height: 78,
						padding: 8,
						borderRadius: 100,
						backgroundColor: '#ffffff3f',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<Feather name='wind' size={30} color='#fff' />
					<NormalText style={{ fontSize: 14 }}>39</NormalText>
				</View>
			</View>
		</ViewFlex>
	);
}

const styles = StyleSheet.create({
	currentDay: { flex: 2 },
	week: { flex: 1 },
});
