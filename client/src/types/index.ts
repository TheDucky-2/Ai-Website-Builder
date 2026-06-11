import React from "react";

export interface User {
    id: string;
    email: string;
    fullName?: string;
    imageUrl?: string;
    name?: string;
    image?: string;
}

export interface Message {
    id: string;
    role: any;
    content: string;
    timestamp: string;
}

export interface Version {
    id: string;
    timestamp: string;
    code: string;
}

export interface Project {
    id: string;
    name: string;
    initial_prompt: string;
    current_code: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user?: User;
    isPublished?: boolean;
    versionId?: string;
    conversation: Message[];
    versions: Version[];
    current_version_index: string;
}

export interface Plan {

    id: string;
    name: string;
    price: string;
    credits: number;
    description: string;
    features: string[];

}

export interface SidebarProps {

    isMenuOpen: boolean;
    project: Project
    setProject: (project:Project)=> void;
    isGenerating: boolean
    setIsGenerating: (isGenerating:boolean)=> void;

}

export interface ProjectPreviewRef{

    getCode: ()=> string | undefined;
}

export interface ProjectPreviewProps{
    project: Project;
    isGenerating: boolean;
    device?: "phone" | "tablet" | "desktop";
    showEditorPanel?: boolean;
    ref?: React.Ref<ProjectPreviewRef>;
}

export interface EditorPanelProps {

    selectedElement: {
        tagName: string;
        className: string;
        text: string;
        styles: {
            padding: string;
            margin: string;
            backgroundColor: string;
            color: string;
            fontSize: string
        }; 
    } | null;

    onUpdate: (updates: any) => void;
    onClose: (updates: any) => void;

}