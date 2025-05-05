'use client';

import React from 'react';
import Layout from '../layout/layout';
import CompanyRegister from './Company-Register';
import StyledComponentsRegistry from '../../../../lib/registry';

export default function SystemAdminCompanyRegister() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <CompanyRegister />
      </Layout>
    </StyledComponentsRegistry>
  );
} 