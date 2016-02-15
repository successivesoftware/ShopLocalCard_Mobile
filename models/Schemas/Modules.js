/**
 * Created by  Preeteesh on 09/02/16.
 */

Schemas.modules = new SimpleSchema({
    'moduleId': {
        type: String
    },
    'name': {
        type: String
    }
});
Modules.attachSchema(Schemas.modules);