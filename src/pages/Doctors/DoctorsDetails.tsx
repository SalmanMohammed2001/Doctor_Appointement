import doctorImg from '../../assets/images/doctor-img01.png'
import starIcon from '../../assets/images/Star.png'
import {useState} from "react";
import DoctorAbout from "./DoctorAbout.tsx";
import Feedback from "./Feedback.tsx";

const DoctorsDetails = () => {

    const[tab,setTab]=useState('about')
    return (
        <section>
            <div className="container">
                <div className={"grid md:grid-cols-3 gap-[50px]"}>
                    <div className={"md:col-span-2"}>
                        <div className={"flex items-center gap-5"}>
                            <figure className={"max-w-[200px] max-h-[200px]"}>
                                <img src={doctorImg} alt=""/>
                            </figure>

                            <div>
                                <span
                                    className={"bg-irisBlueColor py-1 px-6  lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded text-white"}>Surgeon</span>
                                <h3 className={"text-headingColor text-[22px] leading-9 mt-3 font-bold"}> Mohammed
                                    Salman</h3>
                                <div className={"flex items-center gap-[6px]"}>
                                    <span
                                        className={"flex items-center gap-[6px] text-[14px] leading-4 lg:text-[16px] lg:leading-7  text-headingColor font-semibold"}> <img
                                        src={starIcon} alt=""/> 4.8</span>

                                    <span
                                        className={"text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor"}>(272)</span>
                                </div>
                                <div>
                                    <p className={"text_para leading-6 text-[14px] md:text-[15px] lg:max-w-[390px] "}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci aspernatur beatae deleniti distinctio enim !</p>
                                </div>
                            </div>
                        </div>

                        <div className={"mt-[50px] border-b border-solid border-[#0066ff34]"}>
                                <button onClick={()=>setTab('about')} className={`${tab==='about' && "border-b border-solid border-primaryColor"}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}> About</button>
                                <button onClick={()=>setTab('feedback')} className={`${tab==='feedback' && "border-b border-solid border-primaryColor"}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}> Feedback</button>

                        </div>

                        <div className={"mt-5"}>
                            {
                                tab==='about' && <DoctorAbout/>

                            }
                            {
                                tab==='feedback' && <Feedback/>
                            }

                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorsDetails;