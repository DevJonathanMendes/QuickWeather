import React from 'react';
import Week from '../../components/weather/Week';
import DayUpdated from '../../components/weather/DayUpdated';
import { CurrentDay } from '../../components/weather/CurrentDay';
import ClimateQuality from '../../components/weather/ClimateQuality';
import { ViewFlex, ViewFlexCenter } from '../../components/base/StyledView';

export default function Home() {
	return (
		<ViewFlex darkColor='#016FC1'>
			<ViewFlexCenter>
				<CurrentDay />
			</ViewFlexCenter>

			<ViewFlex darkColor='#014A7F'>
				<Week />
				<ClimateQuality />
				<DayUpdated />
			</ViewFlex>
		</ViewFlex>
	);
}
