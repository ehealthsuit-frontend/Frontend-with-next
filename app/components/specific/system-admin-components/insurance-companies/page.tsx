'use client';

import React from 'react';
import Layout from '../layout/layout';
import CompanyLists from './Company-Lists';
import StyledComponentsRegistry from '../../../../lib/registry';
import CompanyDetail from './Company-Detail';
import CompanyEdit from './Company-Edit';

export default function SystemAdminCompanyLists() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        {/* <CompanyLists /> */} 
        {/* <CompanyDetail/> */}
        <CompanyEdit/>

      </Layout>
    </StyledComponentsRegistry>
  );
} 