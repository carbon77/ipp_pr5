import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Contact from './Contact';
import ContactForm from './ContactForm';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const addContact = (contact) => {
        setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const updateContact = (updatedContact) => {
        setContacts(
            contacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        );
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className="app">
            <h1>Phone Contacts App</h1>
            <ContactForm onSubmit={addContact} />
            <Form.Group>
                <Form.Control type="text"
                              placeholder="Search..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Form.Group>
            {filteredContacts.map((contact) => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    onDelete={deleteContact}
                    onUpdate={updateContact}
                />
            ))}
        </Container>
    );
};

export default App;