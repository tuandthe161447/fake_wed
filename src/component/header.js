import { Nav, Navbar, Container,NavDropdown } from "react-bootstrap";
import { useEffect, useState } from 'react';
const Header = () => {
    const [users, setUsers] = useState([]);
    let user

    if (sessionStorage.getItem('uName') != null) {
        user = JSON.stringify(sessionStorage.getItem('uName'))

    }

    let userrole = JSON.parse(sessionStorage.getItem('userrole'))
    console.log(userrole);

    useEffect(() => {
        fetch(" http://localhost:9999/users").then((res) => res.json())
            .then((data) => {
                setUsers(data)

            }).catch(err => {
                console.log(err.message)
            })
    }, [])
    return (
        <Container style={{ marginTop: '20px' }}>
            <Navbar expand="lg" >
                <Navbar.Brand href="#home"><img src={"https://bandina.vn/wp-content/uploads/2023/02/header-logo.png"} style={{ width: '200px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ marginRight: '50px' }}  >
                        <Nav.Link href="#home" className="link_header ml-4" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#link" className="link_header ml-4" style={{ color: 'white' }}>Link</Nav.Link>
                        <Nav.Link href="#link" className="link_header ml-4" style={{ color: 'white' }}>Link</Nav.Link>
                        <Nav.Link href="#link" className="link_header ml-4" style={{ color: 'white' }}>Link</Nav.Link>
                        <Nav.Link href="#link" className="link_header ml-4" style={{ color: 'white' }}>Link</Nav.Link>
                    </Nav>
                    <div class="box">
                        <div class="container-1">
                            <span class="icon"><i class="fa fa-search"></i></span>
                            <input type="search" id="search" placeholder="Search..." />
                        </div>
                    </div>
                    <Nav style={{ marginLeft: '50px' }}>
                        

                        {
                            (user != undefined) ? <Nav  >

                                <NavDropdown title={"Hello " + user} className="link_header ml-4" style={{ color: 'white' }} >
                                    <NavDropdown.Item href="/profile">Edit profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
                                    <NavDropdown.Item href="/login" >
                                        {
                                            userrole == true ? <Nav>
                                                <Nav.Link href='/postmanager' style={{ color: 'black' }}>
                                                    Blog Manage
                                                </Nav.Link>

                                            </Nav>
                                                :
                                                <></>
                                        }
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/login" >
                                        {
                                            userrole == true ? <Nav>
                                                <Nav.Link href='/usermanager' style={{ color: 'black' }}>
                                                    User Manage
                                                </Nav.Link>

                                            </Nav>
                                                :
                                                <></>
                                        }
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/login" >
                                        {
                                            userrole == true ? <Nav>
                                                <Nav.Link href='/aPostManager' style={{ color: 'black' }}>
                                                    Post Manage
                                                </Nav.Link>

                                            </Nav>
                                                :
                                                <></>
                                        }
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                                :
                                <Nav>
                                    <Nav.Link href="/login"  className="link_header ml-4" style={{ color: 'white' }} >Account</Nav.Link>


                                </Nav>
                        }



                        <Nav.Link href="#link" className="link_header ml-4">
                            <i class="fa-solid fa-shop" style={{ color: 'white' }}></i>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;