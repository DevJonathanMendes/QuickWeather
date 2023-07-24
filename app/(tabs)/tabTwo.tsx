import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import EditScreenInfo from '../../components/EditScreenInfo';
import { ViewCentralized } from '../../components/StyledView';
import { BoldText, NormalText } from '../../components/StyledText';

export default function TabTwoScreen() {
	return (
		<ViewCentralized>
			<BoldText>Tab Two</BoldText>
			<NormalText>Paragraph</NormalText>
			<View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/>
			<EditScreenInfo path='app/(tabs)/tabTwo.tsx' />
		</ViewCentralized>
	);
}

const styles = StyleSheet.create({
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
