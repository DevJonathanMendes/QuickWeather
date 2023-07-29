import React from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View } from '../components/base/Themed';
import { BoldText } from '../components/base/StyledText';
import { ViewFlexCenter } from '../components/base/StyledView';

export default function ModalScreen() {
	return (
		<ViewFlexCenter>
			<BoldText>Não implementado.</BoldText>
			<View
				style={{ marginVertical: 30, height: 1, width: '80%' }}
				darkColor='rgba(255,255,255,0.1)'
			/>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</ViewFlexCenter>
	);
}
