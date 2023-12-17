export const idfy = (id: string) =>
  id.toLowerCase().split(" ").join("-").slice(0, -1);
