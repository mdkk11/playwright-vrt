const ROUTE = {
  home: () => '/',
  services: () => '/services',
  about: () => '/about',
  contact: () => '/contact',
  auth: {
    signin: () => '/auth/signin',
    register: () => '/auth/register',
  },
} as const;

export type TestRoute = {
  name: string;
  path: string;
};

export const testRoutes = [
  {
    name: 'Home',
    path: ROUTE.home(),
  },
  {
    name: 'Services',
    path: ROUTE.services(),
  },
  {
    name: 'About',
    path: ROUTE.about(),
  },
  {
    name: 'Contact',
    path: ROUTE.contact(),
  },
  {
    name: 'SingIn',
    path: ROUTE.auth.signin(),
  },
  {
    name: 'Register',
    path: ROUTE.auth.register(),
  },
] as const satisfies TestRoute[];
