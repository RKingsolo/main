import { useState, useEffect, createContext, useContext } from 'react';
import { User } from '../types';
import { getCurrentUser, setCurrentUser, getUsers } from '../utils/storage';

// Authentication context for managing user state across the application
const AuthContext = createContext<{
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}>({
  user: null,
  login: async () => false,
  logout: () => {},
  isAdmin: false
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on app load
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const users = getUsers();
      const foundUser = users.find(
        (u: any) => u.username === username && u.password === password
      );

      if (foundUser) {
        const loggedInUser: User = {
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
          role: foundUser.role,
          isAuthenticated: true
        };
        
        setUser(loggedInUser);
        setCurrentUser(loggedInUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setCurrentUser(null);
  };

  const isAdmin = user?.role === 'admin' && user?.isAuthenticated;

  return {
    user,
    login,
    logout,
    isAdmin,
    isLoading
  };
};

export { AuthContext };