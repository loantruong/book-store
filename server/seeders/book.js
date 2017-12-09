'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [{
      isbn: '46565677',
      title: `The Metamorphosis`,
      author: 'Franz Kafka',
      resume: `Zaveling salesman Gregor Samsa wakes up one morning to discover that he has transformed into a giant insect. His metamorphosis makes it impossible for him to work. When he doesn't get up in time to catch the train, his family becomes concerned and knocks on the door of his bedroom, subtly shaming him. His parents send for a locksmith and a doctor.`,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41LH6SID5PL._SX310_BO1,204,203,200_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '4659897',
      title: `The help`,
      author: 'Kathryn Stockett',
      resume: `Stockett's debut novel, tells the story of black maids working in white Southern homes in the early 1960s in Jackson, Mississippi, and of Miss Eugenia "Skeeter" Phelan, a 22-year-old graduate from Ole Miss, who returns to her family's cotton plantation, Longleaf, to find that her beloved maid and nanny, Constantine, has left and no one will tell her why. Skeeter tries to behave as a proper Southern lady: She plays bridge with the young married women; edits the newsletter for the Junior League; and endures her mother's constant advice on how to find a man and start a family. However, Skeeter's real dream is to be a writer, but the only job she can find is with the Jackson Journal writing a housekeeping advice column called "Miss Myrna." Skeeter knows little about housekeeping, so she turns to her friend's maid, Aibileen, for answers and finds a lot more.`,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81wSLYbTFYL.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '466665677',
      title: `A Moveable Feast`,
      author: 'Ernest Hemingway',
      resume: `A Moveable Feast is a memoir by Ernest Hemingway describing the years he spent in Paris following World War I with his wife, Hadley, and young son, Bumby. This is a time when many artist and authors are living in Paris, and Hemingway writes about his encounters and friendships with Ezra Pound, Ford Madox Ford, Gertrude Stein and F. Scott Fitzgerald. A large portion of the book is taken to describe Fitzgerald and his wife Zelda in particular. Hemingway closes the period of time he writes about at the time he begins an affair with a young woman, who he associates with the wave of "rich" people who discover Paris changing it for him forever.
      Hemingway opens the book with a discussion of the bad weather, and the cafes of Paris where people go to escape the cold, and where he goes to write. He is working as a journalist for a Canadian newspaper and is trying to begin a career as a "straight" writer of short stories. Hemingway describes losing himself in his writing as he works at the cafe tables, distracted only occasionally by a pretty girl or a boorish critic.`,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51jHDrcwHIL._SY344_BO1,204,203,200_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '465657657',
      title: `The Design of Everyday Things`,
      author: 'Donal A. Norman',
      resume: `Designer, psychologist, and respected industry expert Don Norman wants to change your life and the way you see the world and his classic book The Design of Everyday Things might just do that. This book is available for reading in the Scholarly Commons and online through the University Library Catalog.
      “People are flexible, versatile, and creative. Machines are rigid, precise, and relatively fixed in their operations. There is a mismatch between the two, one that can lead to enhanced capability if used properly” –  (Norman, 2013)`,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51tV6QtKX0L._SX332_BO1,204,203,200_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};