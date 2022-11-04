export const recommendedOils = (emotion: string) => {
  return {
    sorpresa: {
      shock: {
        description: "Resultado de un evento traumático que abruma la facultad que tiene un individuo para hacer frente a las emociones.",
        oils: "Geranio Menta, Eucalipto, Mejorana, Magnolia, Abeto Negro, Semilla de Apio, Eucalipto- Limón, Citronela, Albahaca Sagrada, Vetiver, Tanaceto Azúl, Rosa, Mirto de Limón, Milenrama, Manzanilla Romana, Litsela, Limoncillo, Limón, Lima, Jengibre, Jazmín, Incienso, Hinoki, Helicriso, Curcuma.",
      },
      asombro: {
        description: "Impresión en el ánimo que alguien o algo causa a una persona, especialmente por alguna cualidad extraordinaria o por ser inesperado.",
        oils: "Hierba limonera, Lavanda, Semilla de Apio, Citronela, Cúrcuma, Limón, Magnolia, Manuka, Mirto de Limón.",
      },
      imprudencia: {
        description: "Falta de juicio, sensatez y cuidado que una persona demuestra en sus acciones.",
        oils: "Limoncillo, Rosa, Naranja, Magnolia, Jengibre, Nardo, Loto Azúl.",
      },
      alerta: {
        description: "Se aplica a la persona que está atenta, vigilante.",
        oils: "Abedul, Menta, Magnolia, Limón, Hinoki.",
      },
      discrecion: {
        description: "Reserva o cautela para no decir algo que se sabe o piensa.",
        oils: "Orégano, Romero, Jazmín, Magnolia.",
      },
      "indiscreción vs verguenza / culpa": {
        description: "Incapacidad para guardar un secreto o para no contar lo que sabe y no hay necesidad de que conozcan los demás.",
        oils: "Mirra, Cítricos en General, Casia Eucalipto-Limón, Citronela, Magnolia.",
      },
	  confusion: {
        description: "Falta de orden o de claridad cuando hay muchas personas o cosas juntas.",
        oils: "Abedul, Geranio, Cedro, Romero, Abeto Negro, Semilla de Apio, Eucalipto-Limón, Citronela, Albahaca Sagrada, Hinoki, Incienso, Jazmín, Limón, Limoncillo, Salvia Esclarea.",
      },
      atontado: {
        description: "Perturbación momentánea de la capacidad de captar nuestro entorno.",
        oils: "Geranio, Cilantro, Pachuli, Romero, Eucalipto Limón, Salvia Esclarea, Mirra, Mirto de Limón, Hinoki, Helicriso.",
      },
      paralisis: {
        description: "Pérdida total o parcial de la capacidad de movimiento (física o emocional) de una o más partes del cuerpo.",
        oils: "Menta, Naranja, Pimienta negra Geranio, Canela, Jengibre, Abeto Negro, Eucalipto- Limón, Loto Azúl, Incienso, Litsea, Mandarina Roja, Manuka, Rosa.",
      },	  
    },
	
	
    alegria: {
      gratitud: {
        description: "Deseo de corresponder a una persona por un servicio prestado o hecho favorable.",
        oils: "Abeto Siberiano, Bergamota, Eucalipto Limón, Hinojo Dulce, Lima, Limoncillo, Litsea, Rosa, Cítricos en General, Jazmín, Geranio, Magnolia, Manuka, Mirto de Limón, Neroli, Semilla de Apio, Albahaca Sagrada.",
      },
      felicidad: {
        description: "Estado de ánimo de la persona que se encuentra plenamente satisfecha al tener lo que desea o disfrutar de una cosa buena.",
        oils: "Cítricos en General, Jazmín, Bergamota, Mirto de Limón, Hierbabuena, Hinojo Dulce, Limón, Limoncillo, Litsea, Mandarina Roja, Manuka, Menta, Salvia Esclarea, Sándalos, Albahaca Sagrada, Vainilla de Madagascar.",
      },
      llanto: {
        description: "Manifestación profunda que sobrepasa el equilibrio. ",
        oils: "Helicriso, Tomillo, Limón, Naranja, Jazmín, Manuka, Milenrama, Magnolia, Anís Estrella.",
      },
      "placer y nerviosismo": {
        description: "Satisfacción o sensación agradable producida por algo que gusta mucho.",
        oils: "Incienso, Menta, Magnolia, Rosa, Mirra.",
      },
      "deleite y gozo": {
        description: "Placer del espíritu o los sentidos.",
        oils: "Ylang Yang Davana, Bergamota, Eucalipto Limón, Incienso, Limoncillo, Menta, Rosa, Semilla de Cilantro, Vainilla de Madagascar.",
      },
      "orgullo vs soberbia": {
        description: "Sentimiento de satisfacción por un comportamiento bueno o por una obra bien hecha…en el extremo Soberbia.",
        oils: "Abedul, Lima, Manzanilla Romana, Yuzu Tanaceto Azúl, Neroli, Semilla de Apio.",
      },
	  plenitud: {
        description: "Momento de mayor importancia o intensidad.",
        oils: "Incienso, Bergamota, Hierbabuena, Hinoki, Incienso, Limón, Jazmín, Mandarina Verde, Mejorana, Semillas Pequeñas, Sándalo, Tanaceto Azúl, Mirra, Manuka, Vainilla de Madagascar.",
      },
      realizacion: {
        description: "Desarrollo completo de las aspiraciones, posibilidades o deseos de una persona.",
        oils: "Naranja y Menta, Hierbabuena, Hinoki, Incienso, Jazmín, Jengibre, Limón, Litsea, Mandarina Roja, Mandarina Verde,  Manzanilla Romana, Rosa, Sándalos, Salvia Esclarea, Anís Estrella, Vainilla de Madagascar.",
      },
      satisfaccion: {
        description: "Sentimiento de bienestar o placer que se tiene cuando se ha colmado un deseo o cubierto una necesidad.",
        oils: "Mirra, Melisa,Menta, Rosa, Sándalo, Arborvitae, Hierbabuena, Hinoki, Incienso, Jazmín, Jengibre, Limoncillo, Magnolia, Manzanilla Romana, Manuka, Albahaca Sagrada, Davana Anís Estrella, Vainilla de Madagascar.",
      },
    },
    tristeza: {
      afliccion: {
        description: "Tristeza o pérdida del ánimo.",
        oils: "Abedul, Abeto Negro, Vetiver, Bergamota, Cítricos en General, Ciprés, Mandarina verde, Neroli, Eucalipto- Limón, Albahaca Sagrada, Loto Azúl, Anís Estrella, Hinoki, Limón, Menta, Mirra, Eneldo.",
      },
      autocompasion: {
        description: "Es el sentimiento de pena hacia uno mismo que experimenta una persona en situaciones percibidas como adversas.",
        oils: "Jengibre, Bergamota, mente, Naranja , Yuzu , Mandarina Verde, Semilla de Apio, Eucalipto Limón, Citronela, Albahaca Sagrada Pimienta Negra, Vainilla de Madagascar.",
      },
      melancolia: {
        description: "Estado anímico permanente, vago y sosegado, de tristeza y desinterés, que surge por causas físicas o morales, por lo general de leve importancia.",
        oils: "Abeto Negro, Lavanda, Arborvitae, pimienta Negra , Pimienta Rosa, Manuka, Citronela, Anís Estrella, Ciprés, Hinoki, Incienso, Jengibre, Limón, Manzanilla Romana, Semilla de Apio.",
      },
      desesperanza: {
        description: "Pérdida de la Fé en lograr una cosa o de que se realice algo que se desea.",
        oils: "Abedul, Eucalipto, Manzanilla Romana, Mandarina verde, Manuka, Neroli, Abeto Negro, Albahaca Sagrada, Anís Estrella, Copaiba, Vetiver, Tanaceto Azúl, Sándalo, Mejorana, Menta, Rosa, Naranja, Mirto de Limón, Mandarina Verde, Litsea, Limón, Limoncillo, Jazmín, Incienso, Helicriso, Eucalipto, Casia, Bergamota, Vainilla de Madagascar.",
      },
      duelo: {
        description: "El duelo es el proceso de adaptación emocional que sigue a cualquier pérdida.",
        oils: "Manzanilla Romana, Geranio, Bergamota, Ciprés, Pequeñas Semillas, Manuka, Abeto Siberiano, Abeto Negro, Loto Azúl, Copaiba, Abeto Siberiano, Hinojo Dulce.",
      },
      pena: {
        description: "Sentimiento de dolor, sufrimiento o tristeza que provoca en una persona un hecho adverso o desgraciado.",
        oils: "Abedul, Tomillo, Ciprés, Limon, Toronja, Mandarina, Incienso , Mejorana , Manuka, Abeto Negro, Romero, Hinojo Dulce.",
      },
	  soledad: {
        description: "Sentimiento de aislamiento o confinamiento, falta de contacto con otras personas.",
        oils: "Abeto Negro, Abeto Blanco, Gaulteria, Melisa, Litsea, Neroli, Nardo, Abeto Siberiano, Semilla de Apio, Eucalipto Limón, Citronela, Loto Azúl, Anís Estrella, Geranio, Jengibre, Lima, Magnolia, Mandarina Verde, Rosa, Sándalo, Vainilla de Madagascar.",
      },
      nostalgia: {
        description: "Sentimiento de tristeza o pena que causa el estar lejos de la patria o de las personas y lugares queridos.",
        oils: "Albahaca, Tomillo, Semilla de Apio, Eucalipto-Limón, Citronela, Loto Azúl, Ylang Ylang, Menta, Manzanilla Romana, Mandarina Roja Magnolia, Litsea, Limoncillo, Limón, Lima, Jengibre, Incienso, Jazmín, Geranio, Ciprés, Bergamota, Vainilla de Madagascar.",
      },
      depresion: {
        description: "Profunda tristeza, decaimiento anímico, baja autoestima, pérdida de interés por todo y disminución de las funciones psíquicas.",
        oils: "Abedul, Orégano, Lavanda, Romero, Abeto Negro, Eucalipto-Limón, Bergamota, Eneldo, Jazmín, Jengibre, Lima, Litsea, Manzanilla Romana, Vainilla de Madagascar.",
      },
    },
    enojo: {
      control: {
        description: "Actividad que se realiza no sólo a nivel directivo, sino en todos los niveles.",
        oils: "Abedul, Árbol de Té, Cardomomo, Gaulteria, Clavo Ciprés, Hinojo Dulce, Incienso, Jazmín, Orégano Abeto Blanco, Yuzu, Mirto de limón, Litsea, Neroli, Nardo, Cúrcuma, Abeto Negro, Semilla de Apio, Eucalipto- Limón, Citronela, Copaiba, Tomillo, Vainilla de Madagascar.",
      },
	  fastidio: {
        description: "Disgusto, molestia o cansancio, debido generalmente a un contratiempo de poca importancia o una situación ligeramente desagradable. Recurrente.",
        oils: "Cítricos en General Hierbabuena, Limón, Limoncillo, Manzanilla Romana, Clavo, Nardo, Vetiver , Mandarina verde, Milenrama, Citronela, Davana, Tomillo.",
      },
      resentimiento: {
        description: "Sentimiento persistente de disgusto o enfado hacia alguien por considerarlo causante de cierta ofensa que destruye.",
        oils: "Helicriso, Ciprés, Tomillo Eucalipto, Ylang Ylang, Abeto de Douglas, Magnolia, Pequeñas Semillas, Vetiver, Cúrcuma, Abeto Negro, Semilla de Apio, Eucalipto- Limón, Citronela, Anís Estrella, Copaiba Limoncillo, Mandarina Roja, Mandarina Verde, Manuka, Sándalo, Vetiver.",
      },
      indignacion: {
        description: "Sentimiento de intenso enfado que provoca un acto que se considera injusto, ofensivo o perjudicial.",
        oils: "Abedul, Abeto de Douglas, Hierbabuena, Jazmín, Manzanilla Romana, Incienso Gaulteria, Magnolia , Pimienta Rosa, Abeto Negro, Semilla de Apio, Citronela, Albahaca Sagrada, Loto Azúl, Copaiba, Tomillo.",
      },
	  "dependencia y/o codependencia": {
        description: "Discapacidad funcional en el desarrollo de las actividades cotidianas condicionada por la “felicidad” del otro.",
        oils: "Árbol de Té Clavo, Abeto de Douglas, Abeto Blanco , Gaulteria, Pequeñas Semillas, Manuka, Nardo, Semilla de Apio, Citronela, Albahaca Sagrada, Davana, Anís Estrella, Tomillo, Hinojo Dulce, Litsea, Mandarina Verde.",
      },
      traicion: {
        description: "Falta grave de lealtad, ofensa contra la amistad y el amor. Acción destructiva y pérdida de la confianza.",
        oils: "Ciprés, Tomillo Árbol de Té, Cilantro, Menta, Pimienta Rosa, Milenrama, Neroli, Cúrcuma, Eucalipto-Limón, Citronela, Albahaca Sagrada, Loto Azúl, Copaiba, Clavo, Jazmín, Jengibre, Magnolia, Manuka, Mirra, Pimienta Rosa, Semilla de Cilantro.",
      },
      apatia: {
        description: "Dejadez, falta de interés, vigor o energía.",
        oils: "Jazmin, Pachouli, Hierbabuena, Vetiver, Lima, Mandarina Verde , Manuka, Citronela, Anís Estrella, Tomillo, Cardomomo, Jazmín, Magnolia, Naranja, Sándalo, Semilla de Cilantro.",
      },
	  ira: {
        description: "Manifestación desbordante que se expresa a través del resentimiento, de la furia o de la irritabilidad.",
        oils: "Tomillo, Hierbabuena, Nardo, Helicriso, Yuzu, Pimienta rosa, Mirto de Limón, Cúrcuma, Eucalipto-Limón, Citronela, Loto Azúl, Bergamota, Cardomomo, Ciprés, Jengibre, Tanaceto Azúl.",
      },
      "relacionado a una perdida": {
        description: "Reacción natural frente al dolor de una pérdida.",
        oils: "Abedul, Hierba limonera, Lavanda, Árbol de Té, Tomillo ,Nardo, Citronela, Copaiba, Hierbabuena, Hinoki, Incienso, Jengibre, Limón, Mandarina Roja, Rosa.",
      },	  
    },
    miedo: {
      depresion: {
        description: "Enfermedad o trastorno mental que se caracteriza por una profunda tristeza, decaimiento anímico, baja autoestima, pérdida de interés por todo y disminución de las funciones psíquicas.",
        oils: "Abedul, Melisa, Menta, Naranja, Nardo, Abeto Siberanio, Abeto Negro, Eucalipto-Limón, Anís Estrella, Copaiba, Eucalipto, Hinojo Dulce, Incienso, Jengibre, Litsea, Toronja, Vainilla de Madagascar.",
      },
	  "pavor patologico": {
        description: "Temor, con espanto o sobresalto.",
        oils: "Árbol de Té, Arborvitae, Milenrama, Abeto Negro, Semilla de Apio, Eucalipto- Limón, Albahaca Sagrada, Salvia Esclarea, Mandarina Roja, Limoncillo, Lima, Incienso, Casia, Albahaca, Abedúl.",
      },
      desconfianza: {
        description: "Falta de seguridad en algo, en otro o en si mismo.",
        oils: "Ciprés, Casia, Sándalo, Incienso, Yuzu, Semillas Pequeñas, Mandarina Verde, Manuka, Neroli , Tanaceto Azúl, Semilla de Apio, Eucalipto Limón, Davana, Anís Estrella, Copaiba, Bergamota, Hierbabuena, Hinoki, Jengibre, Limón, Magnolia, Menta, Neroli, Pachulí, Rosa.",
      },
      ansiedad: {
        description: "Preocupación o inquietud causadas por la inseguridad o el temor, que puede llevar a la angustia.",
        oils: "Litsea, Limoncillo, Hinoki, Bergamota, Cardamomo Melissa, Albahaca, Semillas Pequeñas , Manuka, Mirto de Limón, Neroli, Nardo, Semilla de Apio, Eucalipto-Limón, Citronela, Anís Estrella, Vainilla de Madagascar.",
      },
	  remordimiento: {
        description: "Sentimiento de culpabilidad que tiene una persona por algo que ha hecho y que la intranquiliza.",
        oils: "Bergamota, Limón, Naranja, Pimienta Rosa, Mirto de limón, Cúrcuma, Abeto Siberiano, Eucalipto-Limón, Citronela, Anís Estrella, Manuka.",
      },
      preocupacion: {
        description: "Estado de desasosiego, inquietud o temor producido ante una situación difícil o un problema previo a la ocupación.",
        oils: "Cilantro, Menta y Naranja, Mandarina Verde, Mirto de Limón, Tanaceto Azúl, Semilla de Apio, Eucalipto Limón, Albahaca Sagrada, Davana, Anís Estrella, Copaiba, Cilantro, Hinojo Dulce, Lima, Limón, Litsea, Magnolia, Menta, Mirto Limón, Orégano, Rosa, Salvia Esclarea, Toronja, Ylang Ylang, Vainilla de Madagascar.",
      },
      nerviosismo: {
        description: "Estado pasajero de excitación nerviosa, inquietud o de falta de tranquilidad.",
        oils: "Baya de Enebro, Hierbabuena, Abedul , Mandarina verde, Neroli, Eucalipto- Limón,Citronela, Copaiba, Ciprés, Vainilla de Madagascar.",
      },
	  inquietud: {
        description: "Desasosiego, desazón. Alboroto, conmoción.",
        oils: "Abedul, Albahaca, Canela, Manzanilla Romana, Hierbabuena, Eucalipto-Limón, Citronela, Anís Estrella, Casia, Bergamota, Vainilla de Madagascar.",
      },
      terror: {
        description: "Miedo paralizante, espanto, pavor.",
        oils: "Abedul, Mejorana, Casia, Baya de Enebro, Milenrama, Mirto de Limón, Abeto Negro, Eucalipto- Limón, Albahaca Sagrada, Canela, Hinoki, Mandarina Roja, Milenrama, Semillas Pequeñas.",
      },	
    },
    repulsion: {
      asco: {
        description: "Denominación de la emoción de fuerte desagrado y disgusto.",
        oils: "Abedul, Menta, Jengibre, Casia, Pimienta Rosa, Cúrcuma, Semilla de Apio, Eucalipto-Limón, Copaiba, Canela, Incienso, Lima, Magnolia, Rosa, Semilla de Cilantro, Tanaceto Azúl, Jazmín.",
      },
	  molestia: {
        description: "Persona, animal o cosa que hace perder la tranquilidad o el bienestar o hace que a alguien le resulte incomodo, difícil o más difícil realizar algo.",
        oils: "Abedul, Lavanda, Naranja,  Semillas Pequeñas, Melisa, Pimienta Rosa, Mandarina Verde, Neroli, Cúrcuma, Citronela, Copaiba, Toronja, Mirto de Limón, Mandarina Roja.",
      },
      celos: {
        description: "Sentimiento que experimenta una persona cuando sospecha que la persona amada siente amor o cariño por otra.",
        oils: "Abedul, Limón, Manzanilla Romana, Salvia Esclarea, Mejorana, Eucalipto, Magnolia,n Pimienta Rosa, Semilla de Apio, Eucalipto-Limón, Citronela, Copaiba, Hinojo Dulce, Incienso, Jengibre, Litsea, Mirra.",
      },
      desconfianza: {
        description: "Falta de seguridad en algo, en otro o en sí mismo.",
        oils: "Magnolia, Mandarina verde, Eucalipto-Limón, Copaiba, Rosa, Romero, Naranja, Manuka, Limoncillo, Incienso.",
      },
	  enemistad: {
        description: "Relación de aversión, odio u oposición entre dos o más personas.",
        oils: "Melissa, Pimienta negra, Ylang Ylang, Pimienta Rosa, Mandarina verde, Neroli, Cúrcuma, Citronela, Copaiba, Limoncillo, Magnolia, Manzanilla Romana, Pimienta Negra.",
      },
      destruccion: {
        description: "Daño muy grande en una cosa material o inmaterial.",
        oils: "Pimienta Negra, Manuka, Tanaceto azul, Semilla de Apio, Copaiba, Árbol de Té, Cardomomo, Hinoki, Incienso, Jengibre, Limón, Citricos en General, Lima, Magnolia, Menta, Neroli, Rosa.",
      },
      desacuerdo: {
        description: "Falta de aceptación de una situación, persona u opinión.",
        oils: "Canela, Cedro, Romero, Melissa, Ciprés, Eucalipto-Limón, Citronela, Limoncillo, Sándalo, Romero, Mejorana, Manzanilla Romana, Mandarina Verde, Mandarina Roja.",
      },
	  desequilibrio: {
        description: "Pérdida de la estabilidad temporal o permanente.",
        oils: "Abedul, Árbol de Té, Hinoki, Jengibre, Mandarina, Menta, Naranja Eucalipto-Limón, Copaiba, Lima, Limón, Cítricos en General, Litsea, Mandarina Verde, Manuka, Pimienta Negra, Sándalo, Toronja, Vainilla de Madagascar.",
      },
      lejania: {
        description: "Circunstancia de estar lejos en el tiempo o en el espacio.",
        oils: "Mejorana, Sándalo, Tanaceto Azúl, Tomillo, Milenrama, Citronela, Jazmín.",
      },	
    },
    verguenza: {
      arrepentimiento: {
        description: "Sentimiento de la persona que se arrepiente de haber hecho o dejado de hacer alguna cosa.",
        oils: "Abedul, Abeto Siberiano, Incienso, hierbabuena, Abeto Blanco y Helicriso, Anís Estrella, Copaiba, Jengibre, Limón, Limoncillo, Magnolia, Vetiver.",
      },
	  humillacion: {
        description: "Ofensa que alguien o algo causa en el orgullo o el honor de una persona.",
        oils: "Abedul, Casia, Albahaca, Clavo, Lavanda, Pimienta rosa, Milenrama, Neroli, Abeto Negro, Semilla de Apio, Eucalipto Limón, Citronela, Albahaca Sagrada, Anís Estrella, Ylang Ylang, Toronja, Rosa, Naranja, Manuka, Mandarina Verde, Litsea, Limoncillo, Jengibre, Helicriso, Copaiba, Citronela, Arbol de Té.",
      },
      pena: {
        description: "Sentimiento de dolor, sufrimiento o tristeza que provoca en una persona un hecho adverso o desgraciado.",
        oils: "Abedul, Incienso Toronja, Limón , Mandarina, Copaiba, Ciprés, Incienso, Lima, Litsea, Menta.",
      },
      dolor: {
        description: "Sentimiento intenso de pena, tristeza o lástima que se experimenta por motivos emocionales o anímicos.",
        oils: "Incienso, Ylang Ylang , Manzanilla Romana , Abeto Siberanio.",
      },
	  culpa: {
        description: "Falta o delito que comete una persona de forma voluntaria o involuntaria.O bien impuesta transgeneracional o culturalmente  en contra de ella misma.",
        oils: "Hinojo, Limón ,Jengibre, Mirto de Limón, Melisa, Magnolia, Manzanilla Romana, Abeto blanco, Abeto de Douglas, Pimienta Rosa, Semilla de Apio, Citronela, Albahaca Sagrada, Anís Estrella, Copaiba.",
      },
      inseguridad: {
        description: "Sensación de malestar, nerviosismo o temor, incapacidad de continuar en paso siguiente.",
        oils: "Pachuli, Bergamota Canela, Casia , Salvia Esclarea , Mandarina verde , Manuka, Neroli , Tanaceto Azul, Abeto Negro, Semilla de Apio, Eucalipto Limón, Citronela, Albahaca Sagrada,  Davana, Menta Bergamota, Anís Estrella, Copaiba, Vainilla de Madagascar.",
      },
      "inseguridad	cronica": {
        description: "Sensación de malestar, nerviosismo o temeridad que se repite de manera constante.",
        oils: "Abedul, Casia, Helicriso, Mandarina Verde, Manuka, Jengibre, Casia, Canela, Clavo, Arbol de Té , Tomillo , Pimienta Rosa, Milenrama, Neroli , Tanaceto Azul, Abeto Negro, Eucalipto Limón, Albahaca Sagrada, Menta Bergamota.",
      },
	  mortificacion: {
        description: "Circunstancia que desequilibra y produce dolor físico y/o emocional.",
        oils: "Ylang Ylang Sándalo, Mandarina, Citronela, Semilla de Apio, Manzanilla Romana, Limón, Lima, Jazmín, Incienso, Hinojo Dulce, Helicriso, Cilantro.",
      },
      desequilibrio: {
        description: "Estado de la persona que ha perdido el equilibrio o la estabilidad mental.",
        oils: "Ciprés, Incienso, Jazmín, Litsea, Mandarina, Menta, Melissa, Rosa, Lavanda , Mandarina verde , Tanaceto azul, Semilla de Apio, Albahaca Sagrada,  Davana, Menta Bergamota, Anís Estrella, Vainilla de Madagascar.",
      },	
    },
    amor: {
      afinidad: {
        description: "Coincidencia de gustos, caracteres u opiniones en dos o más personas.",
        oils: "Rosa, Jazmín, Hinojo Dulce, Lima, Incienso, Limón, Mirra, Magnolia, Anís Estrella.",
      },
	  gratitud: {
        description: "Sentimiento de agradecimiento y reconocimiento que se tiene hacia una persona que ha hecho un favor, un servicio o un bien.",
        oils: "Abedul, Abeto Siberiano, Melisa, Rosa, Sándalos, Eucalipto Limón, Geranio, Hinojo Dulce, Jengibre, Lima, Magnolia, Cítricos en General, Incienso, Mirra, Mandarina verde, Neroli, Anís Estrella.",
      },
      gentileza: {
        description: "Cualidad de la persona que actúa o se comporta con amabilidad, educación o atención hacia los demás.",
        oils: "Cítricos en General, Magnolia, Geranio, Jazmín, Lima, Menta, Pimienta Rosa, Neroli, Rosa.",
      },
      aceptacion: {
        description: "Consideración generalizada de que algo es bueno o válido.",
        oils: "Abeto Siberiano, Mirra, Tomillo, Arborvitae, Clavo, Cítricos en General, Geranio, Jengibre, Limoncillo, Litsea, Mandarina Roja, Milenrama, Hinojo Dulce, Jengibre, Eucalipto, Limón Pequeñas semillas, Mandarina verde , Tanaceto azul, Albahaca Sagrada. Vainilla de Madagascar.",
      },
	  pasion: {
        description: "Sentimiento muy intenso que domina la voluntad y puede perturbar la razón.",
        oils: "Clavo, Canela, Menta, Ylang Ylang, Cítricos en General, Jazmín, Manuka, Pimienta Rosa, Davana.",
      },
      caridad: {
        description: "Sentimiento o actitud que impulsa a interesarse por los demás y a querer ayudar a los necesitados.",
        oils: "Anís Estrella, Hierbabuena, Hinoki, Rosa.",
      },
      dedicacion: {
        description: "Entrega intensa a una actividad determinada.",
        oils: "Eucalipto, Canela, Limón, Hinoki, Incienso, Limón, Limoncillo, Litsea, Mandarina Roja, Hierbabuena, Jazmín, Mejorana.",
      },
	  devocion: {
        description: "Sentimiento de profundo respeto y admiración inspirado por la dignidad, la virtud o los méritos de una persona o causa.",
        oils: "Cilantro, Hierbabuena, Incienso, Limón, Magnolia, Menta, Mirto de Limón, Semilla de Cilantro, Sándalo, Mandarina Verde, Mandarina Roja, Geranio , Neroli, Anís Estrella.",
      },
      confianza: {
        description: "Impresión u opinión positiva firme que se tiene de que una persona o cosa será o se desarrollará según las expectativas.",
        oils: "Eucalipto Limón, Hierbabuena, Incienso, Limón, Limoncillo, Tanaceto Azúl, Magnolia, Mandarina Verde, Manuka, Abedul, Abeto Siberiano, Cítricos en General, Albahaca Sagrada, Vainilla de Madagascar.",
      },	
    },
  };
};
