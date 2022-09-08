const variants = (map: any, props: any) => {
  let styles = "";

  for (const [key, value] of Object.entries(props)) {
    if (map[key]) {
      styles += value;
    }
  }

  return styles;
};

export { variants };
