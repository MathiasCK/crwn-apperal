import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import MenuItem from "./Menu-Item.component";

const Directory = () => {
  const sections = useSelector(selectDirectorySection);
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  );
};

const DirectoryMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export default React.memo(Directory);
