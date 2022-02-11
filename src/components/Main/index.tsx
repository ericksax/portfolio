import styles from "./styles.module.scss";
import Image from "next/image";

export const Main = () => {
  return (
    <main className={styles.container}>
      <header>
        <h1>Projetos</h1>
      </header>
      <section className={styles.content}>
        <aside>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </p>
        </aside>
        <Image
          src="https://github.com/ericksax.png"
          alt="erick"
          width={500}
          height={500}
          className={styles.images}
        />
      </section>
      <section className={styles.content}>
        <Image
          src="https://github.com/ericksax.png"
          alt="erick"
          width={500}
          height={500}
          className={styles.images}
        />
        <aside>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </p>
        </aside>
      </section>
      <section className={styles.content}>
        <aside>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </p>
        </aside>
        <Image
          src="https://github.com/ericksax.png"
          alt="erick"
          width={500}
          height={500}
          className={styles.images}
        />
      </section>
    </main>
  );
};
