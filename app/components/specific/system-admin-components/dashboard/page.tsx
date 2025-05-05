'use client';

import React from 'react';
import Layout from '../layout/layout';
import Dashboard from './Dashboard';
import StyledComponentsRegistry from '../../../../lib/registry';

export default function SystemAdminDashboard() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <Dashboard />
      </Layout>
    </StyledComponentsRegistry>
  );
} 