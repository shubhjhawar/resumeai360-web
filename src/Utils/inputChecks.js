export const inputChecks = (type, name) => {
  if (type === "date") {
    return { required: "*Please fill this field" };
  } else if (type === "email") {
    return {
      required: "*Please fill this field",
      pattern:
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
    };
  } 
};
