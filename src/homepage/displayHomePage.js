const commentsButton = () => {
  const button = ducument.createElement('button');
  button.className = 'btn comments btn-outline-dark';
  return button;
};

const display = (obj) => {
  const cardsContainer = document.querySelector('.cards-container');
  obj.drinks.forEach((drink) => {
    const divCol = document.createElement('div');
    cardsContainer.appendChild(divCol);
    divCol.className = 'col';
    divCol.innerHTML = `<div class="card h-100" id ="${drink.idDrink}">
                          <img src="${drink.strDrinkThumb}" class="card-img-top p-3" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${drink.strDrink}</h5>
                            <p class="card-text">
                              <button type="button" class="btn comments btn-outline-dark col-sm-4">Comments</button>
                             </p>                            
                             <div class="heart-like-button float-right"></div>                            
                          </div>
                      </div>`;
  });

  const hearts = document.querySelectorAll(".heart-like-button");

  hearts.forEach((heart)=> {
    heart.addEventListener("click", () => {
      if (heart.classList.contains("liked")) {
        heart.classList.remove("liked");
      } else {
        heart.classList.add("liked");
      }
    });
  })



};

export { display };