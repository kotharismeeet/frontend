```
// 1 🚀✅💩❌
console.log('Hello World Typescript!');

// arrays

//let itemNames = ['A','B','C']; 💩❌ 
//let itemNames: string[]; 💩❌
//let itemNames: string[] = []; 🚀✅
let itemNames:string[] = ['A','B','C']; //🚀✅

//itemNames.push(3); 💩❌
itemNames.push('D'); //🚀✅


//let mixed = ['A',1,true]; //💩❌
let mixed: (number|string|boolean)[] = ['A',1,true]; //🚀✅
mixed.push('B'); //🚀✅
mixed.push(2);  //🚀✅
mixed.push(false); //🚀✅

// -------------------------------------------------------------------------------------------------

//objects
// 💩❌
//let item:object = {} 💩❌

let item:{
    name: string,
    price: number,
    inStock: boolean
} = {
    name: 'A',
    price: 30,
    inStock: true
};



//let item.name = 30; 💩❌
// item.price = 40; 💩❌

// https://stackoverflow.com/a/55834324
item['price'] = 40; //🚀✅

// -------------------------------------------------------------------------------------------------

// functions

// areaOfCirclce = (diameter: number) => { 💩❌
//     return diameter * Math.PI
// }

const areaOfCirclce: Function = (diameter :number) => {
    return diameter * Math.PI
} 

//console.log(areaOfCirclce('Hello World Typescript')); 💩❌
console.log(areaOfCirclce(3)); //🚀✅

// Intermediate : optional paramreters and return signature type 

// const addNumers: Function = (a: number, b: number, c?: number): number => {
//     if(c) return a+b+c
//     //else return a+b 💩❌
// }

const addNumers: Function = (a: number, b: number, c?: number): number => {
    if(c) return a+b+c
    else return a+b //🚀✅
}

// aliases
// -------------------------------------------------------------------------------------------------

type itemType = {
    name: string,
    price: number,
    inStock: boolean
};

//https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type itemTypeObj = keyof itemType;

const UpdateItems: Function = (item: itemTypeObj): void  => {
    //
}

const getItems: Function = (id: string): itemType => {
    return {
        name: 'A',
        price: 30,
        inStock: true
    }
}

//https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type OnlyBoolsAndItem = {
    [key: string]: boolean | string;
  };
   
  const items: OnlyBoolsAndItem = {
    item1: true,
    item2: 'Available',
  };

// typecasting
// -------------------------------------------------------------------------------------------------

// 💩❌
const anchorElem:any = document.querySelectorAll('anchor') !;

console.log(anchorElem.href);

// 🚀✅
const formElem: HTMLFormElement = document.querySelector('form') as HTMLFormElement;
console.log(formElem.children);

// generics
// -------------------------------------------------------------------------------------------------

const addVariants: Function = <T extends itemType>(obj: T): object => {
    const id = '123';
    return {...obj, id};
}

let item1 = addVariants({});

console.log(item1.name,item1.id);

// Enums
// -------------------------------------------------------------------------------------------------

enum Toppings { CHEESE, SUACE , SEV };

const addToppings: Function = <T extends itemType>(obj: T): object => {
    const topping = Toppings.CHEESE;
    return {...obj, topping}
}

// Tuples
// -------------------------------------------------------------------------------------------------

// cant be modified
let tup: [string,number,boolean]=['A',30,true]; 

// Classes with acess modifiers
// -------------------------------------------------------------------------------------------------

class User {
    private id: string='';
    readonly name: string='';

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    print(): void {
        console.log(`${this.name}'s id is ${this.id}`);
    }
 }

 const u1 = new User('1','Smeet');
 //console.log(u1.id,u1.name); 💩❌
 console.log(u1.print()); // 🚀✅

 // Interfaces
// -------------------------------------------------------------------------------------------------

```