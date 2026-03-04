import { useAppStore } from '@entities/appState';

export const useWelcome = () => {
  const { setSkipWelcome } = useAppStore();

  const handleSkipWelcome = () => {
    setSkipWelcome(true);
  };

  return { handleSkipWelcome };
};
