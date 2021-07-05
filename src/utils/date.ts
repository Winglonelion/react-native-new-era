import { format, parse } from 'date-fns';

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
