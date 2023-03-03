import React from 'react';
import device from 'current-device';
import { WidgetProvider } from './context/widgetContext';
import Root from './components/Root';
function App() {

  return (
    <div className="App">
      <WidgetProvider>
        <Root></Root>
      </WidgetProvider>

    </div>
  );
}

export default App;
