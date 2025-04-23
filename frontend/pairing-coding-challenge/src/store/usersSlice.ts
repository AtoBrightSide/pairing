import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  user: { id: string; name: string; email: string } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<{ isAuthenticated: boolean; user: UserState['user'] }>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
    clearAuthState: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setAuthState, clearAuthState } = authSlice.actions;
export default authSlice.reducer;