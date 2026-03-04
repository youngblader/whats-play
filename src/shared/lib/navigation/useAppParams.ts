import { RouteProp, useRoute } from '@react-navigation/native';

import { AppNavigationParamsList } from '@shared/config';

export const useAppParams = <T extends keyof AppNavigationParamsList>(_: T) => {
  return useRoute<RouteProp<AppNavigationParamsList, T>>();
};
