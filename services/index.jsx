import { useState, useEffect } from 'react'
import Link from 'next/link'

export default class BlogService {
    _apiBase = 'https://jsonplaceholder.typicode.com'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    useGetPosts = (min, max) => {
        const [posts, updatePosts] = useState(null);

        useEffect(() => {
            this.getResource('/posts')
                .then(data => updatePosts(this._transformPosts(data.filter((item, i) => i >= min && i <= max))))
                .catch(() => updatePosts('error'))

        }, [min, max])

        return posts;
    }

    useGetPost = (id) => {
        const [post, updatePost] = useState(null);

        useEffect(() => {
            if (id) {
                this.getResource(`/posts/${id}`)
                    .then(data => updatePost(data))
                    .catch(() => updatePost('error'))
            }

        }, [id])

        return post
    }

    useGetAuthor = (id) => {
        const [author, updateAuthor] = useState(null);

        useEffect(() => {
            if (id) {
                this.getResource(`/posts/${id}`)
                    .then(data => {
                        this.getResource(`/users/${data.userId}`)
                            .then(data => updateAuthor(data))
                            .catch(() => updateAuthor('error'))
                    })
                    .catch(() => updateAuthor('error'))
            }

        }, [id])

        return author
    }

    useGetComments = (id) => {
        const [comments, updateComments] = useState(null);

        useEffect(() => {
            this.getResource(`/posts/${id}/comments`)
                .then(data => updateComments(this._transformComments(data)))
                .catch(() => updateComments('error'))

        }, [id])

        return comments;
    }

    _transformPosts = (item) => {
        item.length === 0 ? item = 'error' : item

        if (item && item !== 'error') {
            return item.map(item => {
                let { id, title, body } = item;

                title = title[0].toUpperCase() + title.slice(1);
                body = body[0].toUpperCase() + body.slice(1);

                return (
                    <article className="post" key={id}>
                        <h2 className="post__title">{title}</h2>
                        <div className="post__info">MARCH 2, 2016 | TRAVEL</div>
                        <div className="post__body">{body}</div>
                        <Link href={`/posts/${id}`}>
                            <button className="post__btn">Continue reading</button>
                        </Link>
                        <hr />
                    </article>
                )
            })
        } else {
            return item
        }
    }

    _transformComments = (item) => {
        item.length === 0 ? item = 'error' : item

        if (item && item !== 'error') {
            return item.map(item => {
                let { id, name, body } = item;

                name = name[0].toUpperCase() + name.slice(1)
                body = body[0].toUpperCase() + body.slice(1)

                return (
                    <article className="comments" key={id}>
                        <h2 className="comments__subtitle">{name}</h2>
                        <div className="comments__body">{body}</div>
                    </article>
                )
            })
        } else {
            return item
        }
    }
}