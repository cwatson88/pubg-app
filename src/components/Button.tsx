import * as React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;
const Button = React.memo(Btn);
export default Button;
