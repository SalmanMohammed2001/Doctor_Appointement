import {services} from "../assets/data/service.ts";
import ServiceCard from "../components/Service/ServiceCard.tsx";

const Service = () => {
    return (
       <section>
           <div className="container">
               <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px]"}>
                   {
                       services.map((item,index)=>{
                           return(
                               <ServiceCard key={index} index={index} item={item}/>
                           )
                       })
                   }
               </div>
           </div>
       </section>
    );
};

export default Service;