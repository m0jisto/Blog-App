import { useContext } from 'react';
import { ContextApp } from '../pages/posts/[pid]';
import BlogService from '../services/BlogService';

const Post = () => {
	const pid = useContext(ContextApp);
	const service = new BlogService();
	const post = service.useGetPost(pid);

	if (!post) {
		return <></>
	}

	if (post === 'error') {
		return (
			<h2 className="post__title">Error</h2>
		)
	}

	const { id, title, body } = post;
	
	return (
		<article className="post" key={id}>
			<h2 className="post__title tac">{`${title[0].toUpperCase()}${title.slice(1)}`}</h2>
			<div className="post__info tac">MARCH 2, 2016 | TRAVEL</div>
			<div className="post__body tac">{`${body[0].toUpperCase()}${body.slice(1)}`}</div>
			<hr />
		</article>
	)
}

export default Post;