import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getData } from "../myStore";

function FaqCard({ title, id }){

    const dispatch = useDispatch();

    const sendData = () => {
        dispatch(getData(id));
    };

    return(
        <>
            <Link className='links' to={`/questions/${id}`} onClick={sendData} ><div className="faqCard">
                <h1 className="faqCardTitle">{title}</h1>
            </div></Link>
        </>
    )
}

export default FaqCard