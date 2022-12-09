export const PASSWORD_STRENGTH = {
  EMPTY: {
    classes: { first: 'empty', second: 'empty', third: 'empty' },
    name: '',
  },
  EASY: {
    classes: { first: 'easy', second: 'empty', third: 'empty' },
    name: '😖 easy',
  },

  SHORT: {
    classes: { first: 'easy', second: 'easy', third: 'easy' },
    name: '😐 too short',
  },
  MEDIUM: {
    classes: { first: 'medium', second: 'medium', third: 'strong' },
    name: '😉 medium',
  },
  STRONG: {
    classes: { first: 'strong', second: 'strong', third: 'strong' },
    name: '😎 strong',
  },
};
