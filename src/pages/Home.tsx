import heroImh01 from '../assets/images/hero-img01.png'
import heroImh02 from '../assets/images/hero-img02.png'
import heroImh03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImage from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from "react-router-dom";
import About from "../components/About/About.tsx";

import ServiceList from "../components/Service/ServiceList.tsx";

const Home = () => {
    return (
        <div>
            {/*===============Hero section=========================================*/}
            <section className="hero_section   pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div
                        className="flex flex-col  lg:flex-row gap-[90px] items-center justify-between  ">
                        {/*=============hero content============*/}
                        <div>
                            <div className="lg:w-[570px]  ">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We
                                    help patient live a healthy ,longer life</h1>

                                <p className="text_para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis corporis
                                    ea eveniet, excepturi fugiat harum hic impedit labore mollitia nam nisi porro quia
                                    reiciendis rem repellendus, similique sint soluta?
                                </p>
                                <button className={"btn"}> Request an Appointment</button>
                            </div>
                            {/*=============hero content============*/}
                            <div
                                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                                    font-[700] text-headingColor">30+</h2>
                                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">years of Experience</p>
                                </div>


                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                                    font-[700] text-headingColor">15+</h2>
                                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Clinic Location</p>
                                </div>

                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                                    font-[700] text-headingColor">100%</h2>
                                    <span
                                        className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        {/*=============hero content============*/}
                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-full" src={heroImh01} alt=""/>
                            </div>
                            <div className="m-[30px]">
                                <img className="w-full mb-[30px]" src={heroImh02} alt=""/>
                                <img className="w-full" src={heroImh03} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*===============Hero section  end=========================================*/}

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Providing the best medical service
                        </h2>
                        <p className="text_para text-center"> World-class care for everyone our health System offers
                            unmatched expert health care</p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ">
                        <div className="py-[30px] px-5 ">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt=""/>
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Find a Doctor
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World Class care everyone our health System offers unmatched expert
                                    health care.From the lab to the clinic
                                </p>
                                <Link to={"/doctors"} className="w-[44px] h-[44px] rounded-full border-solid  border-[#181A1E]
                                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                </Link>
                            </div>

                        </div>
                        <div className="py-[30px] px-5 ">
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt=""/>
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Find a Location
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World Class care everyone our health System offers unmatched expert
                                    health care.From the lab to the clinic
                                </p>
                                <Link to={"/doctors"} className="w-[44px] h-[44px] rounded-full border-solid  border-[#181A1E]
                                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                </Link>
                            </div>

                        </div>
                        <div className="py-[30px] px-5 ">
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt=""/>
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Book Appointment
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World Class care everyone our health System offers unmatched expert
                                    health care.From the lab to the clinic
                                </p>
                                <Link to={"/doctors"} className="w-[44px] h-[44px] rounded-full border-solid  border-[#181A1E]
                                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/*=========================about  section start==========================*/}
            <About/>
            {/*=========================about  section end ==========================*/}

            {/*=========================service  section start ==========================*/}
            <section>
                <div className="container">
                    <div className={"xl:w-[470px] mx-auto"}>
                        <h2 className="heading text-center">Our Medical Services</h2>
                        <p className={"text_para text-center"}>
                            World-class care for everyone .Our health system offers unMatched expert health cre
                        </p>
                    </div>
                    <ServiceList/>
                </div>
            </section>
            {/*=========================service  section end ==========================*/}

            {/*========================= feature section start ==========================*/}
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/*==================feature content===================*/}
                        <div className="xl:w-[670px]">
                            <h2 className="heading">Get virtual treatment <br/>anytime</h2>
                            <ul className="text_para">
                                1. Schedule the appointment directly
                            </ul>
                            <ul className="text_para">
                                2. Search for you physician here and contact their office
                            </ul>
                            <ul className="text_para">
                                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae cumque
                                deserunt dolorem expedita
                            </ul>
                            <Link to={"/"}>
                                <button className={"btn"}> Learn More</button>
                            </Link>
                        </div>
                        <div className={" relative z-10    xl:w-[770px] flex justify-end mt-[50px] lg:mt-0"}>
                            <img src={featureImage} className={"w-3/4"} alt=""/>

                        {/*    <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                            md:left-6 z-20 p-2 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] border-2 border-amber-950 ">

                                <div className="flex items-center gap-[6px] lg:gap-3">
                                    <p className="text-[10px] leading-[10px] lg:text-[14px]  text-textColor font-[400] lg:leading-7"> Tue,24</p>
                                    <p className="text-[10px] leading-[10px] lg:text-[14px]  text-textColor font-[600] lg:leading-7"> 10:00Am</p>
                                    <span className={"w-5 h-5  lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] "}>
                                        <img src={videoIcon} alt=""/>
                                    </span>
                                </div>
                                    <div className="border-2 border-amber-950 w-[65px]  lg:w-[96px] bg-[#CCF0F3] py-1 px-2 rounded-full lg:py-[6x] lg:px-[10px] text-[8px] leading-7 lg:text-[12px]
                                        lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                                        Consulate
                                    </div>

                            </div>*/}
                        </div>

                    </div>
                </div>
            </section>

            {/*========================= feature section end ==========================*/}
        </div>
    );
};

export default Home;