import Link from 'next/link';
import {db} from '@/app/db';

export const dynamic = 'force-dynamic'; // 이러면 dynamic으로 바뀐 다/.

export default async function Home() {
  const snippet = await db.snippet.findMany();


  const renderedSnippets = snippet.map((snippet) =>{
  return (
    <Link key = {snippet.id} 
    href ={`/snippets/${snippet.id}`}
    className = "flex justify-between items-center p-2 border rounded">
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  );
})

return <div>
  <div>
    <div className = "flex m-2 justify-between items-center">
    <h1 className="text-xl font-bold">Snippets</h1>
    <Link href ="/snippets/new" className = "border p-2 rounded">NEW</Link>
  </div>
  <div className="flex flex-col gap-2">{renderedSnippets}</div>
  </div>
  </div>
}