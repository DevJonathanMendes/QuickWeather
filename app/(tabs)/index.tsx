import React from 'react';
import {
	ViewFlex,
} from '../../components/base/StyledView';
import Week from '../../components/Week';
import { CurrentDay } from '../../components/CurrentDay';
import ClimateQuality from '../../components/ClimateQuality';
import { View, Text } from '../../components/base/Themed';

export default function Home() {
	return (
		<ViewFlex darkColor='#00BCE2'>
			<ViewFlex>
				<CurrentDay />
			</ViewFlex>

			<ViewFlex darkColor='#0195B9'>
				<Week />
				<ClimateQuality />
				<View
					style={{
						margin: 18,
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: 16,
							fontWeight: '500',
							textShadowColor: '#000000AF',
							textShadowRadius: 2,
						}}
					>
						SEGUNDA-FEIRA, 25 DE JULHO
					</Text>
					<Text
						style={{
							color: '#FFFFFFAF',
							fontSize: 16,
							textShadowColor: '#000000AF',
							textShadowRadius: 2,
						}}
					>
						Atualizado 56 minutos atrás
					</Text>
				</View>
			</ViewFlex>
		</ViewFlex>
	);
}
