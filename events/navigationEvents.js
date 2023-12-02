import { getAuthors, getFavoriteAuthors } from '../api/authorData';
import { booksOnSale, getBooks, searchBooks } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(user.uid).then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(user.uid).then(showBooks);
  });

  // ALL AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(user.uid).then(showAuthors);
  });
  // Favorite Authors
  document.querySelector('#favoriteAuthors').addEventListener('click', () => {
    getFavoriteAuthors(user.uid).then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    // console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE
      searchBooks(user.uid, searchValue).then(showBooks);

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
