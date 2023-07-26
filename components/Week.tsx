import React from 'react';
import { View } from '../components/base/Themed';
import Feather from '@expo/vector-icons/Feather';
import { ViewEvenly, ViewRowFlex } from '../components/base/StyledView';
import { BoldText, MinTemperature, MaxTemperature } from './base/StyledText';

const daysWeek = ['SEG', 'TER', 'QUA', 'QUI', /* 'SEX', */ 'SÁB', 'DOM'];

const MinMax = () => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<MaxTemperature value='20°' />
			<MinTemperature value='10°' />
		</View>
	);
};

export default function Week() {
	return (
		<ViewRowFlex style={{ borderWidth: 2, borderColor: 'red' }}>
			{daysWeek.map((day, index) => (
				<ViewEvenly key={index}>
					<BoldText>{day}</BoldText>
					<Feather name='sun' color='#F5E51B' size={32} />
					<MinMax />
				</ViewEvenly>
			))}
		</ViewRowFlex>
	);
}
