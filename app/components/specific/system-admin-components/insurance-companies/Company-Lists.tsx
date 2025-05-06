'use client';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const CompanyListsContainer = styled.div`
  padding: ${theme.spacing.lg};
  margin: 0 auto;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  height: 70%;
  width: 90%;
`;

const Title = styled.h1`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
`;

const WelcomeMessage = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSizes.md};
  margin-bottom: ${theme.spacing.xl};
`;

const CompanyLists = () => {
  return (
    <CompanyListsContainer>
      <Title>Company Lists</Title>
      <WelcomeMessage>
        zom
        Welcome to the Health Insurance Insurance Company hello Listssss
      </WelcomeMessage>
      {/* Add your dashboard content here */}
    </CompanyListsContainer>
  );
};

export default CompanyLists; 