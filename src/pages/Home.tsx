import React from "react";
import { requests } from "../api";
import Search from "../components/Search";
import { Cuisine, getRandomCuisineName } from "../helpers";
import ItemCard from "../components/ItemCard";
import styled from "styled-components";
import Loader from "../components/Loader";

const BannerImage = styled.div`
  width: 100%;
  height: 560px;
  background: url("/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    background-color: #000;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
  }
`;
const Logo = styled.h2`
  position: absolute;
  color: red;
  font-family: inherit;
  left: 24px;
  top: 10px;
`;

const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Home: React.FC = () => {
  const [cuisines, setCuisinies] = React.useState<Array<Cuisine> | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const { getSearchResults } = requests();

  React.useEffect(() => {
    let cuisineName = getRandomCuisineName();
    if (searchQuery && searchQuery !== "") {
      cuisineName = searchQuery;
    }
    // console.log(cuisineName);
    getSearchResults(cuisineName)
      .then((res) => res.json())
      .then((data) => {
        setCuisinies(data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [getSearchResults, searchQuery]);
  // console.log(cuisines);

  if (loading) return <Loader />;
  return (
    <>
      <BannerImage>
        <Logo>FoodHub</Logo>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </BannerImage>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "85%",
          margin: "2rem auto",
          minHeight: "40%",
          justifyContent: "space-evenly",
        }}
      >
        {cuisines && cuisines.length > 0 ? (
          cuisines.map((cuisine: Cuisine) => (
            <ItemCard
              key={cuisine.id}
              id={cuisine.id}
              title={cuisine.title}
              image={cuisine.image}
            />
          ))
        ) : (
          <NoData>
            <h1>No data found</h1>
          </NoData>
        )}
      </div>
    </>
  );
};

export default Home;
