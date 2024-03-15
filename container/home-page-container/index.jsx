import { PromptSuggestions } from "@/container/home-page-container/prompt-suggestions";
import styles from "./styles.module.scss";

import { Examples } from "@/components/examples";
import { PropmptForm } from "@/container/home-page-container/propmt-form";
const HomePageContainer = () => {
    return (
        <div className={styles.homePageContainer}>
            <h1 className={styles.title}>
                You just imagine,
                <br />
                we handle the rest
            </h1>
            <p className={styles.description}>
                Tell us a prompt and we&apos;ll generate a story for you.
            </p>
            <PropmptForm />
            <PromptSuggestions />
            <Examples />
        </div>
    );
};
export { HomePageContainer };
