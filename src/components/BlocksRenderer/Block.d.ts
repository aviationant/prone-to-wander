import { type Node } from './BlocksRenderer';
interface BlockProps {
    content: Node;
}
declare const Block: ({ content }: BlockProps) => import("react/jsx-runtime").JSX.Element | null;
export { Block };
