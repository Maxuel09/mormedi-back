import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import PencilIcon from "../assets/pencil.svg"
import SearchBox from '../components/SearchBox';

type Client =
{
  id: number,
  firstName: string,
  lastName: string
  qualification: string,
  department: string,
  company: string
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
            <li>State</li>
            <li>Commercial</li>
           </ul>
            {clients.length > 0 ? (
                <ul className="clientList">
                    {clients.map((client: Client) => (
                        <li key={client.id} className="listStyle">                      
                            <li className="underline"> {client.company}</li>                        
                            <li className="underline"> {client.firstName}</li>
                            <li className="underline">{client.lastName}</li>
                            <li className="underline">{client.qualification}</li>
                            <li className="underline">{client.department}</li>
                            <li className="underline">State</li>
                            <li className="underline">Commercial</li>
                            <Link to={"/clients/addClient"}>
                                <li><img src={PencilIcon} alt="pencilLogo" style={{paddingTop: "15px"}}/></li>
                            </Link>             
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No clients found.</p>
            )}
        </div>
    );
}


export default Clients;


