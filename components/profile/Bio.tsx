import React from 'react';
import { View } from '../base/Themed';
import { GitHub } from '../base/StyledText';

export default function ProfileBio(props: { bio: string }) {
	return (
		<View>
			<GitHub.Bio {...props} />
		</View>
	);
}
