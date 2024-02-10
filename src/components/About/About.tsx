
import aboutImage from '../../assets/images/about.png'
import aboutCardImage from '../../assets/images/about-card.png'
const About = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row  border-solid border-2 border-amber-950">
                        {/*=========================about image========================*/}
                        <div className="relative w-3/4  lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 border-solid border-2 border-red-400">
                            <img src={aboutImage} alt=""/>
                            <div className="absolute z-10 bottom-4 w-[200px]  md:w-[300px] ring-[-30%] md:right-[-7%] lg:right-[22%]">
                                <img src={aboutCardImage} alt=""/>
                            </div>
                        </div>

                        {/*===========about center=====================================*/}
                        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                            <h2 className="heading"> Proud to be one of </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;