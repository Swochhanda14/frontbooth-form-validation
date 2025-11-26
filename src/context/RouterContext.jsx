import { useState } from 'react';
import { RouterContext } from './routerContext';

export default function Router({ children }) {
  const [route, setRoute] = useState({ path: '/', params: {} });

  const navigate = (path, params = {}) => {
    setRoute({ path, params });
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
