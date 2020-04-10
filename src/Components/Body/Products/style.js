import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
`;

export const HrContainer = styled.div`
  width: 100%;
`;
export const Title = styled.h1`
  all: unset;
  padding: 0 24px 0 24px;
  color: #1e1e1e;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 49px;
  text-align: center;
`;

export const BodyContainer = styled.div`
display: flex;
padding: 69px 0 69px 0;
`

export const Discount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #00c4c1;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
`;

export const ProductName = styled.h3`
  all: unset;
  font-family: "Open Sans";
  font-size: 16px;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
`;

export const ProductSellingPrice = styled.span`
  color: #1db779;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

export const ProductListPrice = styled.span`
  color: #9b9b9b;
  font-family: "Open Sans";
  font-size: 13px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  text-decoration: line-through;
`;

export const ProductContainer = styled.div`
  display: ${props => props.display ? "flex" : "none"};
  flex-direction: column;
  max-width: 200px;
`;

export const ProductsGrid = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12;
`;
