"use client";
import { useState } from "react";
// import { useHomepage } from "../use-homepage";
import styles from "./styles.module.scss";

const PropmptForm = () => {
    // const { isSubmitting, generateImage, prompt, setPrompt } = useHomepage();
    const [prompt, setPrompt] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        generateImage();
    };

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };
    return (
        <div className={styles.promptForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea
                    className={styles.promptTextarea}
                    rows={2}
                    type={"text"}
                    required
                    placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
                    value={prompt}
                    onChange={handleChange}
                />
                <button
                    className={styles.generateButton}
                    type="submit"
                    // disabled={isSubmitting}
                >
                    Generate
                </button>
            </form>
        </div>
    );
};
export { PropmptForm };
