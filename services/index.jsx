import { useState, useEffect } from 'react';
import Link from 'next/link';

export default class BlogService {

	getResource = async (url) => {
		const res = await fetch(`https://jsonplaceholder.typicode.com${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return res.json();
	}

	useGetPosts = (min, max) => {
		const [posts, updatePosts] = useState(null);

		useEffect(() => {
			this.getResource('/posts')
				.then(data => updatePosts(this.transformPosts(data.filter((item, i) => i >= min && i <= max))))
				.catch(() => updatePosts('error'))

		}, [min, max])

		return posts;
	}

	useGetPost = (id) => {
		const [post, updatePost] = useState(null);

		useEffect(() => {
			if (id) {
				this.getResource(`/posts/${id}`)
					.then(data => updatePost(data))
					.catch(() => updatePost('error'))
			}

		}, [id])

		return post
	}

	useGetAuthor = (id) => {
		const [author, updateAuthor] = useState(null);

		useEffect(() => {
			if (id) {
				this.getResource(`/posts/${id}`)
					.then(data => {
						this.getResource(`/users/${data.userId}`)
							.then(item => updateAuthor(item))
							.catch(() => updateAuthor('error'))
					})
					.catch(() => updateAuthor('error'))
			}

		}, [id])

		return author
	}

	useGetComments = (id) => {
		const [comments, updateComments] = useState(null);

		useEffect(() => {
			this.getResource(`/posts/${id}/comments`)
				.then(data => updateComments(this.transformComments(data)))
				.catch(() => updateComments('error'))

		}, [id])

		return comments;
	}

	transformPosts = (item) => {
		if (item && item !== 'error') {
			return item.map(elem => {
				const { id, title, body } = elem;

				return (
					<article className="post" key={id}>
						<h2 className="post__title">{title[0].toUpperCase() + title.slice(1)}</h2>
						<div className="post__info">MARCH 2, 2016 | TRAVEL</div>
						<div className="post__body">{body[0].toUpperCase() + body.slice(1)}</div>
						<Link href={`/posts/${id}`}>
							<button className="post__btn" type="button">Continue reading</button>
						</Link>
						<hr />
					</article>
				)
			})
		}

		return item
	}

	transformComments = (item) => {
		if (item && item !== 'error') {
			return item.map(elem => {
				const { id, name, body } = elem;

				return (
					<article className="comments" key={id}>
						<h2 className="comments__subtitle">{name[0].toUpperCase() + name.slice(1)}</h2>
						<div className="comments__body">{body[0].toUpperCase() + body.slice(1)}</div>
					</article>
				)
			})
		}

		return item
	}
}