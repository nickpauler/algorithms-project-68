// src/index.js

export default (routes) => ({
  serve: (path) => {
    for (const route of routes) {
      // Строим регэксп из path с плейсхолдерами
      const pattern =
        '^' + route.path.replace(/:([a-zA-Z0-9_]+)/g, '([^/]+)') + '$';
      const regex = new RegExp(pattern);
      const match = path.match(regex);

      if (!match) {
        continue;
      }

      const params = {};
      const keys = route.path.match(/:([a-zA-Z0-9_]+)/g);

      if (keys) {
        keys.forEach((key, index) => {
          params[key.slice(1)] = match[index + 1];
        });
      }

      return {
        path: route.path,
        handler: route.handler,
        params,
      };
    }

    throw new Error('Route not found');
  },
});
