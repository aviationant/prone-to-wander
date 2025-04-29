export interface AboutData {
    id: number;
    aboutTitle: string;
    aboutContent: string;
    coverImg: {
        url: string;
    }[];
}
declare const AboutMe: () => import("react/jsx-runtime").JSX.Element | undefined;
export default AboutMe;
