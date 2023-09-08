import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Navbar expand="lg" >
                <Navbar.Brand href="#home"><img src={"https://bandina.vn/wp-content/uploads/2023/02/header-logo.png"} style={{ width: '200px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{marginRight:'50px'}}  >
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
                    <Nav style={{marginLeft:'50px'}}>
                        <Nav.Link href="#link" className="link_header ml-4" style={{ color: 'white' }}>Link</Nav.Link>
                        <Nav.Link href="#link" className="link_header ml-4">
                        <i class="fa-solid fa-shop" style={{color:'white'}}></i>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;