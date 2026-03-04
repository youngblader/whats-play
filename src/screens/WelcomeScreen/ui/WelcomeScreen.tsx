import { FC } from 'react';
import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native-unistyles';

import { IMAGES, screenHeight, screenWidth } from '@shared/constants';
import { globalStyles } from '@shared/theme';
import { AppButton, AppText } from '@shared/ui';

import { useWelcome } from '../hooks/useWelcome';

export const WelcomeScreen: FC = () => {
  const { handleSkipWelcome } = useWelcome();

  return (
    <View style={styles.container}>
      <ImageBackground style={{ width: screenWidth, height: screenHeight }} source={IMAGES.background}>
        <LinearGradient
          style={{ width: screenWidth, height: screenHeight }}
          start={{ x: 2, y: 1.5 }}
          end={{ x: 2.1, y: 2.4 }}
          colors={['rgba(17, 24, 39, 0.78)', 'rgba(17, 24, 39, 0.2)']}>
          <View style={styles.content}>
            <AppText align={'center'} size={20} weight={'500'}>
              Wide Collection of {'\n'}the Best Games
            </AppText>

            <AppText align={'center'} style={globalStyles.mt40} weight={'500'}>
              Thousands of hours. Countless victories. {'\n'}One massive library — built for those who live to play.
            </AppText>

            <AppText align={'center'} style={globalStyles.mt10} weight={'500'}>
              Your adventure starts now.
            </AppText>
          </View>

          <View style={styles.bottomContainer}>
            <AppButton text={'Get started'} onPress={handleSkipWelcome} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create((_, rt) => ({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: rt.insets.top,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flex: 1,
    marginBottom: rt.insets.bottom,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
  },
}));
