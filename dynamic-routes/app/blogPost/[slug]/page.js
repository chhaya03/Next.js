//dynamic routes using slug/(which u want ) in url
import NotFound from "@/app/not.found"


export default function page({params}) {
  //fetch your blog post by its slug

  // return <div>my post : {params.slug}</div>


  let language =['java','javscript','python','cs']

  
    if(language.includes(params.slug)){
     return <div>my post : {params.slug}</div>
    }
    else{
      return <NotFound />
    }
 
}