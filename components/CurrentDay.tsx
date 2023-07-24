import React from 'react';
import { NormalText } from './StyledText';
import { View } from './Themed';

export function CurrentDay() {
	return (
		<View>
			<NormalText>SUNDAY</NormalText>
			<NormalText>Ensolarado</NormalText>
			<NormalText>RealFeel 33°</NormalText>
		</View>
	);
}
