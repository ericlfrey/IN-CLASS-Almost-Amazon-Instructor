import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyBooks = () => {
  const domString = '<h1>No Books</h1>';
  renderToDOM('#store', domString);
};

const showBooks = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  renderToDOM('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card">
      <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
      <div class="card-body book-card" style="height: 275px;">
        <h6 class="card-title">${item.title}</h6>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <div class="book-icons">
          <button class="btn btn-success"   id="view-book-btn--${item.firebaseKey}">
            <i class= "fas fa-eye"></i>
          </button>
          <button id="edit-book-btn--${item.firebaseKey}"  class="btn btn-info">
            <i class= "fas fa-edit"></i>
          </button>
          <button id="delete-book-btn--${item.firebaseKey}"  class="btn btn-danger">
            <i class= "fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
    `;
    });
    renderToDOM('#store', domString);
  } else {
    emptyBooks();
  }
};

export { showBooks, emptyBooks };
