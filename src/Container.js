import Styled from "styled-components";

const Wrapper = Styled.div`
`;

function Container(props) {
  return <Wrapper>{props.component}</Wrapper>;
}

export default Container;
