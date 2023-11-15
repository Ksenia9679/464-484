// Задание 1 страница 464
// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let p = document.createElement('p');
//   p.textContent = elem;

//   p.addEventListener('click', function() {
//     p.textContent = parseInt(p.textContent) + 1;
//   });

//   parent.appendChild(p);
// }

//Задание 1 страница 465
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let li = document.createElement('li');
//   li.textContent = elem;

//   ul.appendChild(li);
// }

// parent.appendChild(ul);

//Задание 2 страница 465
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let li = document.createElement('li');
//   li.textContent = elem;

//   li.addEventListener('click', function() {
//     alert(elem);
//   });

//   ul.appendChild(li);
// }

// parent.appendChild(ul);

//Задание 3 страница 465
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let li = document.createElement('li');
//   li.textContent = elem;

//   li.addEventListener('click', function() {
//     li.textContent += '!';
//   });

//   ul.appendChild(li);
// }

// parent.appendChild(ul);

//Задание 4 страница 465
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let li = document.createElement('li');
//   li.textContent = elem;

//   li.addEventListener('click', function() {
//     li.textContent += '!';
//   }, {
//     once:true 
// });

//   ul.appendChild(li);
// }
// parent.appendChild(ul);

//Задание 1 страница 466
// let table = document.getElementById("table");

// for (let i = 0; i < 5; i++) {
//   let row = document.createElement("tr");
  
//   for (let j = 0; j < 5; j++) {
//     let cell = document.createElement("td");
//     cell.textContent = (i * 5) + (j + 1);
//     row.appendChild(cell);
//   }
  
//   table.appendChild(row);
// }

//Задание 2 страница 466
// let table = document.getElementById("table");

// for (let i = 0; i < 5; i++) {
//   let row = document.createElement("tr");
  
//   for (let j = 0; j < 10; j++) {
//     let cell = document.createElement("td");
//     cell.textContent = (i * 10) + (j + 1);
//     row.appendChild(cell);
//   }
  
//   table.appendChild(row);
// }

//Задание 3 страница 466
// let table = document.getElementById("table");

// for (let i = 0; i < 5; i++) {
//   let row = document.createElement("tr");
  
//   for (let j = 0; j < 5; j++) {
//     let cell = document.createElement("td");
//     cell.textContent = (i * 5) + (j + 1);
//     cell.appendChild(document.createTextNode('x')); 
//     row.appendChild(cell);
//   }
  
//   table.appendChild(row);
// }

//задание 4 страница 466
// function generateTable() {
//     const width = document.getElementById('widthInput').value;
//     const height = document.getElementById('heightInput').value;

//     if (width && height) {
//       const table = document.createElement('table');

//       for (let i = 0; i < height; i++) {
//         const row = table.insertRow();
//         for (let j = 0; j < width; j++) {
//           const cell = row.insertCell();
//           cell.textContent = (i * width) + j + 1;
//         }
//       }

//       document.getElementById('tableContainer').innerHTML = '';
//       document.getElementById('tableContainer').appendChild(table);
//     } else {
//       alert('Значения не допустимы');
//     }
//   }

//Задание 1 страница 467
// let table = document.getElementById("table");

// for (let i = 0; i < 5; i++) {
//   let row = document.createElement("tr");
  
//   for (let j = 0; j < 5; j++) {
//     let cell = document.createElement("td");
//     cell.textContent = (i * 5) + (j + 1);
//     row.appendChild(cell);
//   }
  
//   table.appendChild(row);
// }

//Задание 2 страница 467
// let table = document.querySelector('#table');

// let k = 2; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 10; i++) {
// 		let td = document.createElement('td');
// 		if(k % 2 == 0){
//             td.textContent = k; 
//         }
//         k++;
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//Задание 1 страница 468
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9 ], [10, 11, 12]]; 
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//Задание 2 страница 468
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9 ], [10, 11, 12]];  
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem**2;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//Задание 1-3 страница 469
// let users = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.getElementById('table');

// for (let user of users) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
    
//     td2.addEventListener('click', ()=>{
//         td2.textContent = +td2.textContent + 1
//     })
//     td3.onclick = ()=>{
        
//         td3.textContent = (+td3.textContent * 10) / 100 + +td3.textContent;
//     }
// }

//Задание 1-2 страница 470
// function generateTable() {
//     const width = document.getElementById('widthInput').value;
//     const height = document.getElementById('heightInput').value;

//     if (width && height) {
//       const table = document.createElement('table');

//       let num = 2;
//       for (let i = 0; i < height; i++) {
//         const row = table.insertRow();
//         for (let j = 0; j < width; j++) {
//           const cell = row.insertCell();
//           cell.textContent = num;
//           num += 2;
//           if (num > 50) {
//             break;
//           }
//         }
//         if (num > 50) {
//           break;
//         }
//       }

//       document.getElementById('tableContainer').innerHTML = '';
//       document.getElementById('tableContainer').appendChild(table);
//     } else {
//       alert('Значение не допустимо');
//     }
//   }

// Задание 1 страница 470
// function addRow() {
//     const table = document.querySelector('table');
//     const lastRow = table.rows[table.rows.length - 1];
//     const newRow = table.insertRow();
    
//     for (let i = 0; i < lastRow.cells.length; i++) {
//       const newCell = newRow.insertCell();
//       newCell.textContent = parseInt(lastRow.cells[i].textContent) + 10;
//     }
//   }

// let table = document.getElementById("table");

// for (let i = 0; i < 5; i++) {
//     let row = document.createElement("tr");
    
//     for (let j = 0; j < 5; j++) {
//       let cell = document.createElement("td");
//       cell.textContent = (i * 5) + (j + 1);
//       row.appendChild(cell);
//     }
    
//     table.appendChild(row);
//   }

//Задание 2 страница 270
// let a = 2;
// document.querySelector('button').onclick = () => {
    
    
//     let table = document.querySelector('#table');
//     let tr = document.createElement('tr');
//     for (let i = 1; i <= a; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
        
//     }
//     a +=1;
//     console.log(a)
//     table.appendChild(tr);
//     let trs = document.querySelectorAll('#table tr');

//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
// }

//Задание 1 страница 271
// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]; 
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
//         td.onclick=()=>{
//             elem= elem*2;
//             td.textContent = elem;
//         }
// 	}
	
// 	table.appendChild(tr);
// }

//Задание 1 страница 272
// let parent = document.querySelector('#parent');
// let a = 0;
// document.querySelector('input').onclick = ()=> {
//     a++;
//     let li = document.createElement('li');
//     li.textContent = a;
//     parent.appendChild(li);
//     li.onclick = ()=> {
//         li.remove();
//     }
// }

//Задание 1 страница 273
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); 
// });

//Задание 1 страница 274
// let items = document.querySelectorAll('#list li');

//     items.forEach(item => {
//       let removeLink = document.createElement('a');
//       removeLink.href = '#';
//       removeLink.textContent = 'сюда!';
      
//       item.appendChild(removeLink);

//       removeLink.addEventListener('click', function(event) {
//         item.remove();
//         event.preventDefault();
//       });
//     });

//Задание 2 страница 274
// let removeLinks = document.querySelectorAll('.removeRow');

//     removeLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//         let row = this.parentNode.parentNode;
//         row.remove();
//         event.preventDefault();
//       });
//     });

//Задание 1 страница 275
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.addEventListener('input', function() {
//   elem.textContent = this.value;
// });

//Задание 2 страница 275
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
	
// input.value = elem.textContent
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); // удалим инпут
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

//Задание 1 страница 276
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
	
// 	elem.removeEventListener('click', func);
// });

//Задание 1 страница 277
// let listItems = document.querySelectorAll('li');

// for (let listItem of listItems) {
//   listItem.addEventListener('click', function() {
//     let input = document.createElement('input');
//     input.value = listItem.textContent;
    
//     listItem.textContent = '';
//     listItem.appendChild(input);
    
//     input.addEventListener('blur', function() {
//       listItem.textContent = this.value;
//     });
//   });
// }

//Задание 2 страница 277
// let cells = document.querySelectorAll('td');

//     for (let cell of cells) {
//       cell.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.value = cell.textContent;
        
//         cell.textContent = '';
//         cell.appendChild(input);
        
//         input.addEventListener('blur', function() {
//           cell.textContent = this.value;
//         });
//       });
//     }

//Задание 1 страница 278 
// let spans = document.querySelectorAll('span');

//     for (let span of spans) {
//       span.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
        
//         span.textContent = '';
//         span.appendChild(input);
        
//         input.addEventListener('blur', function() {
//           span.textContent = this.value;
//         });
//       });
//     }

//     let deleteLinks = document.querySelectorAll('.delete-link');

//     for (let link of deleteLinks) {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
//         link.parentElement.remove();
//       });
//     }

//Задание 2 страница 278
// let paragraphs = document.querySelectorAll('p');

//     for (let paragraph of paragraphs) {
//       let span = document.createElement('span');
//       span.textContent = paragraph.textContent;
//       paragraph.textContent = '';
//       paragraph.appendChild(span);

//       span.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
        
//         span.textContent = '';
//         span.appendChild(input);
        
//         input.addEventListener('blur', function() {
//           span.textContent = this.value;
//         });
//       });

//       let deleteLink = document.createElement('a');
//       deleteLink.href = '#';
//       deleteLink.className = 'delete-link';
//       deleteLink.textContent = 'Delete';
//       deleteLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         paragraph.remove();
//       });

//       paragraph.appendChild(deleteLink);
//     }

//Задание 1 страница 279
// let paragraphs = document.querySelectorAll('p');

//     for (let paragraph of paragraphs) {
//       let span = document.createElement('span');
//       span.textContent = paragraph.textContent;
//       paragraph.textContent = '';
//       paragraph.appendChild(span);

//       span.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
        
//         span.textContent = '';
//         span.appendChild(input);
        
//         input.addEventListener('blur', function() {
//           span.textContent = this.value;
//         });
//       });

//       let deleteLink = document.createElement('a');
//       deleteLink.href = '#';
//       deleteLink.className = 'delete-link';
//       deleteLink.textContent = 'Удалить ';
//       deleteLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         paragraph.remove();
//       });

//       let strikethroughLink = document.createElement('a');
//       strikethroughLink.href = '#';
//       strikethroughLink.className = 'strikethrough-link';
//       strikethroughLink.textContent = ' Зачеркнуть';
//       strikethroughLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (span.style.textDecoration === 'line-through') {
//           span.style.textDecoration = 'none';
//         } else {
//           span.style.textDecoration = 'line-through';
//         }
//       });

//       paragraph.appendChild(deleteLink);
//       paragraph.appendChild(strikethroughLink);
//     }

//Задание 2 страница 279
// let paragraphs = document.querySelectorAll('p');

//     for (let paragraph of paragraphs) {
//       let span = document.createElement('span');
//       span.textContent = paragraph.textContent;
//       paragraph.textContent = '';
//       paragraph.appendChild(span);

//       span.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
        
//         span.textContent = '';
//         span.appendChild(input);
        
//         input.addEventListener('blur', function() {
//           span.textContent = this.value;
//         });
//       });

//       let deleteLink = document.createElement('a');
//       deleteLink.href = '#';
//       deleteLink.className = 'delete-link';
//       deleteLink.textContent = 'Удалить';
//       deleteLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         deleteLink.remove();
//         span.style.textDecoration = 'line-through';
//       });

//       let strikethroughLink = document.createElement('a');
//       strikethroughLink.href = '#';
//       strikethroughLink.className = 'strikethrough-link';
//       strikethroughLink.textContent = 'Зачеркнуть';
//       strikethroughLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (span.style.textDecoration === 'line-through') {
//           span.style.textDecoration = 'none';
//         } else {
//           span.style.textDecoration = 'line-through';
//         }
//       });

//       paragraph.appendChild(deleteLink);
//       paragraph.appendChild(strikethroughLink);
//     }

//Задание 3 страница 279
// let elems = document.querySelectorAll('#parent tr');
// let bool = true;

// for(let elem of elems){
//     let remove = document.createElement('td');
    
//     remove.textContent = 'ЦВЕТ';
//     elem.appendChild(remove);

//     remove.onclick = ()=> {
//         if (bool) {
//             elem.style.background = 'green';
//             bool = false;
//         }else{
//             elem.style.background = 'red';
//             bool = true;
//         }
//     }
// }

//Задание 1 страница 280
// let elem = document.querySelector('#elem');
// let toggle = document.querySelector('#toggle');

// toggle.addEventListener('click', function() {
//   elem.classList.toggle('hidden');
// });

//Задание 1 страница 281
// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

//Задание 2 страница 281
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

//Задание 3 страница 281
// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

//Задание 1 страница 282
// let lis = document.querySelectorAll('ul li');

// for (let li of lis) {
//   li.addEventListener('click', function() {
//     this.classList.add('active');
//   });
// }

//Задание 2 страница 282
// let lis = document.querySelectorAll('ul li');

// for (let li of lis) {
//   li.addEventListener('click', function() {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//     } else {
//       for (let item of lis) {
//         item.classList.remove('active');
//       }
//       this.classList.add('active');
//     }
//   });
// }

//Задание 1 страница 283
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';

// for (let td of tds) {
//   td.addEventListener('click', function() {
//     if (color === 'color1') {
//       color = 'color2';
//     } else {
//       color = 'color1';
//     }
    
//     this.classList.add(color);
//   });
// }

//Задание 1 страница 284
// const array = ['1', '2', '3', '4', '5'];
// let list = document.getElementById('list');

// array.forEach(item => {
//   let li = document.createElement('li');
//   li.textContent = item;
//   list.appendChild(li);
// });

//Задание 2 страница 284
// const array = ['1', '2', '3', '4', '5'];
// let list = document.getElementById('list');

// array.forEach(item => {
//   let li = document.createElement('li');
//   li.textContent = item;
//   li.addEventListener('click', function() {
//     let input = document.createElement('input');
//     input.value = item;
//     input.addEventListener('blur', function() {
//       item = input.value;
//       li.textContent = item;
//     });
//     li.innerHTML = '';
//     li.appendChild(input);
//     input.focus();
//   });
//   list.appendChild(li);
// });

//Задание 3 страница 284
// const array = ['1', '2', '3', '4', '5'];
// let list = document.getElementById('list');
// let newItemInput = document.getElementById('newItemInput');

// function addItem() {
//   const newItem = newItemInput.value;
//   if (newItem !== '') {
//     array.push(newItem);
//     renderList();
//     newItemInput.value = '';
//   }
// }

// function renderList() {
//   list.innerHTML = '';
//   array.forEach(item => {
//     let li = document.createElement('li');
//     li.textContent = item;
//     li.addEventListener('click', function() {
//       let input = document.createElement('input');
//       input.value = item;
//       input.addEventListener('blur', function() {
//         item = input.value;
//         li.textContent = item;
//       });
//       li.innerHTML = '';
//       li.appendChild(input);
//       input.focus();
//     });
//     list.appendChild(li);
//   });
// }

// renderList();

//Задание 4 страница 284
// const array = ['1', '2', '3', '4', '5'];
// let list = document.getElementById('list');
// let newItemInput = document.getElementById('newItemInput');

// function addItem() {
//   const newItem = newItemInput.value;
//   if (newItem !== '') {
//     array.push(newItem);
//     renderList();
//     newItemInput.value = '';
//   }
// }

// function renderList() {
//   list.innerHTML = '';
//   array.forEach((item, index) => {
//     let li = document.createElement('li');
//     li.textContent = item;
//     li.addEventListener('click', function() {
//       let input = document.createElement('input');
//       input.value = item;
//       input.addEventListener('blur', function() {
//         item = input.value;
//         li.textContent = item;
//       });
//       li.innerHTML = '';
//       li.appendChild(input);
//       input.focus();
//     });

//     let deleteLink = document.createElement('a');
//     deleteLink.textContent = ' Удалить';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', function() {
//       array.splice(index, 1);
//       renderList();
//     });

//     li.appendChild(deleteLink);
//     list.appendChild(li);
//   });
// }

