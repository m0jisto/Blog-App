import { useState } from 'react';
import BlogService from '../services';

export default function Home() {
	const [min, updateMin] = useState(0);
	const [max, updtaemax] = useState(9);
	const service = new BlogService();
	const posts = service.useGetPosts(min, max);

	if (!posts) {
		return <></>
	}

	if (posts === 'error' || posts.length === 0) {
		return (
			<>
				<h2 className="post__title">Error</h2>
			</>
		)
	}

	const onClickBtn = () => {
		if (min !== 90 && max !== 99) {
			updateMin(min + 10);
			updtaemax(max + 10);
		} else {
			updateMin(0)
			updtaemax(9)
		}

		let start = document.documentElement.scrollHeight

		const timer = setInterval(() => {
			start -= 20

			if (start <= 0) {
				clearInterval(timer);
				return;
			}

			window.scrollTo(0, start)
		}, 5);
	}

	return (
		<>
			{posts}
			<button onClick={onClickBtn} className="post__btn post__btn-more" type="button">More Posts</button>
		</>
	)
}
