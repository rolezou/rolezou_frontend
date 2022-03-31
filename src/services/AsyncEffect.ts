import { useEffect } from 'react';

export default function useEffectAsync(effect: (...args: any) => any, ...inputs: any[]) {
  useEffect(() => {
      effect();
  }, inputs);
}