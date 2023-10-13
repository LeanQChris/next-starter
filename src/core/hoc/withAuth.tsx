export default function withAuth(WrappedComponent: React.ComponentType<any>) {
  const AuthWrapper = (props: any) => {
    return <WrappedComponent {...props} />;
  };
  return AuthWrapper;
}
