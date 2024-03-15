"use client";
import { Tag } from "@/components/tag";
import { SUGGESTIONS } from "./contants";

import styles from "./styles.module.scss";

function PromptSuggestions() {
    return (
        <div className={styles.promptSuggestions}>
            <h3 className={styles.title}>
                Nothing in mind? Try one of these prompts:
            </h3>
            <div className={styles.suggestions}>
                {SUGGESTIONS.map(({ title, id }) => (
                    <Tag key={id} title={title} />
                ))}
            </div>
        </div>
    );
}

export { PromptSuggestions };
