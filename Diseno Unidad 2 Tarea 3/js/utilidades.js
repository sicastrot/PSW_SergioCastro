const formDetalle = document.getElementById("formDetalle");
const formEquivalencia = document.getElementById("formEquivalencia");

const inputCantidad = document.getElementById("inputCantidad");
const inputDescripcion = document.getElementById("inputDescripcion");
const inputPUnitario = document.getElementById("inputPUnitario");
const selectUmedida = document.getElementById("selectUmedida");
const selectUmedidaC = document.getElementById("selectUmedidaC");
const inputValor = document.getElementById("inputValor");
const outputCalculado = document.getElementById("outputCalculado");

let inputPTotal;
let inputGanancia;
let inputValorVenta;
let byte;
let wa;
const z = 100;
const cuerpoTabla = document.getElementById("cuerpoTabla");

let arregloDetalle = [];

const redibujarTabla = () => {
    cuerpoTabla.innerHTML = "";
    arregloDetalle.forEach((detalle) =>{
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${detalle.cant}</td>
                            <td>${detalle.descripcion}</td>
                            <td>${detalle.pUnit}</td>
                            <td>${detalle.pTotal}</td>
                            <td>${detalle.ganancia}</td>
                            `;                            

        cuerpoTabla.appendChild(fila); 
    })
}

const calcularTotal =() =>{
    const a = +inputCantidad.value;
    const b = +inputPUnitario.value;
    const g = +inputDescripcion.value;
    const c = a*b;
    inputPTotal = c;
    inputGanancia = (a*(g/z));
    inputValorVenta = (a*(b/z))+inputGanancia+a;
    //console.log(inputPTotal); imprimir en Pantalla Consla
};

formDetalle.onsubmit = (e) =>{
    e.preventDefault();
    //Creando Objeto detalle
    calcularTotal();
    const objDetalle = {
        cant: inputCantidad.value,
        descripcion: inputDescripcion.value, 
        pUnit: inputPUnitario.value,
        pTotal: inputValorVenta,
        //venta: inputValorVenta,
        ganancia: inputGanancia,
        
    };
    arregloDetalle.push(objDetalle);
    redibujarTabla();
    formDetalle.reset(); //limpiamos el formulario
};

inputValor.onkeyup = () =>{
    if(+selectUmedida.value != 0){
        //console.log(selectUmedida.value);
        switch (+selectUmedida.value) {
            case 1:
                byte = inputValor.value;
                console.log("Unidad de Medida "+byte);
                break;
            
            case 2:
                byte = (+inputValor.value*1024)/1;
                console.log("Unidad de Medida 2"+byte);
                break;
            case 3:
                byte = (+inputValor.value*1024)/1; //Conversion a Kb
                byte = (byte*1024)/1; //Conversion a Byte
                console.log("Unidad de Medida 2"+byte);
                break;           
            case 4:
                byte = (+inputValor.value*1024)/1; //Conversion a Mb
                byte = (byte*1024)/1; //Conversion a Kb
                byte = (byte*1024)/1; //Conversion a byte
                console.log("Unidad de Medida 2"+byte);
                break;
            case 5:
                byte = (+inputValor.value*1024)/1; //Conversion a Gb
                byte = (byte*1024)/1; //Conversion a Mb
                byte = (byte*1024)/1; //Conversion a Kb
                byte = (byte*1024)/1; //Conversion a byte
                console.log("Unidad de Medida 2"+byte);
                break;
            default:
                break;
        }
    }
    else{
        formEquivalencia.reset();
        alert('Debe seleccionar Primero la Unidad de Medida');
    }
    
};


selectUmedidaC.onchange = () =>{
    if((inputValor.value != 0) && (selectUmedida != 0))
    {
        if(+selectUmedidaC.value != 0){
            switch (+selectUmedidaC.value) {
                case 1:
                    wa = +byte*1; //conversion a Bytes
                    console.log(wa);
                    console.log("Llegamos al Final");
                    outputCalculado.value = wa;
                    console.log(wa);
                    break;

                case 2:
                    wa = (+byte*1)/1024; //conversion a Kb
                    //console.log(wa);
                    console.log("Llegamos al Final 2");
                    outputCalculado.value = wa;
                    
                    break;
                
                case 3:
                    wa = (+byte*1)/1024; //conversion a Kb
                    wa = (wa*1)/1024; //conversion a Mb
                    console.log("Llegamos al Final 3");
                    outputCalculado.value = wa;
                    
                    break;
                
                case 4:
                    wa = (+byte*1)/1024; //conversion a Kb
                    wa = (wa*1)/1024; //conversion a Mb
                    wa = (wa*1)/1024; //conversion a Gb
                    console.log("Llegamos al Final 4");
                    outputCalculado.value = wa;
                    break;

                case 5:
                    wa = (+byte*1)/1024; //conversion a Kb
                    wa = (wa*1)/1024; //conversion a Mb
                    wa = (wa*1)/1024; //Conversion a Gb
                    wa = (wa*1)/1024; //Conversion a Tb
                    console.log("Llegamos al Final 5");
                    outputCalculado.value = wa;
                    break;


                default:
                    break;
            }
        }
        else{
            alert('Debe seleccionar la Unidad de Medida a Convertir');
        }
    }
    else{
        alert('Llene los Campos Unidad de Medida y Valor a Convertir');
    }
    
};

formEquivalencia.onsubmit = (e) =>{
    formEquivalencia.reset(); //limpiamos el formulario
};
