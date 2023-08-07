import React from 'react';
import Week from '../../components/Week';
import DayUpdated from '../../components/DayUpdated';
import { CurrentDay } from '../../components/CurrentDay';
import ClimateQuality from '../../components/ClimateQuality';
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
