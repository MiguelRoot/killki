export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/backend_3-3_F8dp.mjs').then(n => n.a);

export { page };
