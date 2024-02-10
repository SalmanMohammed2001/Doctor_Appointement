
import {doctors} from '../../assets/data/Doctor.ts'
import DoctorCard from "./DoctorCard.tsx";

const DoctorList = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"}>
            {
                doctors.map((doctor)=>{
                    return(
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    )
                })
            }
        </div>
    );
};

export default DoctorList;