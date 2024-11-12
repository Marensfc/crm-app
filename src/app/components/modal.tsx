'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

import CloseModalBtn from './close-modal-btn';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className="transition duration-200 ease-out data-[closed]:opacity-0"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-900 opacity-60" />
      <DialogPanel className="bg-gray-100 p-7 rounded-lg absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <CloseModalBtn
          className="absolute top-3 right-3"
          closeModalFoo={onClose}
        />
        {children}
      </DialogPanel>
    </Dialog>
  );
}
