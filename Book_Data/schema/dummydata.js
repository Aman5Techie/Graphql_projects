const books = [
    { 
      id: "1", 
      name: 'To Kill a Mockingbird', 
      genre: 'Classic Literature'
    },
    {
      id: "2",
      name: 'Harry Potter and the Philosopher\'s Stone',
      genre: 'Fantasy'
    },
    {
      id: "3",
      name: 'The Hitchhiker\'s Guide to the Galaxy',
      genre: 'Science Fiction'
    },
    {
      id: "4",
      name: 'The Great Gatsby',
      genre: 'Classic Literature'
    },
    {
      id: "5",
      name: 'Pride and Prejudice',
      genre: 'Romance'
    }
];

const Ubooks = [
  { 
    id: "1", 
    name: 'To Kill a Mockingbird', 
    genre: 'Classic Literature',
    authorId: '1'
  },
  {
    id: "2",
    name: 'Harry Potter and the Philosopher\'s Stone',
    genre: 'Fantasy',
    authorId: '2'
  },
  {
    id: "3",
    name: 'The Hitchhiker\'s Guide to the Galaxy',
    genre: 'Science Fiction',
    authorId: '1'
  },
  {
    id: "4",
    name: 'The Great Gatsby',
    genre: 'Classic Literature',
    authorId: '4'
  },
  {
    id: "5",
    name: 'Pride and Prejudice',
    genre: 'Romance',
    authorId: '5'
  }
];

const authors = [
  {
    id: '1',
    name: 'Harper Lee',
    age: '89'
  },
  {
    id: '2',
    name: 'J.K. Rowling',
    age: '56'
  },
  {
    id: '3',
    name: 'Douglas Adams',
    age: '49'
  },
  {
    id: '4',
    name: 'F. Scott Fitzgerald',
    age: '44'
  },
  {
    id: '5',
    name: 'Jane Austen',
    age: '41'
  }
];
const Uauthors = [
  {
    id: '1',
    name: 'Harper Lee',
    age: '89',
    books: ['1', '2']
  },
  {
    id: '2',
    name: 'J.K. Rowling',
    age: '56',
    books: ['3']
  },
  {
    id: '3',
    name: 'Douglas Adams',
    age: '49',
    books: ['4', '5']
  },
  {
    id: '4',
    name: 'F. Scott Fitzgerald',
    age: '44',
    books: []
  },
  {
    id: '5',
    name: 'Jane Austen',
    age: '41',
    books: ['2', '5']
  }
];

module.exports = {books,authors,Ubooks,Uauthors}