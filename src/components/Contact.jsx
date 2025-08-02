import React from "react";

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Mensaje enviado!');
    };

    return (
        <div className="contact">
            <h1>CONTACTANOS...</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Ingresa tu nombre</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="input-group"> 
                    <label htmlFor="email">Ingresa tu correo</label>
                    <input type="email" id="email" name="email" required />
                </div>    
                <button type="submit" className="send-button">
                    ENVIAR
                </button>
            </form>
        </div>
    );
}