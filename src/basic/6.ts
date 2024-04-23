
interface Person {
    name: string;
    age: number;
    email: string;
    address?: {
      country: string;
      city: string;
    };
  }
  
  interface User {
    name: string;
    age: number;
    email: string;
  }
  
 
  let mango: Person;
  mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
      country: 'USA',
      city: 'New York'
    }
  };
  
  let poly: User;
  
  poly = {
    name: 'Poly',
    age: 25,
    email: 'poly@example.com'
  };
  