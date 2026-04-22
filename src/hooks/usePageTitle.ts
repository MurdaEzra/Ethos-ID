import { useEffect } from 'react';

/**
 * Custom hook to set the page title
 * @param title - The page title to display
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
