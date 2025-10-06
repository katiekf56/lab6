import { createContext, useState } from 'react';

export const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <WelcomeContext.Provider value={{ name, setName }}>
      {children}
    </WelcomeContext.Provider>
  );
};
