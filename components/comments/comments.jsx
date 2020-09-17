import { useContext } from 'react';
import { ContextApp } from '../../pages/posts/[pid]';
import BlogService from '../../services';

const Comments = () => {
	const pid = useContext(ContextApp);
	const service = new BlogService();
	const comments = service.useGetComments(pid)

	if (!comments) {
		return <></>
	}

	if (comments === 'error' || comments.length === 0) {
		return (
			<h2 className="post__title">Error</h2>
		)
	}

	return (
		<>
			<h2 className="comments__title">Comments:</h2>
			{comments}
		</>
	)
}

export default Comments