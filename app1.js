let container = document.querySelector('.container')


let navBar = document.querySelector('.nav-bar')
let content = document.querySelector('.content')
let rightBox = document.querySelector('.right-box')
let leftBox = document.querySelector('.left-box')
let div2 = document.createElement('div');
let span1 = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')

let div21 = document.createElement('div');
let span12 = document.createElement('span')
let span22 = document.createElement('span')
let span32 = document.createElement('span')
let span42 = document.createElement('span')
let span52 = document.createElement('span')

let h5 = document.createElement('h1')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let span31 = document.createElement('span')
let p1 = document.createElement('p')
let span4 = document.createElement('span')
let div3 = document.createElement('div');
let div31 = document.createElement('div');
let div32 = document.createElement('div');
let div33 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
let div6 = document.createElement('div');
let div61 = document.createElement('div');
let div62 = document.createElement('div');
let div63 = document.createElement('div');
let h4 = document.createElement('h1');
let p4 = document.createElement('p');
let p41 = document.createElement('p');
let p42 = document.createElement('p');
let ul =document.createElement('ul');
let li1 =document.createElement('li');
let li2 =document.createElement('li');
let li3 =document.createElement('li');
let li4 =document.createElement('li');
let li5 =document.createElement('li');
let li6 =document.createElement('li');
let li7 =document.createElement('li');
let h6 = document.createElement('h1');
let p51 = document.createElement('p');
let p52 = document.createElement('p');
let h7 = document.createElement('h1');

let div8=document.createElement('div')
let span8=document.createElement('div')
let img= document.createElement('img')
let img1= document.createElement('img')
let img2= document.createElement('img')

div81= document.createElement('div')
img3= document.createElement('img')

let div9=document.createElement('div')


let div91=document.createElement('div')
let span9 = document.createElement('span')
let div92=document.createElement('div')
let span19 = document.createElement('span')
let span29 = document.createElement('span')
let span39 = document.createElement('span')

let button =document.createElement('button')




// nav-bar
let h1 = document.createElement('h1')
let input = document.createElement('input')
input.placeholder='Search'
let div1 = document.createElement('div');
let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
let a4 = document.createElement('a');
let a5 = document.createElement('a');





a1.href='#', a2.href='#',a3.href='#',a4.href='#',a5.href='#'

a1.textContent='WOMAN'
a2.textContent='MAN'
a3.textContent='DESIGNERS'
a4.textContent='WISHLIST'
a5.textContent='CARD'
h1.textContent='Fashion';
span1.textContent=' Woman '
span2.textContent=' > '
span3.textContent=' Pastel Jacket With Bejewelled Collar '

span12.textContent=' < '
span22.textContent=' Pred. '
span32.textContent=' 2 of 10 '
span42.textContent=' Next '
span52.textContent=' > '



h5.textContent='Pastel Jacket With Bejewelled Collar';
h3.textContent='79.99 GBP';
p.textContent='DESIGNER:'; 
span31.textContent='Mademoiselle Tambour';
p1.textContent='COLOR:';
span4.textContent='Tobacco brown';

h4.textContent='DESCRIPTION';
p4.textContent='Pastel Jacket With Bejewelled Collar exclusive pattern ';
p41.textContent=' by John MalKovich and printed on soft cotton fabric. ';
p42.textContent=' Made In Italy ';

li1.textContent='Quilted design'
li2.textContent='contrasted faux-fur collar'
li3.textContent='Loops on the shoulders'
li4.textContent='Side zip pockets'
li5.textContent='Two side pockets with one press stud fastening'
li6.textContent='long sleeve with elastic cuffs' 
li7.textContent='Zip fastening on the front section'

p51.textContent=' Side lenght 31.5 cm'
p52.textContent=' Back lenght 56.5 cm'

h6.textContent='SHARE THIS'
h7.textContent='Watching with'


span8.textContent=' ^ '
img.src='./photo.webp'
img1.src='./photo.webp'
img2.src='./photo.webp'
img3.src='./photo.webp'

span19.textContent=' - '
span29.textContent=' 1 '
span39.textContent=' + '
button.textContent=' ADD TO CARD'

span9.textContent='Size : S'

container.appendChild(navBar)
container.appendChild(content)
container.appendChild(leftBox)
container.appendChild(rightBox)
container.appendChild(h7)


navBar.appendChild(h1);
navBar.appendChild(input);
navBar.appendChild(div1);
div1.appendChild(a1);
div1.appendChild(a2);
div1.appendChild(a3);
div1.appendChild(a4);
div1.appendChild(a5);
content.appendChild(div2)
content.appendChild(div21)
div2.appendChild(span1)
div2.appendChild(span2)
div2.appendChild(span3)
div21.appendChild(span12)
div21.appendChild(span22)
div21.appendChild(span32)
div21.appendChild(span42)
div21.appendChild(span52)

leftBox.appendChild(div8)
div8.appendChild(span8)
div8.appendChild(img)
div8.appendChild(img1)
div8.appendChild(img2)
leftBox.appendChild(div81)
div81.appendChild(img3)


rightBox.appendChild(h5)
rightBox.appendChild(h3)
rightBox.appendChild(p)
p.append(span31)
rightBox.appendChild(p1)
p1.appendChild(span4)
rightBox.appendChild(div3)
rightBox.appendChild(div9)
div5.appendChild(h4)
div5.appendChild(p4)
div5.appendChild(p41)
div5.appendChild(p42)

div3.appendChild(div31)
div3.appendChild(div32)
div3.appendChild(div33)


div9.appendChild(div91)
div9.appendChild(div92)
div9.appendChild(button)
div91.appendChild(span9)
div92.appendChild(span19)
div92.appendChild(span29)
div92.appendChild(span39)

rightBox.appendChild(div5)
div5.appendChild(div4)
div4.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)
ul.appendChild(li6)
ul.appendChild(li7)

div5.appendChild(p51)
div5.appendChild(p52)

rightBox.appendChild(h6)
div92.classList.add('div92')





a1.classList.add('a')
h1.classList.add('h1')
content.classList.add('block')
div3.classList.add('color')
div31.classList.add('brown')
div32.classList.add('gris')
div33.classList.add('grisWhite')
div4.classList.add('puces')
div5.classList.add('bas')

p51.classList.add('taille')
h4.classList.add('taille1')
h6.classList.add('taille1')
p4.classList.add('taille')
p41.classList.add('taille')
p42.classList.add('taille')
p52.classList.add('taille')
h3.classList.add('bas1')
span3.classList.add('bas1')
p.classList.add('bas1')
p1.classList.add('bas1')
h7.classList.add('bas2')
input.classList.add('search')
span1.classList.add('span1')
span2.classList.add('span2')
span3.classList.add('span2')
div2.classList.add('div2')
span12.classList.add('span2','span12')
span22.classList.add('span2')
span32.classList.add('span2')
span42.classList.add('span2')
span52.classList.add('span2')
span3.classList.add('span2')
span3.classList.add('span2')
div21.classList.add('div21')
leftBox.classList.add('left-box')
div8.classList.add('div8')
img.classList.add('img')
img1.classList.add('img')
img2.classList.add('img')
img3.classList.add('img1')
span8.classList.add('span8')
span19.classList.add('span0')
span39.classList.add('span')
div9.classList.add('div9')
span9.classList.add('span9')








