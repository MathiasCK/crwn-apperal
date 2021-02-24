import React from "react";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/animations";
import { useRouteMatch } from "react-router";
import CollectionItem from "../../components/collection/Collection-item.component";

const CollectionPage = () => {
  const match = useRouteMatch();

  // HVER ENKELT COLLECTION PÅ SHOP SIDEN
  const collection = useSelector(selectCollection(match.params.collectionId));

  const { title, items, routeName } = collection;
  return (
    <StyledCollectionPage
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} collectionId={routeName} item={item} />
        ))}
      </div>
    </StyledCollectionPage>
  );
};

const StyledCollectionPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  .title {
    font-size: 50px;
    font-weight: lighter;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;

    & .collection-item {
      margin-bottom: 30px;
    }
  }
`;

export default CollectionPage;
