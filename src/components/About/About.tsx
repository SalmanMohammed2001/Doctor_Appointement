import aboutImage from '../../assets/images/about.png'
import aboutCardImage from '../../assets/images/about-card.png'
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div
                        className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                        {/*=========================about image========================*/}
                        <div
                            className="relative w-3/4  lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                            <img src={aboutImage} alt=""/>
                            <div
                                className="absolute z-10 bottom-4 w-[200px]  md:w-[300px] ring-[-30%] md:right-[-7%] lg:right-[22%]">
                                <img src={aboutCardImage} alt=""/>
                            </div>
                        </div>

                        {/*===========about center=====================================*/}
                        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                            <h2 className="heading"> Proud to be one of the nations best </h2>
                            <p className="text_para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias at blanditiis dolor
                                dolorem exercitationem illo in maiores omnis sunt. Commodi consequuntur dolores
                                laboriosam maxime nemo, perferendis quas quasi voluptatum.
                            </p>
                            <p className="text_para mt-[30px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias at blanditiis dolor
                                dolorem exercitationem illo in maiores omnis sunt. Commodi consequuntur dolores
                                laboriosam maxime nemo, perferendis quas quasi voluptatum.
                            </p>

                            <Link to={"/"}>
                                <button className={"btn"}> Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;