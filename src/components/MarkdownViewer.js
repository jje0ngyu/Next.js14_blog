import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({content}){
  return <ReactMarkDown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>{content}</ReactMarkDown>
}