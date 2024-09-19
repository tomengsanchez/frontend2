
import React from "react"

import AuthenticatedLayout from "../Component/Layout/AuthenticatedLayout"  
import RenderPage from "./RenderPage"

const queryParameters = new URLSearchParams(window.location.search)
  const currentPage = queryParameters.get("current") ?? 'dashboard'


export default function Employee(){
    return(
    
        <div>
            <AuthenticatedLayout></AuthenticatedLayout>
            <RenderPage renderPage = {currentPage}></RenderPage>
            
        </div>
    )
}