import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {" "}
        <title>The Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h3 className="text-red-500">Work in Progress :)</h3>
        <Image
          src="/hello-dog.svg"
          alt="A corgi gently sleeping"
          width={354}
          height={209}
        />

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
