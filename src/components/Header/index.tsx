/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logoErick.png";

export const Header = () => {
  return (
    <nav className={styles.container}>
      {/* <div>
        <Image src={logo} alt="logo" width={200} height={40} />
      </div> */}

      <ul className={styles.content}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Contatos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
