import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function CommentCard({ comment }) {
  return (
    <Card className="commentsBlock">
      <Card.Header />
      <Card.Body>
        <Row>
          <Col xs={12}>

            <Card.Text>
              {comment.User.name}
              {' '}
              :
              {comment.title}
            </Card.Text>

          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
