import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { FadeIn } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { GamesSection } from '@widgets/games-section';
import { AddWishlist } from '@features/add-wishlist';
import { StoreTag } from '@entities/stores';
import { Colors, globalStyles } from '@shared/theme';
import { AppText, LoadingIndicator } from '@shared/ui';

import { useGame } from '../hooks/useGame';

export const GameScreen: FC = () => {
  const { data, games, isGoodMetascore, isLoading } = useGame();

  return (
    <View style={globalStyles.flex}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Animated.View entering={FadeIn.duration(450)}>
          <ScrollView>
            <View style={globalStyles.pb40}>
              <FastImage style={styles.image} source={{ uri: data?.background_image }} />

              <View style={globalStyles.mt20}>
                <View style={styles.nameContainer}>
                  <View style={styles.nameContent}>
                    <AppText size={20} numberOfLines={2}>
                      {data?.name}
                    </AppText>

                    {!!data?.publishers && (
                      <View style={styles.row}>
                        {data?.publishers.map((el) => (
                          <AppText key={el?.id} color={Colors.gray}>
                            {el.name}
                          </AppText>
                        ))}
                      </View>
                    )}
                  </View>

                  <AddWishlist game={data} />
                </View>

                {!!data?.description_raw?.length && (
                  <View style={styles.section}>
                    <AppText>{data?.description_raw}</AppText>
                  </View>
                )}

                {!!data?.platforms?.length && (
                  <View style={styles.section}>
                    <AppText size={20}>Platforms</AppText>

                    <View style={styles.platforms}>
                      {data?.platforms?.map((el) => (
                        <AppText key={el?.platform?.id}>{el?.platform.name}</AppText>
                      ))}
                    </View>
                  </View>
                )}

                {data?.metacritic && (
                  <View style={styles.metascoreContainer}>
                    <AppText size={20}>Metascore</AppText>
                    <View style={styles.metascore(isGoodMetascore)}>
                      <AppText size={12} color={isGoodMetascore ? Colors.green : Colors.orange}>
                        {data?.metacritic}
                      </AppText>
                    </View>
                  </View>
                )}

                {data?.released && (
                  <View style={styles.released}>
                    <AppText size={20}>Release date</AppText>
                    <AppText>{data?.released}</AppText>
                  </View>
                )}

                {!!data?.stores?.length && (
                  <View style={globalStyles.mt20}>
                    <AppText style={globalStyles.ph16} size={20} weight={'500'}>
                      Where to buy
                    </AppText>

                    <View style={styles.stores}>
                      {data?.stores.map((el) => (
                        <StoreTag key={el?.id} name={el?.store?.name} />
                      ))}
                    </View>
                  </View>
                )}

                {!!games?.length && <GamesSection sectionTitle={'Similar Games'} data={games} />}
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create(() => ({
  image: {
    width: '100%',
    height: 350,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  platforms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  nameContent: {
    flex: 1,
  },
  metascoreContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  publishers: {
    flex: 1,
    marginRight: 20,
  },
  released: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  stores: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 16,
  },
  metascore: (isGood: boolean) => ({
    alignSelf: 'flex-start',
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: isGood ? Colors.green : Colors.orange,
  }),
}));
