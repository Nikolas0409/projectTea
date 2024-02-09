import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function CommentCard({ comment, deleteHandler }) {
  return (
    <Card className="commentsBlock">
      <Card.Header />
      <Card.Body className="commentBlock">
        <Row>
          <Col xs={12}>
            <Card.Text>
              {comment.User.name}
              {' '}
              :
              {comment.title}
            </Card.Text>
          </Col>
          <button id="deleteButton" onClick={() => deleteHandler(comment?.id)} type="button">Удалить</button>
        </Row>
      </Card.Body>
    </Card>
  );
}
