// create global variables to hold list of students and set items per page
const studentList = document.getElementsByClassName('student-item');
const itemsPerPage = 10;

// function to display a set number of students per page
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   for (let i = 0; i < list.length; i ++) {
      list[i].style.display = 'none';
      if ( i >= startIndex && i < endIndex ) {
         list[i].style.display = '';
      }
   }
}  

// function to add pagination links to the bottom of the web page
function appendPageLinks(list) {
   // variables for pagination
   const pageDiv = document.getElementsByClassName('page')[0];
   const paginationDiv = document.createElement('div');
   const ul = document.createElement('ul');

   // determine number of pages required
   const numberOfPages = Math.ceil(list.length/itemsPerPage);

   // append <div> and <ul> elements and add class name to <div>
   paginationDiv.className = 'pagination';
   pageDiv.appendChild(paginationDiv);
   paginationDiv.appendChild(ul);

   // loop to create and append <li> and <a> elements
   for (let i = 1; i <= numberOfPages; i ++) {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(anchor);
   }

   // loop to set 'href' and text of <a> tags
   const anchorTag = document.querySelectorAll('a');
   for (let i = 0; i < anchorTag.length; i ++) {
      anchorTag[i].href = '#';
      anchorTag[i].textContent = i + 1;
   }

   // initially set class of first <a> element to 'active'
   ul.firstElementChild.firstElementChild.className = 'active';

   // loop to add event listener to all <a> elements
   for (let i = 0; i < anchorTag.length; i ++) {
      anchorTag[i].addEventListener('click', (e) => {
        for (let i = 0; i < anchorTag.length; i ++) {
           anchorTag[i].className = '';
        } 
        e.target.className = 'active';
        showPage(studentList, e.target.textContent);
      });
   }
}

// initial call of `showPage` and `appendPageLinks` functions
showPage(studentList, 1);
appendPageLinks(studentList);