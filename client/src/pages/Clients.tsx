import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import PencilIcon from "../assets/pencil.svg"
import SearchBox from '../components/SearchBox';

type Client =
{
  id: number,
  firstName: string,
  lastName: string
  title: string,
  department: string,
  company: string,
  country: string,
  commercial: string
}

function Clients() {
  
    const [clients, setClients] = useState([]);

    // const Search: React.FC = () => {
    //     const handleSearch = (query: string) => {
    //       console.log('Search query:', query);
    //       // Perform search with the query...
    //     };

    
    
   
    useEffect(() => {
        const apiUrl = 'http://localhost:3000/clients';

        const fetchClients = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                setClients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchClients();
    }, []);

    return (
        <div className="containerMain">
            <h1>Clients</h1>
            {/* <SearchBox onSearch={handleSearch} />   */}
           <ul className='headings'>
            <li>Company</li>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Title</li>
            <li>Department</li>
            <li>Country</li>
            <li>Commercial</li>
           </ul>
            {clients.length > 0 ? (
                <ul className="clientList">
                    {clients.map((client: Client) => 
                          
                    <li key={client.id} className="listStyle">
                        <span className="underline">{client.company}</span>
                        <span className="underline">{client.firstName}</span>
                        <span className="underline">{client.lastName}</span>
                        <span className="underline">{client.title}</span>
                        <span className="underline">{client.department}</span>
                        <span className="underline">{client.country}</span>
                        <span className="underline">{client.commercial}</span>
                        <span>
                        <Link to="/offers/addOffer">
                        <img src={PencilIcon} alt="Edit" style={{ paddingTop: "15px" }} />
                        </Link>
                        </span>
                    </li>
               
                    )}
                </ul>
            ) : (
                <p>No clients found.</p>
            )}
        </div>
    );
}


export default Clients;
