import type { Schema, Attribute } from '@strapi/strapi';

export interface ConditionalTextAndBoolean extends Schema.Component {
  collectionName: 'components_conditional_text_and_booleans';
  info: {
    displayName: 'Text & Boolean';
    icon: 'check';
    description: '';
  };
  attributes: {
    latitude: Attribute.Float;
    longitude: Attribute.Float;
    location: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'conditional.text-and-boolean': ConditionalTextAndBoolean;
    }
  }
}
