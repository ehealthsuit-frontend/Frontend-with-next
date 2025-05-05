'use client';

import React from 'react';
import Layout from '../layout/layout';
import CompanyLists from './Company-Lists';
import StyledComponentsRegistry from '../../../../lib/registry';

export default function SystemAdminCompanyLists() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <CompanyLists />
      </Layout>
    </StyledComponentsRegistry>
  );
} 