import { useRouter } from 'next/router';
import Spinner from '../../components/Spinner'
import BlogService from '../../services/BlogService';

const PostWrapper = () => {
	const router = useRouter();
	const { pid } = router.query;
	const service = new BlogService();
	const author = service.useGetAuthor(pid);
	const post = service.useGetPost(pid);
	const comments = service.useGetComments(pid);


	if (!author || !post || !comments) {
		return <Spinner />
	}

	if (author === 'error' || post === 'error' || comments === 'error') {
		return <h2 className="post__title">Error</h2>
	}

	return (
		<>
			{author}

			{post}

			<h2 className="comments__title">Comments:</h2>
			{comments}
		</>
	)
}

export default PostWrapper;