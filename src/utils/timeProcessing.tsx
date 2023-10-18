import { SlotonDuration } from "components/availableDateTimeSlelector";

export const validateDuration = (slot: SlotonDuration): boolean => {
  const fromTime = new Date(`2000-01-01T${slot.from}`);
  const toTime = new Date(`2000-01-01T${slot.to}`);

  // Ensure `to` is at least 15 minutes greater than `from`
  const fifteenMinutesInMillis = 15 * 60 * 1000;
  const timeDifference = toTime.getTime() - fromTime.getTime();
  const result = timeDifference >= fifteenMinutesInMillis;
  console.log("validateDuration : ", result);
  return result;
};
