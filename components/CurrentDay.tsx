import React from 'react';
import {
	CurrentTemperature,
	MaxTemperature,
	MinTemperature,
	NormalText,
} from './base/StyledText';
import { View } from './base/Themed';
import {
	ViewFlexCenter,
	ViewFlex,
	ViewRow,
	ViewRowFlex,
	ViewCenter,
} from './base/StyledView';
import Feather from '@expo/vector-icons/Feather';

const MinMax = () => {
	return (
		<ViewCenter>
			<MaxTemperature value='20°' />
			<MinTemperature value='10°' />
		</ViewCenter>
	);
};

export function CurrentDay() {
	return (
		<ViewFlexCenter>
			<Feather name='cloud' size={128} color='#fff' />
			<ViewRow style={{ borderWidth: 2, borderColor: 'red' }}>
				<CurrentTemperature value='30°' />
				<ViewFlexCenter>
					<View
						style={{
							width: 2,
							height: '70%',
							borderRadius: 100,
							marginHorizontal: 6,
							backgroundColor: '#ffffff77',
						}}
					/>
				</ViewFlexCenter>
				<MinMax />
			</ViewRow>

			<NormalText>Parcialmente ensolarado</NormalText>
			<NormalText>RealFeel 33°</NormalText>
		</ViewFlexCenter>
	);
}
