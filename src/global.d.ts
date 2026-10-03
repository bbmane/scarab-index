declare const process: {
  argv: string[];
  exit: (code?: number) => never;
};
declare const console: {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};
