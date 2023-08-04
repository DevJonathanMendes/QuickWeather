import React from 'react';
import { IconPNG } from './base/Themed';
import { BoldText, MinTemperature, MaxTemperature } from './base/StyledText';
import {
	ViewEvenly,
	ViewFlexCenter,
	ViewRowFlex,
} from '../components/base/StyledView';

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
	maxValue: string;
	minValue: string;
};

function Day(props: dayProps) {
	return (
		<ViewEvenly>
			<ViewFlexCenter>
				<BoldText>{props.day}</BoldText>
			</ViewFlexCenter>
			<ViewFlexCenter>
				<IconPNG image={props.condition} />
			</ViewFlexCenter>
			<ViewFlexCenter>
				<MaxTemperature value={props.maxValue} />
				<MinTemperature value={props.minValue} />
			</ViewFlexCenter>
		</ViewEvenly>
	);
}

export default function Week() {
	return (
		<ViewRowFlex>
			{daysWeek.map((dayWeek, index) => {
				const { day, condition, temperature } = dayWeek;

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
