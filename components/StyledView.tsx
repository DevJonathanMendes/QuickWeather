import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ViewProps } from './Themed';

export function ViewFlex(props: ViewProps) {
	return <View {...props} style={[props.style, { flex: 1 }]} />;
}

export function ViewCentral(props: ViewProps) {
	return (
		<ViewFlex
			{...props}
			style={[
				props.style,
				{
					alignItems: 'center',
					justifyContent: 'center',
				},
			]}
		/>
	);
}

const styles = StyleSheet.create({});
