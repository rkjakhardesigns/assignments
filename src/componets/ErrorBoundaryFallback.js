import { useErrorBoundary } from "react-error-boundary";

const ErrorBoundaryFallback = ({ error }) => {
    const { resetBoundary } = useErrorBoundary();

    return (
        <div>
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button onClick={resetBoundary}>Try again</button>
        </div>
    );
}

export default ErrorBoundaryFallback;