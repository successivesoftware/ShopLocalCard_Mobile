/**
 * Created by  Preeteesh on 09/02/16.
 */

Schemas.Users = new SimpleSchema({
    username: {
        type: String
    },
    emails: {
        type: [Object],
        optional:true
    },
    'emails.$.address': {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    'emails.$.verified': {
        type: Boolean
    },

	status: {
		type: String,
		optional: true
	},
    createdAt: {
        type: Date,
	    optional:true
    },
	updated_at: {
		type: Date,
		optional:true
	},
    profile: {
        type: Object
    },
	'profile.name': {
		type: Object,
        optional: true
	},
	
	'profile.name.title': {
		type: String,
		optional: true
	},

	'profile.name.first_name': {
		type: String,
        optional: true,
		regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/
	},

	'profile.name.last_name': {
		type: String,
        optional: true,
		regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$$/
	},

	'profile.contact_numbers': {
		type: Object,
		optional: true
	},
	'profile.contact_numbers.code': {
		type: String,
		optional:true
	},
	'profile.contact_numbers.mobile': {
		type: Number,
		optional:true
	},

	'profile.profile_image': {
		type: Object,
		optional: true
	},
	'profile.profile_image._id': {
		type: String,
		optional: true
	},
	'profile.profile_image.url': {
		type: String,
		optional: true
	},

	'profile.address': {
		type: Object,
		optional: true
	},
	'profile.address.line1': {
		type: String,
		optional: true
	},
	'profile.address.line2': {
		type: String,
		optional: true
	},
	'profile.address.city': {
		type: String,
		optional: true
	},
	'profile.address.state': {
		type: String,
		optional: true
	},
	'profile.address.zip': {
		type: String,
		optional: true
	},
	'profile.address.country': {
		type: Object
	},
	'profile.address.country._id': {
		type: String,
		optional: true
	},
	'profile.address.country.name': {
		type: String
	},
	'profile.address.country.code': {
		type: String,
		optional: true,
		regEx: /^[A-Z]{2}$/,
	},
	'profile.userType':{
		type: String,
		optional: true
	},
	'profile.status':{
		type: Object
	},
	'profile.status.isActive':{
		type: Boolean
	},
	services: { 
		type: Object, 
		optional: true, 
		blackbox: true 
	}
});
Meteor.users.attachSchema(Schemas.Users);