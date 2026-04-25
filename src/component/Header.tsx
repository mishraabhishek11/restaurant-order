import logo from "../assets/logo.jpg";
import Button from "./ui/Button";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1 id="title">Restaurant Order</h1>
      </div>
      <p>
        <Button textOnly>Cart (0)</Button>
      </p>
    </header>
  );
}

export default Header;
