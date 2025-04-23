// 前方一致
export function startsWith({
  targetString,
  searchString,
}: {
  targetString: string;
  searchString: string;
}): boolean {
  const reg = new RegExp(`^${searchString}`);
  return reg.test(targetString);
}

// 前方不一致
export function notStartsWith({
  targetString,
  searchString,
}: {
  targetString: string;
  searchString: string;
}): boolean {
  const reg = new RegExp(`^(?!${searchString})`);
  return reg.test(targetString);
}

// 後方一致
export function endsWith({
  targetString,
  searchString,
}: {
  targetString: string;
  searchString: string;
}): boolean {
  const reg = new RegExp(`${searchString}$`);
  return reg.test(targetString);
}

// 後方不一致
export function notEndsWith({
  targetString,
  searchString,
}: {
  targetString: string;
  searchString: string;
}): boolean {
  const reg = new RegExp(`(?<!${searchString})$`);
  return reg.test(targetString);
}
