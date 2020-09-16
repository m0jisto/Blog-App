import { useContext } from 'react'
import { ContextApp } from '../../pages/posts/[pid]'
import BlogService from '../../services'

const Post = () => {
    const pid = useContext(ContextApp),
        service = new BlogService(),
        post = service.useGetPost(pid)

    if (!post) {
        return <></>
    }

    if (post === 'error') {
        return (
            <h2 className="post__title">Error</h2>
        )
    }

    let { id, title, body } = post;

    title = title[0].toUpperCase() + title.slice(1);
    body = body[0].toUpperCase() + body.slice(1)

    return (
        <article className="post" key={id}>
            <h2 className="post__title tac">{title}</h2>
            <div className="post__info tac">MARCH 2, 2016 | TRAVEL</div>
            <div className="post__body tac">{body}</div>
            <hr />
        </article>
    )
}

export default Post