import React, { useState } from 'react'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading&& <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', color: 'white', alignItems: 'center', backgroundColor: 'black', backdropFilter: 'blur(10px)', zIndex: 1000 }}>Loading...</div>}
      <iframe
        src="https://sesamelabs.xyz/ignicult/?tab=home"
        title="Ignicult Community"
        name='{"hideLogo": false, "overrideWidth": 1360, "leftNavBar": false, "alignedNavBar": true}'
        style={{ width: '100%', height: '100vh' }}
        onLoad={handleLoad}
      ></iframe>
    </div>
  )
}

export default App