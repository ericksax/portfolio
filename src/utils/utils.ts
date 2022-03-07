export function getSaudation(): string {
  const date = new Date();

  const conditionHours = date.getHours();
  let saudation = "";
  if (conditionHours < 12) {
    saudation = "Bom dia";
  } else if (conditionHours > 12) {
    saudation = "Boa tarde";
  } else if (conditionHours > 18) {
    saudation = " Boa noite";
  }
  return saudation;
}
