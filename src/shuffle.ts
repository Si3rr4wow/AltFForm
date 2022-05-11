export function shuffleArray(array: any[]) {
  const clone = [...array]
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone
}