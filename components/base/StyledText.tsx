import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from './Themed';

export function NormalText(props: TextProps) {
	return <Text {...props} style={[styles.normal, props.style]} />;
}

export function BoldText(props: TextProps) {
	return <Text {...props} style={[styles.bold, props.style]} />;
}

export const Temperature = {
	Current: function ({ value }: { value: string }) {
		return <Text style={styles.current}>{value}</Text>;
	},
	Max: function ({ value }: { value: string }) {
		return <Text style={styles.max}>{value}</Text>;
	},
	Min: function ({ value }: { value: string }) {
		return <Text style={styles.min}>{value}</Text>;
	},
};

export const GitHub = {
	Name: function ({ name }: { name: string }) {
		return <Text style={styles.name}>{name}</Text>;
	},
	Login: function ({ login }: { login: string }) {
		return <Text style={styles.login}>{login}</Text>;
	},
	Bio: function ({ bio }: { bio: string }) {
		return <Text style={styles.bio}>{bio}</Text>;
	},
};

const styles = StyleSheet.create({
	normal: { fontSize: 18 },
	bold: { fontSize: 18, fontWeight: 'bold' },
	current: { fontSize: 48, color: '#fff' },
	max: { fontSize: 18, color: '#eee' },
	min: { fontSize: 18, color: '#CCC' },
	name: {
		fontSize: 24,
		fontWeight: '600',
		lineHeight: 30,
		color: '#E6EDF3',
	},
	login: {
		fontSize: 22,
		fontWeight: '300',
		lineHeight: 24,
		color: '#7D8590',
	},
	bio: {
		fontSize: 18,
		lineHeight: 24,
		color: '#E6EDF3',
		textAlign: 'justify',
	},
});
