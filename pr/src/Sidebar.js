import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <Nav.Link href="/">Create Post</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/explore">All Post</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}