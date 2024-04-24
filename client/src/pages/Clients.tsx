// import { useState, useEffect } from 'react';
// import {Link} from "react-router-dom"
// import PencilIcon from "../assets/pencil.svg"

// type Client =
// {
//   id: number,
//   firstName: string,
//   lastName: string
//   title: string,
//   department: string,
//   company: string,
//   country: string,
//   commercial: string
// }

// function Clients() {
  
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         const apiUrl = 'http://localhost:3000/clients';

//         const fetchClients = async () => {
//             try {
//                 const response = await fetch(apiUrl);

//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }

//                 const data = await response.json();

//                 setClients(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchClients();
//     }, []);

//     return (
//         <div className="containerMain">
//             <div className="headingClients">
//                 <h1>Clients</h1>
//             <div className="buttonsTop">
//             <button type="submit">
//                 <Link to={"/offers"} style={{color:"white",textDecoration: "none"}}>
//                     Export
//                 </Link>
//             </button>
//             <button type="reset">
//                 <Link to={"/clients/addClient"} style={{color:"white",textDecoration: "none"}}>
//                     Add  
//                 </Link>
//             </button>
//           </div>
//        </div>
//            <ul className='headings'>
//             <li>Company</li>
//             <li>First Name</li>
//             <li>Last Name</li>
//             <li>Title</li>
//             <li>Department</li>
//             <li>Country</li>
//             <li>Commercial</li>
//            </ul>
//             {clients.length > 0 ? (
//                 <ul className="clientList">
//                     {clients.map((client: Client) => 
                          
//                     <li key={client.id} className="listStyle">
//                         <span className="underline">{client.company}</span>
//                         <span className="underline">{client.firstName}</span>
//                         <span className="underline">{client.lastName}</span>
//                         <span className="underline">{client.title}</span>
//                         <span className="underline">{client.department}</span>
//                         <span className="underline">{client.country}</span>
//                         <span className="underline">{client.commercial}</span>
//                         <span>
//                         <Link to="/offers/addOffer">
//                         <img src={PencilIcon} alt="Edit" style={{ paddingTop: "15px" }} />
//                         </Link>
//                         </span>
//                     </li>
               
//                     )}
//                 </ul>
//             ) : (
//                 <p>No clients found.</p>
//             )}
//         </div>
//     );
// }


// export default Clients;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../assets/pencil.svg';

type Client = {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    department: string;
    company: string;
    country: string;
    commercial: string;
};

function Clients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

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

    // Filter the clients based on the search query
    const filteredClients = clients.filter((client:Client) => 
 
            client.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.commercial.toLowerCase().includes(searchQuery.toLowerCase())
        );
    

    return (
        <div className="containerMain">
            <div className="headingClients">
                <h1>Clients</h1>
                 {/* Search input */}
                 <input className='searchInput'
                    type="text"
                    placeholder="Search clients..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <div className="buttonsTop">
                    <button type="submit">
                        <Link to="/offers" style={{ color: "white", textDecoration: "none" }}>
                            Export
                        </Link>
                    </button>
                    <button type="reset">
                        <Link to="/clients/addClient" style={{ color: "white", textDecoration: "none" }}>
                            Add
                        </Link>
                    </button>
                </div>
               
            </div>

            <ul className='headings'>
                <li>Company</li>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Title</li>
                <li>Department</li>
                <li>Country</li>
                <li>Commercial</li>
            </ul>
            {filteredClients.length > 0 ? (
                <ul className="clientList">
                    {filteredClients.map(client => (
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
                    ))}
                </ul>
            ) : (
                <p>No clients found.</p>
            )}
        </div>
    );
}

export default Clients;

