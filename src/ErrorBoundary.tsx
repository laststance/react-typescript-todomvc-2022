import React, { useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { styled } from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

interface State {
  error: Error | null;
  info: { componentStack: string } | null;
}

// Fallback UI Component
const ErrorBoundaryFallbackComponent: React.FC<State> = ({ error, info }) => (
  <Layout>
    <Message>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <pre>{info?.componentStack || 'No component stack available.'}</pre>
      <span role="img" aria-label="face-emoji">
        😞
      </span>
    </Message>
  </Layout>
);

// Error Boundary Component using react-error-boundary
const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  const handleError = (error: Error, info: React.ErrorInfo) => {
    console.error('Logging error:', error);
    console.error('Error info:', info);
    setErrorInfo(info);
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={({ error }) => (
        <ErrorBoundaryFallbackComponent
          error={error}
          info={{
            componentStack: errorInfo?.componentStack || 'No component stack available.',
          }}
        />
      )}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;

// Styled components
const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  padding: 40px;
  border: 2px #78909c solid;
  border-radius: 5px;
  font-size: 24px;
  color: #78909c;
`;
