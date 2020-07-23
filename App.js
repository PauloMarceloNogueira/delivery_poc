import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/Screens/Home'
import Header from './src/Components/Header'
import Auth from './src/Components/Auth'
import GlobalStyle from './src/styles/global.styles'
import { ThemeProvider } from './src/Contexts/ThemeContext';
import { AuthProvider } from './src/Contexts/AuthContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Auth />
      </AuthProvider>
      {/* <SafeAreaView>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView> */}
    </ThemeProvider>
  );
}