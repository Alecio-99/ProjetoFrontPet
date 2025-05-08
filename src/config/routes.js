export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PLANS: '/plans',
  SCHEDULING: '/scheduling',
  ADMIN: '/admin'
};

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.PLANS
];

export const PRIVATE_ROUTES = [
  ROUTES.SCHEDULING,
  ROUTES.ADMIN
]; 