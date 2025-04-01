export const formatDate = (date: Date) => {

  const options: Record<string, string> = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString("en-US", options);
};