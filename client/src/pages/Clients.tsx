import ClientDetails from "../components/ClientDetails"
import { useState, useEffect } from 'react';



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
        <div className="containerClients">
            <h1>Clients</h1>
            {clients.length > 0 ? (
                <ul>
                    {clients.map((client: Client) => (
                        <li key={client.id}>
                            {client.firstName} -  {client.lastName} - {client.qualification} - {client.department} - {client.company}
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


