import React from "react";
import {
  NavContainer,
  Logo,
  LogoContainer,
  SideNavContainer,
  TopNav,
  SearchBar,
  Carrito,
  TopNavList,
  ItemList,
  SideContainer,
  Input,
  Categories,
  TopContainer,
  CategoriesItem, 
  Form
} from "./style";

export function NavBar() {
  return (
    <NavContainer>
      <TopContainer>
        <LogoContainer>
      <Logo></Logo>
      </LogoContainer>
      <SideNavContainer>
        <TopNav>
            <TopNavList>
                <ItemList>
                    Ayuda
                </ItemList>

                <ItemList>
                    Mis Pedidos
                </ItemList>

                <ItemList>
                    Mi cuenta
                </ItemList>
            </TopNavList>
        </TopNav>
        <SideContainer>
        <SearchBar>
          <Form action="">
            <Input type="text" placeholder="Buscar un producto..."/>
          </Form>
        </SearchBar>
        <Carrito>
          <i className="icon-icn_cart"></i>
          MI CARRITO</Carrito>
        </SideContainer>
      </SideNavContainer>
      </TopContainer>
<Categories>
  <CategoriesItem>
    CATEGORIA NRO 1
  </CategoriesItem>
  <CategoriesItem>
    CATEGORIA NRO 2
  </CategoriesItem>
  <CategoriesItem>
    CATEGORIA NRO 3
  </CategoriesItem>
  <CategoriesItem>
    CATEGORIA NRO 4
  </CategoriesItem>
  <CategoriesItem>
    CATEGORIA NRO 5
  </CategoriesItem>
</Categories>
    </NavContainer>
  );
}
