// Declare variables that will be used throughout project
// Number of students per Page
const studentsPerPage = 9;
// student list element selection
const studentList = document.querySelector('.student-list');
const paginationNumber = document.querySelector('.link-list');


// create function
function showPage (list, page){
   // How many students will be displayed per page
   // const studentsPerPage = 9;
   // calculating start and end index
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage) - 1;
   // removes any student that might have previously been displayed
   studentList.innerHTML = '';
   // Looping over List of students: 
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex){
         const student = list[i];
         const HTML = 
         `<li class='student-item cf'>
               <div class = 'student-details'>
                  <img class = 'avatar' src="${student.picture.medium}"alt ='Profile Pictures'> 
                  <h3>${student.name.first}
                     ${student.name.last}</h3>
                     <span class = 'email'>${student.email}</span>

               </div>
               <div class='joined-details'>
               <span class='date'>Joined ${student.registered.date} </span>
               </div>
         </li>`;

         // student HTML into student list element
         studentList.insertAdjacentHTML('beforeend',HTML);
      }
   }
}



// function creation with list as parameter
   function addPagination (list){
      const numberPages = Math.ceil(list.length / studentsPerPage);
      // 
      paginationNumber.innerHTML = ''; 
      //Loop over variables that contain the number of pages
      for (let i = 1; i<= numberPages; i++){
         const buttonHTML = `
         <li>
         <button type='button'> ${i} </button>
         </li>
         `;
   // append elements to link list
   paginationNumber.insertAdjacentHTML ('beforeend', buttonHTML);
      }
   // pagination button w class name active 

   if (paginationNumber.querySelector('button')) {
      paginationNumber.querySelector('button').classList.add('active');
   }

   paginationNumber.addEventListener('click', (e) => {
      const activeButton = paginationNumber.querySelector('.active');
      const buttonClicked = e.target.closest('button');

      if (activeButton && buttonClicked) {
         activeButton.classList.remove("active");
      }

      if (buttonClicked) {
         buttonClicked.classList.add("active");
         showPage(list, buttonClicked.innerHTML);

         
      }
   });

   }
   // call function
   addPagination(data);
   showPage(data,1);
