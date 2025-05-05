'use client';
import { Inter } from 'next/font/google';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Header from '../components/common/Header';
import StyledComponentsRegistry from '../lib/registry';

const inter = Inter({ subsets: ['latin'] });

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LayoutContainer>
              <Header />
              <MainContent>
                {children}
              </MainContent>
            </LayoutContainer>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
