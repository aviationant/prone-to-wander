// /**
//  * subscriber controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::subscriber.subscriber');
'use strict';
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

module.exports = {
  async subscribe(ctx) {
    const { email } = ctx.request.body;
    if (!email) {
      return ctx.badRequest('Email is required');
    }
    try {
      // Check for existing subscriber in Strapi
      const existing = await strapi.service('api::subscriber.subscriber').findOne({
        where: { email },
      });
      if (existing) {
        return ctx.badRequest('Email already subscribed');
      }

      // Store in Strapi
      const subscriber = await strapi.service('api::subscriber.subscriber').create({
        data: { email },
      });

      // Sync with Mailchimp
    //   await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //     email_address: email,
    //     status: 'subscribed',
    //   });

      return { message: 'Subscribed successfully', subscriber };
    } catch (error) {
      strapi.log.error('Mailchimp subscription error:', error);
      return ctx.badRequest(`Subscription failed: ${error.message}`);
    }
  },
};