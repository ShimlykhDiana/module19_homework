// const name = 'Andrei';
// const surname = 'Petrov';
// const age = '23';
// const position = 'developer';

// const userPetrov = {
//   name: 'Andrei',
//   surname: 'Petrov',
//   age: '23',
//   position: 'developer'
// }



// const obj = {};
// const obj = new Object();

// const obj = {
//   a: 1,
// }

// obj.b = 2;

// console.log(obj.a);  // точечная аннотация. Кроме записи, с ее помощью можно 
//также сделать обращение к свойству объекта:
//console.log(obj.a)
//еще бывает скобочная аннотация:
// с помощью фигурных скобок и внутри себя требуют строку, если хочу обратиться 
//к существующему свойству объекта: console.log(obj["a"])
// вычисляемое св-во объекта: не знаем, какое будет имя у св-ва и можем его сами задать
//это делается тоже с помощью скобочной аннотации:
//объявляем некую переменную: 
// const p = 'property';
// // мой объект содержит св-во p. мы не знаешь, что это за св-во: 
// const obj = {
//   a: 1,
//   [p]: "222",   //кавычки не нужны, иначе undefined
// }
// console.log(obj.property)

 // true // Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


 const person = {
    name: 'Johnny', 
    surname: 'Walker',
};

const dream = Object.create(person);
person.position = 'developer';
person.citizenship = 'Italy';

function future(arr){
    for (let key in dream) {
        if(dream.hasOwnProperty(key))
        // выводим все названия свойств
        console.log(key);
}
}

//task2 Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function exist(str,obj) {
    return str in obj;
}

a = exist ('citizenship', dream);
d = exist ('salary', person);

console.log(a);
console.log(d);

//task3  // Напишите функцию, которая создает пустой объект, но без прототипа.

const obj = Object.create(null)
console.log(obj)

