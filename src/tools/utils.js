export const formatAudioTime = (time) => {
  if (isNaN(time)) {
    return '';
  }

  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  return `${m}:${s}`;
};
