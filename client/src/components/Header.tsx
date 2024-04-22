import { useState, useEffect } from "react"


const Header = () => {
    const [firstName, setFirstName] = useState("Peter");
   
    const [role, setRole] = useState("user");
   


    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:3000/users';

        // Function to fetch data from the API endpoint
        const fetchUsers = async () => {
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
                setFirstName(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the function to fetch clients
       fetchUsers();
    

    }, []);

    const today = new Date(); 

    const formatter = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', // Full name of the day of the week
      day: 'numeric', // Numeric day of the month
      month: 'long', // Full name of the month
      year: 'numeric' // Numeric year
    });
    
    const formattedDate = formatter.format(today);
    

    console.log(formattedDate); 
    

    return (
            <div className="header">       
                <h5>Hi {firstName}, today is {formattedDate}</h5>
                <img src="src/images/avatarPicture.png" className="avatarPicture" />         
                <div className="sub-header">
                    <h3>{firstName}</h3>
                    <p className="admin">{role}</p>
                </div>
            </div>
    )
}

export default Header