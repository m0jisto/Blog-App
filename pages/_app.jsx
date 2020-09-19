import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import '../styles/global.sass';

/* eslint-disable */
//Требует валидации пропсов

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header/>
			<div className="app">
				<div className="container">
					<Sidebar />
					<main className="main">
						<Component {...pageProps} />
					</main>
				</div>
			</div>
		</>
	)
}

export default MyApp;