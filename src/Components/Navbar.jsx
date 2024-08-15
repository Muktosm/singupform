import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Form"}>Form</Link>
        <Link to={"/Form1"}>Form1</Link>
        <Link to={"/Formtwo"}>Form two</Link>
      </nav>
    </>
  );
}

export default Navbar