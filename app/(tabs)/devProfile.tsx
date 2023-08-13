import React, { useEffect, useState } from 'react';
import { NormalText } from '../../components/base/StyledText';
import { ProfilePicture } from '../../components/base/Themed';
import {
	View,
	Image,
	Dimensions,
	ActivityIndicator,
	StyleSheet,
} from 'react-native';
import {
	ViewCenter,
	ViewCircle,
	ViewFlex,
	ViewFlexCenter,
} from '../../components/base/StyledView';

type GitHubUser = {
	name: string;
	login: string;
	bio: string;
	avatar_url: string;
};

export default function DevProfile() {
	const [isLoading, setLoading] = useState(true);
	const [user, setUser] = useState<GitHubUser>();
	const userImageSize = 64 * 2;

	useEffect(() => {
		fetch('http://api.github.com/users/DevJonathanMendes')
			.then((res) => {
				if (res.status == 200) return res.json();
			})
			.then((json) => setUser(json))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	return isLoading ? (
		<ViewFlexCenter>
			<ActivityIndicator />
		</ViewFlexCenter>
	) : user ? (
		<ViewFlex style={{ padding: 24, backgroundColor: '#0D1117' }}>
			<ViewCenter>
				<ViewCircle size={userImageSize}>
					<ProfilePicture uri={user.avatar_url} size={userImageSize} />
				</ViewCircle>
			</ViewCenter>
			<View>
				<View style={{ paddingVertical: 16 }}>
					<NormalText style={styles.name}>{user.name}</NormalText>
					<NormalText style={styles.login}>{user.login}</NormalText>
				</View>
				<View>
					<NormalText style={styles.bio}>{user.bio}</NormalText>
				</View>
				<ViewCenter>
					<Image
						style={{
							width: Dimensions.get('window').width - 44,
							height: Dimensions.get('window').width / 2,
							resizeMode: 'contain',
						}}
						source={{
							uri: 'https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=devjonathanmendes&show_icons=true&theme=dark&text_color=ffffff&locale=en&layout=compact',
						}}
					/>
				</ViewCenter>
			</View>
		</ViewFlex>
	) : (
		<ViewFlexCenter style={{ padding: 24, backgroundColor: '#0D1117' }}>
			<NormalText>{'Perfil não encontrado :('}</NormalText>
		</ViewFlexCenter>
	);
}

const styles = StyleSheet.create({
	name: {
		fontSize: 24,
		fontWeight: '600',
		lineHeight: 30,
		color: '#E6EDF3',
	},
	login: {
		fontSize: 20,
		fontWeight: '300',
		lineHeight: 24,
		color: '#7D8590',
	},
	bio: {
		textAlign: 'justify',
		fontSize: 16,
		lineHeight: 24,
		color: '#E6EDF3',
	},
});
