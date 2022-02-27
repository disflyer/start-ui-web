import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Download from '@/app/admin/download/Download';
import { Error404 } from '@/errors';

const AdminUsersRoutes = React.lazy(
  () => import('@/app/admin/device/AdminUsersRoutes')
);

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" replace />} />
      <Route path="users/*" element={<AdminUsersRoutes />} />
      <Route path="download/*" element={<Download />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AdminRoutes;
