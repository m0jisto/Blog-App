import Link from 'next/link';

const urlBase = 'https://jsonplaceholder.typicode.com'

function firstLettersUp (str) {
	return `${str[0].toUpperCase()}${str.slice(1)}`
}

export const getResource = async (url) => {
	const res = await fetch(`${urlBase}${url}`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
	}

	return res.json();
}

export const transformPosts = (item) => {
	if (item && item !== 'error') {
		return item.map(elem => {
			const { id, title, body } = elem;

			return (
				<article className="post" key={id}>
					<h2 className="post__title">{`${firstLettersUp(title)}`}</h2>
					<div className="post__info">MARCH 2, 2016 | TRAVEL</div>
					<div className="post__body">{`${firstLettersUp(body)}`}</div>
					<Link href={`/posts/${id}`}>
						<button className="post__btn" type="button">Continue reading</button>
					</Link>
					<hr />
				</article>
			)
		})
	}

	return item;
}

export const transformAuthor = (item) => {
	if (item && item !== 'error') {
		const { name, email, website, phone } = item;

		return (
			<article className="post">
				<h2 className="post__title">{name}</h2>
				<div className="post__body">
					E-mail:&nbsp;
					<a href={`mailto:${email}`}>{email}</a>
				</div>
				<div className="post__body">
					Phone:&nbsp;
					<a href={`tel:+${phone}`}>{phone}</a>
				</div>
				<div className="post__body">
					Website:&nbsp;
					<a href={`http://${website}`}>{website}</a>
				</div>
				<hr />
			</article>
		)
	}

	return item;
}

export const transformPost = (item) => {
	if (item && item !== 'error') {
		const { id, title, body } = item;

		return (
			<article className="post" key={id}>
				<h2 className="post__title tac">{`${firstLettersUp(title)}`}</h2>
				<div className="post__info tac">MARCH 2, 2016 | TRAVEL</div>
				<div className="post__body tac">{`${firstLettersUp(body)}`}</div>
				<hr />
			</article>
		)
	}

	return item;
}

export const transformComments = (item) => {
	if (item && item !== 'error') {
		return item.map(elem => {
			const { id, name, body } = elem;

			return (
				<article className="comments" key={id}>
					<h2 className="comments__subtitle">{`${firstLettersUp(name)}`}</h2>
					<div className="comments__body">{`${firstLettersUp(body)}`}</div>
				</article>
			)
		})
	}

	return item;
}