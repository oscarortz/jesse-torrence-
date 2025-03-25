import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';

export default function useObserver(options: IntersectionObserverInit) {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      console.warn('🚨 IntersectionObserver no está disponible en este entorno.');
      return;
    }

    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    const currentObserver = observer.current;
    if (!currentObserver) return;

    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element));
    }

    return () => {
      currentObserver.disconnect();
    };
  }, [elements]);

  return [observer.current, setElements, entries] as [
    IntersectionObserver | null,
    Dispatch<SetStateAction<Element[]>>,
    IntersectionObserverEntry[]
  ];
}
