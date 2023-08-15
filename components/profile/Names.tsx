import React from 'react';
import { View } from 'react-native';
import { GitHub } from '../base/StyledText';

export default function ProfileNames(props: { name: string; login: string }) {
	return (
		<View style={{ paddingVertical: 16 }}>
			<GitHub.Name {...props} />
			<GitHub.Login {...props} />
		</View>
	);
}
