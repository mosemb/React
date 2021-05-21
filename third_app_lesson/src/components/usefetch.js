//Custom Hook
import {useEffect, useState} from 'react'


const useFetch = (url)=>{

       // Loading data from the server
       const [data_fe, setData_fe] = useState(null);
       const [isPending, setisPending] = useState(true);
       const [error, setError] = useState(null); 

    useEffect(()=>fetch(url)
    .then(
        res=>{ console.log(res)
            if(!res.ok){
                throw Error("Could not find resource")
            }
            return res.json();})
    .then(
        data=>{
            setData_fe(data);
            setisPending(false)
            setError(null)
             // We set state for the errors and out put to screen 
            
        }).catch((error)=>{
            if(error.name==='AbortError'){
                console.log('Fetch Aborted')
            }else {

                setisPending(false)
                setError(error.message)
            }

            return ()=>console.log("Clean up")

          
           /*console.log(error.message)*/
        })
    ,[url])

    return {data_fe,isPending,error}


}


export default useFetch;