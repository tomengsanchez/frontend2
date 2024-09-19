

import HeaderAuth from './HeaderAuth';

export default function AuthenticatedLayout() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <HeaderAuth></HeaderAuth>
        
       
      </div>
    </>
  )
}
