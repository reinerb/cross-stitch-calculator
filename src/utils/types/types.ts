export type StitchStats = {
  width: number;
  height: number;
  threadCount: number;
  threadCoverage: number;
  borderSize: number;
  finishingSize: number;
};

export type DerivedStitchStats = {
  stitchedWidth: number;
  stitchedHeight: number;
  totalWidth: number;
  totalHeight: number;
};
