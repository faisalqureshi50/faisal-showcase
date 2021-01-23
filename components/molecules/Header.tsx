import React from "react";
import Container from "../atoms/Container";

const Header = () => {
  return (
    <header className="border-b">
      <Container className="flex py-2">
        <img
          src="https://static.wixstatic.com/media/553d6a_ecfd3ef0ea7646a5b8739bb4c531f357~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_4.00_1.00_0.00/Logo%20(10).webp"
          alt="logo"
          className="cursor-pointer"
        />
        <p className="ml-2 m-auto font-semibold text-lg cursor-pointer">Education Showcase</p>
      </Container>
    </header>
  );
};

export default Header;
