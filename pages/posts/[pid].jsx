import { useRouter } from 'next/router';
import Post from '../../components/post';
import Author from '../../components/author';
import Comments from '../../components/comments';

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

export default PostWrapper