import React from 'react';
import {
	CurrentTemperature,
	MaxTemperature,
	MinTemperature,
	NormalText,
} from './StyledText';
import { View } from './Themed';
import { ViewCentral } from './StyledView';
import Feather from '@expo/vector-icons/Feather';

const MinMax = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<MaxTemperature value='20°' />
			<MinTemperature value='10°' />
		</View>
	);
};

export function CurrentDay() {
	return (
		<ViewCentral>
			<Feather name='cloud' size={130} color='#fff' />
			<View style={{ flexDirection: 'row', gap: 4 }}>
				<CurrentTemperature value='30°' />
				<View style={{ justifyContent: 'center' }}>
					<View
						style={{
							width: 3,
							height: '70%',
							backgroundColor: '#ffffff',
							borderRadius: 10,
						}}
					/>
				</View>
				<MinMax />
			</View>
			<NormalText>SUNDAY</NormalText>
			<NormalText>Ensolarado</NormalText>
			<NormalText>RealFeel 33°</NormalText>
		</ViewCentral>
	);
}
