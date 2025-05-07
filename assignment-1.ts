// Problem 1
function formatString(input: string, toUpper?: boolean): string {
    return (toUpper ?? true) ? input.toUpperCase() : input.toLowerCase();
  }

// Problem 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }

// Problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }

  