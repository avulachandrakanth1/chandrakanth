export const ANIMATION_DURATION = {
  FAST: 0.15,
  NORMAL: 0.3,
  SLOW: 0.5,
  SLOWER: 0.7,
} as const;

export const ANIMATION_EASE = {
  OUT_EXPO: [0.16, 1, 0.3, 1],
  IN_OUT: [0.4, 0, 0.2, 1],
} as const;

export const STAGGER_CHILDREN = 0.08;
