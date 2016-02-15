/**
 * Created by  Preeteesh on 09/02/16.
 */
Schemas.shopoperator = new SimpleSchema({
    'shop_id': {
      type: String
    },
    'shop_operator_id': {
      type: String
    },
    'is_active': {
      type: Boolean
    }
});

ShopOperator.attachSchema(Schemas.shopoperator);
 