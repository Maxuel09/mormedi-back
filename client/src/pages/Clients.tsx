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
    // State to store the list of clients
    const [clients, setClients] = useState([]);

    
    
    // Fetch clients from the API endpoint when the component mounts
    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:3000/clients';

        // Function to fetch data from the API endpoint
        const fetchClients = async () => {
            try {
                // Make a GET request to the API endpoint
                const response = await fetch(apiUrl);

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON data
                const data = await response.json();

                // Update the state with the fetched data
                setClients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the function to fetch clients
        fetchClients();
    }, []);

    return (
        <div className="containerClients">
            <h1>Client List</h1>
            {/* Check if there are clients to display */}
            {clients.length > 0 ? (
                <ul>
                    {/* Map through the list of clients and display them */}
                    {clients.map((client: Client) => (
                        <li key={client.id}>
                            {/* Customize the display of each client as needed */}
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


