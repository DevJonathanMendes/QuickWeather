import React from 'react';
import { Link, Stack } from 'expo-router';
import { ViewFlexCenter } from '../components/base/StyledView';
import { BoldText, NormalText } from '../components/base/StyledText';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!', headerTitleAlign: 'center' }} />
			<ViewFlexCenter>
				<BoldText>This screen does not exist.</BoldText>
				<Link href='/'>
					<NormalText style={{ color: '#2E78B7' }}>
						Go to home screen!
					</NormalText>
				</Link>
			</ViewFlexCenter>
		</>
	);
}
