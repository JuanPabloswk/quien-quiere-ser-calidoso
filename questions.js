// Preguntas del juego
const questions = [
    {question:"Según el Modelo de Atención Integral de Salud basado en la familia, el cuidado debe entenderse como:", 
        options:["Un proceso centrado exclusivamente en el tratamiento médico.",
            "Un proceso continúo centrado en la persona y su contexto familiar.",
            "Un proceso orientado a la reducción de costos institucionales.",
            "Un proceso diseñado únicamente para mejorar la infraestructura física."], 
            correct:1},
    {question:"¿Cuál es uno de los principales objetivos específicos de la campaña involucramiento del paciente y familia en IMO?", 
        options:["Reducir la cantidad de tratamientos oncológicos aplicados.",
            "Limitar la interacción entre usuarios y profesionales de salud.",
            "Fortalecer la educación al usuario, familiar y/o acompañante durante el proceso de atención.",
            "Priorizar la atención solo en usuarios en estado crítico."], 
            correct:2},

    {question:"La estrategia de tarjetas de colores utiliza los colores verde y rojo para:", 
        options:["Identificar el tipo de tratamiento oncológico.",
            "Clasificar usuarios por nivel de riesgo.",
            "Calificar la atención como satisfactoria o insatisfactoria.",
            "Señalar el orden de ingreso a los servicios."], 
            correct:2},
            
    {question:"En el proceso de identificación segura del paciente, se indica que el personal debe:", 
        options:["Confirmar datos únicamente en el primer contacto.",
            "Solicitar identificación solo al acompañante.",
            "Corroborar datos de identificación antes de procedimientos o administración de medicamentos.",
            "Evitar el uso de carnets o tableros para agilizar procesos."], 
            correct:2},   
            
    {question:"¿Qué debe hacer el usuario si el profesional no realiza higienización de manos?", 
        options:["Suspender el tratamiento hasta nuevo aviso.",
            "Calificar al profesional con tarjeta roja o verde según corresponda.",
            "Llamar directamente al comité de ética.",
            "Solicitar cambio de institución."], 
            correct:1},

    {question:"Durante la simulación de radioterapia, las cintas adhesivas colocadas en la piel sirven para:", 
        options:["Reducir la ansiedad del paciente.",
            "Controlar los efectos adversos del tratamiento.",
            "Ubicar con precisión el área donde se administrará la radioterapia.",
            "Identificar alergias del paciente."], 
            correct:2},

    {question:"En la estrategia “Mi Línea de Tiempo”, la valoración por disciplinas de apoyo tiene como finalidad:", 
        options:["Determinar el costo del tratamiento.",
            "Identificar necesidades del paciente y mejorar la adherencia al tratamiento.",
            "Establecer la duración de la hospitalización.",
            "Seleccionar la modalidad de radioterapia o quimioterapia."], 
            correct:1},



    {
    question:"La evaluación de la campaña se realiza a través del indicador Z-GC-005, que mide:",
    options:[
        "El número total de tratamientos oncológicos realizados.",
        "La proporción de usuarios satisfechos con el programa de educación.",
        "El nivel de riesgo de los pacientes al ingreso.",
        "La eficiencia del personal administrativo."
    ],
    correct:1
    },

    {
    question:"Una de las metas de la campaña es:",
    options:[
        "Capacitar al 50% de los usuarios sobre su proceso de atención.",
        "Involucrar al 80% de los usuarios y familias en su proceso de atención.",
        "Disminuir en un 70% la participación familiar durante los procedimientos.",
        "Reducir jornadas educativas para mejorar tiempos de atención."
    ],
    correct:1
    },

    {
    question:"El toque de campana en la finalización del tratamiento tiene como propósito principal:",
    options:[
        "Indicar al personal que deben iniciar el cierre administrativo.",
        "Servir como ceremonia simbólica de cierre del tratamiento.",
        "Notificar que se realizará una nueva valoración médica inmediata.",
        "Activar protocolos de seguridad institucional."
    ],
    correct:1
    },

    {
    question:"La estrategia de tarjetas de colores tiene como propósito adicional permitir que:",
    options:[
        "Los usuarios califiquen únicamente la infraestructura física del servicio.",
        "El líder de experiencia del usuario identifique oportunidades de mejora y realice acercamientos directos ante valoraciones insatisfactorias.",
        "El personal clínico seleccione los pacientes prioritarios.",
        "Los usuarios soliciten modificaciones a su plan terapéutico."
    ],
    correct:1
    },

    {
    question:"El enfoque del involucramiento del paciente descrito en la campaña se caracteriza por:",
    options:[
        "Basarse en la autonomía total sin intervención del equipo de salud.",
        "Considerar únicamente el contexto clínico del paciente, excluyendo su entorno familiar.",
        "Promover la toma de decisiones informadas y la corresponsabilidad entre paciente, familia y equipo asistencial.",
        "Sustituir la educación por herramientas tecnológicas de seguimiento."
    ],
    correct:2
    },

    {
    question:"El uso de la máscara inmovilizadora en radioterapia responde principalmente a la necesidad de:",
    options:[
        "Proteger órganos vitales de radiación accidental.",
        "Garantizar la repetibilidad exacta de la posición del paciente durante las sesiones.",
        "Reducir el tiempo de planeación del tratamiento.",
        "Facilitar la aplicación simultánea de quimioterapia."
    ],
    correct:1
    },

    {
    question:"Según la estrategia “Mi Línea de Tiempo”, la fase de delimitación del tratamiento implica:",
    options:[
        "Determinar los costos del procedimiento y el número de sesiones.",
        "Definir la posición quirúrgica del paciente para intervención posterior.",
        "Analizar cómo dirigir la radiación hacia la zona objetivo protegiendo el tejido sano.",
        "Seleccionar el equipo humano que ejecutará la terapia."
    ],
    correct:2
    },

    {
    question:"La participación del comité de ética hospitalaria en esta campaña tiene el objetivo de:",
    options:[
        "Evaluar únicamente la eficacia estadística del programa.",
        "Revisar los resultados educativos y garantizar procesos transparentes y centrados en el usuario.",
        "Autorizar solo los casos críticos que requieran intervención psicosocial.",
        "Realizar auditoría financiera de los costos educativos."
    ],
    correct:1
    },

    {
    question:"En quimioterapia, la consulta de valoración por oncología incluye la definición del esquema terapéutico. Esta acción se vincula directamente con:",
    options:[
        "La planeación administrativa del servicio.",
        "El inicio del circuito educativo y de acompañamiento del usuario según su diagnóstico.",
        "El alta inmediata del paciente.",
        "La suspensión de intervenciones de otras disciplinas."
    ],
    correct:1
    },

    {
    question:"La medición del indicador Z-GC-005 aporta a la institución principalmente información sobre:",
    options:[
        "La percepción institucional del personal administrativo.",
        "La satisfacción del usuario frente a los tiempos de espera de los servicios.",
        "La efectividad del programa de educación como herramienta de involucramiento del paciente.",
        "El nivel de complejidad de los tratamientos recibidos."
    ],
    correct:2
    },

    {
    question:"En la estrategia de educación, la capacidad del paciente para cuestionar respetuosamente al profesional sobre la higienización de manos representa:",
    options:[
        "Una vulneración a la relación terapéutica tradicional.",
        "Un mecanismo clave para fortalecer la cultura de seguridad del paciente.",
        "Un requisito opcional sin impacto relevante.",
        "Un proceso que debe evitarse para no generar conflictos."
    ],
    correct:1
    },

    {
    question:"El seguimiento durante el tratamiento de radioterapia permite detectar reacciones adversas para:",
    options:[
        "Modificar la ubicación física del equipo de radiación.",
        "Ajustar la duración total del tratamiento sin criterio clínico.",
        "Gestionar una valoración por el médico de soporte y evitar complicaciones severas.",
        "Repetir la simulación inicial desde cero."
    ],
    correct:2
    },

    {
    question:"El fortalecimiento de la identificación redundante del paciente contribuye especialmente a:",
    options:[
        "Reducir la carga laboral del personal médico.",
        "Evitar eventos adversos relacionados con errores de administración de medicamentos o procedimientos.",
        "Agilizar el proceso de facturación.",
        "Minimizar la necesidad de revisión documental por parte del usuario."
    ],
    correct:1
    }, 
    
    



    {
    question:"¿Cuál es el objetivo general del Sistema de Información y Atención al Usuario – SIAU en el Instituto Médico Oncológico S.A.S.?",
    options:[
        "Aumentar la capacidad administrativa de la institución",
        "Mantener comunicación activa entre usuarios e institución para cumplir metas de calidad",
        "Garantizar la atención prioritaria de pacientes de alto riesgo",
        "Reducir los tiempos de espera en consulta externa"
    ],
    correct:1
    },

    {
    question:"Según el manual, una queja se define como:",
    options:[
        "Una solicitud formal de investigación por irregularidades administrativas",
        "Una manifestación de inconformidad acompañada de exigencias",
        "La declaración de insatisfacción respecto a expectativas no cumplidas",
        "Una recomendación para mejorar un proceso interno"
    ],
    correct:2
    },

    {
    question:"¿Cuál de las siguientes opciones corresponde a un reclamo según la normativa citada?",
    options:[
        "Una manifestación positiva sobre la atención recibida",
        "La solicitud de investigación por irregularidades con obligación pendiente",
        "Una petición de información general",
        "Una felicitación por el buen trato recibido"
    ],
    correct:1
    },

    {
    question:"¿Cuál es el procedimiento que requiere apertura semanal con presencia de un testigo?",
    options:[
        "Registro de encuestas de satisfacción",
        "Apertura de PQRS en plataforma digital",
        "Apertura del buzón de sugerencias",
        "Revisión de la cartelera informativa"
    ],
    correct:2
    },

    {
    question:"¿Cuál de los siguientes no es un atributo evaluado en las encuestas de satisfacción institucional?",
    options:[
        "Información",
        "Seguridad",
        "Calidad humana",
        "Impacto económico del tratamiento"
    ],
    correct:3
    },

    {
    question:"De acuerdo con el manual, el concepto de calidad de la atención en salud incluye:",
    options:[
        "Exclusivamente el cumplimiento del protocolo clínico",
        "La experiencia emocional del paciente sin considerar el riesgo",
        "Un balance entre beneficios, riesgos y costos",
        "Solo la accesibilidad a los servicios"
    ],
    correct:2
    },

    {
    question:"¿Qué norma establece que las entidades deben tener atención telefónica 24/7 para los usuarios?",
    options:[
        "Decreto 1011 de 2006",
        "Circular 031 de 2006",
        "Resolución 330 de 2017",
        "Ley 715 de 2001"
    ],
    correct:1
    },

    {
    question:"¿Cuál es un deber fundamental del talento humano del SIAU según el manual?",
    options:[
        "Priorizar exclusivamente la atención administrativa",
        "Escuchar activamente con calidez y paciencia",
        "Resolver exclusivamente reclamos escritos",
        "Hacer auditorías internas mensuales"
    ],
    correct:1
    },

    {
    question:"¿Cuál de las siguientes afirmaciones describe correctamente el derecho de petición?",
    options:[
        "Es una solicitud para modificar un tratamiento clínico",
        "Es la exigencia de un pago pendiente",
        "Es una solicitud para pedir un servicio o información a una entidad",
        "Es la denuncia de un acto de corrupción por parte del personal"
    ],
    correct:2
    },

    {
    question:"¿Cuál es la función principal del Comité de Ética SIAU?",
    options:[
        "Diseñar normas clínicas para oncología",
        "Evaluar desempeños individuales del personal",
        "Socializar informes de satisfacción y generar acciones de mejora",
        "Gestionar la contratación del talento humano"
    ],
    correct:2
    },





    {
    question:"Según el modelo, la base de la humanización del cuidado en salud consiste principalmente en:",
    options:[
        "Reducir tiempos de atención y aumentar la productividad institucional",
        "Brindar un trato digno, respetuoso y cálido enfocado en paciente–familia como unidad funcional",
        "Priorizar la atención tecnológica y el uso de dispositivos médicos avanzados",
        "Garantizar el acceso universal sin necesidad de interacción humana"
    ],
    correct:1
    },

    {
    question:"El objetivo general del Modelo de Humanización en IMO es:",
    options:[
        "Lograr certificación internacional en calidad asistencial",
        "Fortalecer el eje de humanización para brindar trato respetuoso, digno y amable que incremente la satisfacción",
        "Capacitar solo al personal asistencial en comunicación empática",
        "Mejorar exclusivamente la infraestructura física del instituto"
    ],
    correct:1
    },

    {
    question:"En el componente de Prácticas Humanizadas, uno de los lineamientos clave con el usuario es:",
    options:[
        "Priorizar la estandarización estricta de protocolos clínicos",
        "Socializar derechos y deberes, garantizar privacidad y brindar información oportuna",
        "Limitar el acompañamiento familiar durante los procedimientos",
        "Minimizar el contacto verbal para acelerar procesos clínicos"
    ],
    correct:1
    },

    {
    question:"El atributo de Excelencia dentro del modelo se define como:",
    options:[
        "Cumplimiento mínimo de los estándares de calidad",
        "Nivel donde se superan las expectativas del usuario, familia y cliente interno",
        "Aplicación estricta del código de ética institucional",
        "Índice de satisfacción mayor al 70%"
    ],
    correct:1
    },

    {
    question:"Reorientar el modelo de atención, según la OMS, implica principalmente:",
    options:[
        "Aumentar la hospitalización prolongada",
        "Priorizar la atención primaria, comunitaria y la coproducción de la salud",
        "Reducir el papel de los usuarios en la toma de decisiones",
        "Delegar la gestión del riesgo a entidades externas"
    ],
    correct:1
    },

    {
    question:"Dentro de las prácticas humanizadas para el cliente interno se incluye:",
    options:[
        "Eliminación de actividades de bienestar para reducir gastos",
        "No permitir días compensatorios por razones administrativas",
        "Certificación en competencias generales y específicas, incluyendo actitudinales",
        "Minimizar los procesos de inducción y capacitación"
    ],
    correct:2
    },

    {
    question:"El enfoque diferencial busca principalmente:",
    options:[
        "Homogeneizar la atención para que todos los usuarios reciban el mismo tipo de servicio",
        "Adaptar la atención a las particularidades de cada grupo poblacional",
        "Priorizar a los usuarios según su capacidad económica",
        "Restringir servicios a poblaciones vulnerables para mejorar los indicadores"
    ],
    correct:1
    },

    {
    question:"Una estrategia de comunicación para usuarios con discapacidad auditiva es:",
    options:[
        "Limitar acceso del acompañante para preservar la privacidad",
        "Realizar la información únicamente por escrito",
        "Garantizar acceso permanente de acompañantes durante consultas y procedimientos",
        "Solicitar siempre interpretación profesional externa"
    ],
    correct:2
    },

    {
    question:"La primera fase de implementación del modelo de humanización consiste en:",
    options:[
        "Ejecutar estrategias sin evaluación previa",
        "Capacitar exclusivamente al personal asistencial",
        "Valorar calidad y humanización, identificando causas, necesidades y riesgos",
        "Realizar inversión en infraestructura física"
    ],
    correct:2
    },






    {
    question:"La principal justificación del programa de educación al paciente y su familia es:",
    options:[
        "Reducir tiempos de atención institucional",
        "Empoderar al paciente y su familia mediante información clara y apoyo psicosocial",
        "Aumentar la productividad del personal asistencial",
        "Fortalecer únicamente la gestión administrativa"
    ],
    correct:1
    },

    {
    question:"¿Cuál es el objetivo general del programa?",
    options:[
        "Certificar al personal asistencial",
        "Capacitar a pacientes, familias y comunidad en hábitos saludables y cuidados según diagnóstico",
        "Incrementar la asistencia a las salas de espera",
        "Reducir el uso de medicamentos de alto costo"
    ],
    correct:1
    },

    {
    question:"¿Qué componente del modelo de humanización destaca que el paciente es protagonista del proceso?",
    options:[
        "Modelo pedagógico institucional",
        "Decálogo de humanización I-GD-006",
        "Protocolo de bioseguridad interno",
        "Lineamiento de archivo clínico"
    ],
    correct:1
    },

    {
    question:"Un objetivo específico del programa es:",
    options:[
        "Entrenar a la familia solo en procedimientos clínicos avanzados",
        "Diseñar y actualizar microcurrículos según necesidades identificadas",
        "Crear campañas publicitarias para atraer pacientes",
        "Reducir el número de cuidadores asignados"
    ],
    correct:1
    },

    {
    question:"¿Qué meta determina certificación de usuarios?",
    options:[
        "Certificar al menos el 50% de los pacientes",
        "Certificar mínimo el 95% de los pacientes priorizados",
        "Certificar únicamente a quienes lo soliciten por escrito",
        "Certificar solo pacientes en hospitalización"
    ],
    correct:1
    },

    {
    question:"Una regla de oro para garantizar un proceso educativo adecuado es:",
    options:[
        "Iniciar todos los temas en una única sesión",
        "Motivar a través del miedo para generar conciencia",
        "Adaptar el proceso educativo al paciente y no al revés",
        "Realizar educación únicamente verbal"
    ],
    correct:2
    },

    {
    question:"¿Qué estrategia corresponde al componente de despliegue?",
    options:[
        "Seleccion de pacientes según riesgos",
        "Implementación de microcurrículos con pacientes y familias",
        "Aplicación de la encuesta F-GD-016",
        "Generación de planes de mejoramiento"
    ],
    correct:1
    },

    {
    question:"¿Quién es responsable de capacitar al personal nuevo durante inducción?",
    options:[
        "Comunicaciones",
        "Talento humano",
        "Jefe de enfermería",
        "Experiencia del usuario"
    ],
    correct:1
    },

    {
    question:"¿Cuál es un criterio para seleccionar pacientes al programa?",
    options:[
        "Tener acompañante menor de edad",
        "Presentar patologías que generen incapacidad para suplir necesidades básicas",
        "Vivir a más de 10 kilómetros del instituto",
        "Presentar únicamente síntomas emocionales"
    ],
    correct:1
    },

    {
    question:"¿Qué rol tiene psicología en el proceso?",
    options:[
        "Revisar la condición socioeconómica",
        "Evaluar condiciones emocionales del paciente y familia",
        "Realizar seguimiento administrativo",
        "Implementar microcurrículos"
    ],
    correct:1
    },

    {
    question:"¿Qué actividad corresponde a la educación del paciente y su familia?",
    options:[
        "Capacitar exclusivamente al cuidador",
        "Usar videos, folletos e infografías como apoyo educativo",
        "Detener la educación cuando el paciente no asiste",
        "Limitar participación del equipo interdisciplinario"
    ],
    correct:1
    },

    {
    question:"¿Quién certifica el entrenamiento del paciente o cuidador?",
    options:[
        "Dirección administrativa",
        "Experiencia del usuario",
        "Talento humano",
        "Servicio farmacéutico"
    ],
    correct:1
    },

    {
    question:"¿Qué actividad se realiza en la fase de seguimiento?",
    options:[
        "Crear nuevos microcurrículos",
        "Acompañar y reforzar conocimientos en el paciente",
        "Generar el presupuesto institucional",
        "Realizar cambios en la plataforma Moodle"
    ],
    correct:1
    },

    {
    question:"¿Cuál es un tema del componente “Soy un paciente informado”?",
    options:[
        "Manejo avanzado de quimioterapia",
        "Derechos y deberes del paciente",
        "Administración de medicamentos intravenosos",
        "Vigilancia epidemiológica"
    ],
    correct:1
    },

    {
    question:"¿Qué se entiende por Atención Centrada en el Usuario?",
    options:[
        "Atención enfocada únicamente en el diagnóstico",
        "Atención que prioriza los recursos institucionales",
        "Atención que reconoce necesidades, valores y preferencias del usuario",
        "Atención basada solo en la experiencia del profesional"
    ],
    correct:2
    },

    {
    question:"Un elemento fundamental de la Atención Centrada en el Usuario es:",
    options:[
        "Limitar la participación de la familia",
        "Fomentar la toma de decisiones compartida",
        "Reducir el tiempo de interacción con pacientes",
        "Priorizar las políticas institucionales sobre las preferencias del usuario"
    ],
    correct:1
    },

    {
    question:"¿Cuál de las siguientes prácticas mejora la experiencia del usuario?",
    options:[
        "Uso de lenguaje técnico sin explicación",
        "Comunicación clara y empática",
        "Entrevista corta sin espacio para preguntas",
        "Dar la misma información a todos sin personalizar"
    ],
    correct:1
    },

    {
    question:"¿Qué herramienta apoya la Atención Centrada en el Usuario?",
    options:[
        "Guías de práctica clínica sin participación del usuario",
        "Protocolos sin considerar variaciones individuales",
        "Encuestas de experiencia y satisfacción del usuario",
        "Informes administrativos internos"
    ],
    correct:2
    },

    {
    question:"La participación de la familia en la atención se considera:",
    options:[
        "Opcional y sin impacto",
        "Una barrera para los procesos clínicos",
        "Un riesgo para la confidencialidad",
        "Un componente esencial cuando el usuario lo desea"
    ],
    correct:3
    },

    {
    question:"¿Cuál es una clave para garantizar respeto por la dignidad del usuario?",
    options:[
        "Priorizar la rapidez sobre la privacidad",
        "Mantenerlo informado y solicitar su consentimiento",
        "Compartir su información con todo el equipo sin restricción",
        "Evitar explicaciones detalladas"
    ],
    correct:1
    },

    {
    question:"¿Qué acción refleja personalización de la atención?",
    options:[
        "Brindar el mismo plan de cuidado a todos los pacientes",
        "Ajustar el plan de cuidado según la situación individual",
        "Ignorar las preferencias culturales del usuario",
        "Limitar el diálogo para agilizar la consulta"
    ],
    correct:1
    },

    {
    question:"Para fortalecer la confianza del usuario, el personal de salud debe:",
    options:[
        "Minimizar la comunicación",
        "Evitar explicar riesgos o alternativas",
        "Actuar con transparencia y coherencia",
        "Delegar siempre la información en otro profesional"
    ],
    correct:2
    },

    {
    question:"La toma de decisiones compartida permite:",
    options:[
        "Que solo el profesional decida",
        "Que el paciente participe activamente en su plan de cuidado",
        "Evitar la explicación de alternativas",
        "Reducir el tiempo de consulta"
    ],
    correct:1
    },

    {
    question:"¿Cuál es un principio básico de la atención centrada en el usuario?",
    options:[
        "Control total del profesional sobre las decisiones",
        "Enfoque en procesos administrativos",
        "Respeto por la autonomía del usuario",
        "Minimizar la participación del usuario"
    ],
    correct:2
    },

    {
    question:"¿Qué práctica favorece la comunicación efectiva con el usuario?",
    options:[
        "Interrumpir para agilizar la entrevista",
        "Verificar comprensión mediante retroalimentación",
        "Utilizar acrónimos sin explicación",
        "Mantener una postura distante"
    ],
    correct:1
    },

    {
    question:"¿Cuál es un ejemplo de trato humanizado?",
    options:[
        "Evitar el contacto visual",
        "Llamar al usuario por su nombre",
        "Priorizar el uso de dispositivos sobre la interacción",
        "Centrarse solo en los exámenes clínicos"
    ],
    correct:1
    },

    {
    question:"En la atención centrada en el usuario, el plan de cuidado debe:",
    options:[
        "Estar estandarizado sin excepciones",
        "Ser flexible y adaptarse a las necesidades del usuario",
        "Ser definido únicamente por el médico tratante",
        "Excluir preferencias culturales por complejas"
    ],
    correct:1
    },

    {
    question:"La privacidad del usuario se garantiza cuando el personal:",
    options:[
        "Deja documentos visibles al público",
        "Realiza entrevistas en espacios con buena audición",
        "Manipula la historia clínica con protocolos adecuados",
        "Comenta casos con otros pacientes para educarlos"
    ],
    correct:2
    },

    {
    question:"Una barrera frecuente para la atención centrada en el usuario es:",
    options:[
        "La participación activa de la familia",
        "La comunicación empática",
        "La sobrecarga laboral y falta de tiempo",
        "La escucha activa"
    ],
    correct:2
    },

    {
    question:"¿Cuál es un indicador de que la atención NO está centrada en el usuario?",
    options:[
        "El usuario comprende su plan de tratamiento",
        "Se adapta el cuidado a sus preferencias",
        "El usuario expresa sentirse ignorado",
        "El equipo fomenta preguntas y aclaraciones"
    ],
    correct:2
    },

    {
    question:"Una estrategia para promover el autocuidado en los usuarios consiste en:",
    options:[
        "Limitar el acceso a información",
        "Educar de manera clara y personalizada",
        "Evitar material ilustrativo",
        "Reservar la información solo para cuidadores"
    ],
    correct:1
    },

    {
    question:"La expresión “experiencia del usuario” hace referencia principalmente a:",
    options:[
        "La percepción del usuario sobre su proceso de atención",
        "La satisfacción del personal",
        "Los tiempos administrativos",
        "La cantidad de consultas realizadas"
    ],
    correct:0
    },

    {
    question:"Incluir al usuario en la planificación del alta hospitalaria permite:",
    options:[
        "Reducir su adherencia al tratamiento",
        "Evitar que participe en su autocuidado",
        "Mejorar la transición y continuidad del cuidado",
        "Generar confusión en el proceso"
    ],
    correct:2
    },

    {
    question:"¿Qué acción fortalece la participación del usuario en su plan de tratamiento?",
    options:[
        "Exponer información sin verificar comprensión",
        "Brindar opciones claras y escuchar sus preferencias",
        "Decidir por él para evitar complicaciones",
        "Evitar entregar material educativo"
    ],
    correct:1
    },

    {
    question:"¿Cuál es un ejemplo de vulneración de la dignidad del usuario?",
    options:[
        "Explicar el procedimiento antes de realizarlo",
        "Realizar la atención en un espacio privado",
        "Comentar sus datos clínicos en un área pública",
        "Preguntar por sus preferencias"
    ],
    correct:2
    },

    {
    question:"En la atención centrada en el usuario, la información entregada debe ser:",
    options:[
        "Compleja y extensa",
        "Adaptada al nivel de comprensión del usuario",
        "Limitada para reducir preguntas",
        "Solo verbal, sin apoyos visuales"
    ],
    correct:1
    },

    {
    question:"¿Cuál es una señal de que el usuario está siendo escuchado?",
    options:[
        "Repite varias veces la misma solicitud sin respuesta",
        "El profesional interrumpe constantemente",
        "Las decisiones reflejan sus preocupaciones y prioridades",
        "No se le permite preguntar"
    ],
    correct:2
    },

    {
    question:"El concepto de corresponsabilidad en la atención hace referencia a:",
    options:[
        "Delegar toda la responsabilidad en el usuario",
        "Hacer responsable únicamente al profesional",
        "Compartir roles y compromisos entre usuario y equipo de salud",
        "Evitar involucrar a la familia"
    ],
    correct:2
    },

    {
    question:"Un ambiente que favorece la atención centrada en el usuario debe ser:",
    options:[
        "Hostil y acelerado",
        "Desorganizado, sin señalización",
        "Seguro, accesible y acogedor",
        "Exclusivo para profesionales"
    ],
    correct:2
    },

    {
    question:"¿Qué herramienta institucional permite medir la experiencia del usuario?",
    options:[
        "Registro de signos vitales",
        "Encuesta de experiencia del usuario",
        "Historia clínica electrónica",
        "Formato de consentimiento informado"
    ],
    correct:1
    },

    {
    question:"¿Por qué es importante la continuidad del cuidado?",
    options:[
        "Reduce la participación del usuario",
        "Garantiza coherencia y seguimiento en su proceso de atención",
        "Permite que varios profesionales den información contradictoria",
        "Complica la planificación del tratamiento"
    ],
    correct:1
    }





            
];

