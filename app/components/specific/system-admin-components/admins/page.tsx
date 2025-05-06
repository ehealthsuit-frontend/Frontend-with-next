'use client';

import React from 'react';
import Layout from '../layout/layout';
import AdminLists from './Admin-Lists';
import StyledComponentsRegistry from '../../../../lib/registry';
import Admin from './Admin-Edit';
import AdminPasswordReset from './Admin-Password-Reset';
import AdminDetail from './Admin-Detail';
import AdminEdit from './Admin-Edit';
// import AdminDetail from './Admin-Detail';
export default function SystemAdminAdminLists() {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <AdminLists />
        {/* <AdminDetail/> */}
        {/* <AdminEdit/> */}
        {/* <Admin/> */}
        {/* <AdminPasswordReset/> */}

      </Layout>
    </StyledComponentsRegistry>
  );
} 