import { FC, PropsWithChildren, ReactElement, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

import { ArrowLeftIcon } from '@shared/icons';
import { useAppNavigation } from '@shared/lib';
import { Colors, hitSlop } from '@shared/theme';
import { AppText } from '@shared/ui';

type Props = PropsWithChildren & {
  title?: string;
  rightElement?: ReactElement | null;
  withNavigate?: boolean;
};

export const AppLayout: FC<Props> = ({ title, rightElement, children, withNavigate = false }) => {
  const navigation = useAppNavigation();
  const { top } = useSafeAreaInsets();

  const dismiss = () => {
    navigation.goBack();
  };

  const innerStyles = useMemo(() => ({ marginTop: top, flex: 1 }), [top]);

  return (
    <View style={styles.root}>
      <View style={innerStyles}>
        {!!title && (
          <View style={styles.header}>
            <View style={styles.headerItemContainer}>
              {withNavigate && (
                <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.7} onPress={dismiss}>
                  <ArrowLeftIcon color={Colors.white} />
                </TouchableOpacity>
              )}
            </View>

            {!!title && (
              <View style={styles.title}>
                <AppText size={16} weight={'500'} color={Colors.white}>
                  {title}
                </AppText>
              </View>
            )}

            <View style={styles.headerItemContainer}>{!!rightElement && rightElement}</View>
          </View>
        )}

        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create(() => ({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.background,
  },
  headerItemContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
