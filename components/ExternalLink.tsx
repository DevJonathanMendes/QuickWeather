import React from 'react';
import { Platform } from 'react-native';
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

export function ExternalLink(props: React.ComponentProps<typeof Link>) {
	return (
		<Link
			hrefAttrs={{
				// On web, launch the link in a new tab.
				target: '_blank',
			}}
			{...props}
			onPress={(e) => {
				if (Platform.OS !== 'web') {
					e.preventDefault();
					// eslint-disable-next-line react/prop-types
					WebBrowser.openBrowserAsync(props.href as string);
				}
			}}
		/>
	);
}
