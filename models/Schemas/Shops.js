/**
 * Created by  Preeteesh on 09/02/16.
 */

Schemas.shops = new SimpleSchema({
    'shop_name': {
        type: String
    },
 	
/*	'shop_operator_id': {
		type: String,
		optional: true
	},
*/
 	/*'shop_operator': {
		type:[Object],
		optional: true
	},
	
	'shop_operator.$.id': {
		type: String,
		optional: true
	},*/
   
    'shop_description': {
        type: String
    },
    'shop_logo': {
        type: String
    },
    'shop_address': {
		type: Object
	},
	'shop_address.address': {
		type: String,
	},
	'shop_address.building_name': {
		type: String,
	},
	'shop_address.building_number': {
		type: String,
	},
	'shop_address.thoroughfare': {
		type: String,
	},
	'shop_address.locality': {
		type: String,
	},
	'shop_address.country': {
		type: String,
	},
	'shop_address.post_town': {
		type: String,
	},
	'shop_address.post_code': {
		type: Number,
	},
	
	'shop_address.location': {
		type: String,
	},
	
/*	'shop_operating_hours': {
		type: Object
	},
	
	'shop_operating_hours.from': {
		type: String,
		optional:true
	},

	'shop_operating_hours.untill': {
		type: String,
		optional:true
	},

	'shop_operating_hours.always_open': { 
		type: Boolean
	 },*/

	'shop_operating_hours': {
		type: Object,
        optional: true
	},
	
	'shop_operating_hours.mon.open': {
		type: String,
		optional: true
	},
	'shop_operating_hours.mon.close': {
		type: String,
		optional: true
	},

	'shop_operating_hours.tue.open': {
		type: String,
		optional: true
	},
	'shop_operating_hours.tue.close': {
		type: String,
		optional: true
	},

	'shop_operating_hours.wed.open': {
		type: String,
		optional: true
	},
	'shop_operating_hours.wed.close': {
		type: String,
		optional: true
	},

	'shop_operating_hours.thu.open': {
		type: String,
		optional: true
	},
	'shop_operating_hours.thu.close': {
		type: String,
		optional: true
	},

	'shop_operating_hours.fri.open': {
		type: String,
		optional: true
	},
	'shop_operating_hours.fri.close': {
		type: String,
		optional: true
	},

	'shop_operating_hours.sat.open': {
		type: String,
		optional: true
	},
	
	'shop_operating_hours.sat.close': {
		type: String,
		optional: true
	},

	'shop_operating_hours.sun.open': {
		type: String,
		optional: true
	},
	'shop_operating_hours.sun.close': {
		type: String,
		optional: true
	},

   'created_at':{
        type:Date,
        denyUpdate:true
    },
  
   'updated_at': {
        type: Date,
	    optional: true
    }

	
});

Shops.attachSchema(Schemas.shops);