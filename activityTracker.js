// Module 5B: My Week in Data
// ------------------------------------------------------------
// 1. Weekly Data (7 entries)
// Properties per entry: day, activity, category, hoursSpent, enjoyment (1-10), timeOfDay (morning|afternoon|evening)

const myWeek = [
	{ day: 'Monday',    activity: 'Jogging',              category: 'physical', hoursSpent: 1.0, enjoyment: 7, timeOfDay: 'morning' },
	{ day: 'Tuesday',   activity: 'Coding Side Project',  category: 'creative', hoursSpent: 2.5, enjoyment: 9, timeOfDay: 'evening' },
	{ day: 'Wednesday', activity: 'Team Lunch',           category: '',   hoursSpent: 1.5, enjoyment: 8, timeOfDay: 'afternoon' },
	{ day: 'Thursday',  activity: 'Guitar Practice',      category: 'creative', hoursSpent: 1.0, enjoyment: 8, timeOfDay: 'evening' },
	{ day: 'Friday',    activity: 'Hiking',               category: 'physical', hoursSpent: 3.0, enjoyment: 10, timeOfDay: 'afternoon' },
	{ day: 'Saturday',  activity: 'Painting',             category: 'creative', hoursSpent: 2.0, enjoyment: 9, timeOfDay: 'morning' },
	{ day: 'Sunday',    activity: 'Movie Night',          category: 'social',   hoursSpent: 2.5, enjoyment: 7, timeOfDay: 'evening' }
];

// 2. Predictions (before running analysis)
// - Highest enjoyment activity: Hiking (long outdoor physical activity).
// - Dominant category: creative (expected 3 creative sessions vs others).
// - Time-of-day pattern: Afternoon activities will average the highest enjoyment (more immersive / longer sessions).

// 3. Analysis Functions (map / filter / reduce)

// Helper: generic average using reduce.
function average(numbers) {
	if (!numbers.length) return 0;
	return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

// a) Total hours spent in a given category.
function totalHoursByCategory(category) {
	return myWeek
		.filter(act => act.category === category)
    .reduce(
      (sum, act) => sum + act.hoursSpent, 0);
}
console.log('Total hours by category function ready.', totalHoursByCategory);

// b) Average enjoyment grouped by timeOfDay (returns object: { morning: x, afternoon: y, evening: z })
function averageEnjoymentByTimeOfDay() {
		const groups = myWeek.reduce((acc, act) => {
			if (!acc[act.timeOfDay]) {
				acc[act.timeOfDay] = [];
			}
			acc[act.timeOfDay].push(act.enjoyment);
			return acc;
		}, {});
	return Object.fromEntries(
		Object.entries(groups).map(([tod, arr]) => [tod, average(arr)])
	);
          }
console.log('Average enjoyment by time of day function ready.', averageEnjoymentByTimeOfDay);

// c) Most common category.
function mostCommonCategory() {
	const counts = myWeek.reduce((acc, act) => {
		acc[act.category] = (acc[act.category] || 0) + 1;
		return acc;
	}, {});
	return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
} console.log('Most common category function ready.', mostCommonCategory);

// d) Activities with low hours but high enjoyment (threshold configurable)
function lowEffortHighEnjoyment(maxHours = 1.5, minEnjoyment = 8) {
	return myWeek.filter(act => act.hoursSpent <= maxHours && act.enjoyment >= minEnjoyment).map(a => a.activity);
} console.log('Activities with low hours but high enjoyment function ready.', lowEffortHighEnjoyment);

// 4. Custom Higher-Order Function (accepts another function)
function filterByCondition(testFn) {
	return myWeek.filter(testFn);
}
filterByCondition(act => act.hoursSpent < 1 && act.enjoyment > 8);
console.log('Higher-order filter function ready.', filterByCondition);

// Another example higher-order utility: groupBy property via callback
function groupBy(property) {
  return myWeek.reduce((acc, act) => {
    const key = act[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(act);
    return acc;
  }, {});
}
console.log('Group by function ready.', groupBy);

// Run analyses & log results
console.log('Analyzing My Weekly Activities...');

const totalPhysical = totalHoursByCategory('physical');
const totalCreative = totalHoursByCategory('creative');
const totalSocial = totalHoursByCategory('social');
const avgByTime = averageEnjoymentByTimeOfDay();
const commonCat = mostCommonCategory();
const lowEffortHighJoy = lowEffortHighEnjoyment();

// Example use of higher-order filter: find evening activities with enjoyment >= 8
const funEvenings = filterByCondition(a => a.timeOfDay === 'evening' && a.enjoyment >= 8).map(a => a.activity);

console.log('Total hours (physical):', totalPhysical.toFixed(1));
console.log('Total hours (creative):', totalCreative.toFixed(1));
console.log('Total hours (social):', totalSocial.toFixed(1));
console.log('Average enjoyment by time of day:', avgByTime);
console.log('Most common category:', commonCat);
console.log('Low-effort, high-enjoyment activities:', lowEffortHighJoy.join(', '));
console.log('High-enjoyment evening activities:', funEvenings.join(', '));

// Reflection (post-analysis)
/*
Reflection:
Predicted hiking would be the top enjoyment activity — confirmed (10).
Creative category dominated (3 entries) as expected.
Afternoon average enjoyment was highest, matching the prediction.
Low-effort (<=1.5h) yet high-enjoyment activities show that small consistent creative / physical tasks (Guitar, Jogging, Team Lunch) contribute solid enjoyment.
Using higher-order helpers (filterByCondition, groupBy) made it easy to explore new patterns quickly.
*/


