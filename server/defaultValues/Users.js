UsersSeed = [
    {
        'username': 'shoplocaladmin12',
        'email':'shoplocaladmin12@test.com',
        'profile': {
            
            'name': {
                'title': '',
                'first_name': 'Shop',
                'last_name': 'Local Card'
            }, 
           
            'contact_numbers': {
                'code': '+91',
                'mobile': 9999341290
            },
            
            'profile_image': {
                '_id': '',
                 'url': ''
            },

            'address': { 
                'line1': 'abc',
                'line2': 'abc',
                'city': 'New Delhi',
                'state': 'New Delhi',
                'zip': '110096',
                'country': {
                    '_id': '1',
                    'name': 'India',
                    'code': 'IN'
                }
            },
            
            'userType': 'SystemAdmin',
            'status': {
                isActive: true
            }
         },
        
        'password': 'shoplocal@12345'

    }];

if (Meteor.users.find().count() === 0) {
    _.each(UsersSeed, function (users) {
        Accounts.createUser(users);
        console.log("User created successfully");
    })
}
