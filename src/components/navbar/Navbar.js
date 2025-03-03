import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ethers } from "ethers";
import logo from "../../images/logo/logo.svg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      console.log("No Metamask wallet installed!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } catch (error) {
      console.error("Wallet connection failed", error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand
          href="#"
          className="me-lg-5 text-center d-flex flex-column align-items-center justify-content-center"
        >
          <img className="logo" src={logo} alt="logo" width="41" height="40" />
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
          {walletAddress ? (
            <Button variant="danger" className="btn-primary" onClick={disconnectWallet}>
              {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
            </Button>
          ) : (
            <Button variant="primary" className="btn-primary" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
