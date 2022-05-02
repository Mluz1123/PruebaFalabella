import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuLink,
  MobileIcon,
} from "./Navbar.elements";
import {
  FaOsi,
  FaBars,
  FaHome,
  FaFileExcel,
  FaDelicious,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaOsi />
            <p>Pokemon Api</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  Home
                </div>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaDelicious />
                  Dashboard
                </div>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaFileExcel />
                  Exportar
                </div>
              </MenuLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
