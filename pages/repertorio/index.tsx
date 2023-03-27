import Layout from '../../components/Layout';
import Head from 'next/head';
import styles from './Repertory.module.css';
import { SocialIcon } from 'react-social-icons';
import AudioPlayer from '../../components/AudioPlayer';

export default function Repertory() {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Repertory">
				<div className={styles.contentWrapper}>
					<div className={styles.sectionTitle}>
						<div className={styles.titleLine}></div>
					</div>

					<div className={styles.wrapper}>
						<h1 className={styles.title}>Repertório</h1>
						<div className={styles.container}>
							<div>
								<p>
									&emsp;Esta seção é dedicada ao repertório musical da Rateria.
									Aqui estamos exibindo produções e adaptações musicais
									elaboradas para apresentações com palco e percussão. Os
									estilos são variados: axé, samba, rock nacional, pagode, pop,
									funk e o que mais você encontrar por aí. É só escolher uma das
									faixas na lista a seguir e descobrir um pouco melhor do que
									nós somos capazes!
								</p>
							</div>
							<iframe
								src="https://open.spotify.com/embed/playlist/1RlGciZaSsb1peK00fskil"
								width="100%"
								height="380"
								frameBorder="0"
								allowTransparency={true}
								allow="encrypted-media"
							></iframe>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
