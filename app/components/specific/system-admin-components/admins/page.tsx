'use client';

import React from 'react';
import Layout from '../layout/layout';
import AdminLists from './Admin-Lists';
import StyledComponentsRegistry from '../../../../lib/registry';
import AdminDetail from './Admin-Detail';
export default function SystemAdminAdminLists() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        {/* <AdminLists /> */}
        <AdminDetail/>
      </Layout>
    </StyledComponentsRegistry>
  );
} 