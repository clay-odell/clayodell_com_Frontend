import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Alert } from "react-bootstrap";
import { getContactsInfo } from "../api";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("Unauthorized: Please log in.");
          return;
        }

        const response = await getContactsInfo(token);
        if (response && response.contacts) {
          setContacts(response.contacts); // Correctly extracting 'contacts' array
        } else {
          setError("Invalid API response format.");
        }
      } catch (err) {
        setError("Error fetching contacts.");
        console.error(err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Admin Dashboard</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {contacts.length > 0 ? (
            <ListGroup>
              {contacts.map((contact) => (
                <ListGroup.Item key={contact.id}>
                  <strong>{contact.name}</strong> - {contact.email}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No contacts found.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminDashboard;
