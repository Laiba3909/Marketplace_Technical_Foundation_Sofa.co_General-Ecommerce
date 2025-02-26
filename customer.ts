export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'address',
            type: 'text',
            title: 'Address'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone Number'
        },
    ],
};