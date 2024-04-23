import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import PencilIcon from "../assets/pencil.svg"

type Offer =
{
  id: number,
  title: string,
  amount: number
  sector:string,
  state: string,
  company: string,
  commercial: string
}

function Offers() {
  
    const [offers, setOffers] = useState([]);
 
    useEffect(() => {
        const apiUrl = 'http://localhost:3000/offers';

        const fetchOffers = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                setOffers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="containerMain">
            <h1>Offers</h1>
            <ul className='headings'>
                <li>Title</li>
                <li>Company</li>
                <li>Amount</li>
                <li>Sector</li>
                <li>State</li>
                <li>Commercial</li>
           </ul>
            {offers.length > 0 ? (
                <ul className="clientList">
                    {offers.map((offer: Offer) => (
                        <li key={offer.id} className="listStyle">                      
                            <li className="underline"> {offer.title}</li>                        
                            <li className="underline"> {offer.company}</li>                        
                            <li className="underline">{`${offer.amount}€`}</li>
                            <li className="underline">{offer.sector}</li>
                            <li className="underline"> {offer.state}</li>
                            <li className="underline">{offer.commercial}</li>
                            <Link to={"/offers/addOffer"}>
                                <li><img src={PencilIcon} alt="pencilLogo" style={{paddingTop: "15px"}}/></li>
                            </Link>             
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No offers found.</p>
            )}
        </div>
    );
}

export default Offers;



