const moneyDisplay = (money) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(money);

// calculate hours difference (returns string like "2.5")
const timeCalculation = (fulldate) => {
  if (fulldate?.fromFullDate && fulldate?.toFullDate) {
    const from = new Date(fulldate.fromFullDate);
    const to = new Date(fulldate.toFullDate);
    if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) {
      return null;
    }
    const diffMs = to - from;
    const diffHours = diffMs / (1000 * 60 * 60);
    // return with one decimal place as before
    return diffHours.toFixed(1);
  }
  return null;
};

function validateTime1(time) {
  if (!time) return false;
  const time1 = new Date(time);
  if (Number.isNaN(time1.getTime())) return false;
  // Consider valid if time1 is today or in the future (compared to start of today)
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  return time1.getTime() >= todayStart.getTime();
}

function validateTime2(timeFrom, timeTo) {
  if (!timeFrom || !timeTo) return false;
  const from = new Date(timeFrom);
  const to = new Date(timeTo);
  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) return false;
  // valid when 'to' is equal or after 'from'
  return to.getTime() >= from.getTime();
}

export {
  timeCalculation, moneyDisplay, validateTime1, validateTime2,
};