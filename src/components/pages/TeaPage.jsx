import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

export default function TeaPage({ tea }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={`${tea.image}`}
          style={{ width: '100px' }}
        />
        <Card.Body>
          <Card.Title>{tea.name}</Card.Title>
          <Card.Text>
            {tea.discription}
          </Card.Text>
          <Button variant="primary">На главную</Button>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Оставьте комментарий</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}
