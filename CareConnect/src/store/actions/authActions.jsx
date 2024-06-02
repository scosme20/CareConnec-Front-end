import api from '../../services/apiService';

export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, token },
});

export const registerSuccess = (user, token) => ({
  type: 'REGISTER_SUCCESS',
  payload: { user, token },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    dispatch(loginSuccess(response.data.user, response.data.token));
  } catch (error) {
    console.error('Login failed', error);
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    const response = await api.post('/auth/register', { username, email, password });
    dispatch(registerSuccess(response.data.user, response.data.token));
  } catch (error) {
    console.error('Registration failed', error);
  }
};

export const logout = () => ({
  type: 'LOGOUT',
});
