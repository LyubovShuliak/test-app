export const PASSWORD_STRENGTH = {
  EMPTY: {
    classes: { first: 'empty', second: 'empty', third: 'empty' },
    strength: 'empty',
  },
  EASY: {
    classes: { first: 'easy', second: 'easy', third: 'empty' },
    strength: 'easy',
  },

  SHORT: {
    classes: { first: 'easy', second: 'easy', third: 'easy' },
    strength: 'short',
  },
  MEDIUM: {
    classes: { first: 'medium', second: 'medium', third: 'strong' },
    strength: 'medium',
  },
  STRONG: {
    classes: { first: 'strong', second: 'strong', third: 'strong' },
    strength: 'strong',
  },
};
