/**
 * Removes Vietnamese diacritics/accents for robust search matching
 * e.g., "Dao động điều hòa" -> "dao dong dieu hoa"
 */
export function removeVietnameseAccents(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

/**
 * Checks if search text matches target text ignoring case and accents
 */
export function matchesSearch(target: string | undefined | null, searchKeyword: string): boolean {
  if (!searchKeyword.trim()) return true;
  if (!target) return false;
  const normalizedTarget = removeVietnameseAccents(target);
  const normalizedKeyword = removeVietnameseAccents(searchKeyword);
  return normalizedTarget.includes(normalizedKeyword);
}
