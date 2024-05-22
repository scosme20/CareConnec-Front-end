import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
import { AppProvider } from './context/AppContext.jsx';
import ErrorBoundary from './error/errorBoundary.jsx';
import { FamilyProvider } from './context/familyContext.jsx';
import { DonationProvider } from './context/donationContext.jsx';
import { HostelProvider } from './context/hostelContext.jsx';
import { VolunteerProvider } from './context/volunteerContext.jsx';
import { HomelessProvider } from './context/homelessContext.jsx';

const App = () => (
  <AppProvider>
    <ErrorBoundary>
      <FamilyProvider>
      <DonationProvider>
      <HostelProvider>
      <VolunteerProvider>
      <HomelessProvider>
      <RouterProvider router={router} />
      </HomelessProvider>
      </VolunteerProvider>
      </HostelProvider>
      </DonationProvider>
      </FamilyProvider>
    </ErrorBoundary>
  </AppProvider>
);

export default App;


