import { useRouter } from 'next/router';
import Post from '../../components/post/Post';
import Author from '../../components/author/Author';
import Comments from '../../components/comments/Comments';

/* eslint-disable */

export const ContextApp = React.createContext();

/* eslint-enable */

const PostWrapper = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<ContextApp.Provider value={pid}>
			<Author />
			<Post />
			<Comments />
		</ContextApp.Provider>
	)
}

export default PostWrapper;