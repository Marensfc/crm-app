import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <div
      className={clsx(
        'inline-flex px-3.5 py-1 rounded-[28px] font-medium text-sm gap-2 items-center',
        status === Status.Active && 'bg-green-100 text-green-700',
        status === Status.NotActive && 'bg-red-100 text-red-700',
        status === Status.Pending && 'bg-orange-100 text-orange-700',
        status === Status.Suspended && 'bg-blue-100 text-blue-700',
      )}
    >
      <div className="h-1 w-1 bg-current rounded-[50%]" />
      {children}
    </div>
  );
}
