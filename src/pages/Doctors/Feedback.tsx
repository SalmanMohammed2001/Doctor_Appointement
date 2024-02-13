import avatar from '../../assets/images/avatar-icon.png'
import {formateDate} from "../../utils/formateDate.ts";
import {AiFillStar} from "react-icons/ai";
import {useState} from "react";
import FeedbackForm from "./FeedbackForm.tsx";

const Feedback = () => {

    const [showfeedbackForm,setShowfeedbackForm]=useState(false)

    // @ts-ignore
    return (
        <div>
            <div className={"mb-[50px]"}>
                <h4 className={"text-[20px] leading-[20px] font-bold text-headingColor mb-[30px]"}>All reviews</h4>

                <div className={"flex justify-between gap-10 mb-[30px]"}>
                    <div className={"flex gap-3"}>
                        <figure>
                            <img src={avatar} alt=""/>
                        </figure>

                        <div>
                            <h5 className={"text-[14px] leading-6 text-primaryColor font-bold"}> Ali ahamed
                            </h5>
                            <p className={"text-[14px] leading-6 text-textColor"}>{formateDate("10-02-2011")}
                            </p>
                            <p className={"text_para mt-3 font-medium text-[15px]"}> Good Service highly recommended</p>
                        </div>
                    </div>

                    <div className={"flex gap-1"}>
                        {
                            [...Array(5).keys()].map((_, index) =>
                                <AiFillStar key={index} color={"#0067FF"}/>
                            )

                        }
                    </div>
                </div>
            </div>

            {!showfeedbackForm && <div className={"text-center"}>
                <button onClick={()=>setShowfeedbackForm(true)} className={"btn"}> Give Feedback</button>
            </div>}

            {showfeedbackForm && <FeedbackForm/>}
        </div>
    );
};

export default Feedback;