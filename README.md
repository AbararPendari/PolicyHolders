#Routes
GET      /api/policyholders
POST     /api/policyholders
GET      /api/policyholders/id
PUT      /api/policyholders/id
DELETE   /api/policyholders/id

 #server start
 npm start

 POST Payload
 {"insuredFirstName": "Martha ",
    "insuredLastName": "Scarllet",
    "Age": 30,
    "DateOfBirth": "1994-01-01",
    "State": "California",
    "email": "marthascarllet@example.com",
    "PhoneNumber": "123-456-7890",
    "Status": "Active",
    "Beneficiaries": [
    {
    "Relationship":"Spouse",
    "Name":"Martha Scarllet"
    },{
   "Relationship":"Child",
    "Name":"Ethel Scarllet"
    
    }
      ]
    }
