// eslint-disable-next-line no-unused-vars
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/routes';

export const AppRouter = () => (
  <RouterProvider router={router} />
);
