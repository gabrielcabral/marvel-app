import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const MainContent = styled.main`
padding: 20px;
display: flex;

align-items: center;
  width: 100%;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </div>
  );
};

export default MainLayout;
