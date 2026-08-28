import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

window.addEventListener('error', (e) => {
  document.body.innerHTML = `<div style="color:red;padding:20px;background:black;"><h1>Error</h1><pre>${e.error?.stack || e.message}</pre></div>`;
});

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) return <div style={{color:'red', padding:'20px', background:'black'}}><h1>React Error</h1><pre>{this.state.error?.stack || this.state.error?.message}</pre></div>;
    return this.props.children;
  }
}

import React from 'react';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
