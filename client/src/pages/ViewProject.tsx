import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import api from '@/configs/axios.ts';
import { Loader2Icon } from 'lucide-react';
import ProjectPreview from '../components/ProjectPreview.tsx';
import type { Project } from '../types/index.ts';
import { toast } from 'sonner';

const ViewProject = () => {

  const {projectId} = useParams();
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchCode = async() => {

   try{ 
    const {data} = await api.get(`/project/published/${projectId}`)
    setCode(data.code)
    setLoading(false)
  
  }catch(error:any){

      toast.error(error?.response?.data?.message || error.message)
      console.log(error)
  }

  }

  useEffect(()=> {
  
      fetchCode()
  }, [])

  if(loading){
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader2Icon className='size-7 animate-spin text-indigo-200'/>
      </div>
    )
  }

  return (
    <div>
      {code && <ProjectPreview project={{current_code: code} as Project} 
      isGenerating={false} showEditorPanel={false}/>}

    </div>
  )
}

export default ViewProject