import _ from 'lodash';

const data = [
  {
    username : 'Rodrigo',
    role: 'admin',
  },
  {
    username : 'John',
    role: 'seller',
  },
  {
    username : 'Jane',
    role: 'seller',
  },
  {
    username : 'Mary',
    role: 'customer',
  },
  {
    username : 'Peter',
    role: 'customer',
  }
]

const rta = _.groupBy(data, 'role');
console.log(rta);
console.table(rta);