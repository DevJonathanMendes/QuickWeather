import React from 'react';
import { Icon, View } from './base/Themed';
import { ViewFlexCenter, ViewRow, ViewCenter } from './base/StyledView';
import {
	CurrentTemperature,
	MaxTemperature,
	MinTemperature,
	NormalText,
} from './base/StyledText';

export function CurrentDay() {
	return (
		<ViewFlexCenter>
			<Icon name='cloud' size={128} />
			<ViewRow>
				<CurrentTemperature value='29°' />
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
				<ViewCenter>
					<MaxTemperature value='32°' />
					<MinTemperature value='27°' />
				</ViewCenter>
			</ViewRow>

			<NormalText>Parcialmente nublado</NormalText>
			<NormalText>RealFeel 31°</NormalText>
		</ViewFlexCenter>
	);
}
