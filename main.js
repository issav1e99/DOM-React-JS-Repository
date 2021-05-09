//EXAMINE DOCUMENT OBJECTS(ELEMENTS)
//console.log(document.title);
//console.log(document.all);
//console.log(document.links);
//console.log(document.URL);
//console.log(document.body);
//console.log(document.head);
//console.log(document.images);
//console.log(document.forms);
//console.log(document.domain);




//CALLING IDs
document.getElementById('page-header');

var mainHeader = document.getElementById('main-heading');
console.log(mainHeader);
mainHeader.textContent = 'New DOM Layout';
mainHeader.classList = 'bg-success';

var Para1 = document.getElementById('para1');
console.log(Para1);
Para1.textContent = ' The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

var Para2 = document.getElementById('para2');
console.log(Para2);
Para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

document.getElementById('para4')

//CLICK EVENT FUNCTION

var BTN = document.getElementById('btn');
console.log(BTN);
BTN.addEventListener("click", () => {
    var result = para4.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
});

//BOX COLOR CHANGE

var RedColor = document.getElementById('red');
console.log(RedColor);
RedColor.classList = 'bg-danger';

var BlueColor = document.getElementById('blue');
console.log(BlueColor);
BlueColor.classList = 'bg-primary';

var YellowColor = document.getElementById('yellow');
console.log(YellowColor);
YellowColor.classList = ' bg-warning';

var GreenColor = document.getElementById('green');
console.log(GreenColor);
GreenColor.classList = 'bg-success';

var BlackColor = document.getElementById('black');
console.log(BlackColor);
BlackColor.classList = 'bg-dark';