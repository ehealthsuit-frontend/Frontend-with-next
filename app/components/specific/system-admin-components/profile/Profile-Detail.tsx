'use client';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import ProfileForm from './Profile-Edit';
const ProfileDetailContainer = styled.div`
  padding: ${theme.spacing.lg};
  margin: 0 auto;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  height: 100%;
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

const ProfileDetail = () => {
  return (
    <ProfileDetailContainer>
      <Title>Profile Detail</Title>

      {/* Add your dashboard content here */}
      <ProfileForm/>
    </ProfileDetailContainer>
  );
};

export default ProfileDetail; 