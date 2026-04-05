'use client';

import { useEffect } from 'react';
import { allSchemas } from '@/lib/schema';

export default function SchemaInjector() {
  useEffect(() => {
    allSchemas?.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `schema-${index}`;
      script.innerHTML = JSON.stringify(schema);
      document.head?.appendChild(script);
    });

    return () => {
      allSchemas?.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) {
          script?.remove();
        }
      });
    };
  }, []);

  return null;
}
