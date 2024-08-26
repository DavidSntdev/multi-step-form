export const formatPhoneNumber = (value: string, isGringo: boolean) => {
  const numericValue = value.replace(/\D/g, "");

  let part1 = "";
  let part2 = "";
  let part3 = "";
  let part4 = "";

  if (isGringo) {
    part1 = numericValue.slice(0, 2);
    part2 = numericValue.slice(2, 5);
    part3 = numericValue.slice(5, 8);
    part4 = numericValue.slice(8, 11);
  } else {
    part1 = numericValue.slice(0, 2);
    part2 = numericValue.slice(2, 7);
    part3 = numericValue.slice(7, 11);
  }

  let formattedNumber = part1 ? `+${part1}` : "";
  if (part2) formattedNumber += ` ${part2}`;
  if (part3) formattedNumber += ` ${part3}`;
  if (part4) formattedNumber += ` ${part4}`;

  return formattedNumber;
};
