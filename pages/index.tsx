import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Stuy WLC</title>
				<meta
					name="description"
					content="Stuyvesant Weightlifting club"
				/>
			</Head>

			<main id={styles.main}>
				<h1 className={styles.title}>Stuyvesant Weightlifting Club</h1>
				<div id={styles.social_media_links}>
					<p>
						Join us on&nbsp;
						<a href="https://stuyactivities.org/stuywlc">
							StuyActivities
						</a>
					</p>
					<p>
						Fill out our&nbsp;
						<a href="https://forms.gle/rXkeNAUQxNJTbZJK6">
							Interest Form
						</a>
					</p>
					<p>
						Take a look at the&nbsp;
						<a href="https://docs.google.com/document/d/10uNOTJSbDxd0RMBXnJfBv84a4d5IFZwnDJd-WdruwwQ/edit?usp=sharing">
							Exercises + Workout Split document
						</a>
					</p>
					<p>
						Email us at&nbsp;
						<a href="mailto:stuywlc@gmail.com">stuywlc@gmail.com</a>
					</p>
					<p>
						Join our discord server&nbsp;
						<a href="https://discord.gg/rJQxs6UW67">
							discord.gg/rJQxs6UW67
						</a>
					</p>
					<p>
						Follow @
						<a href="https://www.instagram.com/stuywlc/">stuywlc</a>
						&nbsp;on instagram
					</p>
				</div>
			</main>
		</div>
	);
};

export default Home;
