import React, { useState } from 'react';
import axios from 'axios';

const CreateOfferForm: React.FC = () => {
    const [offerData, setOfferData] = useState({
        code: '',
        expected_date: '',
        place: '',
        importance: '',
        comments: '',
        title: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOfferData({
            ...offerData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/offers', offerData);
            console.log(response.data);
            // manejar la creación exitosa de la oferta
        } catch (error) {
            console.log(error);
            // manejar errores en la creación de la oferta
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="code">Código:</label>
            <input
                type="text"
                id="code"
                name="code"
                value={offerData.code}
                onChange={handleInputChange}
            />
            <label htmlFor="expected_date">Fecha esperada:</label>
            <input
                type="date"
                id="expected_date"
                name="expected_date"
                value={offerData.expected_date}
                onChange={handleInputChange}
            />
            <label htmlFor="place">Lugar:</label>
            <input
                type="text"
                id="place"
                name="place"
                value={offerData.place}
                onChange={handleInputChange}
            />
            <label htmlFor="importance">Importancia:</label>
            <input
                type="text"
                id="importance"
                name="importance"
                value={offerData.importance}
                onChange={handleInputChange}
            />
            <label htmlFor="comments">Comentarios:</label>
            <textarea
                id="comments"
                name="comments"
                value={offerData.comments}
                onChange={handleInputChange}
            />
            <label htmlFor="title">Título:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={offerData.title}
                onChange={handleInputChange}
            />
            <button type="submit">Crear oferta</button>
        </form>
    );
};

export default CreateOfferForm;
