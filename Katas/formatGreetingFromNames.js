function list(names) {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

  return names
    .map((name, index) =>
      index === names.length - 1
        ? name.name
        : index === names.length - 2
        ? `${name.name} & `
        : `${name.name}, `
    )
    .join("");
}
