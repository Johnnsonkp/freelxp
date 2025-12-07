declare module 'react-markdown' {
  import { ReactNode } from 'react';
  
  export interface ReactMarkdownProps {
    children: string;
    className?: string;
    [key: string]: any;
  }
  
  const ReactMarkdown: React.FC<ReactMarkdownProps>;
  export default ReactMarkdown;
}
