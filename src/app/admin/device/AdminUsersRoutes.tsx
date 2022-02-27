import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Error404 } from '@/errors';

import { PageUsers } from './PageDevice';
import { PageUserCreate } from './PageUserCreate';
import { PageUserUpdate } from './PageUserUpdate';

const AdminUsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageUsers />} />
      <Route path="create" element={<PageUserCreate />} />
      <Route path=":login" element={<PageUserUpdate />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AdminUsersRoutes;
