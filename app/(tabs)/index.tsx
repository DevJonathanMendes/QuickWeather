import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import Feather from '@expo/vector-icons/Feather';
import { ViewCentralized, ViewFlex } from '../../components/StyledView';
import {
	BoldText,
	CurrentTemperature,
	MaxTemperature,
	MinTemperature,
	NormalText,
} from '../../components/StyledText';
import Week from '../../components/Week';
import { CurrentDay } from '../../components/CurrentDay';

export default function Home() {
	return (
		<ViewFlex>
			<CurrentDay />
			<Week />
		</ViewFlex>
	);
}

const styles = StyleSheet.create({
	currentDay: { flex: 2 },
	week: { flex: 1 },
});
