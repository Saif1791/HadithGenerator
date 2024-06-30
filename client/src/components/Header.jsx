import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-2xl">SunnahSource</p>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
