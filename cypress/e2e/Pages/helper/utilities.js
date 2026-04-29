export class Utilities {
  // Generar un número aleatorio entre 1 y 10000
  generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10000) + 1;
  }

  // Devolver un objeto con las horas
  obtenerHoraActual() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let minutosFuturos = minutos + 5;
    let horaFutura = hora;
    if (minutosFuturos >= 60) {
      minutosFuturos = minutosFuturos - 60;
      horaFutura = horaFutura + 1;
      if (horaFutura >= 24) {
        horaFutura = 0;
      }
    }
    return {
      horaActual: `${hora}:${minutos < 10 ? "0" + minutos : minutos}`,
      horaFutura: `${horaFutura}:${
        minutosFuturos < 10 ? "0" + minutosFuturos : minutosFuturos
      }`,
    };
  }

  fechaVencimiento() {
    var fecha = new Date();
    var fechaVencimiento = new Date(fecha);
    var diasAleatorios = Math.floor(Math.random() * 30) + 1;

    if (fecha.getDate() >= 28) {
      fechaVencimiento.setMonth(fecha.getMonth() + 1);
    }
    fechaVencimiento.setDate(fecha.getDate() + diasAleatorios);
    return {
      fechaActual: fecha,
      fechaVencimiento: fechaVencimiento,
    };
  }
  /**
   * Este metodo sirve para transformar fechas de este formato 2018-04-13 a este 13/04/2018
   * Para poder aplicar el metodo split tiene que venir una cadena si viene null o undefined no funciona
   * @param fecha Fecha que se desea transformar y que esta en formato aaaa-mm-dd
   */

  transformarFecha(fecha) {

    console.log("Valor de 'fecha':", fecha); 

  if (typeof fecha !== 'string') {
    console.error("El valor de 'fecha' no es una cadena:", fecha);
    return ''; 
  }
    // Dividir la fecha en año, mes y día
    const [year, month, day] = fecha.split("-");

    // Retornar la fecha en formato DD/MM/YYYY
    return `${day}/${month}/${year}`;
  }

   /**
   * Este metodo sirve para transformar fechas ISO ejemplo "2028-04-01T00:00:00" a formato común ejemplo 01/04/2018
   * @param fecha Fecha que se desea transformar 
   */

   tranformarFechaISOaDDMMYYYY(fechaISO) {
    // Crear un objeto Date a partir de la cadena de fecha en formato ISO
    let fecha = new Date(fechaISO);
    
    // Extraer el día, mes y año del objeto Date
    let dia = String(fecha.getDate()).padStart(2, '0'); // Añadir un cero inicial si es necesario
    let mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11, por lo que añadimos 1
    let año = fecha.getFullYear();
    
    // Formatear la fecha en el formato deseado
    let fechaFormateada = `${dia}/${mes}/${año}`;
    
    return fechaFormateada;
}

  /**
   * Este metodo sirve para transformar textos de mayuscula a texto con primera letra en capital ejemplo PERRO Y GATO quedaría Perro y gato
   * @param texto Texto en mayuscula
   */

  transformarTexto(texto) {
    // Si el valor es null o undefined, devolver un guion
    if (texto == null) {
      return '-';
    }
  
    // Convertir toda la cadena a minúsculas
    const textoEnMinusculas = texto.toLowerCase();
  
    // Convertir la primera letra a mayúscula y concatenarla con el resto de la cadena
    const textoTransformado =
      textoEnMinusculas.charAt(0).toUpperCase() + textoEnMinusculas.slice(1);
  
    return textoTransformado;
  }
  /**
   * Este metodo sirve para transformar textos de mayuscula a texto con la primera letra de cada palabra en capital ejemplo PERRO Y GATO quedaría Perro Y Gato
   * Si la func
   * @param texto Texto en mayuscula
   */

  transformarTexto2(texto) {

    console.log("Valor de 'texto':", texto); 

    // Si el valor es null o undefined, devolver un guion
  if (texto == null) {
    return '-';
  }

    if (typeof texto !== 'string') {
        console.error("El valor de 'texto' no es una cadena:", texto);
        return ''; // o algún valor por defecto
    }

    // Convertir toda la cadena a minúsculas y luego dividirla en palabras
    const palabras = texto.toLowerCase().split(' ');

    // Transformar la primera letra de cada palabra a mayúscula
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    // Unir las palabras de nuevo en una cadena
    return palabras.join(' ');
}

/**
   * Este metodo sirve para transformar textos de mayuscula a texto con solo la primera letra en mayúscula
   * Además solo trae la primera palabra. 
   * @param texto Texto en mayuscula
   */

transformarTexto3(texto) {
  console.log("Valor de 'texto':", texto);

  // Si el valor es null o undefined, devolver un guion
  if (texto == null) {
    return '-';
  }

  if (typeof texto !== 'string') {
      console.error("El valor de 'texto' no es una cadena:", texto);
      return ''; // Valor por defecto
  }

  // Convertir toda la cadena a minúsculas y luego dividirla en palabras
  const palabras = texto.toLowerCase().split(' ');

  // Si no hay palabras, retornar vacío
  if (palabras.length === 0) return '';

  // Transformar la primera palabra a "Title Case"
  return palabras[0].charAt(0).toUpperCase() + palabras[0].slice(1);
}

/**
   * Este metodo sirve para transformar numeros comunes a números con separadores de miles, decimales y agregarle la moneda ejemplo 50000000 a Gs 50.000.000,00, 
   * tambien sirve para transformar números cientificos por ejemplo 3.0E87 A 30.000.000,00
   * @param numero Numero sin separadores 
   * @param moneda Signo de la moneda en que se trabaje
   */

 formatearMoneda(numero, moneda) {
  // Utilizar Intl.NumberFormat para formatear el número con separadores de miles y dos decimales
  const numeroFormateado = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(numero);

  // Añadir el prefijo 'Gs' al número formateado
  return `${moneda} ${numeroFormateado}`;
}

/**
   * Este metodo sirve para transformar numeros comunes a números con separadores de miles, decimales ejemplo 50000000 a 50.000.000,00, 
   * tambien sirve para transformar números cientificos por ejemplo 3.0E87 A 30.000.000,00
   * @param numero Numero sin separadores 
   * @param moneda Signo de la moneda en que se trabaje
   */

formatearMonto(numero) {
  // Utilizar Intl.NumberFormat para formatear el número con separadores de miles y dos decimales
  const numeroFormateado = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(numero);

  // Añadir el prefijo 'Gs' al número formateado
  return `${numeroFormateado}`;
}

/**
   * Este metodo sirve para transformar numeroscon decimales a números enteros ejemplo 1.0 a 1
   * @param numero Numero con decimales 
   */

formatearEntero(numero) {

  if (numero < 1) {
    return "-";
  }
  // Redondear el número a un entero
  const numeroEntero = Math.round(numero);

   // Convertir a cadena sin separadores de miles
   return numeroEntero.toString();
}

/**
   * Este metodo sirve para transformar numeroscon decimales a números enteros ejemplo 1.0 a 1
   * @param numero Numero con decimales 
   */

formatearEnteroConSepador(numero) {

  if (numero < 1) {
    return "-";
  }
  // Redondear el número a un entero
  const numeroEntero = Math.round(numero);

   
   // Formatear con separador de miles
  return numeroEntero.toLocaleString();
}

/**
   * Este metodo sirve para transformar un null a un número cero con signo de su moneda ejemplo null va a se igual a Gs 0,00
   * @param texto Texto en mayuscula
   * @param moneda Signo de la moneda
   */
 formatearNullEnMoneda(numero, moneda) {
  // Verificar si el número es null
  if (numero === null) {
      return`${moneda} 0,00`;
  }
  // Utilizar Intl.NumberFormat para formatear el número con separadores de miles y dos decimales
  const numeroFormateado = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(numero);

  // Añadir el prefijo 'de la moneda' al número formateado
  return `${moneda} ${numeroFormateado}`;
}

/**
   * Este metodo sirve para transformar un null a guión 
   * @param valor sería el selector de donde voy a obtener el null
   */
formatearNullAGuion(valor) {
  return valor === null ? "-" : valor;
}

/**
   * Este metodo sirve para convertir un número en porcentaje y agregarle el signo %
   * @param número  Numero 
   */
 formatearPorcentaje(numero) {
  
  const porcentajeFormateado = new Intl.NumberFormat('es-ES', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
  }).format(numero);

  return porcentajeFormateado;
}

 capitalizar = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
};

/**
   * Este metodo sirve para agregarle el signo %
   * @param número  Numero 
   */
agregarSignoPorcentaje(numero) {
  return `${numero} %`;
}

/**
   * Este metodo sirve para transformar S o N en Si o No
   * @param texto Texto en mayuscula
   */

transformarSioNo(texto) {
  console.log("Valor de 'texto':", texto); 

  if (typeof texto !== 'string') {
      console.error("El valor de 'texto' no es una cadena:", texto);
      return ''; // o algún valor por defecto
  }

  // Si el texto es exactamente "S", se cambia a "Si"
  if (texto.trim().toUpperCase() === "S") {
      return "Si";
  }

  // Si el texto es exactamente "N", se cambia a "No"
  if (texto.trim().toUpperCase() === "N") {
      return "No";
  }
}

}
