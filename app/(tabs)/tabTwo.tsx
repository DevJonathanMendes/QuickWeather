import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/base/Themed';
import EditScreenInfo from '../../components/EditScreenInfo';
import { ViewCenter } from '../../components/base/StyledView';
import { BoldText, NormalText } from '../../components/base/StyledText';

export default function TabTwoScreen() {
	return (
		<ViewCenter>
			<BoldText>Tab Two</BoldText>
			<NormalText>Paragraph</NormalText>
			<View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/>
			<EditScreenInfo path='app/(tabs)/tabTwo.tsx' />
		</ViewCenter>
	);
}

const styles = StyleSheet.create({
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
