import React from 'react';
import { IconPNG, View } from './base/Themed';
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
			<IconPNG image={'sun-cloud'} size={128} />

			<ViewRow>
				<CurrentTemperature value='25°' />
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
					<MaxTemperature value='27°' />
					<MinTemperature value='23°' />
				</ViewCenter>
			</ViewRow>

			<NormalText>Parcialmente nublado</NormalText>
			<NormalText>RealFeel 26°</NormalText>
		</ViewFlexCenter>
	);
}
