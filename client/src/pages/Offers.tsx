import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import PencilIcon from "../assets/pencil.svg"

type Offer =
{
  id: number,
  title: string,
  amount: number
  probability:string,
  state: string,
  subsidairy: string
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
            {offers.length > 0 ? (
                <ul className="clientList">
                    {offers.map((offer: Offer) => (
                        <li key={offer.id} className="listStyle">                      
                            <li className="underline"> {offer.title}</li>                        
                            <li className="underline">{`${offer.amount}€`}</li>
                            <li className="underline">{offer.probability}</li>
                            <li className="underline"> {offer.state}</li>
                            <li className="underline">{offer.subsidairy}</li>
                            <Link to={"/offers/addOffer"}>
                                <li><img src={PencilIcon} alt="pencilLogo" /></li>
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



