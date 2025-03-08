import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  const handleLoad = () => {
    setIsLoading(false);
  };

  

  return (
    <div>
      {isLoading && <LoadingScreen loading={isLoading} />}
      <iframe
        src="https://sesamelabs.xyz/ignicult/?tab=home"
        title="Ignicult Community"
        name='{"hideLogo": false, "overrideWidth": 1360, "leftNavBar": false, "alignedNavBar": true}'
        style={{ width: '100%', height: '100vh' }}
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export default App;
