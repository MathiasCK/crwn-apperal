import React from "react";
import styled from "styled-components";
import {Link, useRouteMatch} from "react-router-dom";

const CollectionItem = ({item, collectionId}) => {
  const {params} = useRouteMatch();

  const {name, price, imageUrl, id, imageUrl2, sizes} = item;

  const images = imageUrl2 && imageUrl;

  // HVER ENKELT ITEM I COLLECTION
  return (
    <StyledCollection>
      <Link
        style={{width: "100%", height: "100%"}}
        to={`/shop/${collectionId || params.collectionId}/${id}`}
        sizes={sizes}
      >
        {images && (
          <BackgroundImage
            className="image"
            imageUrl={imageUrl}
            imageUrl2={imageUrl2}
          />
        )}
      </Link>
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">NOK {price} </span>
      </CollectionFooter>
    </StyledCollection>
  );
};

const StyledCollection = styled.div`
  //width: 22vw;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  align-items: center;
  position: relative;

  .description {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 75%;
    left: 50%;
    display: none;
    transform: translateX(-50%);
    color: black;
    background: white;
    padding: 0 1rem;
  }

  &:hover {
    .image {
      //opacity: 0.8;
      //transform: scale(1.1);
      //transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    .description {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 1rem 0;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  will-change: background-image;
  ${({imageUrl2}) =>
    imageUrl2
      ? `&:hover {
				cursor: pointer;
		background-image: url('${imageUrl2}');
	}`
      : ""};
`;

export default CollectionItem;
