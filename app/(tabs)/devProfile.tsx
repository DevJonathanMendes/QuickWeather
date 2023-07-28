import React from 'react';
import { ViewFlexCenter } from '../../components/base/StyledView';
import { BoldText, NormalText } from '../../components/base/StyledText';

export default function DevProfile() {
	return (
		<ViewFlexCenter>
			<BoldText>Meu Perfil</BoldText>
			<NormalText>Apresentação</NormalText>
		</ViewFlexCenter>
	);
}
