function fn() {
  let remainder = 62;
  let remainWeek = Math.round(remainder / 7);
  let totalDays = remainWeek * 7;

  const studyHourForWeekA = (10 + 9) * 0.8;
  const studyHourForWeekB = 9 * 7 * 0.2;

  const totalStudyHour = remainWeek * (studyHourForWeekA + studyHourForWeekB);

  const algorithms = totalStudyHour / 2;

  const oneCourseIn독학사 = algorithms / 3;

  return {
    remainWeek,
    totalDays,
    studyHourForWeekA,
    totalStudyHour,
    algorithms,
    oneCourseIn독학사,
  };
}

console.log(fn());
