import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import selectCollectionsForPreview from "../../../redux/shop/shop.selectors";
import CollectionPreview from "../Collection-preveiw.component";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <StyledCollections>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </StyledCollections>
  );
};
const StyledCollections = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export default React.memo(CollectionsOverview);
