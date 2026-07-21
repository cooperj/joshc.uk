type ContentDateSource = {
  fromDate?: Date | string | null;
  pubDate?: Date | string | null;
};

function parseDate(date: Date | string | null | undefined): Date | undefined {
  if (date === undefined || date === null || date === "") {
    return undefined;
  }

  if (date instanceof Date) {
    return date;
  }

  const parsed = new Date(date);
  return Number.isNaN(parsed.valueOf()) ? undefined : parsed;
}

export function getContentDate(data: ContentDateSource): Date | undefined {
  const dates = [data.fromDate, data.pubDate]
    .map(parseDate)
    .filter((date): date is Date => date !== undefined);

  if (dates.length === 0) {
    return undefined;
  }

  return dates.reduce((oldest, current) =>
    current.valueOf() < oldest.valueOf() ? current : oldest,
  );
}

export function getContentDateValue(data: ContentDateSource): number {
  return getContentDate(data)?.valueOf() ?? 0;
}
