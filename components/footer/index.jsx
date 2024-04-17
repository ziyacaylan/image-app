import { GithubIcon } from "@/assets/icons/github";
import { TwitterIcon } from "@/assets/icons/twitter";
import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="https://github.com/ziyacaylan" target="_blank">
                <GithubIcon />
            </Link>
            <Link href="https://twitter.com/zii_cyln" target="_blank">
                <TwitterIcon />
            </Link>
            <p>
                Made by <b>Ziya ÇAYLAN</b>
                <br />
                and, built with <b>Next.js</b>
            </p>
        </footer>
    );
};

export { Footer };
