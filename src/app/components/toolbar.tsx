import * as React from 'react';
import Container from './container';
import SearchInput from './search-input';
import AddCompanyButton from './add-company-button';

export interface ToolbarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function Toolbar({ children, action }: ToolbarProps) {
  return (
    <div className="py-8">
      <Container className='flex items-center justify-between'>
        {children}
        {action}
      </Container>
    </div>
  );
}
