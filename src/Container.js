import Styled from 'styled-components';

const Wrapper = Styled.div`
  margin-top: 150px;
`;

function Container(props) {
  return <Wrapper>{props.component}</Wrapper>;
}

export default Container;
