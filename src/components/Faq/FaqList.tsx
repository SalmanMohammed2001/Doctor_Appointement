
import {faqs} from "../../assets/data/Faqs.ts";
import FaqItem from "./FaqItem.tsx";

const FaqList = () => {
    return (
        <div>
            <ul className={"mt-[38px]"}>
                {
                    faqs.map((item,index)=>{
                        return(
                            <FaqItem item={item} key={index}/>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default FaqList;