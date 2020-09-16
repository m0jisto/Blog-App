import { useRouter } from 'next/router';

import Post from '../../components/post/'
import Author from '../../components/author/'
import Comments from '../../components/comments/'

export const ContextApp = React.createContext();

const PostWrapper = () => {
	const router = useRouter(),
		{ pid } = router.query;

	return (
		<ContextApp.Provider value={pid}>
			<Author />
			<Post />
			<Comments />
		</ContextApp.Provider>
	)
}

export default PostWrapper