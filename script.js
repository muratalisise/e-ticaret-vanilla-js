
let basketList = [];
let bookList = [ {
    "id": 1,
    "name": "Nutuk",
    "author": "Mustafa Kemal Atatürk",
    "price": 19.25,
    "oldPrice": null,
    "description": "Ey Türk gençliği! Birinci görevin, Türk bağımsızlığını, Türk Cumhuriyeti'ni sonsuza kadar korumak ve savunmaktır.",
    "starRate": 5,
    "reviewCount": 1938,
    "stock": 1881,
    "imgSource": "images/books/nutuk.jpg",
    "type": "HISTORY"
  },
  {
    "id": 2,
    "name": "Hayvan Çiftliği",
    "author": "George Orwell",
    "price": 11.7,
    "oldPrice": null,
    "description": "Hayvan Çiftliği George Orwell’in modern klasikler arasına girmiş ikinci ünlü romanı ve çarpıcı bir politik taşlamadır. Şimdiye kadar yazılmış en iyi sistem eleştirilerinden biri olan bu roman, özgürlük amaçlı bir devrimin nasıl tek adamlığa evrilebileceğini gözler önüne serer. George Orwell’in alegorisi, bugün özgürlüğün saldırıya uğradığı her durum ve yerde güncelliğini koruyor.",
    "starRate": 4.7,
    "reviewCount": 330,
    "stock": 7,
    "imgSource": "./images/books/hayvan-ciftligi.jpg",
    "type": "NOVEL"
  },
  {
    "id": 3,
    "name": "Zengin Baba Yoksul Baba",
    "author": "Robert T. Kiyosaki ",
    "price": 44.9,
    "oldPrice": null,
    "description": "Bize okul sistemlerinin parayla ilgili öğrettiklerine neden güvenmememiz gerektiğini hatırlatır ve bu önemli yeteneğin neden bugün hiç olmadığı kadar önemli olduğunu açıklar.Çocuklarınıza paraya dair neler öğretmeniz gerektiğini açıklar, böylece onlar da günümüz dünyasının zorluklarına ve fırsatlarına kendilerini hazırlayabilir ve hak ettikleri zengin yaşamı sürebilir.",
    "starRate": 4.2,
    "reviewCount": 130,
    "stock": 3,
    "imgSource": "./images/books/zengin-baba-yoksul-baba.jpg",
    "type": "FINANCE"
  },
  {
    "id": 4,
    "name": "Açlık Oyunları 3 - Alaycı Kuş",
    "author": "Suzanne Collins",
    "price": 40.89,
    "oldPrice": null,
    "description": "Biz yanarsak, siz de bizimle yanacaksınız!",
    "starRate": 4.2,
    "reviewCount": 560,
    "stock": 6,
    "imgSource": "./images/books/alayci-kus.jpg",
    "type": "NOVEL"
  },
  {
    "id": 5,
    "name": "Hep Hayır! Diyen Çocuk",
    "author": " Charlie Griffin",
    "price": 9.99,
    "oldPrice": 14.5,
    "description": "Hep 'Hayır!' Diyen Çocuk Kurallardan pek hoşlanmayan Berk, bir gün her şeye Hayır! demeye başladı. Kalkıp giyinmeye Hayır! Banyo keyfine Hayır! Güzel yiyeceklere Hayır! Annesinin aklına bir fikir geldi. Bakalım hep Hayır! Diyen Berk'i ikna edebilecek mi?",
    "starRate": 3.7,
    "reviewCount": 410,
    "stock": 450,
    "imgSource": "./images/books/hep-hayir-diyen-cocuk.jpg",
    "type": "CHILDREN"
  },
  {
    "id": 6,
    "name": "Avcunuzdaki Kelebek",
    "author": "Ahmet Şerif İzgören ",
    "price": 22.99,
    "oldPrice": null,
    "description": "Tebrikler! Çok net başka bir şey söylemem mümkün değil. Sanırım hızlı okuma rekoru kırmış olabilirim. Bu kadar duygu yüklü, bu kadar gerçekleri gözler önüne serebilen, hala umut olabileceğine dair bu kadar mesaj bir arada nasıl verilir, gerçekten tebrikler",
    "starRate": 4.3,
    "reviewCount": 145,
    "stock": 321,
    "imgSource": "./images/books/avucunuzdaki-kelebek.jpg",
    "type": "SELFIMPROVEMENT"
  },
  {
    "id": 7,
    "name": "Kumarbaz",
    "author": "Fyodor Mihayloviç Dostoyevski ",
    "price": 13.29,
    "oldPrice": null,
    "description": "Şu sırada neyim ben? Koskoca bir sıfır. Yarın ne olabilirim? Hiç. Yarın ölür, yeniden dirilerek yeni bir hayata başlayabilirim!.. İçimdeki insanı iyice mahvolmadan kurtaracağım.",
    "starRate": 4.3,
    "reviewCount": 173,
    "stock": 73,
    "imgSource": "./images/books/kumarbaz.jpg",
    "type": "NOVEL"
  },

  {
    "id": 8,
    "name": "Utangaç Ayı Monti",
    "author": "Duncan Beedie",
    "price": 16.99,
    "oldPrice": null,
    "description": "Evvel zaman içinde bir ayı vardı Monti’ydi onun adı. Gözlerini dikip bakmaya, herkesi seyretmeye bayılırdı. Aslında Ayı Monti kabalık etmek istemiyordu, ama öyle meraklıydı ki kendini tutamıyordu...",
    "starRate": 4.3,
    "reviewCount": 189,
    "stock": 89,
    "imgSource": "./images/books/utangac-ayi-monti.jpg",
    "type": "CHILDREN"
  },
  {
    "id": 9,
    "name": "Kara Delikler",
    "author": "Stephen Hawking",
    "price": 19.99,
    "oldPrice": 34.5,
    "description": "2016 yılının BBC Reith derslerinde Stephen Hawking, bütün bir ömür süren araştırmalarını on beş dakika içinde aktarma gibi gerçekten zorlu bir meydan okumayı kabul etti. Bu çok kısa süren derslerde Hawking, evrenin gizemlerini ortaya sererken, kara delikleri anladığımız takdirde uzayzamanın sırlarına erişebileceğimizi vurguluyor.",
    "starRate": 4.3,
    "reviewCount": 78,
    "stock": 80,
    "imgSource": "./images/books/kara-delikler.jpg",
    "type": "SCIENCE"
  },
  {
    "id": 10,
    "name": "İnsan Geleceğini Nasıl Kurar?",
    "author": "İlber Ortaylı",
    "price": 34.99,
    "oldPrice": 47.49,
    "description": "İnsan Geleceğini Nasıl Kurar? yaşam tecrübesini paylaşmayı vazife bilen bir entelektüelden, İlber Hoca’dan, okurlar için bir yol açma, yol yapma, kendini inşa etme ve toplumu ayağa kaldırma rehberi. Platon, Seneca, Cicero, Farabi gibi bilgelerin ilhamı eşliğinde ve Yenal Bilgici’nin sorularıyla…",
    "starRate": 4.5,
    "reviewCount": 250,
    "stock": 14,
    "imgSource": "./images/books/insan-gelecegini-nasil-kurar.jpg",
    "type": "SELFIMPROVEMENT"
  },
  {
    "id": 11,
    "name": "Hayvanlardan Tanrılara - Sapiens",
    "author": "Yuval Noah Harari ",
    "price": 52.29,
    "oldPrice": 65,
    "description": "İsrailli Yazar ve Tarih Profesörü Yuval Noah Harari’nin kaleme aldığı Hayvanlardan Tanrılara Sapiens, son yılların en çok ses getiren kitapları arasında yer alıyor. Başlangıçtan bugüne insanın tarihsel yolculuğunu ele alan eser, bugünü meydana getiren tüm koşulları fenni ve sosyal bilimler ışığında detaylandırıyor",
    "starRate": 4.2,
    "reviewCount": 480,
    "stock": 490,
    "imgSource": "./images/books/sapiens.jpg",
    "type": "HISTORY"
  },
  {
    "id": 12,
    "name": "Savaş ve Barış",
    "author": "Tolstoy",
    "price": 24.6,
    "oldPrice": null,
    "description": "Eğer herkes sadece kendi inanışları için savaşsaydı, savaş olmazdı...",
    "starRate": 4.4,
    "reviewCount": 930,
    "stock": 143,
    "imgSource": "./images/books/savas-ve-baris.jpg",
    "type": "NOVEL"
  }];

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

  const bookNumber = () => {
    for (let i = 0; i < bookList.length; i++) {
    console.log(bookList[i]);
    }
  };
  bookNumber();
  const toggleModal = () => {
    const basketModalEl = document.querySelector(".bakset_modal");
    basketModalEl.classList.toggle("active");
  };
  const createBookStars = (starRate) => {
      let starRateHtml = "";
      for (let i = 1; i <= 5; i++) {
              if (Math.round(starRate) >= i) 
              starRateHtml += ` <i class="fa-solid fa-star active"></i> ` ;
              else starRateHtml += ` <i class="fa-solid fa-star"></i> `;
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
                <div class="col-6 image">
                    <img class="img-fluid shadow" width="258" height="400" src="${book.imgSource}"> 
                </div>
                <div class="col-6 information">
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
                      ${
                        book.oldPrice 
                        ? `<span class="fs-4 fw-bold old_price"> ${book.oldPrice} TL</span>` 
                        :""
                      }
                    </div>
                    <button class="btn btn-outline-success" onclick="addBookToBasket(${book.id})">Sepete Ekle</button>
                </div>
              </div>
            </div>
        `; 
    });
    bookListEl.innerHTML += bookListHtml;
  };
  createBookItemHtml();
  const BOOK_TYPES = {
    ALL: "Tümü",
    NOVEL: "Roman",
    CHILDREN:"Çocuk",
    SELFIMPROVEMENT: "Kişisel Gelişim",
    HISTORY: "Tarih",
    FINANCE: "Finans",
    SCIENCE: "Bilim",
  }
  const createBookTypesHtml = () => {
    const filterEl = document.querySelector(".filter");
    let filterHtml = ""; 
    var filterTypes=["ALL"];
    bookList.forEach(book => {
      if(filterTypes.findIndex((filter) => filter == book.type) == -1)filterTypes.push(book.type); 
    });
    filterTypes.forEach((type, index) => {
      filterHtml += `<li class="menu-item active" onclick="filterBooks(this)" data-type="${type}"> ${BOOK_TYPES[type] || type}</li>`;
    });
    filterEl.innerHTML += filterHtml;
  };
  const filterBooks= (filterEl) => {
    let bookType = filterEl.dataset.type;      
    bookNumber();
    if (bookType != "ALL")
    bookList = bookList.filter((book) => book.type == bookType);
    createBookItemHtml();
  }
  const listBasketItems = () => {
    localStorage.setItem("basketList", JSON.stringify(basketList));
    const basketListEl = document.querySelector(".basket_list");
    document.querySelector(".basket_count").innerHTML = basketList.length > 0 ? basketList.length : null;
    const total_priceEl = document.querySelector(".total_price");

    let basketListHtml="";
    let total_price = 0 ;
    basketList.forEach(item => {
      total_price += item.product.price * item.quantity;
      basketListHtml += `
      <li class="basket_item">
          <img src="${item.product.imgSource}" width="100" height="100" alt="nutuk">
          <div class="basket_item-info">
              <h3 class="book_name">${item.product.name}</h3>
              <span class="book_price">${item.product.price}TL</span>
              <span onclick="removeItemToBasket(${item.product.id})">remove</span>
          </div>
          <div class="book-count">
              <span class="decrease" onclick="decreaseItemToBasket(${item.product.id})">-</span>
              <span class="my-5">${item.quantity}</span>
              <span class="increase" onclick="increaseItemToBasket(${item.product.id})">+</span>
          </div>
      </li>
      `;
    })
    basketListEl.innerHTML = basketListHtml ? basketListHtml : `
          <li class="basket_item" style="justify-content: center;">
              Sepetinize ürün ekleyiniz.
          </li>
  
    `;
    total_priceEl.innerHTML = total_price > 0 ? "Total :" + total_price.toFixed(2) + "TL" : null;
  }
  const addBookToBasket = (bookId) => {
    let findedBook = bookList.find((book) => book.id == bookId);
      if (findedBook) {
        const basketAlreadyIndex = basketList.findIndex(
          (basket) => basket.product.id == bookId
        );
          if (basketAlreadyIndex == -1) {
            let addedItem = {quantity: 1, product: findedBook};
            basketList.push(addedItem);
          }else{
            if 
            (
              basketList[basketAlreadyIndex].quantity < basketList[basketAlreadyIndex].product.stock
            )
            basketList[basketAlreadyIndex].quantity += 1;
            else toastr.error("Yeterli stok bulunmamaktadır.")
            return;  
          }
          listBasketItems();
          toastr.success("Kitap başarılı bir şekilde sepete eklendi.");
      }
      console.log(bookId);
  };
  const removeItemToBasket = (bookId) => {
    const findedIndex = basketList.findIndex(
      (basket) => basket.product.id == bookId
    );
    if (findedIndex != -1) {
        basketList.splice(findedIndex, 1);
    }
    listBasketItems();
  }
  const decreaseItemToBasket = (bookId) => {
     const findedIndex = basketList.findIndex(
      (basket) => basket.product.id == bookId
    );
    if (findedIndex != -1) {
      if (basketList[findedIndex].quantity != 1) {
        basketList[findedIndex].quantity -= 1;
      } else removeItemToBasket(bookId);
      listBasketItems();
    }
  }
   const increaseItemToBasket = (bookId) => {
     const findedIndex = basketList.findIndex(
      (basket) => basket.product.id == bookId
    );
    if (findedIndex != -1) {
      if (basketList[findedIndex].quantity < basketList[findedIndex].product.stock) {
      } 
      else toastr.error("Yeterli stok bulunmamaktadır.")
      basketList[findedIndex].quantity += 1;
      listBasketItems();
    }
  }
    if (localStorage.getItem("basketList")) {
    basketList = JSON.parse(localStorage.getItem("basketList"));
    listBasketItems();
  }

  setTimeout(() => {
    createBookTypesHtml();
  }, 100);

