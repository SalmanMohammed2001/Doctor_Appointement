import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../config.ts";
import {toast} from "react-toastify";
import {authContext} from "../context/AuthContext.tsx";


const Login = () => {

    const navigate=useNavigate()


    const [formData, setFormData] = useState<any>({
        email: "",
        password: ""
    })

    const [loading,setLoading]=useState(false)

    // @ts-ignore
    const {dispatch}=useContext(authContext)

    const handleInputChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandle=async  event=>{
        event.preventDefault()
        try{
            axios.post(`${BASE_URL}/auth/login`, formData).then((res)=>{
                if (res){
                      dispatch({
                           type:"LOGIN_SUCCESS",
                           payload:{
                               user:res.data.data,
                               token:res.data.token,
                               role:res.data.message
                           }
                       })

                  setLoading(false)
                    console.log(res.data ,'login data')

                  toast.success(res.data.message)
                    navigate('/home')
                }
            })




        }catch (error){
            // @ts-ignore
            toast.error(error.message)
            setLoading(false)

        }

    }

    return (
        <section className={"px-5 lg:px-0 "}>

            <div className={"w-full max-w-[570px] mx-auto rounded-l-lg shadow-md md:p-10 "}>
                <h3 className={"text-headingColor text-[22px] leading-9 font-bold mb-10"}>
                    Hello! <span className={"text-primaryColor"}>Welcome</span> Back
                </h3>
                <form action="" className={"py-4 md:py-0"} onSubmit={submitHandle}>
                    <div className={"mb-5"}>
                        <input type="email" placeholder={"Enter the email"} name={"email"} value={formData.email}
                               onChange={handleInputChange}
                               className={"w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none" +
                                   " focus:border-primaryColor text-[16px] " +
                                   "leading-7 text-headingColor placeholder:text-textColor  cursor-pointer "}
                        />
                    </div>
                    <div className={"mb-5"}>
                        <input type="password" placeholder={"Enter the password"} name={"password"} value={formData.password}
                               onChange={handleInputChange}
                               className={"w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none" +
                                   " focus:border-primaryColor text-[16px] " +
                                   "leading-7 text-headingColor placeholder:text-textColor  cursor-pointer "}
                        />
                    </div>

                    <div className={"mt-7"}>
                        <button type={"submit"} className={"w-full bg-primaryColor text-white text-[16px] px-4 py-3 rounded-lg "} onClick={submitHandle}>Login</button>
                    </div>

                    <p className={"mt-5 text-center text-textColor cursor-pointer"}>
                        Dont have an account? <Link to={"/register"} className={"text-primaryColor font-medium"}> Register</Link>
                    </p>

                </form>
            </div>

        </section>
    );
};

export default Login;