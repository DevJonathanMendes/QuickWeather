import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function BoldText(props: TextProps) {
	return <Text {...props} style={[styles.bold, props.style]} />;
}

export function NormalText(props: TextProps) {
	return <Text {...props} style={[styles.normal, props.style]} />;
}

export function CurrentTemperature(props: { value: string }) {
	return <Text style={styles.current}>{props.value}</Text>;
}

export function MaxTemperature(props: { value: string }) {
	return <Text style={styles.max}>{props.value}</Text>;
}

export function MinTemperature(props: { value: string }) {
	return <Text style={styles.min}>{props.value}</Text>;
}

const styles = StyleSheet.create({
	bold: { fontSize: 18, fontWeight: 'bold' },
	normal: { fontSize: 18 },
	current: { fontSize: 18 },
	max: { fontSize: 18, color: '#eee' },
	min: { fontSize: 18, color: '#ccc' },
});
