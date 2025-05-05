'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { theme } from '../../../../../styles/theme';
import { 
  LayoutDashboard, 
  Plus, 
  Building2, 
  Users, 
  User,
  Power
} from 'lucide-react';

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: ${theme.spacing.md};
`;

const Logo = styled.h1`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSizes.lg};
  margin: 0 0 ${theme.spacing.xl} 0;
  font-weight: ${theme.typography.fontWeights.semibold};
  font-family: ${theme.typography.fontFamily};
`;

const NavMenu = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

interface NavItemProps {
  $active?: boolean;
}

const NavItem = styled(Link)<NavItemProps>`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.sm};
  text-decoration: none;
  color: ${props => props.$active ? theme.colors.background : theme.colors.textSecondary};
  background: ${props => props.$active ? theme.colors.primary : 'transparent'};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeights.medium};
  font-size: ${theme.typography.fontSizes.xs};
  transition: all ${theme.transitions.default};
  font-family: ${theme.typography.fontFamily};

  &:hover {
    background: ${props => props.$active ? theme.colors.primary : theme.colors.inputBg};
    transform: translateX(4px);
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: ${theme.spacing.sm};
    stroke-width: 1.5px;
  }
`;

const UserSection = styled.div`
  padding: ${theme.spacing.sm};
  margin: 0 -${theme.spacing.sm};
  background: ${theme.colors.secondary};
  color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0;
  box-shadow: ${theme.shadows.lg};
`;

const UserImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${theme.spacing.sm};
  border: 2px solid ${theme.colors.background};
`;

const UserName = styled.h3`
  margin: 0;
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.background};
  font-family: ${theme.typography.fontFamily};
`;

const UserRole = styled.p`
  margin: ${theme.spacing.xs} 0;
  font-size: ${theme.typography.fontSizes.xs};
  color: rgba(255, 255, 255, 0.7);
  font-family: ${theme.typography.fontFamily};
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${theme.spacing.sm} 0;
  background: transparent;
  border: none;
  color: ${theme.colors.background};
  cursor: pointer;
  font-size: ${theme.typography.fontSizes.xs};
  gap: ${theme.spacing.xs};
  font-family: ${theme.typography.fontFamily};
  transition: all ${theme.transitions.default};
  margin-top: ${theme.spacing.sm};

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.5px;
  }
`;

const Sidebar = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  const isActive = (path: string) => {
    return pathname?.startsWith(path);
  };

  return (
    <SidebarContainer>
      <Logo>HealthInsurance</Logo>
      <NavMenu>
        <NavItem 
          href="/components/specific/system-admin-components/dashboard" 
          $active={isActive('/components/specific/system-admin-components/dashboard')}
        >
          <LayoutDashboard />
          Dashboard
        </NavItem>
        <NavItem 
          href="/components/specific/system-admin-components/new-insurance-company-register" 
          $active={isActive('/components/specific/system-admin-components/new-insurance-company-register')}
        >
          <Plus />
          Create New Company
        </NavItem>
        <NavItem 
          href="/components/specific/system-admin-components/insurance-companies" 
          $active={isActive('/components/specific/system-admin-components/insurance-companies')}
        >
          <Building2 />
          Insurance Companies
        </NavItem>
        <NavItem 
          href="/components/specific/system-admin-components/admins" 
          $active={isActive('/components/specific/system-admin-components/admins')}
        >
          <Users />
          Admins
        </NavItem>
        <NavItem 
          href="/components/specific/system-admin-components/profile" 
          $active={isActive('/components/specific/system-admin-components/profile')}
        >
          <User />
          Profile
        </NavItem>
      </NavMenu>
      <UserSection>
        <UserImage>
          <Image
            src="/images/john-abrham.jpg"
            alt="John Abrham"
            width={48}
            height={48}
            style={{ objectFit: 'cover' }}
          />
        </UserImage>
        <UserName>John Abrham</UserName>
        <UserRole>System Admin</UserRole>
        <LogoutButton onClick={handleLogout}>
          <span>Log out</span>
          <Power />
        </LogoutButton>
      </UserSection>
    </SidebarContainer>
  );
};

export default Sidebar;
