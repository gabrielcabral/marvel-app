import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ListaDePersonagens from './components/ListaDePersonagens';
import CharacterDetails from './components/CharacterDetails';
import MainLayout from './layout/MainLayout';

const AppContainer = styled.div`
  background: var(--gray-900);
  color: var(--gray-300);
  
  display: flex;
 
`;

export const App = () => {
  return (
    <Router>
      <AppContainer>
        <MainLayout>
        <Routes>
          <Route path="/" element={<ListaDePersonagens />} />
          <Route path="/character/:characterId" element={<CharacterDetails />} />
        </Routes></MainLayout>
      </AppContainer>
    </Router>
  );
}

