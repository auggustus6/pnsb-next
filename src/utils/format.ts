const { format } = new Intl.DateTimeFormat("pt-br", {});

export const formatDate = (date: any) => {
  if (typeof date == typeof Date) {
    return format(date);
  }
  try {
    const d = new Date(date);
    return format(d);
  } catch (error) {
    console.error(error);
  }
  return String(date);
};

export const formatTime = (date: any) => {
  if (typeof date == typeof Date) {
    return date.toTimeString().split(" ")[0];
  }
  try {
    const d = new Date(date);
    return d.toTimeString().split(" ")[0];
  } catch (error) {
    console.error(error);
  }
  return new Date().toTimeString().split(" ")[0];
};

export const markDownToPlainText = (mdtext: string) =>
  mdtext.replace(/([-]{2}|[_]{2}|[~]{2}|[*]{2}|[`]{2})/g, "");

export const urlToTitle = (url: string) => url.replace(/[-_]/g, " ");
