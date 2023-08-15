const URL = 'http://api.github.com/users/DevJonathanMendes';

export default async function getUser() {
	const res = await fetch(URL);

	if (res.status == 200)
		return res.json();
}
