import { useState, useCallback } from 'react';
import { useData } from '../context/DataContext';

export const useClipboard = (timeout = 5000) => {
  const [copied, setCopied] = useState(false);
  const { showNotification } = useData();

  const copy = useCallback((text: string) => {
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      showNotification("Copié !");
      setTimeout(() => setCopied(false), timeout);
    });
  }, [timeout, showNotification]);

  return { copied, copy };
};
