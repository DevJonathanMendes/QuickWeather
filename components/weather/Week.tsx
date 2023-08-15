import React from 'react';
import { IconPNG } from '../base/Themed';
import { BoldText, Temperature } from '../base/StyledText';
import {
	ViewEvenly,
	ViewRowFlex,
	ViewFlexCenter,
} from '../../components/base/StyledView';

const daysWeek = [
	{
		day: 'TER',
		condition: 'cloud',
		temperature: {
			max: '22°',
			min: '18°',
		},
	},
	{
		day: 'QUA',
		condition: 'sun',
		temperature: {
			max: '34°',
			min: '20°',
		},
	},
	{
		day: 'QUI',
		condition: 'sun-cloud',
		temperature: {
			max: '30°',
			min: '27°',
		},
	},
	{
		day: 'SEX',
		condition: 'sun-cloud-rain',
		temperature: {
			max: '27°',
			min: '22°',
		},
	},
	{
		day: 'SÁB',
		condition: 'cloud-rain',
		temperature: {
			max: '25°',
			min: '19°',
		},
	},
	{
		day: 'DOM',
		condition: 'cloud',
		temperature: {
			max: '23°',
			min: '17°',
		},
	},
];

type dayProps = {
	day: string;
	condition: string;
	temperature: { max: string; min: string };
};

function Day({ day, condition, temperature }: dayProps) {
	return (
		<ViewEvenly>
			<ViewFlexCenter>
				<BoldText>{day}</BoldText>
			</ViewFlexCenter>
			<ViewFlexCenter>
				<IconPNG image={condition} />
			</ViewFlexCenter>
			<ViewFlexCenter>
				<Temperature.Max value={temperature.max} />
				<Temperature.Min value={temperature.min} />
			</ViewFlexCenter>
		</ViewEvenly>
	);
}

export default function Week() {
	return (
		<ViewRowFlex>
			{daysWeek.map((day, index) => (
				<Day key={index} {...day} />
			))}
		</ViewRowFlex>
	);
}
