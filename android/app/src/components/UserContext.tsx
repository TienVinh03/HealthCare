import React, { createContext, useContext, useState } from 'react';

interface UserContextProps {
  userId: string | null;
  setUserId: (userId: string) => void;
}

const UserContext = createContext<UserContextProps>({
  userId: null,
  setUserId: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
