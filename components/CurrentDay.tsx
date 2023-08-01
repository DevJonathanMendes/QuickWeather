import React from 'react';
import { IconPNG } from './base/Themed';
import {
	ViewRow,
	ViewFlex,
	ViewCenter,
	ViewFlexCenter,
} from './base/StyledView';
import {
	NormalText,
	MaxTemperature,
	MinTemperature,
	CurrentTemperature,
} from './base/StyledText';

export function CurrentDay() {
	return (
		<ViewFlexCenter>
			<ViewFlexCenter>
				<IconPNG image={'sun-cloud'} size={128} />
			</ViewFlexCenter>
			<ViewCenter>
				<ViewRow>
					<ViewCenter>
						<CurrentTemperature value='25°' />
					</ViewCenter>
					<ViewCenter>
						<ViewFlex
							style={{
								width: 2,
								height: '70%',
								marginVertical: '50%',
								borderRadius: 100,
								marginHorizontal: 6,
								backgroundColor: '#ffffff77',
							}}
						/>
					</ViewCenter>
					<ViewCenter>
						<MaxTemperature value='27°' />
						<MinTemperature value='23°' />
					</ViewCenter>
				</ViewRow>
			</ViewCenter>
			<ViewFlex style={{ alignItems: 'center' }}>
				<NormalText>Parcialmente nublado</NormalText>
				<NormalText>RealFeel 26°</NormalText>
			</ViewFlex>
		</ViewFlexCenter>
	);
}
