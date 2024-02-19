import {useEffect, useState} from "react";
import axios from "axios";
import {token} from "../../config.ts";



const UserFetchData = async (url:any) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


    useEffect(()=>{
        const fetchData=async ()=>{

            setLoading(true)

            try{
                const  result=await  axios.get(url,{
                    headers:{Authorization:`Bearer ${token}`}
                })


                if(!result){
                    throw new Error("user not found" )
                }


                setData(result.data.data)
                setLoading(false)

            }catch (error){
                setLoading(false)
                // @ts-ignore
                setError(error.message)
            }
        }


        fetchData()

    },[url])


    localStorage.setItem('getProfileData',JSON.stringify(data))
    return {data,loading,error}
};

export default UserFetchData;