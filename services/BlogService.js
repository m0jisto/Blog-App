import { useState, useEffect } from 'react';
import { getResource, transformPosts, transformAuthor, transformPost, transformComments} from './utils';

export default class BlogService {

	useGetPosts = (min, max) => {
		const [posts, updatePosts] = useState(null);

		useEffect(() => {
			getResource('/posts')
				.then(data => updatePosts(transformPosts(data.filter((item, i) => i >= min && i <= max))))
				.catch(() => updatePosts('error'))

		}, [min, max])

		return posts;
	}

	useGetPost = (id) => {
		const [post, updatePost] = useState(null);

		useEffect(() => {
			if (id) {
				getResource(`/posts/${id}`)
					.then(data => updatePost(transformPost(data)))
					.catch(() => updatePost('error'))
			}

		}, [id])

		return post;
	}

	useGetAuthor = (id) => {
		const [author, updateAuthor] = useState(null);

		useEffect(() => {
			if (id) {
				getResource(`/posts/${id}`)
					.then(data => {
						getResource(`/users/${data.userId}`)
							.then(item => updateAuthor(transformAuthor(item)))
							.catch(() => updateAuthor('error'))
					})
					.catch(() => updateAuthor('error'))
			}

		}, [id])

		return author;
	}

	useGetComments = (id) => {
		const [comments, updateComments] = useState(null);

		useEffect(() => {
			getResource(`/posts/${id}/comments`)
				.then(data => updateComments(transformComments(data)))
				.catch(() => updateComments('error'))

		}, [id])

		return comments;
	}
}
