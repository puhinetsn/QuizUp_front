export function randomInt(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomEnum(enum_type: Record<string, string>) {
  return randomArrEl(Object.values(enum_type));
}

export function randomArrEl<T>(array: readonly T[]): T {
  const randomNum = randomInt(0, array.length - 1);
  return array[randomNum];
}
