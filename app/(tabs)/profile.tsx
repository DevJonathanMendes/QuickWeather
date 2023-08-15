import getUser from '../../services/getUser';
import ProfileBio from '../../components/profile/Bio';
import { View, ActivityIndicator } from 'react-native';
import ProfileNames from '../../components/profile/Names';
import ProfileAvatar from '../../components/profile/Avatar';
import React, { useEffect, useState } from 'react';
import { NormalText } from '../../components/base/StyledText';
import {
	ViewFlex,
	ViewCenter,
	ViewFlexCenter,
} from '../../components/base/StyledView';

type GitHubUser = {
	avatar_url: string;
	name: string;
	login: string;
	bio: string;
};

export default function Profile() {
	const [isLoading, setLoading] = useState(true);
	const [user, setUser] = useState<GitHubUser>();

	useEffect(() => {
		getUser()
			.then((json) => setUser(json))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	if (isLoading) {
		return (
			<ViewFlexCenter>
				<ActivityIndicator />
			</ViewFlexCenter>
		);
	}

	return user ? (
		<ViewFlex style={{ padding: 24, backgroundColor: '#0D1117' }}>
			<ViewCenter>
				<ProfileAvatar {...user} />
			</ViewCenter>
			<View>
				<ProfileNames {...user} />
				<ProfileBio {...user} />
			</View>
		</ViewFlex>
	) : (
		<ViewFlexCenter>
			<NormalText>{'Perfil não encontrado :('}</NormalText>
		</ViewFlexCenter>
	);
}
