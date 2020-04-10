import styled from "@emotion/styled";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  background-color: #f5f5f5;
  padding: 22px 38px 28px 41px;
`;

export const Logo = styled.img`
  content: url("assets/logo_fizzmod.svg");
`;

export const SideNavContainer = styled.div`
  width: 100%;
`;

export const TopNav = styled.div`
  background-color: red;
  border-bottom: 1px solid #d1d3d4;
  padding: 8px 20px 8px 20px;
`;

export const TopNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export const ItemList = styled.li`
  padding-left: 27px;
  color: #1db779;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const SearchBar = styled.div`
  background-color: blue;
  width: 100%;
`;

export const Form = styled.form`
  
`;

export const SideContainer = styled.div`
  display: flex;
`;
export const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 14px 0px 18px 17px;
  background-color: yellow;
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 27px;
`;

export const Carrito = styled.div`
  width: 256px;
  background-color: black;
  color: white;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const Categories = styled.ol`
  list-style: none;
  background-color: #1db779;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const CategoriesItem = styled.li`
  padding: 17px 23px 19px 23px;
  font-family: "Open Sans";
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
`;
