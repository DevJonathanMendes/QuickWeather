import React from 'react';
import { View, Text } from './base/Themed';

export default function DayUpdated() {
	return (
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
	);
}
