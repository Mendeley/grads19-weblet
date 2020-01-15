import React from "react";
import styled from "styled-components";

const StyledOption = styled.div`
}
  
`;

const Option = ({ key, value }) => (
    <StyledOption>
        <option key={key} value={value} />
    </StyledOption>
);

export default Option;