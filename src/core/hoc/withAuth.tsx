import { useEffect } from "react";

export default function withAuth(WrappedComponent: React.ComponentType<any>) {
  const AuthWrapper = (props: any) => {
    useEffect(() => {}, []);

    return <WrappedComponent {...props} />;
  };
  return AuthWrapper;
}
