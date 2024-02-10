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
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center"></div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;