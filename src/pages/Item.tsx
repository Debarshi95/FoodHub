import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "../helpers";
import { requests } from "../api";
import Loader from "../components/Loader";
import styled from "styled-components";

interface Params {
  id: string;
  cuisine: string;
}

const ItemRoot = styled.div`
  width: 75%;
  height: calc(100vh - 3rem);
  display: flex;
  margin: 1rem auto;
  align-items: center;

  @media only screen and (max-width: 992px) {
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ItemImg = styled.img`
  width: 460px;
  height: 460px;
  object-fit: fill;
  border-radius: 30px;
  position: sticky;
  top: 0;
`;

const ItemDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 60px;
  font-family: inherit;
  height: 100%;
`;

const Item: React.FC = () => {
  const [itemInfo, setItemInfo] = React.useState<ItemDetails | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const { getRecipeInformation } = requests();
  const { id } = useParams<Params>();

  React.useEffect(() => {
    getRecipeInformation(id)
      .then((res) => res.json())
      .then((data) => setItemInfo(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [getRecipeInformation, id]);
  //   console.log(itemInfo);

  if (loading) return <Loader />;
  return (
    <ItemRoot>
      <ItemImg src={itemInfo?.image} />
      <ItemDetailsCard>
        <h1>{itemInfo?.title}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4>Dish Type</h4>
          <div style={{ display: "flex" }}>
            {itemInfo?.dishTypes?.map((type) => (
              <p style={{ marginLeft: "10px" }}>{type?.toUpperCase()}</p>
            ))}
          </div>
        </div>
        <div>
          <h4>Steps for Preparation:</h4>
          {itemInfo?.analyzedInstructions?.map((instructions) => (
            <div>
              {instructions?.steps.map((step, index) => (
                <li key={index} style={{ margin: "14px 0" }}>
                  {step.step}
                </li>
              ))}
            </div>
          ))}
        </div>
      </ItemDetailsCard>
    </ItemRoot>
  );
};

export default Item;
