import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const StoicQuote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const getStoicQuote = async () => {
      try {
        const response = await fetch("https://stoic-quotes.com/api/quote");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error("There was an error fetching the quote", error);
      }
    };

    getStoicQuote();
  }, []);

  return (
    <Container className="text-center py-4">
      <Row>
        <Col>
          <h2 className="display-6">Stoic Quote of the Day</h2>
          {quote ? (
            <p className="lead">
              {quote.text} - <em>{quote.author}</em>
            </p>
          ) : (
            <p className="lead">Loading Stoic Quote...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default StoicQuote;
