// const booklist = [
//     {
//         image: "assest/Bitmap.png",
//         title: "Bhoot er golpo",
//         category: "Horror",
//         price: 25.50
//     },
//     {
//         image: "assest/Bitmap.png",
//         title: "Bhoot er golpo",
//         category: "Horror",
//         price: 25.50
//     },
//     {
//         image: "assest/Bitmap.png",
//         title: "Bhoot er golpo",
//         category: "Horror",
//         price: 25.50
//     }
// ]

const recommendedBooks = [
    { image: "assest/Bitmap.png", title: "The World of\nAbstract Art", category: "Art & Design", price: 25.0 },
    { image: "assest/Bitmap (1).png", title: "Educated :\na Memoir", category: "Education", price: 28.0 },
    { image: "assest/Bitmap (3).png", title: "The Blue\nFlowers Ray...", category: "Novel", price: 19.5 },
    { image: "assest/Bitmap (4).png", title: "There There :\na Novel by TO", category: "Novel", price: 20.0 },
    { image: "assest/Bitmap (6).png", title: "WMNDFL :\nThe Inspiration", category: "Business", price: 23.0 },
    { image: "assest/Bitmap (7).png", title: "Making\nThings Happen", category: "Motivation", price: 23.0 },
    { image: "assest/Bitmap (9).png", title: "Bangla\nBhhot er golpo", category: "Horror", price: 1 },
];

const recommendedBooksElement = document.getElementById("recommendedList")

const formatTitle = (title) => title.replace(/\n/g, "<br />");


recommendedBooks.forEach((book) => {
    recommendedBooksElement.innerHTML += `
              <article class="flex gap-5 rounded-md border border-line p-[10px]">
            <img src="${book.image}" alt="Making Things Happen"
              class="h-[237px] w-[160px] shrink-0 rounded object-cover" />
            <div class="flex flex-col pt-6">
              <h3 class="font-serif text-lg leading-8">${formatTitle(book.title)}</h3 >
              <p class="mt-3 text-base">${book.category}</p >
              <p class="mt-5 font-serif text-lg text-primary">$${book.price}</p >
    <div class="mt-5 flex items-center gap-6">
        <a href="#"
            class="inline-flex h-9 items-center rounded-full bg-navy px-[15px] font-semibold text-white hover:bg-primary">Buy
            Now</a>
        <button id="bookButton" class="text-heart hover:text-red-500" aria-label="Add to wishlist">
            <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </button>
    </div>
            </div >
          </article >
    `

})

const bookButton = document.getElementById("bookButton")

bookButton.addEventListener("click", getBookName)

function getBookName() {
    console.log("bookName")
}

// console.log(recommendedBooksElement)



// const formatTitle = (title) => title.replace(/\n/g, "<br />");


// const recommendedBooksElement = document.getElementById("recommendedList");
// recommendedBooks.forEach((book) => {
//     recommendedBooksElement.innerHTML += `
// <article class="flex gap-5 rounded-md border border-line p-[10px]">
//     <img src="${book?.image}" alt="The World of Abstract Art"
//         class="h-[237px] w-[160px] shrink-0 rounded object-cover" />
//     <div class="flex flex-col pt-6">
//         <h3 class="font-serif text-lg leading-8">${formatTitle(book.title)}</h3>
//         <p class="mt-3 text-base">${book.category}</p>
//         <p class="mt-5 font-serif text-lg text-primary">$${book.price}</p >
//         <div class="mt-5 flex items-center gap-6">
//             <a href="#"
//                 class="inline-flex h-9 items-center rounded-full bg-navy px-[15px] font-semibold text-white hover:bg-primary">Buy
//                 Now</a>
//             <button class="text-heart hover:text-red-500" aria-label="Add to wishlist">
//                 <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
//                     <path
//                         d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                 </svg>
//             </button>
//         </div>
//     </div >
// </article > `
// })
// // recommendedBooksElement.innerHTML += `${ a.title } `


// console.log(recommendedBooksElement)