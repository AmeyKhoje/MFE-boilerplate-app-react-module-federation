import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mount } from 'opportunity/Opportunity';

const appBaseName = '/opportunity';

const LoginApp = () => {
  const wrappedRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loginAppNavigationEventHandler = (event: Event) => {
      const pathName = (event as CustomEvent<string>).detail;
      const newPathName = `${appBaseName}${pathName}`;
      if (newPathName === location.pathname) {
        return;
      }
      navigate(newPathName);
    };

    window.addEventListener(
      '[opportunity] navigated',
      loginAppNavigationEventHandler
    );

    return () =>
      window.removeEventListener(
        '[opportunity] navigated',
        loginAppNavigationEventHandler
      );
  }, [location]);

  useEffect(() => {
    if (location.pathname.startsWith(appBaseName)) {
      window.dispatchEvent(
        new CustomEvent('[container] navigated', {
          detail: location.pathname.replace(appBaseName, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrappedRef.current,
      initialPathName: location.pathname.replace(appBaseName, ''),
    });
    isFirstRunRef.current = false;
  }, [location]);

  return <div ref={wrappedRef} id="opportunity-app"></div>;
};

export default LoginApp;
