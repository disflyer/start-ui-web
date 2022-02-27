import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Error404 } from '@/errors';

import Contact from './contact/Contact';
import Partners from './partners/Partners';
import Team from './team/Team';
import { US } from './us/US';

const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="us" replace />} />
      <Route path="us/*" element={<US />} />
      <Route path="team/*" element={<Team />} />
      <Route path="partners/*" element={<Partners />} />
      <Route path="contact/*" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AboutRoutes;
