export type StitchStats = {
  width: string;
  height: string;
  threadCount: string;
  threadCoverage: string;
  borderSize: string;
  finishingSize: string;
};

export type VerifiedStats = {
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
