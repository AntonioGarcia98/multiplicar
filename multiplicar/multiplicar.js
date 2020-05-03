const fs = require('fs');
let data ='';


let listarTabla =(base,limite=10) =>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject("No es un numero");
            return;
        }
        for(let i =0; i<=limite; i++){
            console.log(`${base }* ${i}= ${base* i}`);
            data+=`${base }* ${i}= ${base* i}\n`;
        }
       
        //data lo que quieres escribir
       
       fs.writeFile(`tabla-${base}.txt`, data, (err) => {
         if (err) reject(err);
         else{
             resolve("The file has been saved!")
         }
       
       });
    })
}


crearArchivo=(base)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject("No es un numero");
            return;
        }
        for(let i =0; i<=10; i++){
            console.log(`${base }* ${i}= ${base* i}`);
            data+=`${base }* ${i}= ${base* i}\n`;
        }
       
        //data lo que quieres escribir
       
       fs.writeFile(`tabla-${base}.txt`, data, (err) => {
         if (err) reject(err);
         else{
             resolve("The file has been saved!")
         }
       
       });
    })
}

module.exports ={
    crearArchivo,
    listarTabla
}
 