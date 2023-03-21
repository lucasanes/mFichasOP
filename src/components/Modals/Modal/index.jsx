import { Container, Content, ContentContainer } from "./styles";
export function Modal({ isOpen, setClose, children }) {
  return (
    <Container open={isOpen} onClose={setClose}>
      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>
    </Container>
  );
}