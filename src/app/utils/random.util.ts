export function randomLength(max: number, min: number) {
  return Math.random() * (max - min) + min;
}

export function randomEnum(enum_type: Record<string, string>) {
  const arr = Object.values(enum_type);
  return arr[Math.floor(Math.random() * arr.length)];
}
