import Styled from "styled-components";

interface ContainerProps {
  component: React.ReactNode;
}

const Wrapper = Styled.div`
`;

function Container(props: ContainerProps) {
  return <Wrapper>{props.component}</Wrapper>;
}

export default Container;
