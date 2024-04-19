import PencilIcon from "../assets/pencil.svg"
import { Link } from "react-router-dom"



const OffersDetails = () => {
    return (
        <div>
            <ul className="OffersList">
                <li className="underline">Title</li>
                <li className="underline">Company</li>
                <li className="underline">Amount</li>
                <li className="underline">Sector</li>
                <li className="underline">State</li>
                <li className="underline">Commercial</li>
                <Link to={"/addOffers"}>
                    <li><img src={PencilIcon} alt="pencilLogo" /></li>
                </Link>
            </ul>
        </div>
    ) 
}

export default OffersDetails
