function activitySelection(activities) {
  activities.sort((prev, next) => prev.end - next.end);
  let completed = [activities[0]];
  let active = activities[0];

  for (let i = 1; i < activities.length; i++) {
    if (active.end <= activities[i].start) {
      active = activities[i];
      completed.push(activities[i]);
    }
  }
  return completed;
}

const count = activitySelection([
  { start: 3, end: 8 },
  { start: 2, end: 4 },
  { start: 1, end: 3 },
  { start: 8, end: 10 },
  { start: 10, end: 11 },
]);

console.log(count);
