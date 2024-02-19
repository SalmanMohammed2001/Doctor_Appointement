import {doctors} from "../../assets/data/Doctor.ts";
import DoctorCard from "../../components/Doctors/DoctorCard.tsx";
import TestiMonial from "../../components/TestMonial/TestiMonial.tsx";


const Doctors = () => {
    return (
        <>

            <section className={"bg-[#FFF9EA]"}>
                <div className="container text-center">
                    <h2 className={"heading"}> Find a Doctor</h2>
                    <div
                        className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between ">

                        <input type="search"
                               className={"py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor "}
                               placeholder={"search Doctor"}/>

                        <button className={"btn mt-0 rounded-[0px] rounded-r-md"}> Search</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 "}>
                        {
                            doctors.map((doctor) => {
                                return (
                                    <DoctorCard key={doctor.id} doctor={doctor}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className={"xl:w-[470px] mx-auto"}>
                        <h2 className="heading text-center">What Our Patient say</h2>
                        <p className={"text_para text-center"}>
                            World-class care for everyone .Our health system offers unMatched expert health cre
                        </p>
                    </div>
                    <TestiMonial/>
                </div>
            </section>
        </>
    );
};

export default Doctors;