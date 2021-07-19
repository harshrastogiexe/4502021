function jobSequencing(jobs) {
  jobs.sort((job1, job2) => job2.profit - job1.profit);
  let active = jobs[0];
  const order = [active];
  console.log(jobs);
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].deadline > active.deadline) {
      order.push(jobs[i]);
      active = jobs[i];
    }
  }
  console.log(order);
  return order;
}
jobSequencing([
  { deadline: 2, profit: 100 },
  { deadline: 1, profit: 50 },
  { deadline: 2, profit: 10 },
  { deadline: 1, profit: 20 },
  { deadline: 3, profit: 30 },
]);
