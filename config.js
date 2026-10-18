// =====================================================================
//  CONFIGURACIÓN DE BLOOMMY
//  Edita solo lo que está entre comillas "..." o los números.
//  No borres comillas, comas ni llaves. Las líneas que empiezan con //
//  son comentarios (no hacen nada).
// =====================================================================
window.CONFIG = {

  // 1) TU WHATSAPP (con código de país, sin + ni espacios)
  whatsapp: "59895340907",

  // 2) MENSAJE QUE SE ENVÍA POR WHATSAPP
  //    Estas palabras se reemplazan solas con los datos de la clienta:
  //    {nombre} {servicios} {fecha} {hora} {duracion} {fin} {total}
  //    \n significa "salto de línea".
  mensaje: "Hola🤍, soy {nombre}. Me gustaria reservar una cita en Bloommy.\n\nServicios:\n{servicios}\n\nFecha: {fecha}\nHora de inicio: {hora}\nDuración total aprox.: {duracion} \nTotal: ${total}",

  // 3) TUS HORARIOS POR DÍA (formato 24 horas)
  //    0 = domingo, 1 = lunes, 2 = martes, 3 = miércoles,
  //    4 = jueves, 5 = viernes, 6 = sábado.
  //    Puedes poner horas enteras (15) o con minutos ("15:30").
  //    Para dejar un día cerrado escribe []
  horarios: {
    0: [],
    1: [13, 15, 17, 19],
    2: [13, 15, 17, 19],
    3: [10, 15, 17, 19],
    4: [11, 13, 15, 17, 19],
    5: [14],
    6: [12, 14]
  },

  // Último horario de inicio posible cuando los turnos se corren (hora 24 h)
  ultimoInicio: 21,

  // 4) CITAS CONFIRMADAS Y HORARIOS BLOQUEADOS
  //    Agrega una línea por cada cita o bloqueo. Cuando alguien se agenda,
  //    copia una línea de ejemplo, quítale las // del principio y cambia
  //    la fecha y las horas. La fecha va como AÑO-MES-DÍA.
  //    Los turnos siguientes se corren solos.
  //    Ejemplos (sin las // funcionan):
  //      { fecha: "2026-10-22", desde: "15:00", hasta: "17:15" },
  //      { fecha: "2026-10-24", todoElDia: true },
ocupado: [  
   { fecha: "2026-10-19", desde: "19:00", hasta: "20:00" },
   { fecha: "2026-10-19", desde: "19:00", hasta: "20:00" },
     { fecha: "2026-12-15", desde: "10:00", hasta: "20:00" },
  ],
};
