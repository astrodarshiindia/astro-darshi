'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ServiceId = 'kundli' | 'prashna' | 'vastu' | 'gemstone' | 'matchmaking' | 'matrimonial' | null;

interface SelectedServiceContextType {
  selectedService: ServiceId;
  setSelectedService: (service: ServiceId) => void;
}

const SelectedServiceContext = createContext<SelectedServiceContextType | undefined>(undefined);

export function SelectedServiceProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceId>(null);

  return (
    <SelectedServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </SelectedServiceContext.Provider>
  );
}

export function useSelectedService() {
  const context = useContext(SelectedServiceContext);
  if (context === undefined) {
    throw new Error('useSelectedService must be used within a SelectedServiceProvider');
  }
  return context;
}
