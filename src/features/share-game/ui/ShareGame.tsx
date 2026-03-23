import { FC } from 'react';
import { Share } from 'react-native';

import { GameResponse } from '@entities/games/model/types/types';
import { ShareIcon } from '@shared/icons';
import { hitSlop } from '@shared/theme';
import { AnimatedPressable } from '@shared/ui';

type ShareGameProps = {
  game?: GameResponse;
};

export const ShareGame: FC<ShareGameProps> = ({ game }) => {
  const onShare = async () => {
    const shareMessage = [game?.name, game?.website].filter(Boolean).join('\n\n');

    await Share.share({
      title: game?.name,
      message: shareMessage,
      url: game?.website,
    });
  };

  return (
    <AnimatedPressable hitSlop={hitSlop} onPress={onShare}>
      <ShareIcon size={14} />
    </AnimatedPressable>
  );
};
