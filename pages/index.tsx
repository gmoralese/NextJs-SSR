import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          {props.pokemon.map((pokemon: any, index: number) => {
            return <div key={index}><Link href={`/types/${pokemon.name}`}><li key={index}>{pokemon.name}</li></Link><br /></div>;
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/type`
  );
  const data = await res.json();

  return {
    props: {
      pokemon: data.results,
    }, // will be passed to the page component as props
  };
}
