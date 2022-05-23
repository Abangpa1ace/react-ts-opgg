import useReactRouter from '@/hooks/useReactRouter';
import { useEffect, useState } from 'react';

const useRouteState = (mapper: routeMappers) => {
  const { query, navigate } = useReactRouter();
  const [routeState, setRouteState] = useState();
  
  useEffect(() => {
    
  }, [])
}

export default useRouteState