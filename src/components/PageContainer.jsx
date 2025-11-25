import React from 'react';

function PageContainer({ children, variant = 'standard', className = '' }) {
  const variantClass = {
    standard: 'max-w-7xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl',
  }[variant] || 'max-w-7xl';

  return (
    <div className={`mx-auto ${variantClass} ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;