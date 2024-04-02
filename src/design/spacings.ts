type Spacing = {
  huge: number;
  big: number;
  regular: number;
  tiny: number;
  small: number;
};

export interface ISpacings {
  margins: Spacing;
  paddings: Spacing;
}

export const spacings: ISpacings = {
  margins: {
    huge: 40,
    big: 24,
    regular: 16,
    small: 8,
    tiny: 4,
  },
  paddings: {
    huge: 40,
    big: 24,
    regular: 16,
    small: 8,
    tiny: 4,
  },
};
