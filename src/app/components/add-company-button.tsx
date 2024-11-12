'use client';

import Button from './button';
import Modal from './modal';

import { useState } from 'react';

export default function AddCompanyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add company</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Modal Content
      </Modal>
    </>
  );
}
