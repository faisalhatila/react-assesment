import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state to indicate an error has occurred
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log error to an error reporting service here
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI when there is an error
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
