export type Timer = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calculateTimer = (date: string, endDate?: string): Timer => {
  const past = Date.parse(date);
  const now = endDate ? new Date(endDate).getTime() : Date.now();
  const diff = now - past;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  return {
    years,
    months: months - years * 12,
    days: days - months * 30,
    hours: hours - days * 24,
    minutes: minutes - hours * 60,
    seconds: seconds - minutes * 60,
  };
};
