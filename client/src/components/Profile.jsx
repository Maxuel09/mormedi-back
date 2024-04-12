import { useState } from 'react';


const Profile = () => {
    const [user, setUser] = useState(null);


    const handleLogin = () => {

        const userData = {
            name: 'Andrew',
            accountType: 'Cliente',
            loginDate: new Date().toLocaleDateString('es-ES')
        };
        setUser(userData);
    };

    return (
        <div>

            {!user && <button onClick={handleLogin}>Iniciar sesión</button>}


            {user && (

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    
                    <div style={{ marginRight: '10px' }}>

                        <p> {user.name}</p>
                        <p> {user.accountType}</p>
                    </div>

                </div>
            )}
        </div>
    );
};


export default Profile;