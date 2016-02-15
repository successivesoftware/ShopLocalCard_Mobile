/**
 * Created by  Preeteesh on 09/02/16.
 */
Schemas.stamps = new SimpleSchema({
    
    'shop_id': {
      type: String
    },

    'name': {
      type: String
    },

    'deal_description': {
      type: String
    },
    
    'stamps': {
        type: Object
     },
    
    'stamps.number': {
       type: Object,
        optional: true
    },
   
   'stamps.icon': {
      type: Object,
      optional: true
    },

   'slot': {
        type: Object
     },
  
   'slot.reward_text': {
        type: Object,
        optional: true
   },
   
   'slot.icon': {
        type: Object,
        optional: true
   },

   'creation_date': {
     type: Date,
     optional: true
   },

   'expiry_date': {
     type: Number,
     optional: true
   }

   
});

Stamps.attachSchema(Schemas.stamps);
