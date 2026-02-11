// let alltags = document.getElementsByClassName("productCol")[0]
// let alltags = document.getElementsByTagName("p")
let alltags = document.querySelectorAll(".ourProduct p")

alltags.innerHtml = "Nisa"


let object = {
    student1: {
        name: "Saad",
        age: " 21",
    },
    student2:{
        name: "Hyder",
        age: " 21",
    }
}


for(let key in object){
    for(let keyInner in object[key]){
        document.write("<p>" +keyInner+" "+ object[key][keyInner]+"</p>")
    }
}



let multiArray = [
    ["Amna","16","9" , 50 , 60 , 61], // 0
    ["Hina", "19","12",35 ,65 ,87 ], //1
    ["Raza", "12","6", 45 ,15 ] // 2
];



console.log(multiArray)


for(let x of multiArray){
    for(let y of x){
        console.log(y)
    }
}


let list = document.querySelectorAll(".ourProduct p")

console.log(list)
console.log(list.length)

for(let i = 0; i < list.length ; i++){
    list[i].style.color = "blue"
}




