import { ImageSourcePropType } from 'react-native';

const weatherIcons: { [key: string]: ImageSourcePropType } = {
	'cloud-rain': require('../assets/images/weather/cloud-rain.png'),
	'cloud': require('../assets/images/weather/cloud.png'),
	'sun-cloud-rain': require('../assets/images/weather/sun-cloud-rain.png'),
	'sun-cloud': require('../assets/images/weather/sun-cloud.png'),
	'sun': require('../assets/images/weather/sun.png'),
};

export default weatherIcons;
