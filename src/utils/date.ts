import {
  differenceInDays,
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatRelative,
  isSameYear,
  parse,
} from 'date-fns';

const INVALID_DATE_STRING = '--/--/----';

export function formatDate(dateString: string, formatString: string) {
  try {
    const dateObject = parse(dateString, 'yyyy/mm/dd', 0);
    if (isNaN(dateObject.getTime())) {
      console.warn('INVALID dateString INPUT', dateString, dateObject);
      return INVALID_DATE_STRING;
    }
    return format(dateObject, formatString);
  } catch (error) {
    console.warn('INVALID FORMAT DATE', { dateString, formatString });
    return INVALID_DATE_STRING;
  }
}

export function distanceTime(date: Date) {
  const now = new Date();
  const diffDay = differenceInDays(now, date);
  if (diffDay < 1) {
    return formatDistanceToNow(date, { includeSeconds: true, addSuffix: true });
  } else if (diffDay === 1) {
    return formatRelative(date, now, { weekStartsOn: 0 });
  } else if (diffDay < 7) {
    return formatDistanceToNowStrict(date, { addSuffix: true });
  } else if (isSameYear(date, now)) {
    return format(date, 'MMM dd');
  } else {
    format(date, 'yyyy, MM dd');
  }
}
