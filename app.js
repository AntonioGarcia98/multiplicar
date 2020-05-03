//para llamar a otra funciones
const {
    crearArchivo, listarTabla
} = require('./multiplicar/multiplicar');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabala de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log("llorar");
        listarTabla(argv.base, argv.limite)
        .then((res) => {
            console.log(res);
        })
        .catch((rej) => {
            console.log("bel", rej);
        })
        break;
    case 'crear':
        console.log("crear");
        crearArchivo(argv.base)
            .then((res) => {
                console.log(res);
            })
            .catch((rej) => {
                console.log("eeror", rej);
            })
        break;
    default:
        console.log("No reconocido");
        break;

}
//parametros local
//let base=3; 


/*rebir parametros sin argv*/
//let agv = process.argv;
//console.log(process);
//let parametro = agv[2];
//let base = parametro.split('=')[1];



console.log(argv.base);
console.log(argv.limite);

/*
crearArchivo(base)
.then((res)=>{
    console.log(res);
})
.catch((rej) =>{
    console.log("eeror",rej);
})*/