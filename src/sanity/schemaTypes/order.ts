export const Order ={
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'user',
        title: 'User Information',
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'email', title: 'Email', type: 'string' },
          { name: 'phone', title: 'Phone Number', type: 'string' },
          { name: 'postalAddress', title: 'PostalAddress', type: 'string' },
          { name: 'country', title: 'Country', type: 'string' },
          { name: 'street', title: 'Street', type: 'string' },
        ],
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Paid', 'Failed'],
        },
      },
      
    ],
  };
  