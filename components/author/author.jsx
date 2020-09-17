import { useContext } from 'react'
import { ContextApp } from '../../pages/posts/[pid]'
import BlogService from '../../services'

const Author = () => {
	const pid = useContext(ContextApp);
	const service = new BlogService();
	const author = service.useGetAuthor(pid);

	if (!author) {
		return <></>
	}

	if (author === 'error') {
		return (
			<h2 className="post__title">Error</h2>
		)
	}

	const { name, email, website, phone } = author

	return (
		<article className="post">
			<h2 className="post__title">{name}</h2>
			<div className="post__body">
				E-mail:
				<a href={`mailto:${email}`}>{email}</a>
			</div>
			<div className="post__body">
				Phone:
				<a href={`tel:+${phone}`}>{phone}</a>
			</div>
			<div className="post__body">
				Website:
				<a href={`http://${website}`}>{website}</a>
			</div>
			<hr />
		</article>
	)
}

export default Author