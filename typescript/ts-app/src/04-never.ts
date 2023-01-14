const withoutEnd = () => {
  while (true) {
    console.log("Hello");
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  }

  if (Array.isArray(input)) {
    return input.map((item) => item.toUpperCase());
  }
  return fail("input must be a string or an array");
}

console.log(example("hello"));
console.log(example(["hello", "world"]));
console.log(example(1));