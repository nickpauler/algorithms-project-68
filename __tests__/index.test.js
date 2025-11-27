import createRouter from '../src/index.js';

const routes = [
  {
    path: '/courses', // маршрут
    handler: { // обработчик
      body: 'courses'
    },
  },
  {
    path: '/courses/basics',
    handler: { // обработчик
      body: 'basics'
    },
  },
];

describe('test createRouter function:', () => {
  test('should return a route', () => {
    expect(() => createRouter()).toThrow();
  });

  test('should return a route', () => {
    const router = createRouter(routes);
    const path = '/courses';

    expect(router.serve(path)).toEqual(routes[0]);
  });

  test('should throw an error', () => {
    const router = createRouter(routes);
    const path = '/no_such_path';

    expect(() => router.serve(path)).toThrow();
  });
});
