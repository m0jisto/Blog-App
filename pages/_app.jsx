import Head from 'next/head';
import Link from 'next/link';

import '../styles/global.sass';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>BLog App</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
			</Head>

			<div className="app">
				<div className="container">

					<div className="sidebar">
						<div className="sidebar__wrapper">
							<h1 className="sidebar__title">My personal blog</h1>
							<div className="sidebar__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien sagittis nec.</div>
							<hr />

							<Link href="/">
								<button className="sidebar__link" type="button">Home</button>
							</Link>
							<Link href="/about">
								<button className="sidebar__link" type="button">About</button>
							</Link>

							<hr />

							<img src="/icon/FacebookIcon.png" className="sidebar__img" alt="" />
							<img src="/icon/InstagramIcon.png" className="sidebar__img" alt="" />
							<img src="/icon/GithubIcon.png" className="sidebar__img" alt="" />
							<img src="/icon/TwitterIcon.png" className="sidebar__img" alt="" />
						</div>
					</div>

					<main className="main">
						<div className="main__wrapper">
							<Component {...pageProps} />
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default MyApp;