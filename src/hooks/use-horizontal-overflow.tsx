import * as React from 'react';

export default function useHorizontalOverflow(ref: React.RefObject<any>, callback: (hasOverflow: boolean) => void) {
  const [isOverflow, setIsOverflow] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollWidth > current.clientWidth;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current);
      }

      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};