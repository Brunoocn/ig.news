import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Visões inovadoras do código livre e do open source no
              desenvolvimento da internet
            </strong>
            <p>
              Iniciativas de código aberto e softwares livres foram responsáveis
              em moldar o principal meio de comunicação moderno
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Visões inovadoras do código livre e do open source no
              desenvolvimento da internet
            </strong>
            <p>
              Iniciativas de código aberto e softwares livres foram responsáveis
              em moldar o principal meio de comunicação moderno
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Visões inovadoras do código livre e do open source no
              desenvolvimento da internet
            </strong>
            <p>
              Iniciativas de código aberto e softwares livres foram responsáveis
              em moldar o principal meio de comunicação moderno
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
