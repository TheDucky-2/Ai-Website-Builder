import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { ProjectPreviewProps } from '../types/index.ts';
import { iframeScript } from '../assets/assets.ts';
import EditorPanel from './EditorPanel.tsx';

/*
export interface ProjectPreviewRef{

    getCode: ()=> string | undefined;
}

export interface ProjectPreviewProps{
    project: Project;
    isGenerating: boolean;
    device?: "phone" | "tablet" | "desktop";
    showEditorPanel: boolean;
} */

const ProjectPreview = ({project, isGenerating, device="desktop", showEditorPanel=true, ref}: ProjectPreviewProps) => {

  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [selectedElement, setSelectedElement] = useState<any>(null)

    const resolutions = {
    phone: "w-[412px]",
    tablet: "w-[768px]",
    desktop: "w-full"
  }

  useImperativeHandle(ref, ()=> ({

    getCode: ()=> {

      const doc = iframeRef.current?.contentDocument;

      if(!doc) return undefined;


      // Remove selection class / attributes / outline from all elements

      doc.querySelectorAll(".ai-selected-element, [data-ai-selected]").forEach(
        (elem) => {
          elem.classList.remove("ai-selected-element");
          elem.removeAttribute("data-ai-selected");
          (elem as HTMLElement).style.outline = "";
        })

      // Remove injected styles + scripts from the document

      const previewStyle = doc.getElementById("ai-preview-style");
      if(previewStyle) previewStyle.remove();

      const previewScript = doc.getElementById("ai-preview-script");
      if(previewScript) previewScript.remove();

      // Serializing clean HTML

      const html = doc.documentElement.outerHTML;

      return html
    }

  }))

    const injectPreview = (html:string)=>{
    if(!html) return "";
    if(!showEditorPanel) return html
  
    if(html.includes('</body>')){
      return html.replace('</body>', iframeScript + "</body>")
    }else{
      return html + iframeScript;
    }}

    const handleUpdate = (updates:any) => {

    if(iframeRef.current?.contentWindow){
      iframeRef.current.contentWindow.postMessage({
        type: "UPDATE_ELEMENT",
        payload: updates
      }, "*")
    }

  }

  useEffect(()=> {
  const handleMessage = (event: MessageEvent) => {

    if(event.data.type === "ELEMENT_SELECTED"){
      setSelectedElement(event.data.payload);
    }else if(event.data.type === "CLEAR_SELECTION"){
      setSelectedElement(null)
    }

  }

    window.addEventListener("message", handleMessage);
    return ()=> window.removeEventListener("message", handleMessage)

  }, [])


  return (
    <div className='relative h-full bg-gray-900 flex-1 rounded-xl overflow-hidden max:sm-ml-2'>
      {project.current_code ? (
        <>
        <iframe ref = {iframeRef} srcDoc={injectPreview(project.current_code)} className={`h-full mx:sm:w-full ${resolutions[device]} mx-auto transition-all`}/>
        
        {showEditorPanel && selectedElement && (
          <EditorPanel selectedElement={selectedElement} onUpdate={handleUpdate} onClose={()=> {
            setSelectedElement(null);

            if(iframeRef.current?.contentWindow){
              iframeRef.current.contentWindow.postMessage({
                type: "CLEAR_SELECTION_REQUEST"
              }, "*")
            }}}/>

        )}
        
        
        
        </>
        


      ): isGenerating && ( 
        <div>
          loading
        </div>
      )}

    </div>
  )
}

export default ProjectPreview

