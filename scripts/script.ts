//Aqui dentro voy a hacer explicaciones sobre el lenguaje TypeScript

console.log("Hola Mundo");

let variable: "coche" | "automovil" | "moto" | number= "coche";
variable = 23;
console.log("variable",variable);

const hobbies: string[] = ["correr", "pintar", "cantar"];
const hobbiesExtra=["bailar"];
const hobbies2 = hobbies;
const hobbies3 = [...hobbies];
hobbies.push(...hobbiesExtra);
console.log("hobbies2",hobbies2);
console.log("hobbies3",hobbies3);

type personType = {
    nombre:string,
    apellido:string,
    edad?:number
};

let person:personType;

let person2:personType={nombre:"Luis", apellido:"Martinez"};
person2={nombre:"luis2", apellido:"Martinez2", edad: 18};

person = person2;

async function saluda(nombre:string){
    await setTimeout(()=> {console.log("Fin SetTimeout")}, 10000);
    console.log("Hola",nombre,"te saludo");
}

const {nombre:FirstName} = person;

async function saluda2({nombre, edad}:{nombre:string, edad?:number}){
    await saluda(nombre);
    if(edad){
         console.log("Tu edad es",edad);
    }
   
}

saluda(person.apellido);
saluda2(person);

async function sleep(label: string) {
    await setTimeout(() => console.log("El label es: ", label), 3000);
    return "terminó";
}

function muestra(mensaje:string){
    console.log("El mensaje es", mensaje);
}

//sleep("Valor label").then((a) => {muestra(a); console.log("Fin"); return})



//async //await