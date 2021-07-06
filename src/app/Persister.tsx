import React, { useState, ReactElement, useEffect } from 'react';
import sessionStore from 'data/session/SessionStore';

interface PropTypes {
  children: ReactElement | null;
  // children: ReactChildren;
}

const Persister: React.FC<PropTypes> = ({ children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    Promise.all([
      // LIST ASYNC ACTIONS TO LOAD
      sessionStore.authenticate(),
    ]).then(() => {
      setReady(true);
    });
  }, []);

  if (ready) return children;

  return null;
};

export default Persister;
