import { mainFont } from "@/libs/font";
import "@/styles/global.css";

export const metadata = {
    title: "Image App",
    description: "Imaginer App Tutorial Description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={mainFont.className}>
            <body className={"layout"}>
                {children}
                <div className="overlay"></div>
            </body>
        </html>
    );
}
