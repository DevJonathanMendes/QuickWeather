import React from 'react';
import { ViewFlex } from '../../components/base/StyledView';
import Week from '../../components/Week';
import { CurrentDay } from '../../components/CurrentDay';
import ClimateQuality from '../../components/ClimateQuality';

export default function Home() {
	return (
		<ViewFlex>
			<ViewFlex>
				<CurrentDay />
			</ViewFlex>

			<ViewFlex>
				<Week />
				<ClimateQuality />
			</ViewFlex>
		</ViewFlex>
	);
}
