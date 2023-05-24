// console.log(document.childNodes);
// console.log(document.body.firstElementChild.nextElementSibling);

//!node -> bosh qatorni va teglarni value sifatida oladi
//!element -> faqat teglarni qiymat sifatida oladi


let h1 = document.getElementById('h1');

h1.innerHTML = 'jasurbek'

// console.log(h1.outerHTML);

let none = document.getElementById('none')
none.setAttribute('class' , 'red')

none.style.cssText = `
    background:blue;
    color:green;
`

let box = document.getElementsByClassName('box')

// console.log(box[0].offsetHeight);
// console.log(box[0].clientHeight);

// console.log(box[0].offsetWidth);
// console.log(box[0].clientWidth);

// console.log(box[0].offsetTop);
// console.log(box[0].offsetLeft);

let a = box[0].scrollHeight

console.log(a);

const more = () => {
    box[0].style.height = `${a}px`
}

const less = () => {
    box[0].style.height = '400px'
}

const btn = () => {
    // box[0].scroll({top:200 , behavior:'smooth'})
    // box[0].scrollBy({top:200 , behavior:'smooth'})
    // box[0].scrollTo({top:200 , behavior:'smooth'})
    // console.log(box[0].getBoundingClientRect());
}

//!mouse events