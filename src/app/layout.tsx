import React from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instasnitch",
  description: "This app should show you who are you following on Instagram, but they are not following you back.",
};

const navItems = [{ 
  label: 'Home',
  href: '/',
 },
 { 
  label: 'Guide',
  href: '/guide',
}];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Instasnitch
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item.label} sx={{ color: '#fff' }} href={item.href}>
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
