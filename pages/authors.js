import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <div class="fav-star" style="height: 26px;">
          ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : '<span></span>'}
          </div>
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
          <hr>
          <div class="book-icons">
            <button class="btn btn-success" id="view-author-btn--${item.firebaseKey}">
              <i class= "fas fa-eye"></i>
            </button>
            <button class="btn btn-info" id="update-author--${item.firebaseKey}">
              <i class= "fas fa-edit"></i>
            </button>
            <button class="btn btn-danger" id="delete-author-btn--${item.firebaseKey}">
              <i class= "fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
      `;
    });
    renderToDOM('#store', domString);
  } else {
    emptyAuthors();
  }
};

export { showAuthors, emptyAuthors };
