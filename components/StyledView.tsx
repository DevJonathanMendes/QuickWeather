import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ViewProps } from './Themed';

export function ViewFlex(props: ViewProps) {
	return <View {...props} style={[props.style, { flex: 1 }]} />;
}

const styles = StyleSheet.create({});
