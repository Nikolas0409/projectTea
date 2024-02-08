/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ user }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Чайный мир</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Сорта чая</Nav.Link>
          </Nav>
          {!user
            ? (
              <>
                <Nav className="me-auto">
                  <Nav style={{ color: 'white' }}>Добро пожаловать, гость!</Nav>
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href="/signup">
                    Регистрация
                  </Nav.Link>
                  <Nav.Link href="/login">Вход</Nav.Link>
                </Nav>
              </>
            )
            : (
              <>
                <Nav className="me-auto">
                  <Nav style={{ color: 'white' }}>
                    Добро пожаловать,
                    {' '}
                    {user.name}
                    !
                  </Nav>
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href="/admin">
                    Админ-панель
                  </Nav.Link>
                  <Nav.Link href="/api/logout">Выход</Nav.Link>
                </Nav>
              </>
            )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
