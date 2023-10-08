import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Contact = ({ contact, onDelete, onUpdate }) => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(contact.name);
    const [phone, setPhone] = useState(contact.phone);

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate({ ...contact, name, phone });
        setEditing(false);
    };

    return (
        <Card className="contact-card">
            <Card.Body>
                {editing ? (
                    <Form onSubmit={handleUpdate}>
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
                        <Button variant="primary" type="submit">Update</Button>
                    </Form>
                ) : (
                    <>
                        <Card.Title>{contact.name}</Card.Title>
                        <Card.Text>Phone: {contact.phone}</Card.Text>
                        <Button variant="info" onClick={() => setEditing(true)} style={{marginRight: '1em'}}>Edit</Button>
                        <Button variant="danger" onClick={() => onDelete(contact.id)}>Delete</Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default Contact;