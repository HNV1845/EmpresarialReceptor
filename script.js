document.addEventListener("DOMContentLoaded", function() {
    const contenidoArea = {
        "secretaria": "La secretaría es responsable de la gestión documental y administrativa...",
        "captaciones": "El área de captaciones maneja los depósitos a plazo fijo y cuentas de ahorro...",
        "caja": "El área de caja se encarga del manejo de efectivo, retiros y depósitos..."
    };

    const preguntasExamen = {
        "secretaria": [
            { "pregunta": "¿Cuál es la función principal de la secretaría?", "opciones": ["Atender clientes", "Gestionar documentos", "Aprobar créditos"], "respuesta": 1 },
            { "pregunta": "¿Qué documento es obligatorio para una apertura de cuenta?", "opciones": ["Pasaporte", "DPI", "Licencia de conducir"], "respuesta": 1 },
            { "pregunta": "¿Cada cuánto se debe actualizar la información del asociado?", "opciones": ["Cada 6 meses", "Cada año", "Cada 5 años"], "respuesta": 1 },
            { "pregunta": "¿Qué tipo de cuentas puede manejar un menor de edad?", "opciones": ["Cuentas personales", "Cuentas Infanto", "Cuentas colectivas"], "respuesta": 1 }
        ],
        "captaciones": [
            { "pregunta": "¿Cuál es el monto mínimo para abrir un CDP?", "opciones": ["Q.500.00", "Q.1,000.00", "Q.2,000.00"], "respuesta": 1 },
            { "pregunta": "¿Quién puede abrir una cuenta institucional?", "opciones": ["Cualquier persona", "El representante legal", "Un asociado"], "respuesta": 1 },
            { "pregunta": "¿Qué sucede si un CDP no es retirado a su vencimiento?", "opciones": ["Se renueva automáticamente", "Se pierde", "Debe reclamarse en 3 días"], "respuesta": 0 },
            { "pregunta": "¿Qué documento ampara el depósito a plazo fijo?", "opciones": ["Contrato de servicio", "Certificado de CDP", "Comprobante de pago"], "respuesta": 1 },
            { "pregunta": "¿Los depósitos de CDP pueden realizarse con cheque?", "opciones": ["Sí", "No", "Solo en algunos casos"], "respuesta": 0 },
            { "pregunta": "¿Cómo se identifican los beneficiarios de un CDP?", "opciones": ["Por DPI", "Por número de cuenta", "Por documento firmado"], "respuesta": 2 }
        ],
        "caja": [
            { "pregunta": "¿Cuál es el monto máximo autorizado en caja?", "opciones": ["Q.5,000.00", "Q.10,000.00", "Q.15,000.00"], "respuesta": 1 },
            { "pregunta": "¿Qué documento se emite por cada ingreso o egreso en caja?", "opciones": ["Boleta de retiro", "Recibo autorizado", "Estado de cuenta"], "respuesta": 1 },
            { "pregunta": "¿Qué hacer si un asociado presenta un cheque con alteraciones?", "opciones": ["Devolverlo", "Aceptarlo con firma", "Pedir autorización especial"], "respuesta": 0 },
            { "pregunta": "¿Cómo se realizan los retiros en caja sin presencia del titular?", "opciones": ["Autorización escrita", "Llamada de verificación", "Depósito previo"], "respuesta": 0 },
            { "pregunta": "¿Qué documento es obligatorio para procesar una remesa?", "opciones": ["Pasaporte", "Clave de remesa y DPI", "Número de cuenta"], "respuesta": 1 },
            { "pregunta": "¿Qué sucede si un colaborador pierde dinero en caja?", "opciones": ["Debe reponerlo", "Se descuenta del fondo de seguridad", "Se reporta y anula"], "respuesta": 0 },
            { "pregunta": "¿Cómo se documentan los arqueos de caja?", "opciones": ["Con informe diario", "Con firma digital", "Con autorización del gerente"], "respuesta": 0 }
        ]
    };
    
    function mostrarTemas() {
        const area = localStorage.getItem("area");
        document.getElementById("contenidoArea").innerText = contenidoArea[area] || "Información no disponible";
        document.getElementById("contenido").style.display = "none";
        document.getElementById("temas").style.display = "block";
    }
    
    function habilitarExamen() {
        document.getElementById("examen").style.display = "block";
    }
    
    function validarExamen() {
        const area = localStorage.getItem("area");
        const preguntas = preguntasExamen[area];
        let puntaje = 0;

        preguntas.forEach((pregunta, index) => {
            const seleccionada = document.querySelector(`input[name='pregunta${index}']:checked`);
            if (seleccionada && parseInt(seleccionada.value) === pregunta.respuesta) {
                puntaje++;
            }
        });
        
        document.getElementById("mensajeResultado").innerText = `Tu puntaje es: ${puntaje} / ${preguntas.length}`;
        document.getElementById("resultado").style.display = "block";
    }

    document.getElementById("preguntas").innerHTML = preguntasExamen[localStorage.getItem("area")].map((pregunta, index) => `
        <p>${pregunta.pregunta}</p>
        ${pregunta.opciones.map((opcion, i) => `<input type="radio" name="pregunta${index}" value="${i}"> ${opcion}`).join("<br>")}
    `).join("<br>");

    window.mostrarTemas = mostrarTemas;
    window.habilitarExamen = habilitarExamen;
    window.validarExamen = validarExamen;
});
