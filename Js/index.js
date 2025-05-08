
var swiper = new Swiper('.swiper', {
    spaceBetween:10,

    autoplay:{
        delay:3000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var swiper = new Swiper('.top-picks', {
    effect: 'none',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween:30,
    slidesPerView: 'auto',

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    pagination: {
      el: '.swiper-pagination',
    },
  });


  var swiper = new Swiper('.on-going', {
    effect: 'none',
    spaceBetween:30,
    slidesPerView: 'auto',
    autoplay:{
      delay:2000,
    },
    loop:true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const Ongoing = async () =>{
    const api =  await fetch("https://eysteix.github.io/sky-moviz/Js/all.json",{cache:"default"});
    const  data = await api.json();

    const home = document.querySelector(".on-going >.swiper-wrapper");

      const dt = data.slice(0,5)

     const info = dt.map((link)=>{
        return `
        <div key='${link.name}' class="on_going_slide swiper-slide" style="background:linear-gradient(to top,rgba(0, 0, 0, 0.854),transparent), url('./Images/${link.image}') center no-repeat ;width:100%;">
        <h2>${link.title}</h2>
        <small>${link.year}</small>
        </div>
        `
     }).join("")
    console.log(info);
     home.innerHTML =  info;


}

Ongoing();



  const data = async () =>{
    const api =  await fetch("https://eysteix.github.io/sky-moviz/Js/all.json",{cache:"default"});
    const  data = await api.json();

    const home = document.querySelector(".anime_cards");

      const dt = data.slice(0,15)

     const info = dt.map((link)=>{
        return `
        <div key='${link.name}' class="anime_card ">
        <Img src='./Images/${link.image}' src" alt="alt" />
        <h2>${link.title}</h2>
        <small>${link.year}</small>
        </div>
        `
     }).join("")
    console.log(info);
     home.innerHTML =  info;


}

data();




// const jsonData = [
//   { "id": 1, "title": "Movie 1", "genre": "Action" },
//   { "id": 2, "title": "Movie 2", "genre": "Comedy" },
//   { "id": 3, "title": "Movie 3", "genre": "Drama" },
// ];

// // Search function
// function search(query) {
//   // Convert query to lowercase for case-insensitive search
//   const searchTerm = query.toLowerCase();

//   // Filter JSON data based on the search query
//   const results = jsonData.filter(item =>
//     item.title.toLowerCase().includes(searchTerm) ||
//     item.genre.toLowerCase().includes(searchTerm)
//   );

//   return results;
// }

// // Example usage
// const searchTerm = "Comedy";
// const searchResults = search(searchTerm);

// // Display search results
// console.log("Search Results:", searchResults);



// const dataSet = [
//   {
//     "name":"Joan",
//     "district":"Kampala",
//     "gender":"Female"
//   },
//     {
//     "name":"Joseph",
//     "district":"Masaka",
//     "gender":"Male"
//   },
//     {
//     "name":"Janet",
//     "district":"Kampala",
//     "gender":"Female"
//   },
//     {
//     "name":"Jerrico",
//     "district":"Mubende",
//     "gender":"Male"
//   },
//     {
//     "name":"John",
//     "district":"Mityana",
//     "gender":"Male"
//   },
//    {
//     "name":"Julliet",
//     "district":"Kampala",
//     "gender":"Female"
//   }
// ]

// const displayPageNav = perPage => {

//   let pagination =``
//   const totalItems = dataSet.length
//   perPage = perPage ? perPage : 1
//   const pages = Math.ceil(totalItems/perPage)

//   for(let i = 1; i <= pages; i++) {
//     pagination += `<a href="#" onClick="displayItems(${i},${perPage})" >${i}</a>`
//   }

//   document.getElementById('pagination').innerHTML = pagination

// }

// const displayItems = ( page = 1, perPage = 2 ) => {

//  let index, offSet

//   if(page == 1 || page <=0)  {
//     index = 0
//     offSet = perPage
//   } else if(page > dataSet.length) {
//     index = page - 1
//     offSet = dataSet.length
//   } else {
//     index = page * perPage - perPage
//     offSet = index + perPage
//   }

//   const slicedItems = dataSet.slice(index, offSet)

//   const html = slicedItems.map(item =>
//    `<tr>
//       <td>${item.name}</td>
//       <td>${item.gender}</td>
//       <td>${item.district}</td>
//     </tr>`)

//   document.querySelector('#container tbody').innerHTML = html.join('')

// }

// let perPage = 5
// displayPageNav(perPage)
// displayItems(1, perPage)
