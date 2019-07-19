import React from 'react';
import Scanner from './components/scanner';
import RecievingDetail from './components/recievingDetail'
import RenderScan from './components/render-scan'
import './App.css';

function App() {
  return ( 
    <div className="scan-container">
    {/* <Scanner /> */}
    {/* <RecievingDetail /> */}
    <RenderScan />
    </div>
  );
}


export default App;
