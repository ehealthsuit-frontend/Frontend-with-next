'use client';

import React from 'react';
import Layout from '../layout/layout';
import AdminLists from './Admin-Lists';
import StyledComponentsRegistry from '../../../../lib/registry';

export default function SystemAdminAdminLists() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <AdminLists />
      </Layout>
    </StyledComponentsRegistry>
  );
} 