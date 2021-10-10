import React, { useCallback, useState } from "react";
import { Navbar, Nav, Link, Button, Modal, Form, FormLabel } from "react-bootstrap";

const NaviBar = () => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleInputChange = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

    const handleSubmit = useCallback(async () => {
        // const res = await fetch({
        //     url: "/api/login",
        //     method: "POST",
        //     data: form,
        // });
        console.log(form);
    }, [form]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>New Web Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Login</Nav.Link>
                        <Nav.Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>
                        <Button variant="primary" onClick={handleShow}>Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control name="email" value={form.email} type="email" placeholder="Enter email" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" value={form.password} type="password" placeholder="Enter password" onChange={handleInputChange} />
                        </Form.Group>
                        <div className="d-flex">
                            <Button variant="primary" className="ml-auto" onClick={handleSubmit}>Log In</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NaviBar;
