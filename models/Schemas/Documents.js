/**
 * Created by  Preeteesh on 09/02/16.
 */
Schemas.documents = new SimpleSchema({
    'name': {
      type: String
    },
    'doc_type': {
      type: String
    },
    'shop_id': {
        type: String
    }
});

Documents.attachSchema(Schemas.documents);
