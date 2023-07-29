import React from 'react';
import Colors from '../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import {
	View as DefaultView,
	Text as DefaultText,
	Image,
	StyleProp,
	TextStyle,
	useColorScheme,
	OpaqueColorValue,
} from 'react-native';

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type IconProps = {
	name: React.ComponentProps<typeof Feather>['name'];
	color?: OpaqueColorValue;
	size?: 16 | 24 | 25 | 32 | 48 | 64 | 128 | 256;
	style?: StyleProp<TextStyle>;
};

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
	const theme = useColorScheme() ?? 'light';
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return Colors[theme][colorName];
	}
}

export function View(props: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		'background'
	);

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Text(props: TextProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

	return (
		<DefaultText
			style={[
				{ color, textShadowColor: '#000000AF', textShadowRadius: 4 },
				style,
			]}
			{...otherProps}
		/>
	);
}

export function Icon(props: IconProps) {
	return <Feather size={24} color='#fff' {...props} />;
}

export function IconPNG(props: { image: string; size?: number }) {
	const size = props.size ?? 48;
	return (
		<Image
			source={{ uri: `assets/images/weather/${props.image}.png` }}
			style={{ width: size, height: size }}
		/>
	);
}