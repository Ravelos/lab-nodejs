export type Replace<T, R> = Omit<TemplateStringsArray, keyof R> & R;
