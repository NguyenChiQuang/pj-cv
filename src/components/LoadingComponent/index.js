import React from 'react';
import Page500 from '../errors/Page500';

const LoadingComponent = ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
        return null;
    }
    // Handle the error state
    else if (error) {
      return <Page500 />;
    }
    else {
      return null;
    }
};

export default LoadingComponent;