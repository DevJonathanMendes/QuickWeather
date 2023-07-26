import React from 'react';
import { StyleSheet } from 'react-native';
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
	return <Text style={styles.currentTemp}>{props.value}</Text>;
}

export function MaxTemperature(props: { value: string }) {
	return <Text style={styles.maxTemp}>{props.value}</Text>;
}

export function MinTemperature(props: { value: string }) {
	return <Text style={styles.minTemp}>{props.value}</Text>;
}

const styles = StyleSheet.create({
	bold: { fontSize: 20, fontWeight: '500' },
	normal: { fontSize: 20 },
	currentTemp: { fontSize: 46, color: '#fff' },
	maxTemp: { fontSize: 20, color: '#eee' },
	minTemp: { fontSize: 20, color: '#ccc' },
});
