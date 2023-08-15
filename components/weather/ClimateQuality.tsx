import React from 'react';
import { Icon } from '../base/Themed';
import { NormalText } from '../base/StyledText';
import Feather from '@expo/vector-icons/Feather';
import { ViewCircle, ViewRowAround } from '../base/StyledView';

type InfoProps = {
	name: React.ComponentProps<typeof Feather>['name'];
	value: string;
};

function Info(props: InfoProps) {
	return (
		<ViewCircle size={74}>
			<Icon name={props.name} />
			<NormalText style={{ fontSize: 14 }}>{props.value}</NormalText>
		</ViewCircle>
	);
}

export default function ClimateQuality() {
	return (
		<ViewRowAround style={{ marginVertical: 8 }}>
			<Info name='thermometer' value='60%' />
			<Info name='droplet' value='0 mm' />
			<Info name='wind' value='12 km/h' />
		</ViewRowAround>
	);
}
