import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone });
        setName('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Contact</Button>
        </Form>
    );
};

export default ContactForm;