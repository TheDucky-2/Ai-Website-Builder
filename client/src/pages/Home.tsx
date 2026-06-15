import { authClient } from '@/lib/auth-client';
import { Loader2Icon } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
import api from '@/configs/axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {data:session} = authClient.useSession()
  const navigate = useNavigate()
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try{

      if(!session?.user){
        return toast.error("Please sign in to create a website")

      }else if(!input.trim()){
        return toast.error("Please enter a prompt to create a website")
      }
      setLoading(true)

      const {data} = await api.post("/user/project", {initial_prompt: input});
      setLoading(false);

      navigate(`/project/${data.projectId}`)

    }catch(error:any){
      setLoading(false)
      toast.error(error?.response?.data?.message || error.message)
      console.log(error);

    }
  }

  return (

      <section className="flex flex-col items-center text-white text-sm pb-20 px-4 font-poppins gap-3">

          {/* BACKGROUND IMAGE */}
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />

        <a href={`${import.meta.env.VITE_APPURL}/auth/sign-up`} className="flex items-center gap-2 border border-slate-700 rounded-full p-1 pr-3 text-sm mt-20">
          <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full">NEW</span>
          <p className="flex items-center gap-2">
            <span>Try 30 days free trial option</span>
            <svg className="mt-px" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </p>
        </a>

        <h1 className="text-center text-[40px] leading-12 md:text-6xl md:leading-17.5 mt-4 font-semibold max-w-3xl">
          Turn your thoughts into websites instantly, with AI.
        </h1>

        <p className="text-center text-base max-w-md mt-2">
          Create, customize and publish websites faster than ever with our intelligent AI website builder.
        </p>

        <form onSubmit={onSubmitHandler} className="bg-white/10 max-w-2xl w-full rounded-xl p-4 mt-10 border border-indigo-600/70 focus-within:ring-2 ring-indigo-500 transition-all">
          <textarea onChange={e => setInput(e.target.value)} className="bg-transparent outline-none text-gray-300 resize-none w-full" rows={4} placeholder="Describe your presentation in details" required />
          <button className="ml-auto flex items-center gap-2 bg-linear-to-r from-[#CB52D4] to-indigo-600 rounded-md px-4 py-2">

            {!loading ? "Create with AI" : (
              <>
              Creating <Loader2Icon className='animate-spin size-4 text-white'/>
              </>

            )}
          </button>

        </form>

        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-16">
          <img className="max-w-28 md:max-w-32" src="https://ik.imagekit.io/hawx9ljzh/asset-preview-removebg-preview.png" alt="" />
          <img className="max-w-28 md:max-w-32 max-h-25" src="https://ik.imagekit.io/hawx9ljzh/655061-removebg-preview.png" alt="" />
          <img className="max-w-28 md:max-w-32 max-h-30" src="https://ik.imagekit.io/hawx9ljzh/75147b1ca9c31a046c40eaf21bd482df-removebg-preview.png" alt="" />
          <img className="max-w-28 md:max-w-32" src="https://ik.imagekit.io/hawx9ljzh/images-removebg-preview.png" alt="" />
          <img className="max-w-28 md:max-w-32" src="https://ik.imagekit.io/hawx9ljzh/4c2dfb70d241b830cc9701e6d4f53583-removebg-preview.png" alt="" />
        </div>
      </section>
  )
}

export default Home