import {AiFillStar} from "react-icons/ai";
import {useState} from "react";

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [review, setReview] = useState<any>()

    const handleSubmitReview= async (e:any)=>{
        e.preventDefault()
        console.log(rating)
        console.log(review)

    }
    return (
        <form action="">
            <div>
                <h3 className={"text-headingColor text-[16px] leading-6 font-semibold mb-4"}> How would you rate overall
                    experience </h3>

                <div>
                    {
                        [...Array(5).keys()].map((_, index) => {
                            index += 1;

                            return (
                                <button
                                    key={index}
                                    type={"button"}
                                    className={`${
                                        index <= ((rating && hover) || hover) ? "text-yellowColor" 
                                        : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                    onClick={()=>setRating(index)}
                                    onMouseEnter={()=>setHover(index)}
                                    onMouseLeave={()=>setHover(rating)}
                                    onDoubleClick={()=>{
                                        setHover(0)
                                        setRating(0)
                                    }}

                                >


                                    <span><AiFillStar/></span></button>
                            )
                        })
                    }
                </div>

                <div className={"mt-[30px]"}>
                    <h3 className={"text-headingColor text-[16px] leading-6 font-semibold mb-4"}>
                        Share your Feedback or Suggestion*
                       </h3>

                    <textarea className={"border border-solid border-[#0066ff34] " +
                        "focus:outline-primaryColor w-full px-4 py-3 rounded-md "}
                              rows={5} placeholder={"Write a Message"}
                    onChange={(e)=>setReview(e.target.value)}
                    />
                </div>
                <button type={"submit"}  onClick={handleSubmitReview} className={"btn"}> Submit Feedback</button>
            </div>

        </form>
    );
};

export default FeedbackForm;