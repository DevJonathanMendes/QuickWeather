import React from 'react';
import { Feather } from '@expo/vector-icons';
import { NormalText } from './base/StyledText';
import { ViewRowEvenly, ViewCircle } from './base/StyledView';

function Info() {
	return (
		<ViewCircle>
			<Feather name='thermometer' size={32} color='#fff' />
			<NormalText style={{ fontSize: 14 }}>60%</NormalText>
		</ViewCircle>
	);
}

export default function ClimateQuality() {
	return (
		<ViewRowEvenly>
			<Info />
			<Info />
			<Info />
		</ViewRowEvenly>
	);
}
