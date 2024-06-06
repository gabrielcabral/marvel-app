import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--gray-700);
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        &copy; 2024 My Marvel App. Todos os direitos reservados. Feito por{' '}
        <Link href="https://mono.direct/cabraldealmeida" target="_blank">
          Gabriel Cabral de Almeida
        </Link>
      </p>
    </FooterContainer>
  );
};

export default Footer;

