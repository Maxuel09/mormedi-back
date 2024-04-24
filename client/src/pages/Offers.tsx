import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PencilIcon from "../assets/pencil.svg";

type Offer = {
  id: number;
  title: string;
  amount: number;
  sector: string;
  state: string;
  company: string;
  commercial: string;
};

function Offers() {
  const [offers, setOffers] = useState<Offer[]>([]);

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
      <ul className="headings">
        <li>Title</li>
        <li>Company</li>
        <li>Amount</li>
        <li>Sector</li>
        <li>State</li>
        <li>Commercial</li>
        <li>Edit</li>
      </ul>
      {offers.length > 0 ? (
        <ul className="clientList">
          {offers.map((offer: Offer) => (
            <li key={offer.id} className="listStyle">
              <span className="underline">{offer.title}</span>
              <span className="underline">{offer.company}</span>
              <span className="underline">{`${offer.amount}€`}</span>
              <span className="underline">{offer.sector}</span>
              <span className="underline">{offer.state}</span>
              <span className="underline">{offer.commercial}</span>
              <span>
                <Link to="/offers/addOffer">
                  <img src={PencilIcon} alt="Edit" style={{ paddingTop: "15px" }} />
                </Link>
              </span>
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
