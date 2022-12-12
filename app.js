
let bookList = [];


const toggleModal = () => {
    const basketModelEl = document.querySelector(".bakset_modal");
    basketModelEl.classList.toggle("active");
}


    const getBooks = () => {
      fetch("./products.json")
      .then((res) => res.json())
      .then((books) => (bookList = books));
    };
    getBooks();


    const createBookStars = (starRate) => {
        let starRateHtml = "";
        for (let i = 1; i <= 5; i++) {
                if (Math.round(starRate) >= i) 
                starRateHtml += ` <i class="bi bi-star-fill active"></i> ` ;
                else starRateHtml += `<i class="bi bi-star-fill"></i>`;
        }
        return starRateHtml;
    };

    const createBookItemHtml = () => {
      const bookListEl = document.querySelector(".book_list");
      let bookListHtml = "";
      bookList.forEach((book, index) => {
          bookListHtml += 
          `
              <div class="col-5 ${index % 2 == 0 && "offset-2"} my-5">
                <div class="row book_card">
                  <div class="col-6">
                      <img class="img-fluid shadow" width="258" height="400" src="${book.imgSource}">
                  </div>
                  <div class="col-6">
                      <div class="book-detail">
                          <span class="fos gray fs-5">${book.author}</span> <br />
                          <span class="fs-4 fw-bold">${book.name}</span> <br />
                          <span class="book_star_rate"> 
                              ${createBookStars(book.starRate)}
                            <span class="gray">${book.reviewCount}</span>
                          </span>
                      </div>
                    <p class="book-description fos gray">
                          ${book.description}
                    </p>
                      <div>
                        <span class="black fw-bold fs-4 me-2"> ${book.price} TL</span>
                        ${book.oldPrice && `<span class="fs-4 fw-bold old_price"> ${book.oldPrice} TL</span>` }
                      </div>
                      <button class="btn btn-outline-success">Sepete Ekle</button>
                  </div>
                </div>
              </div>
          `
          ; 
      });
      bookListEl.innerHTML += bookListHtml;
    };


        createBookItemHtml();
