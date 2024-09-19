
import React from "react"

import AuthenticatedLayout from "../Component/Layout/AuthenticatedLayout"  
import RenderPage from "./RenderPage"

const queryParameters = new URLSearchParams(window.location.search)
  const currentPage = queryParameters.get("current") ?? 'dashboard'


export default function Employee(){
    return(
    
        <div>
            <AuthenticatedLayout></AuthenticatedLayout>
             <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}
                <RenderPage renderPage = {currentPage}></RenderPage>
                
              </div>
            </main>
            
            
        </div>
    )
}