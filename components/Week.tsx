import React from 'react';
import { Icon } from './base/Themed';
import Feather from '@expo/vector-icons/Feather';
import { BoldText, MinTemperature, MaxTemperature } from './base/StyledText';
import {
	ViewCenter,
	ViewEvenly,
	ViewRowFlex,
} from '../components/base/StyledView';

const daysWeek = [
	{
		day: 'TER',
		condition: 'sun',
		temperature: {
			max: '38°',
			min: '32°',
		},
	},
	{
		day: 'QUA',
		condition: 'cloud',
		temperature: {
			max: '30°',
			min: '26°',
		},
	},
	{
		day: 'QUI',
		condition: 'cloud-snow',
		temperature: {
			max: '14°',
			min: '8°',
		},
	},
	{
		day: 'SEX',
		condition: 'cloud-rain',
		temperature: {
			max: '26°',
			min: '20°',
		},
	},
	{
		day: 'SÁB',
		condition: 'cloud-drizzle',
		temperature: {
			max: '25°',
			min: '19°',
		},
	},
	{
		day: 'DOM',
		condition: 'cloud-lightning',
		temperature: {
			max: '23°',
			min: '17°',
		},
	},
];

function Day(props: {
	day: string;
	condition: React.ComponentProps<typeof Feather>['name'];
	maxValue: string;
	minValue: string;
}) {
	return (
		<ViewEvenly>
			<BoldText>{props.day}</BoldText>
			<Icon name={props.condition} size={24} />
			<ViewCenter>
				<MaxTemperature value={props.maxValue} />
				<MinTemperature value={props.minValue} />
			</ViewCenter>
		</ViewEvenly>
	);
}

export default function Week() {
	return (
		<ViewRowFlex>
			{daysWeek.map(({ day, condition, temperature }, index) => {
				return (
					<Day
						key={index}
						day={day}
						condition={condition}
						maxValue={temperature.max}
						minValue={temperature.min}
					/>
				);
			})}
		</ViewRowFlex>
	);
}
