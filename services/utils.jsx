import Link from 'next/link';

const urlBase = 'https://jsonplaceholder.typicode.com'

export const getResource = async (url) => {
    const res = await fetch(`${urlBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
}

export const transformPosts = (item) => {
    if (item && item !== 'error') {
        return item.map(elem => {
            const { id, title, body } = elem;

            return (
                <article className="post" key={id}>
                    <h2 className="post__title">{`${title[0].toUpperCase()}${title.slice(1)}`}</h2>
                    <div className="post__info">MARCH 2, 2016 | TRAVEL</div>
                    <div className="post__body">{`${body[0].toUpperCase()}${body.slice(1)}`}</div>
                    <Link href={`/posts/${id}`}>
                        <button className="post__btn" type="button">Continue reading</button>
                    </Link>
                    <hr />
                </article>
            )
        })
    }

    return item;
}

export const transformComments = (item) => {
    if (item && item !== 'error') {
        return item.map(elem => {
            const { id, name, body } = elem;

            return (
                <article className="comments" key={id}>
                    <h2 className="comments__subtitle">{`${name[0].toUpperCase()}${name.slice(1)}`}</h2>
                    <div className="comments__body">{`${body[0].toUpperCase()}${body.slice(1)}`}</div>
                </article>
            )
        })
    }

    return item;
}