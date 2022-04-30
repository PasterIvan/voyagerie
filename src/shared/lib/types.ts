export type Paths<
  T,
  P extends string = "",
  C extends string = P extends "" ? P : `${P}.`
> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? T[K] extends object
          ? Paths<T[K], `${C}${K}`>
          : `${C}${K}`
        : never;
    }[keyof T]
  : never;
