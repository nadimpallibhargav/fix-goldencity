import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.svg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { ethers } from "ethers";

function NavBar() {
  const connectWallet = async () => {
    let signer = null;
    let provider;

    if (typeof window.ethereum === "undefined") {
      console.log("No Metamask wallet installed!");
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();

      const address = await signer.getAddress();
      console.log(address);
    }
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5 text-center d-flex flex-column align-items-center justify-content-center">
          <img className="logo" src={logo} alt="logo" width='41' height='40' />
          <span>GoldenCity.io</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
             onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
