/* React Dependencies */
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

/* Local Components */
import AppRouter from './componets/AppRouter'
import ErrorBoundaryFallback from './componets/ErrorBoundaryFallback'

const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App;