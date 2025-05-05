'use client';

import React from 'react';
import Layout from '../layout/layout';
import ProfileDetail from './Profile-Detail';
import StyledComponentsRegistry from '../../../../lib/registry';

export default function SystemAdminProfileDetail() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <ProfileDetail />
      </Layout>
    </StyledComponentsRegistry>
  );
} 