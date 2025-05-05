'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Menu, 
  Search, 
  Plus, 
  Bell, 
  ChevronDown 
} from 'lucide-react';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xs} ${theme.spacing.xs};
  background: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.border};
  height: 36px;
  width: 100%;
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 480px;
  margin: 0 ${theme.spacing.xs};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  padding-left: 40px;
  border: none;
  border-radius: ${theme.borderRadius.md};
  background: #f5f5f5;
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.textPrimary};

  &:focus {
    outline: none;
    background: #eeeeee;
  }

  &::placeholder {
    color: ${theme.colors.textSecondary};
    opacity: 0.5;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.textSecondary};
  opacity: 0.5;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: ${theme.colors.textSecondary};
  color: ${theme.colors.background};
  cursor: pointer;
  transition: background-color ${theme.transitions.default};

  &:hover {
    background: ${props => {
      const color = theme.colors.primary;
      return `${color}dd`;
    }};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const NotificationBadge = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${theme.colors.warning};
    color: white;
    font-size: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  transition: background-color ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.inputBg};
  }

  span {
    font-size: ${theme.typography.fontSizes.sm};
    color: ${theme.colors.textSecondary};
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.textSecondary};

  &:hover {
    color: ${theme.colors.textPrimary};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1.5px;
  }
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  return (
    <HeaderContainer>
      <MenuButton>
        <IconWrapper>
          <Menu />
        </IconWrapper>
      </MenuButton>

      <SearchContainer>
        <SearchIcon>
          <IconWrapper>
            <Search />
          </IconWrapper>
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>

      <ActionsContainer>
        <AddButton onClick={() => router.push('/components/specific/system-admin-components/new-insurance-company-register')}>
          <IconWrapper>
            <Plus />
          </IconWrapper>
        </AddButton>

        <NotificationBadge>
          <IconWrapper>
            <Bell />
          </IconWrapper>
          <span>3</span>
        </NotificationBadge>

        <LanguageSelector>
          <Image
            src="/images/flags/gb.svg"
            alt="English"
            width={24}
            height={16}
          />
          <span>English</span>
          <IconWrapper>
            <ChevronDown />
          </IconWrapper>
        </LanguageSelector>
      </ActionsContainer>
    </HeaderContainer>
  );
};

export default Header; 