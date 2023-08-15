import React from 'react';
import { ViewCircle } from '../base/StyledView';
import { ProfilePicture } from '../base/Themed';

export default function ProfileAvatar({ avatar_url }: { avatar_url: string }) {
	const size = 128;

	return (
		<ViewCircle size={size}>
			<ProfilePicture uri={avatar_url} size={size} />
		</ViewCircle>
	);
}
