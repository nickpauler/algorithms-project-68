export default (routes) => {
  if (routes == null) {
    throw Error("Add routes");
  }

  const serve = (path) => {
    const route = routes.find(r => r.path === path);
    if (route == null) {
      throw Error("Route " + path + " is not found");
    }

    return route;
  };

  return { serve };
};
