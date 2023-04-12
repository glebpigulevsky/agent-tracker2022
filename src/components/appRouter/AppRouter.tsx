import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from '../../pages/loginPage';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
