import { useContext } from 'react';
import { RouterContext } from '../context/routerContext';

function useRouter() {
  return useContext(RouterContext);
}

export default useRouter;
