import React from "react";
import { useSelector } from "react-redux";
import { Filters } from "../Filter/index";
import { ContentWrapper } from "../../Commons/style";
import {
  TitleContainer,
  HrContainer,
  Title,
  BodyContainer,
  Discount,
  ProductName,
  ProductContainer,
  ProductsGrid,
  ProductSellingPrice,
  ProductListPrice,
} from "./style";

export function Products() {
  const products = useSelector((state) => state.products);
  const filtered = useSelector((state) => state.filtered);

  

 

  // console.log(merged);
  console.log(filtered)
  return (
    <ContentWrapper>
      <TitleContainer>
        <HrContainer>
          <hr />
        </HrContainer>
        <Title>PRODUCTOS</Title>
        <HrContainer>
          <hr />
        </HrContainer>
      </TitleContainer>
      <BodyContainer>
        <Filters></Filters>
        <ProductsGrid>
          {/* <div style={{ flex: 3, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gridGap: 12 }}> */}
          {products &&
            products.map((product, i) => (
              filtered.length ? (
              <ProductContainer 
              // display={filtered.includes(product.id)}
              display={filtered.includes(product.attributes[0].value) || filtered.includes(product.attributes[1].value)}
              key={i}
              >
              {/* {console.log("aaaaaa" + product.attributes)}
              {console.log(product.attributes[1])} */}
              <Discount>20%</Discount>
              <img
                src={`assets/Productos/${product.image}`}
                alt={product.id}
              />
              <ProductName>{product.title}</ProductName>
              <ProductListPrice>
                ${product.price.listPrice.toFixed(2)}
              </ProductListPrice>
              <ProductSellingPrice>
                ${product.price.sellingPrice.toFixed(2)}
              </ProductSellingPrice>
            </ProductContainer>) 
            : (
              <ProductContainer key={i} display={"true"}>
              {/* {/* {console.log(product.attributes[0].value)}
              {console.log(product.attributes[1].value)} */}
              <Discount>20%</Discount>
              <img
                src={`assets/Productos/${product.image}`}
                alt={product.id}
              />
              <ProductName>{product.title}</ProductName>
              <ProductListPrice>
                ${product.price.listPrice.toFixed(2)}
              </ProductListPrice>
              <ProductSellingPrice>
                ${product.price.sellingPrice.toFixed(2)}
              </ProductSellingPrice>
            </ProductContainer>
            
            )
            )
            )}
        </ProductsGrid>
      </BodyContainer>
    </ContentWrapper>
  );
}
