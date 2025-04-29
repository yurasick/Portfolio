export function convertTime(timeo = "50") {
  let newTime = 2;
  newTime = `${Math.floor(+timeo / 60)} год. ${+timeo % 60} хв.`;
  return newTime;
}
