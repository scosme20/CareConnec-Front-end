// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import {logger} from '../logs/logger'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error(`Error caught by ErrorBoundary: ${error}, Info: ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please reload the page.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children; 
  }
}

export default ErrorBoundary;

