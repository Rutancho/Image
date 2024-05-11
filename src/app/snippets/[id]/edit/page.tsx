import { db }  from '@/app/db';
import {notFound} from 'next/navigation';
import SnippetEdiForm from '@/components/snippet-edit-form';


interface SnippetEditPageProps{
    params:{
        id: string
        //code: string
    }
}

export default async function SnippetEdit(props: SnippetEditPageProps){
const id =  parseInt(props.params.id);
const snippet = await db.snippet.findFirst({
    where: {id}
});

if(!snippet)
    {
        return notFound();
    }

    return ( <div>
       <SnippetEdiForm snippet = {snippet} />
    </div>

);
} 
