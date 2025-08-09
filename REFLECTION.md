## Reflection: Module 5B - My Week in Data

### 1. Were your predictions accurate?

Mostly "yes". 
I predicted:

1. Highest enjoyment: Hiking – (enjoyment 10).
2. Dominant category: Creative – (3 creative activities vs. 2 physical, 2 social).
3. Afternoon would have the highest average enjoyment – supported: Hiking (10) and Team Lunch (8).  Afternoonsb average relative to other times.

### 2. What surprised you about your week?

Low-effort creative sessions (Painting, Guitar) scored almost as high as the peak activity (Hiking) in enjoyment while taking far less time. Also, social activities didn’t outrank solo creative work in enjoyment as I might have casually assumed. The distribution showed that adding one long, very high-enjoyment physical block (Hiking) can noticeably shift category balance for hours without changing the count of entries.

### 3. Which higher-order function was most useful and why?

`filterByCondition` proved the most useful because it let me rapidly prototype new ad‑hoc queries (e.g., high-enjoyment evenings, low-effort wins) without writing new dedicated functions. It abstracts the pattern of selecting a subset, so I can focus on crafting the predicate. The `groupBy` helper was also valuable, but `filterByCondition` directly accelerated exploratory questions (“What else matches this pattern?”) during analysis.

---

Additional Insight: Encapsulating average and reduction logic early made later summaries (like average enjoyment by time of day) straightforward and reduced duplication.
