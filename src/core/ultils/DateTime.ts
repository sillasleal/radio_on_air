export function audioTimeToString(currentTime: number | undefined) {
  if (!currentTime) {
    return '';
  }
  const dt = new Date(undefined);
  dt.setTime(currentTime * 1000);
  return dt.toISOString().split('T')[1].split('.')[0];
}
