import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

export default function TeaPage({ tea }) {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
  };
  return (
    <>
      <div style={cardStyle}>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`${tea.image}`}
            style={{ width: '286px' }}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{tea.name}</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              {tea.discription}
            </Card.Text>
            <Button variant="primary" href="/" style={{ marginLeft: '70px' }}>На главную</Button>
          </Card.Body>
        </Card>
      </div>
      <Form style={cardStyle}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '50%' }}>
          <Form.Label />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label />
          <Form.Control as="textarea" rows={3} placeholder="Оставьте комментарий" />
        </Form.Group>
        <Button variant="success" style={cardStyle}>Добавить</Button>
        {' '}
      </Form>
    </>
  );
}
