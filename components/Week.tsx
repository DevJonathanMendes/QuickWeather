import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Feather from '@expo/vector-icons/Feather';
import { ViewCentralized, ViewFlex } from '../components/StyledView';
import {
	BoldText,
	NormalText,
	MinTemperature,
	MaxTemperature,
} from '../components/StyledText';

const daysOfTheWeek = ['SEG', 'TER', 'QUA', 'QUI', /* 'SEX', */ 'SÁB', 'DOM'];

const MinMax = () => {
	return (
		<View darkColor='#0195B9'>
			<MaxTemperature value='20°' />
			<MinTemperature value='10°' />
		</View>
	);
};

export default function Week() {
	return (
		<View style={styles.week}>
			{daysOfTheWeek.map((day, index) => (
				<View key={index} style={styles.day}>
					<BoldText>{day}</BoldText>
					<Feather name='sun' color='#F5E51B' size={26} />
					<MinMax />
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	week: {
		flex:1,
		gap: 5,
		padding: 5,
		flexDirection: 'row',
		backgroundColor: '#0195B9',
	},
	day: {
		flexGrow: 1,
		flex:1,
		borderRadius: 10,
		alignItems: 'center',
		backgroundColor: '#0195B9',
		justifyContent: 'space-evenly',
	},
});
