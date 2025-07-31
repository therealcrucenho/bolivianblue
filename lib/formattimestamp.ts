

export function formatTimestamp(timestamp: string | undefined) {
    const date = timestamp ? new Date(parseInt(timestamp)) : new Date();
    const options = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    } as const;
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(date);  
    return formattedDate.replace(',', ''); // Remove the comma after the day
  }