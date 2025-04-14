export function randomInt(max: number, min: number) {
  return Math.floor(Math.random() * (min - max + 1) + max);
}

export function randomEnum(enum_type: Record<string, string>) {
  return randomArrEl(Object.values(enum_type));
}

export function randomArrEl<T>(array: readonly T[]): T {
  const randomNum = randomInt(0, array.length - 1);
  return array[randomNum];
}

export function randomizeArr(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
