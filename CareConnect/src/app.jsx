// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
import store from './store';
import { AppProvider } from './context/AppContext.jsx';
import ErrorBoundary from './error/errorBoundary.jsx';
import { FamilyProvider } from './context/familyContext.jsx';
import { DonationProvider } from './context/donationContext.jsx';
import { HostelProvider } from './context/hostelContext.jsx';
import { VolunteerProvider } from './context/volunteerContext.jsx';
import { HomelessProvider } from './context/homelessContext.jsx';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;



