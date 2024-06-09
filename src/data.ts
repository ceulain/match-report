import { Composition } from "./types";

const fourDefence = {
  GD: {
    x: 0,
    y: 0,
  },
  ARD: {
    x: 0,
    y: 0,
  },
  DCD: {
    x: 0,
    y: 0,
  },
  DCG: {
    x: 0,
    y: 0,
  },
  ARG: {
    x: 0,
    y: 0,
  },
};

const fourfourThree: Composition = {
  ...fourDefence,
  MC: {
    x: 0,
    y: 0,
  },
  MCD: {
    x: 0,
    y: 0,
  },
  MCG: {
    x: 0,
    y: 0,
  },
  AD: {
    x: 0,
    y: 0,
  },
  AV: {
    x: 0,
    y: 0,
  },
  AG: {
    x: 0,
    y: 0,
  },
};

const fourFourTwo: Composition = {
  ...fourDefence,
  MC: {
    x: 0,
    y: 0,
  },
  MCD: {
    x: 0,
    y: 0,
  },
  MCG: {
    x: 0,
    y: 0,
  },
  AD: {
    x: 0,
    y: 0,
  },
  AG: {
    x: 0,
    y: 0,
  },
  AV: {
    x: 0,
    y: 0,
  },
};

export type Compositions = Record<string, Composition>;
export default {
  443: fourfourThree,
  442: fourFourTwo,
} as Compositions;
