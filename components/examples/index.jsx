"use client";
import { Tag } from "@/components/tag";
import Image from "next/image";
import { EXAMPLES } from "./constants";
import styles from "./styles.module.scss";

function Examples() {
    // const { copyPrompt } = useHomepage();

    const handleCopy = () => {};

    return (
        <div className={styles.examples}>
            {EXAMPLES.map((example) => (
                <div className={styles.example} key={example.id}>
                    <h4>{example.prompt}</h4>
                    <Tag
                        className={styles.copyButton}
                        title="Copy"
                        onClick={() => onClick(handleCopy)}
                    />
                    <Image src={example.image} alt={example.prompt} fill />
                </div>
            ))}
        </div>
    );
}

export { Examples };
