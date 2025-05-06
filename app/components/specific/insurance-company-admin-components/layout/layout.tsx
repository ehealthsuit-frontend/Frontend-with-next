'use client';
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../common/Sidebar';
import { theme } from '@/styles/theme';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 200px; // Same as sidebar width
  padding: 24px;
  min-height: 100vh;
  background: ${theme.colors.backgroundSecondary};
  height: 70vh;
  width: 80vw;

`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout; 