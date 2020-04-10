import React from "react";
import { FooterContainer, Sections, Icon, TitleSection } from "./style";

export function Footer() {
  return (
    <FooterContainer>
      <Sections>
        <TitleSection>PRODUCTOS</TitleSection>
        <hr/>
        <div>Compre Junto</div>
        <div>Kit Look</div>
        <div>Completá tu compra</div>
        <div>Shop the look</div>
        <div>Sin stock</div>
      </Sections>
      <Sections>
        <TitleSection>MI CUENTA</TitleSection>
        <hr/>
        <div>Mis pedidos</div>
        <div>Wishlist</div>
        <div>Productos frecuentes</div>
        <div>Mis listas</div>
        <div>Mis recetas</div>
        <div>Mis datos</div>
      </Sections>
      <Sections>
        <TitleSection>CONTACTANOS</TitleSection>
        <hr/>
        <div>Nuestras Sucursales</div>
        <div>Horarios y Teléfonos</div>
      </Sections>
      <Sections>
        <Icon className="icon-icn_facebook"></Icon>
        <Icon className="icon-icn_twitter"></Icon>
        <Icon className="icon-icn_youtube"></Icon>
      </Sections>
    </FooterContainer>
  );
}
