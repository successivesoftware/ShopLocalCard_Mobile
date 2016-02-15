/**
 * Created by  Preeteesh on 09/02/16.
 */

Schemas.UserType = new SimpleSchema({
    'name': {
      type: String
    },
    'userTypeId': {
        type: String
    },
    'modules': {
        type: [Object]
    },
    'modules.$.id': {
        type: String
    },
    'modules.$.read': {
        type: Boolean
    },
    'modules.$.write': {
        type: Boolean
    }
});
UserType.attachSchema(Schemas.UserType);
