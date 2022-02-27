import React from 'react';

import { DownloadIcon, SettingsIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { GoBook } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components';

export const AdminNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('admin:nav.administration')}>
        <NavItem
          as={Link}
          to="/admin/users"
          isActive={isActive('/admin/users')}
          icon={SettingsIcon}
        >
          Devices
        </NavItem>
        <NavItem
          as={Link}
          to="/admin/download"
          isActive={isActive('/admin/download')}
          icon={DownloadIcon}
        >
          APK Download
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
