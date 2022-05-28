import React from 'react';
import ReactDOM from 'react-dom';

const TooltipPortal: React.FC = ({ children }) => {
  const tooltipRoot = document.getElementById('tooltip-root');
  return ReactDOM.createPortal(children, tooltipRoot as Element);
}

export default TooltipPortal;