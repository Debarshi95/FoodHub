import React from "react";
import { Link } from "react-router-dom";
import { Cuisine } from "src/helpers";
import styled from "styled-components";

const Card = styled(Link)`
  width: 400px;
  height: 400px;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  flex-shrink: 0;
  background: #fff;
  /* border: 1.6px solid gray;*/
  border-radius: 14px;
  margin: 20px 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;
const CardTitle = styled.h3`
  font-family: inherit;
  text-align: center;
  color: #000;
  text-decoration: none;
`;
const ItemCard: React.FC<Cuisine> = ({ id, image, title }) => {
  return (
    <Card to={`/cuisines/${id}`}>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default ItemCard;
