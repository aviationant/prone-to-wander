// /**
//  * subscriber router
//  */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::subscriber.subscriber');

module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/subscribers/subscribe',
        handler: 'subscriber.subscribe',
        config: {
          policies: [], // Public access
          auth: false,  // No authentication required
        },
      },
    ],
  };