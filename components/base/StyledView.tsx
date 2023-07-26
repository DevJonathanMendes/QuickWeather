import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ViewProps } from './Themed';

export function ViewFlex(props: ViewProps) {
	return <View {...props} style={[props.style, { flex: 1 }]} />;
}

export function ViewCenter(props: ViewProps) {
	return <View {...props} style={[props.style, styles.center]} />;
}

export function ViewFlexCenter(props: ViewProps) {
	return <ViewFlex {...props} style={[props.style, styles.center]} />;
}

export function ViewEvenly(props: ViewProps) {
	return <ViewFlex {...props} style={[props.style, styles.evenly]} />;
}

export function ViewRow(props: ViewProps) {
	return <View {...props} style={[props.style, styles.row]} />;
}

export function ViewRowFlex(props: ViewProps) {
	return <ViewFlex {...props} style={[props.style, styles.row]} />;
}

export function ViewRowEvenly(props: ViewProps) {
	return <ViewEvenly {...props} style={[props.style, styles.row]} />;
}

export function ViewCircle(props: ViewProps) {
	return (
		<View {...props} style={[props.style, styles.circle, styles.evenly]} />
	);
}

const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	evenly: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	row: {
		flexDirection: 'row',
	},
	circle: {
		width: 74,
		height: 74,
		padding: 8,
		borderRadius: 100,
		backgroundColor: '#34AAC8',
		elevation: 4,
	},
});
