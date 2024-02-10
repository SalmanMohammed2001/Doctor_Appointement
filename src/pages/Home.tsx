
import heroImh01 from '../assets/images/hero-img01.png'
import heroImh02 from '../assets/images/hero-img02.png'
import heroImh03 from '../assets/images/hero-img03.png'
const Home = () => {
    return (
        <div>
            {/*===============Hero section=========================================*/}
            <section className="hero_section  border-2 border-solid  border-green-800 pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div
                        className="flex flex-col  lg:flex-row gap-[90px] items-center justify-between border-2 border-solid border-blue-800 ">
                        {/*=============hero content============*/}
                        <div>
                            <div className="lg:w-[570px] border-2 border-solid border-amber-300 ">
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
                                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
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

            {/*===============Hero end=========================================*/}
        </div>
    );
};

export default Home;