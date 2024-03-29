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
	return <ViewRow {...props} style={[props.style, styles.row]} />;
}

export function ViewRowAround(props: ViewProps) {
	return <ViewRow {...props} style={[props.style, styles.around]} />;
}

export function ViewCircle(props: ViewProps & { size: number }) {
	const { style, size } = props;
	const { evenly, circle } = styles;

	const dimensions = [
		evenly,
		circle,
		{
			width: size,
			height: size,
			borderRadius: size / 2,
		},
	];

	return <View {...props} style={[style, dimensions]} />;
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
	around: {
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	row: {
		flexDirection: 'row',
	},
	circle: {
		padding: 8,
		backgroundColor: '#FFFFFF2F',
	},
});
