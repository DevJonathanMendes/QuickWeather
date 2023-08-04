import React from 'react';
import { IconPNG, View } from './base/Themed';
import { ViewRow, ViewFlex, ViewCenter } from './base/StyledView';
import {
	NormalText,
	MaxTemperature,
	MinTemperature,
	CurrentTemperature,
} from './base/StyledText';

export function CurrentDay() {
	return (
		<ViewCenter>
			<ViewCenter>
				<IconPNG image={'sun-cloud'} size={128} />
			</ViewCenter>
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
			<View style={{ alignItems: 'center' }}>
				<NormalText>Parcialmente nublado</NormalText>
				<NormalText>RealFeel 26°</NormalText>
			</View>
		</ViewCenter>
	);
}
