import React from 'react';
import Week from '../../components/Week';
import { CurrentDay } from '../../components/CurrentDay';
import { View, Text } from '../../components/base/Themed';
import { ViewFlex } from '../../components/base/StyledView';
import ClimateQuality from '../../components/ClimateQuality';

export default function Home() {
	return (
		<ViewFlex darkColor='#016FC1'>
			<ViewFlex>
				<CurrentDay />
			</ViewFlex>

			<ViewFlex darkColor='#014A7F'>
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
						Atualizado há 8 minutos
					</Text>
				</View>
			</ViewFlex>
		</ViewFlex>
	);
}
