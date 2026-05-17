 // ========================================================================
// ¡¡¡AQUÍ VA TU BASE DE DATOS DE PREGUNTAS!!!
// ========================================================================
// Edita, añade o borra preguntas aquí.
// Sigue el formato:
// {
//    tema: "Nombre del Tema",
//    pregunta: "¿Texto de la pregunta?",
//    opciones: ["Opción 0", "Opción 1", "Opción 2"],
//    correcta: 1  (El número de la opción correcta)
// }
// ¡Importante! No olvides la coma (,) entre cada objeto {pregunta}.

const BBDD_PREGUNTAS = [
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué nombre reciben las aplicaciones relacionadas con la gestión de datos que se ejecutan desde Internet y no necesitan instalación previa? [1]",
        "opciones": [
            "Aplicaciones Locales",
            "Aplicaciones Web",
            "Aplicaciones de Red interna",
            "Aplicaciones de Escritorio"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de los siguientes servicios de red se menciona específicamente en el despliegue de una aplicación web para organizar información en forma de árbol? [2]",
        "opciones": [
            "Sistema de nombres de dominio (DNS)",
            "Protocolo TCP/IP",
            "Servicio de Directorio (LDAP)",
            "Herramientas de monitorización"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué protocolo fundamental en Internet garantiza que los datos serán entregados en su destino sin errores y en el mismo orden en que se transmitieron? [3]",
        "opciones": [
            "HTTP",
            "TCP/IP",
            "DNS",
            "LDAP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué identificador utiliza cada dispositivo (host) conectado a Internet para identificarse de forma única a nivel de red? [3]",
        "opciones": [
            "Nombre de dominio",
            "Dirección MAC",
            "Dirección IP",
            "Puerto de servicio"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué archivo de texto típicamente almacena la traducción estática de IP a Nombres en sistemas GNU/Linux? [4]",
        "opciones": [
            "/etc/resolv.conf",
            "/etc/bind/named.conf",
            "/etc/network/interfaces",
            "/etc/hosts"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En caso de coexistir el fichero /etc/hosts y un servidor DNS en una máquina, ¿cuál tiene prioridad a la hora de resolver un nombre? [5]",
        "opciones": [
            "El servidor DNS primario",
            "El archivo /etc/hosts",
            "El servidor DNS secundario",
            "Ninguno, se interrumpe la resolución"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el archivo /etc/hosts, ¿qué significa que haya varios nombres de dominio separados por espacios a continuación de una IP? [5, 6]",
        "opciones": [
            "El primer nombre es un alias, los demás son principales",
            "Cada nombre pertenece a una red diferente",
            "El primer nombre es el principal, los demás son alias de éste",
            "Es un error de sintaxis y el archivo fallará"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es la principal desventaja del fichero /etc/hosts cuando el número de equipos que deben resolver el nombre en IP es elevado? [7, 8]",
        "opciones": [
            "Es demasiado rápido y satura la red",
            "Genera cambios estáticos que son muy complicados de mantener y actualizar en todos los clientes",
            "No permite introducir direcciones IPv6",
            "Requiere reiniciar el servidor completo en cada cambio"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Por qué un servidor DNS o un cliente del sistema operativo puede resolver una consulta repetida casi instantáneamente sin escalar peticiones? [9]",
        "opciones": [
            "Porque la petición viaja por la red local",
            "Porque poseen una memoria caché que recuerda las consultas efectuadas",
            "Porque le preguntan directamente al Servidor Raíz",
            "Porque el servidor DNS es un servidor estático"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué estructura tiene el sistema DNS en realidad? [10]",
        "opciones": [
            "Una base de datos plana no jerárquica",
            "Un archivo estático replicado globalmente",
            "Una base de datos distribuida con un esquema cliente-servidor jerárquico",
            "Un servidor central que gestiona todas las IPs"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el proceso lógico de resolución de www.debian.org, si no está en la memoria caché local ni en la del DNS primario, ¿a quién se le pregunta primero en la escalada externa? [11]",
        "opciones": [
            "Al servidor que gobierna 'www'",
            "Al servidor DNS local alternativo",
            "Al servidor DNS que gobierna el subdominio 'debian'",
            "Al servidor DNS que resuelve el dominio raíz 'org'"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué carácter actúa como separador entre los dominios y subdominios en una dirección URL? [12]",
        "opciones": [
            "La barra inclinada (/)",
            "El punto (.)",
            "El guion (-)",
            "Dos puntos (:)"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la URL http://www.debian.org, ¿qué representa 'org'? [12]",
        "opciones": [
            "Dominio de primer nivel que identifica a organizaciones",
            "Subdominio de la empresa",
            "Servidor web que aloja la página",
            "Protocolo de hipertexto"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la URL http://www.debian.org, ¿qué nivel de dominio ocupa 'www'? [12, 13]",
        "opciones": [
            "Dominio de primer nivel",
            "Dominio de segundo nivel",
            "Dominio de tercer nivel que identifica al equipo del servidor web",
            "Dominio raíz principal"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué función cumple 'http://' en la dirección http://www.debian.org? [13]",
        "opciones": [
            "Es el servidor de nombres de dominio",
            "Es el protocolo de hipertexto que permite la visualización correcta de la página",
            "Es el dominio de cuarto nivel",
            "Es la memoria caché del navegador"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Por regla general gramatical, ¿cuál es la longitud máxima de caracteres de un nombre de dominio (sin incluir la extensión)? [14]",
        "opciones": [
            "Menos de 256",
            "Menos de 63",
            "Hasta 128",
            "Ilimitada"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué nombre reciben los dominios que permiten registrar caracteres de otras lenguas no inglesas, como la 'ñ' o la 'ç'? [14, 15]",
        "opciones": [
            "Dominios ASCII",
            "Dominios extendidos",
            "Dominios multilingües",
            "Dominios ccTLD"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la jerarquía del espacio de nombres de dominio, ¿cómo se representa el dominio raíz? [15, 16]",
        "opciones": [
            "Con las siglas ROOT",
            "Con el carácter de un punto (.)",
            "Con el protocolo HTTP",
            "Con el sufijo ARPA"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significan las siglas TLD en la estructura DNS? [16]",
        "opciones": [
            "Transferencia Local de Datos",
            " Dominio de Nivel Superior (Top Level Domain)",
            "Protocolo de Nivel de Dominio",
            "Dominio de Tercer Nivel"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué es un nombre FQDN (Fully Qualified Domain Name)? [17, 18]",
        "opciones": [
            "Es únicamente el TLD de una organización",
            "Es el protocolo de capa de aplicación utilizado por DNS",
            "Es la concatenación del TLD, dominio de segundo nivel, de tercer nivel, etc., identificando un nodo",
            "Es la dirección MAC convertida en nombre DNS"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la clasificación de los dominios TLD, ¿qué identifica a los ccTLD? [19]",
        "opciones": [
            "Son dominios genéricos de tres o más letras",
            "Son dominios asociados con países y territorios, formados por 2 letras",
            "Son dominios de internet patrocinados por organismos públicos",
            "Son dominios reservados sólo para la red militar de EE.UU."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué caracteriza a los dominios de internet patrocinados (sTLD) que pertenecen a la subdivisión de genéricos? [19, 20]",
        "opciones": [
            "Están asociados únicamente a un país geográfico",
            "Están compuestos obligatoriamente de dos letras",
            "Representan una comunidad de intereses con una organización que establece las reglas",
            "Son de registro libre y no poseen un organismo detrás"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Ejemplos como .edu, .gov y .museum pertenecen a la categoría de: [19, 20]",
        "opciones": [
            "Dominios ccTLD",
            "Dominios de internet no patrocinados (uTLD)",
            "Dominios raíz absolutos",
            "Dominios de internet patrocinados (sTLD)"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es una ventaja fundamental de usar DNS sobre el archivo /etc/hosts para el control de cambios? [21]",
        "opciones": [
            "El cambio en el servidor es dinámico y se replica en todos los servidores permitidos",
            "El DNS requiere una clave USB de hardware para aplicar el cambio",
            "El DNS almacena los cambios en un archivo Excel compartido",
            "El DNS requiere modificar archivo por archivo manualmente en todos los equipos de la red"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué es una 'zona DNS'? [22]",
        "opciones": [
            "La zona física donde se ubican los ordenadores",
            "La parte del DNS para la cual se ha delegado la administración",
            "El tiempo de TTL asignado a un router",
            "El rango de puertos usados por el servidor web"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué realiza una Zona de Búsqueda Directa en el DNS? [22]",
        "opciones": [
            "Busca un nombre de equipo en función de su dirección IP",
            "Rechaza todas las consultas de dominios de primer nivel",
            "Devuelve la dirección IP correspondiente al recurso solicitado mediante un nombre",
            "Redirecciona automáticamente del protocolo HTTP a HTTPS"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué realiza una Zona de Búsqueda Inversa en el DNS? [23]",
        "opciones": [
            "Devuelve una IP cuando introducimos un nombre de dominio",
            "Busca un nombre de equipo en función de su dirección IP",
            "Permite acceder a servidores web saltándose el proxy",
            "Cifra el contenido del nombre de dominio para que sea anónimo"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ventaja tiene utilizar el DNS en conjunto con DHCP en una red local? [24, 25]",
        "opciones": [
            "El servidor web responderá en el puerto 80 por defecto",
            "No se necesita comprar un nombre de dominio en Internet",
            "Podemos desconocer la IP cambiante asignada y conectar a ese equipo por su nombre de dominio invariable",
            "Las IPs pasan a ser completamente estáticas sin caducidad"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según las especificaciones de diseño de DNS, ¿cuál es el número mínimo de servidores DNS recomendados para alojar cada zona? [26]",
        "opciones": [
            "Uno solo y centralizado",
            "Como mínimo dos servidores DNS",
            "Exactamente trece servidores DNS",
            "Un número impar entre cinco y nueve"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué sucede si consultas por segunda vez una página (ej. www.debian.org) desde el mismo host y no ha expirado el tiempo de memoria? [27]",
        "opciones": [
            "El proceso repite la escalada hasta los servidores raíz para asegurar el cambio",
            "Se reinicia la memoria RAM del sistema operativo",
            "La resolución de IP se guarda en la caché del host, evitando repetir el proceso entero",
            "El navegador arroja un error de redundancia de red"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es la función principal del sistema conocido como DNS Dinámico? [28, 29]",
        "opciones": [
            "Asignar nombres de dominio a equipos de forma estática permanente",
            "Permitir la actualización en tiempo real de la información de dominio de un equipo con IP variable (dinámica)",
            "Aumentar el ancho de banda para conexiones concurrentes",
            "Proteger a la red local de virus y ataques de denegación de servicio"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si ofreces un servicio en Internet desde un DNS dinámico en tu casa, ¿qué limitación de infraestructura podrías encontrar comparado con un Hosting profesional? [29, 30]",
        "opciones": [
            "Incapacidad absoluta de resolver dominios .com",
            "Imposibilidad de utilizar registros tipo A",
            "Falta de ancho de banda necesario para múltiples conexiones concurrentes sin perjudicar el servicio",
            "Las IPs dinámicas bloquean el acceso a cualquier navegador moderno"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es el rol de un servidor DNS Primario? [31]",
        "opciones": [
            "Limitarse a contactar a otros servidores para resolver peticiones sin guardar zonas",
            "Obtener datos copiándolos de un servidor de menor jerarquía",
            "Almacenar la información de su zona en una base local y mantenerla actualizada frente a cambios",
            "Resolver únicamente las direcciones IPs locales sin salida a internet"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué nombre recibe el proceso mediante el cual un servidor secundario (o esclavo) obtiene los datos de su zona de un servidor con autoridad? [32]",
        "opciones": [
            "Resolución Recursiva",
            "Transferencia de zona",
            "Traducción Inversa",
            "Búsqueda Iterativa"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es la tarea que define a un 'servidor maestro' (master name server)? [32, 33]",
        "opciones": [
            "Extraer obligatoriamente datos del servidor sólo caché",
            "Ser el primer servidor en responder a las iteraciones de la caché",
            "Transferir las zonas a los servidores secundarios, evitando sobrecargar a otro servidor maestro o primario",
            "Conectarse directamente con el ISP para descargar las IP variables"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué distingue a los servidores 'sólo caché' (caching-only servers)? [33, 34]",
        "opciones": [
            "Son los únicos que guardan registros de Zona Inversa",
            "No tienen autoridad sobre ningún dominio, limitándose a almacenar preguntas contestadas localmente",
            "Están controlados directamente por ICANN",
            "Resuelven la IP sólo si la dirección pertenece a una Intranet"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Por qué los servidores secundarios son importantes además de por motivos de seguridad/redundancia? [35, 36]",
        "opciones": [
            "Por velocidad: evita la sobrecarga del principal distribuyendo el trabajo geográficamente",
            "Por precio: no requieren pago de licencia para operar",
            "Por compresión: disminuyen el tamaño de los paquetes DNS enviados",
            "Por compatibilidad: los navegadores móviles solo usan DNS secundarios"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según la documentación, ¿cuándo se puede dar una transferencia de zona? [36]",
        "opciones": [
            "Solo si un usuario manda la orden desde el navegador web",
            "Cuando vence el intervalo de actualización o cuando el maestro notifica cambios",
            "Exclusivamente al reiniciar toda la infraestructura de la red",
            "Cuando la IP del cliente se renueva por DHCP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando permite iniciar manualmente en un servidor secundario una transferencia desde su servidor maestro? [36, 37]",
        "opciones": [
            "ping -t master",
            "service bind9 restart",
            "rndc retransfer",
            "nslookup -transfer"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué corporación sin ánimo de lucro es responsable actualmente de gestionar y delegar los dominios de nivel superior y el sistema de servidores raíz? [37, 38]",
        "opciones": [
            "IEEE",
            "W3C",
            "ICANN",
            "IETF"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuántos servidores raíz o direcciones IP principales operan el índice maestro de Internet? [39, 40]",
        "opciones": [
            "13 servidores raíz",
            "250 servidores raíz",
            "3 servidores raíz",
            "64 servidores raíz"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Con qué nomenclatura se denominan a los trece servidores raíz DNS? [41]",
        "opciones": [
            "Con los nombres de los planetas del sistema solar",
            "Con números del 1 al 13 seguidos de la extensión .arpa",
            "Con las primeras trece letras del alfabeto latino, de la A hasta la M",
            "Con acrónimos de universidades estadounidenses"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Dentro del formato de los Registros de Recursos (RR), ¿para qué sirve el campo Tiempo de vida (TTL)? [42, 43]",
        "opciones": [
            "Indica el tiempo que debe pasar antes de que el dominio sea eliminado definitivamente",
            "Indica el tiempo utilizado por otros servidores DNS para mantener el registro en caché antes de descartarlo",
            "Indica el tiempo de latencia en milisegundos del servidor",
            "Indica el nivel jerárquico dentro de la base de datos DNS"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué función cumple el registro DNS tipo 'A' (Address)? [44]",
        "opciones": [
            "Sirve para registrar dominios IPv6 exclusivamente",
            "Se usa para traducir nombres de hosts a direcciones IP versión 4",
            "Sirve para indicar servidores de intercambio de correo",
            "Identifica de forma arbitraria la autoridad del servidor DNS"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tipo de registro se usa para traducir nombres de hosts a direcciones IP de versión 6? [45]",
        "opciones": [
            "A6",
            "AAAA",
            "IPv6-PTR",
            "CNAME-6"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un servidor web con una IP ejecuta FTP, Web y necesita varios alias apuntando al mismo host, ¿qué tipo de registro se utilizará? [45, 46]",
        "opciones": [
            "Registro PTR",
            "Registro NS",
            "Registro SOA",
            "Registro CNAME"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué indica el registro NS (Name Server)? [46, 47]",
        "opciones": [
            "Qué servidores de intercambio de correo operan en la zona",
            "Qué nombre canónico secundario usa un host",
            "Qué servidores de nombres tienen total autoridad sobre un dominio concreto",
            "Qué protocolo de red de seguridad utiliza el dominio"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué asocia un registro tipo MX? [47]",
        "opciones": [
            "Un nombre de dominio con direcciones MAC autorizadas",
            "Un nombre de dominio con una lista de servidores de intercambio de correo",
            "Un nombre de dominio con servidores FTP primarios",
            "Un nombre de dominio con subredes privadas locales"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el registro MX de correo electrónico (ej. 'MX 10 servidorcorreo.com'), ¿qué representa el número 10? [47, 48]",
        "opciones": [
            "La preferencia o prioridad, donde a menor número mayor preferencia",
            "La cantidad máxima de correos por segundo soportados",
            "El puerto TCP por el cual se enviarán los mensajes",
            "El TTL mínimo en horas que guardará ese registro"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El registro conocido como 'registro inverso', que funciona al revés que el tipo 'A' traduciendo IPs en nombres, es el: [48]",
        "opciones": [
            "INVERSE-A",
            "PTR",
            "SOA",
            "TXT"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué información proporciona principalmente el registro SOA (Start Of Authority)? [49]",
        "opciones": [
            "La lista de direcciones de IPv6 activas en el dominio secundario",
            "Información sobre el servidor DNS primario de la zona y parámetros de autoridad como los intervalos",
            "Las políticas antispam para la entrada de correos",
            "Los alias habilitados para el servidor web local"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el registro SOA, el número de serie (serial number) de la base de datos de la zona debe: [50]",
        "opciones": [
            "Decrecer con el paso de las horas para vaciar caché",
            "Mantenerse siempre en 1 para todas las zonas",
            "Incrementarse cada vez que se modifique la base de datos de la zona",
            "Ser idéntico al puerto de conexión (generalmente 53)"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El registro SPF, que sirve para autorizar hosts a enviar correo desde el dominio dado y combatir el SPAM, es técnicamente un tipo de registro: [50, 51]",
        "opciones": [
            "TXT (TeXT)",
            "MX-Security",
            "A-Policy",
            "SOA-Extended"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Cuando un cliente DNS formula una consulta y no encuentra la respuesta localmente, ¿a qué proceso acude el servidor por defecto para resolver completamente el nombre en nombre del cliente? [52, 53]",
        "opciones": [
            "Broadcast de Capa 2",
            "Petición Iterativa de abandono",
            "Consulta Recursiva",
            "Búsqueda Plana Estática"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué son las 'sugerencias de raíz' (root hints) que utiliza un servidor DNS? [54, 55]",
        "opciones": [
            "Comandos de Linux usados para vaciar la memoria de la placa base",
            "Un archivo estático con los usuarios bloqueados del sistema",
            "Una lista de registros preliminares usada para localizar servidores DNS con autoridad para la raíz del árbol DNS",
            "Un listado de nombres de dominio obsoletos"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de las siguientes es una ventaja del proceso de consulta recursiva para el servidor DNS a pesar del consumo de recursos? [56, 57]",
        "opciones": [
            "Obtiene información del espacio DNS que guarda en caché, acelerando futuras consultas similares",
            "Elimina por completo el uso de ancho de banda al usuario final",
            "Evita almacenar zonas DNS permanentemente al usar un protocolo de streaming",
            "Bloquea todas las descargas no autorizadas del cliente"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué sucede en una petición iterativa si el servidor DNS consultado no tiene el nombre exacto en su caché o zona local? [58, 59]",
        "opciones": [
            "Finaliza la conexión e ignora el paquete de red",
            "Devuelve la IP de su propio localhost (127.0.0.1)",
            "Proporciona una referencia (lista de servidores DNS) que están más cerca del nombre consultado",
            "Reinicia la conexión del cliente DNS pidiendo recursividad"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la iteración, si se recibe una referencia (referral), ¿quién asume la responsabilidad de continuar efectuando consultas iterativas a otros servidores? [59]",
        "opciones": [
            "El servidor de dominios de Nivel Superior",
            "El cliente DNS solicitante",
            "El servidor DNS alternativo",
            "El router doméstico obligatoriamente"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tipo de búsqueda inversa utiliza el protocolo DNS para averiguar el nombre de un equipo a partir de una IP versión 4? [60, 61]",
        "opciones": [
            "Consulta en el dominio ipv4.arpa",
            "Consulta en el dominio genérico .com",
            "Consulta en el dominio in-addr.arpa",
            "Consulta en el dominio reverse.dns"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Debido a cómo procesa el estándar in-addr.arpa la búsqueda inversa, ¿cómo deben escribirse los octetos de la IP 192.168.200.100? [62, 63]",
        "opciones": [
            "En el mismo orden: 192.168.200.100.in-addr.arpa.",
            "En formato hexadecimal",
            "En orden invertido: 100.200.168.192.in-addr.arpa.",
            "Separados por guiones bajos en orden directo"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para soportar la resolución inversa en el protocolo IP versión 6 (IPv6), ¿qué dominio especial se utiliza según el RFC 3596? [64]",
        "opciones": [
            "in-addr6.arpa",
            "ip6.arpa",
            "ipv6-reverse.org",
            "dns.ipv6"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el funcionamiento de clientes DNS en sistemas operativos tipo GNU/Linux, ¿en qué archivo puedes configurar los servidores preferidos y alternativos? [65]",
        "opciones": [
            "/etc/hosts",
            "/etc/network.cfg",
            "/etc/resolv.conf",
            "/etc/dns_client.ini"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si configuras varios servidores DNS pero el primero falla, el sistema tarda por defecto 5 segundos en intentar con el secundario provocando lentitud. ¿Cómo se puede reducir esto? [66, 67]",
        "opciones": [
            "Añadiendo la opción 'rotate:0'",
            "Con la directiva 'options timeout:1' en resolv.conf",
            "Creando un script bash en el arranque del servicio SSH",
            "Poniendo la misma IP en los tres primeros nameserver"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué directiva en el fichero /etc/resolv.conf permite distribuir la carga de peticiones entre todos los servidores DNS listados en lugar de ir siempre al preferido? [67]",
        "opciones": [
            "balance",
            "randomize",
            "rotate",
            "round-robin"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al lanzar una solicitud ftp.rediris.es, la aplicación usa el cliente del SO (resolutor). ¿Qué ocurre si la IP de ftp.rediris.es es 130.206.1.5? [68]",
        "opciones": [
            "El resolutor exige al usuario introducir la IP 130.206.1.5",
            "El resolutor local busca la IP 130.206.1.5 de forma transparente para el usuario",
            "El comando aborta porque los FTP no se pueden resolver por DNS",
            "El servidor raíz cancela la sesión a menos que esté en caché"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando clásico de resolución de nombres en distribuciones GNU/Linux ya no está soportado oficialmente o se considera obsoleto (deprecated)? [69]",
        "opciones": [
            "host",
            "dig",
            "ping",
            "nslookup"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Actualmente, para consultas de servidores DNS activos y registros en sistemas GNU/Linux, ¿qué comandos se suelen utilizar como reemplazo a nslookup? [69, 70]",
        "opciones": [
            "netstat y nmap",
            "host y dig",
            "trace y route",
            "telnet y wget"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al ejecutar 'host ftp.rediris.es' el sistema responde que es un 'alias for zeppo.rediris.es'. ¿Qué tipo de registro DNS indica este alias? [71]",
        "opciones": [
            "A",
            "CNAME",
            "PTR",
            "SOA"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Con qué parámetro u opción el comando 'dig' permite consultar explícitamente el nombre asociado a una IP (resolución inversa)? [72, 73]",
        "opciones": [
            "dig -reverse",
            "dig --ptr",
            "dig -x",
            "dig -inv"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para la instalación del servidor DNS BIND en Debian, ¿qué paquetes son necesarios instalar? [74]",
        "opciones": [
            "bind y named",
            "dns-server y resolv",
            "bind9 y bind9utils",
            "apache2 y bind"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué usuario crea el sistema automáticamente durante la instalación de BIND en Debian para ejecutar el servicio 'named'? [74]",
        "opciones": [
            "root",
            "admin",
            "dns-user",
            "bind"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Verificando el servicio de BIND (named) con 'netstat', ¿cuál es el puerto de red en el que típicamente escucha las peticiones DNS? [75]",
        "opciones": [
            "Puerto 80",
            "Puerto 21",
            "Puerto 53",
            "Puerto 25"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Sobre qué protocolos de capa de transporte se comprueba que el servidor bind9 está activo escuchando el puerto correspondiente? [75, 76]",
        "opciones": [
            "Solo TCP",
            "Solo UDP",
            "TCP y UDP simultáneamente",
            "ICMP y TCP"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Tras la instalación del servidor DNS BIND (bind9) en Debian, ¿cuál es la ruta principal que contiene sus ficheros de configuración? [76]",
        "opciones": [
            "/var/lib/bind",
            "/usr/local/named",
            "/opt/bind9",
            "/etc/bind"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Dentro de los archivos de configuración en /etc/bind/, el fichero llamado 'named.conf.local' se destina generalmente a: [77]",
        "opciones": [
            "Opciones genéricas globales del servidor",
            "La configuración para opciones particulares, como la declaración de zonas locales",
            "Fijar el log del servidor y volcar errores críticos",
            "Guardar en texto plano todas las contraseñas de transferencias"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué carácter o caracteres finalizan una declaración de bloque dentro de los archivos de configuración de BIND (named.conf...)? [77]",
        "opciones": [
            "Un salto de línea (Enter)",
            "Un signo de exclamación (!)",
            "El carácter punto y coma (;)",
            "El carácter de dos puntos (:)"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En los archivos de configuración de BIND, ¿cómo se marca el texto para que sea considerado un comentario ignorado en la ejecución? [77, 78]",
        "opciones": [
            "Con doble barra (//), almohadilla (#) o entre barra asterisco (/*) y asterisco barra (*/)",
            "Únicamente empezando la línea con doble guion (--)",
            "Únicamente con el símbolo de porcentaje (%)",
            "Es imposible comentar un fichero en BIND"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para realizar una comprobación de la sintaxis del archivo de configuración global named.conf buscando errores antes de recargar el servicio, ¿qué comando debes utilizar? [78, 79]",
        "opciones": [
            "bind-verify",
            "check-dns-syntax",
            "named-checkconf",
            "named-checkzone"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando realiza las comprobaciones de sintaxis e integridad sobre un archivo de zona específico en BIND, simulando la carga en el servidor? [80, 81]",
        "opciones": [
            "named-checkzone",
            "zone-verify",
            "named-checkconf -z",
            "bind-zone-test"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si deseas aplicar los cambios realizados en los archivos de configuración de BIND sin apagar y detener las consultas actuales en progreso de forma abrupta, usarías el comando: [82]",
        "opciones": [
            "service bind9 stop",
            "service bind9 reload",
            "service bind9 kill",
            "service bind9 restart-hard"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la configuración de un servidor BIND (bind9) como caché genérico, ¿en qué archivo se indica típicamente el directorio de caché y los 'forwarders'? [83]",
        "opciones": [
            "/etc/bind/named.conf.options",
            "/etc/bind/named.conf.local",
            "/etc/bind/db.local",
            "/etc/resolv.conf"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la terminología DNS de BIND, ¿para qué sirve la directiva 'forwarders' en el archivo options? [83, 84]",
        "opciones": [
            "Para bloquear el acceso de IP no permitidas",
            "Para reenviar las peticiones que no se pueden resolver de forma local (en caché) a otros servidores DNS especificados",
            "Para obligar al servidor DNS a responder inversamente en todas sus zonas locales",
            "Para mandar un correo de alerta de servidor caído al administrador"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un servidor BIND está actuando solo como caché para la misma máquina, ¿qué IP se debería poner en el archivo /etc/resolv.conf de ese equipo? [85]",
        "opciones": [
            "8.8.8.8",
            "0.0.0.0",
            "127.0.0.1",
            "255.255.255.255"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando limpia (o borra) la caché de resoluciones guardadas en la memoria del servidor DNS BIND sin reiniciar el proceso? [86]",
        "opciones": [
            "/etc/init.d/nscd restart",
            "/usr/sbin/rndc flush",
            "rm -rf /var/cache/bind/*",
            "service bind9 clear-cache"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el archivo /etc/bind/named.conf.local, cuando queremos configurar una zona donde nuestro servidor es el autoritativo principal (Maestro), utilizamos la directiva: [86, 87]",
        "opciones": [
            "mode primary;",
            "server master;",
            "type master;",
            "zone root;"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al declarar una zona 'type master', ¿qué función cumple la línea que empieza por 'file ...;'? [87]",
        "opciones": [
            "Indicar a dónde enviar las descargas de archivos HTTP",
            "Indicar el fichero donde se guarda y lee el contenido con los registros de la zona",
            "Especificar el archivo de error para los fallos del servidor",
            "Limitar la cantidad de memoria que usa la zona en disco"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al configurar un servidor BIND como esclavo en named.conf.local, ¿qué parámetro acompaña a 'type slave;' para indicar de dónde descargar la zona? [88, 89]",
        "opciones": [
            "masters { [IP_maestro]; };",
            "download-from { [IP_maestro]; };",
            "sync-ip { [IP_maestro]; };",
            "source-server { [IP_maestro]; };"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para mejorar la seguridad, en la configuración de la zona master, ¿qué directiva permite restringir y estipular qué servidores tienen permiso para realizar copias de la zona (transferencias)? [90]",
        "opciones": [
            "zone-lock",
            "secure-sync",
            "allow-transfer",
            "permit-slave"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué directiva configurada en el DNS maestro permite enviar automáticamente una notificación de cambio de zona a los servidores esclavos registrados? [91]",
        "opciones": [
            "update-slaves",
            "notify-yes",
            "push-zone-true",
            "broadcast-changes"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si tienes servidores esclavos secundarios en el sistema que NO están dados de alta como registros NS oficiales de la zona, ¿cómo los notifica el maestro de los cambios? [91, 92]",
        "opciones": [
            "Mediante la directiva also-notify { IPs...; };",
            "Añadiéndolos en el archivo de hosts",
            "Reiniciando el router maestro para disparar un broadcast ARP",
            "No se puede; obligatoriamente deben tener un registro NS oficial"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ventaja tiene el mantener servidores DNS sincronizados mediante directivas como also-notify o transfers automáticos? [93, 94]",
        "opciones": [
            "Reducir el tamaño de las peticiones DNS enviadas en la red",
            "Permitir que solo se respondan a los registros inversos de IPv4",
            "Garantizar la disponibilidad distribuyendo la carga de peticiones y sirviendo la misma información si el maestro falla",
            "Ocultar el nombre del dominio en peticiones DNS anónimas"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según la respuesta generada por dig hacia el dominio de ejemplo, un valor 'NOERROR' en status: indica que: [95, 96]",
        "opciones": [
            "El dominio no existe y es libre de registro",
            "El cliente denegó el permiso para la conexión local",
            "El servidor no posee recursos para la transferencia",
            "La consulta DNS se ha resuelto con éxito y sin problemas"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué puerto es utilizado convencionalmente tanto en TCP como UDP por el demonio (proceso) de BIND o el servidor DNS? [75, 76]",
        "opciones": [
            "22",
            "53",
            "443",
            "8080"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Con respecto a la estructura de directorios, normalmente en un sistema BIND en Debian, ¿dónde recomienda guardar los ficheros con contenido real de zona para mantener ordenados los de maestras y esclavas? [87, 97]",
        "opciones": [
            "En /etc/bind/zones/",
            "En /var/lib/bind/master/ y /var/lib/bind/slave/",
            "En /usr/bin/bind/data/",
            "En /tmp/bind_cache/"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un fichero de zona inversa tiene el nombre de dominio '5.1.206.130.in-addr.arpa.', ¿a qué IP (versión 4) tradicional corresponde antes de invertirla? [72, 98]",
        "opciones": [
            "130.206.1.5",
            "5.1.206.130",
            "5.206.130.1",
            "1.5.130.206"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al ejecutar 'nslookup ftp.rediris.es', ¿qué indica el mensaje 'Non-authoritative answer'? [70, 71]",
        "opciones": [
            "Que la respuesta provino de la caché local o un servidor que no aloja directamente la zona primaria del dominio",
            "Que no estás autorizado en el servidor FTP solicitado",
            "Que la firma digital SSL/TLS del sitio web ha caducado",
            "Que el servidor DNS está bloqueado por motivos de spam"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué componente en BIND9 almacena temporalmente las últimas consultas resueltas para enviarlas rápidamente sin usar recursividad externa de nuevo? [83, 84]",
        "opciones": [
            "El archivo .keys",
            "El fichero /etc/hosts temporal",
            "La memoria caché (directorio de caché)",
            "El servidor esclavo pasivo"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Un dominio DNS FQDN siempre se lee desde su nivel más bajo, subdominio a dominio de raíz, que va de: [12, 13]",
        "opciones": [
            "Derecha a Izquierda",
            "Izquierda a Derecha",
            "Arriba hacia abajo ignorando los puntos",
            "El puerto hasta la IP de resolución"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿A qué subcategoría de TLD pertenece una extensión como '.biz' o '.info'? [19, 20]",
        "opciones": [
            "sTLD (Dominios patrocinados)",
            "uTLD (Dominios genéricos no patrocinados)",
            "ccTLD (Código de país)",
            "Dominios raíz delegados militarmente"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿A qué subcategoría de TLD pertenece una extensión como '.es' o '.uk'? [19]",
        "opciones": [
            "sTLD",
            "uTLD",
            "ccTLD (Código de país asociado con países o territorios)",
            "Dominios jerárquicos multilingües"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se resuelve habitualmente el problema de balanceo de servicios si un mismo nombre 'www.ejemplo.com' devuelve más de una dirección IP (Ej: dos respuestas A)? [26, 99]",
        "opciones": [
            "El cliente intentará conectar al primer servidor y, en caso de fallo, intentará con el segundo (Round-robin DNS)",
            "El cliente bloqueará automáticamente los dos y consultará directamente el /etc/hosts",
            "El cliente fusionará la información web de las dos IPs al mismo tiempo en el navegador",
            "Lanza un kernel panic por superposición de registros de red"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si quisieras alojar tu propio servidor DNS autoritativo que responda a un dominio tuyo público de forma transparente para los clientes, y tienes IP dinámica... [100, 101]",
        "opciones": [
            "Deberás cambiar físicamente de placa de red cada vez que cambie la IP para forzar la MAC",
            "Podrás hacerlo pero necesitarás usar un cliente/servicio de DNS Dinámico que capture la IP y actualice el registro automáticamente",
            "Debes modificar el /etc/hosts de todos los usuarios de internet del mundo",
            "Es completamente imposible en tecnología IPv4"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Cuando una transferencia de zona falla desde el servidor Primario al Secundario de manera prolongada, ¿qué mecanismo en el SOA rige este control dictando que los registros ya no se considerarán válidos en el Secundario? [49, 50]",
        "opciones": [
            "El valor Retry",
            "El valor Serial",
            "El valor Caducidad o Expire",
            "El parámetro Refresh"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un registro SOA indica '3600 ; refresh', ¿cada cuánto tiempo, como mínimo, intentará el servidor Secundario comprobar la actualización de base de datos de zona? [49, 50]",
        "opciones": [
            "Cada 3600 minutos (60 horas)",
            "Cada 3600 milisegundos",
            "Cada 3600 segundos (1 hora)",
            "Cada vez que reinicie la máquina"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo interpreta el servidor BIND la ruta '~all' dentro de la directiva o registro SPF? [51, 102]",
        "opciones": [
            "Obliga a todos los correos a ser eliminados inmediatamente si fallan",
            "Es parte de la política de envío que establece directrices de validación frente a suplantación (ej. neutral o softfail para correos no listados)",
            "Indica que el servidor acepta correo de cualquier dominio sin restricción SPF",
            "Crea un bucle de correos en el localhost"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al intentar la resolución 'www.ejemplo.com', si el servidor no dispone de esa caché y tiene que hacer peticiones desde raíz iterando a nivel de TLD (.com) y luego al dominio (.ejemplo), está realizando internamente una búsqueda: [53, 54]",
        "opciones": [
            "No canónica in-addr.arpa",
            "Iterativa sobre los servidores de autoridad de cada zona delegada",
            "Estricta local solo en /etc/hosts",
            "Broadcast pasiva"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Durante una consulta DNS, ¿qué espera obtener el cliente en una resolución de búsqueda directa frente a una búsqueda inversa? [60, 103]",
        "opciones": [
            "Directa: una IP. Inversa: un nombre de dominio.",
            "Directa: un nombre de dominio. Inversa: una IP.",
            "Ambas esperan un registro de texto SPF",
            "Directa: resolución por IPv4. Inversa: resolución en IPv6."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre si en un fichero de configuración DNS (BIND) falta añadir el ';' de cierre tras definir los detalles de una zona? [77, 78]",
        "opciones": [
            "El servidor BIND detecta el error por heurística y la corrige en RAM",
            "Se considerará un error de sintaxis y la carga/recarga del archivo fallará al ser revisado",
            "Toda la red local quedará bloqueada por prevención",
            "Se ignorará automáticamente el registro previo en su lugar"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Cuando se utiliza 'type slave;' en el fichero named.conf.local de un DNS Secundario, la ruta indicada en el 'file' representa: [88, 89]",
        "opciones": [
            "Un fichero donde el servidor esclavo volcará (escribirá) la copia de zona enviada por el DNS maestro para futuras lecturas.",
            "Un fichero temporal de sistema que desaparece al reiniciar la máquina",
            "Un archivo web compartido",
            "Un script ejecutable en Python"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Por qué es importante incluir a todos los servidores secundarios estipulados en la red dentro de la directiva 'allow-transfer' del maestro? [90, 91]",
        "opciones": [
            "Porque de lo contrario se borrarán sus memorias ROM",
            "Para que actúen como un cortafuegos activo interceptando ataques HTTP",
            "Porque restringe el volcado de la información crítica de la zona únicamente a servidores autorizados",
            "Porque si no, no se registrará la IP en /etc/resolv.conf de los clientes Windows locales"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Para qué tipo de registros de recursos (RR) es obligatoria la escritura de la información de 'Clase' (como IN para internet) y 'Tipo' (como A, MX)? [43, 104]",
        "opciones": [
            "Es opcional en todos los registros de DNS moderno",
            "En todos los registros de la base de datos DNS para que su formato definido sea válido",
            "Solamente en registros inversos para PTR",
            "Solo si el cliente usa IPv6 puro"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un sistema distribuido y jerárquico como DNS, ¿a qué nivel delega habitualmente el servidor raíz (root server) la búsqueda del dominio 'empresa.org'? [16, 105]",
        "opciones": [
            "A un ccTLD",
            "Al servidor con autoridad delegada para el dominio de nivel superior 'org'",
            "Directamente a la dirección IP privada del hosting web",
            "No lo delega, la caché DNS raíz de A.ROOT lo asume localmente siempre"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si posees un equipo al que cambias su configuración manual de IP mediante DHCP, y mantienes servicios DNS en la red local... [24, 25]",
        "opciones": [
            "A la IP estática le asignan un alias de red dinámica",
            "La zona de búsqueda inversa borrará la IP original del /etc/hosts principal",
            "Conviene que el servidor DNS local se sincronice u obtenga el FQDN del equipo DHCP asignado para poder localizarlo ininterrumpidamente por su nombre",
            "El DNS pasará de ser distribuido a centralizado"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Por qué un servidor local no autoritativo envía su propia mejor respuesta 'iterativa' a un cliente y, además, le entrega una referencia a otros servidores para completar la búsqueda? [58, 59]",
        "opciones": [
            "Porque el cliente tiene deshabilitada la recursividad o el servidor local no está configurado para hacerlo por él",
            "Porque está fallando el acceso al sistema de archivos",
            "Porque el protocolo TCP se satura y se requiere dividir paquetes en fragmentos",
            "Porque así acelera los tiempos en peticiones ping inversas obligatorias"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El conjunto de dominios que depende de un 'TLD de código de país', por lo general, se relacionan o administran: [19]",
        "opciones": [
            "De manera global compartiendo subdirectorios DNS",
            "Bajo reglas dictadas por organismos y legislaciones territoriales/nacionales",
            "Exclusivamente por agencias de seguridad para la interceptación",
            "Por máquinas obsoletas sin IPv6"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre si en tu navegador accedes por IP numérica a la página '130.206.13.20' si está correctamente configurada frente a usar el dominio asociado? [3]",
        "opciones": [
            "Debería cargar el recurso asociado puesto que Internet basa sus conexiones a nivel transporte en IPs",
            "Siempre dará un error 404 estricto del protocolo DNS",
            "El navegador pedirá credenciales obligatorias al saltarse DNS",
            "No cargará las imágenes de la web por requerir un FQDN"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué problema organizativo presentaban antiguamente esquemas planos de resolución a nivel de mantenimiento sin DNS? [7, 8]",
        "opciones": [
            "Requiere demasiada memoria RAM para cachear un archivo plano",
            "Las vulnerabilidades tipo zero-day del /etc/hosts causaban apagones globales en TLD",
            "Dificultad de escalar y mantener actualizados los mismos mapeos en todos los equipos manual y simultáneamente",
            "Que no existía el servicio de monitorización ApacheBench aún"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para la verificación de dominios y zonas completas en BIND 9 con herramientas de sistema... [79, 80]",
        "opciones": [
            "Se emplea el comando nslookup con flags ocultas de verificación",
            "Se emplea el comando named-checkzone seguido del nombre de zona y la ruta al fichero asociado",
            "Se usa exclusivamente el comando restart del panel de control web",
            "Se escanea desde Centreon la zona raíz de los puertos"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si la salida a una consulta muestra 'Query time: 3 msec', el hecho de que la respuesta sea tan rápida frente a otros servidores en la red local se deba muy probablemente a que: [9, 106]",
        "opciones": [
            "La consulta DNS ha entrado en la zona ciega iterativa",
            "El servidor BIND en red local disponía de este mapeo en su memoria caché al haber resuelto previamente el dominio DNS o poseer la zona maestra",
            "El DNS ha fallado tan rápido que no registró ping de red",
            "Es un dominio ccTLD directo prioritario"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La instalación y uso de servicios LDAP está ligada habitualmente en aplicaciones web para funcionalidades de: [107, 108]",
        "opciones": [
            "Balanceo del ancho de banda y priorización TCP/IP",
            "Manejo dinámico de direcciones DNS inversas globales",
            "Gestión centralizada de cuentas, autenticación de usuarios, o distribución de certificados para varios servicios concurrentes",
            "Sincronizar las memorias caché locales RAM de clientes"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si configuras tu fichero /etc/resolv.conf apuntando simultáneamente a 8.8.8.8 como DNS 1 y a 8.8.4.4 como DNS 2, y el DNS 1 pierde conexión total sin opciones adicionales... [109, 110]",
        "opciones": [
            "El cliente se redirigirá automáticamente probando en primer lugar al servidor preferido, esperando su 'timeout' y pasando luego al alternativo para lograr la conexión",
            "El sistema GNU/Linux rechazará el paquete en el cortafuegos interno",
            "Se iniciará un reverso del DNS de root list a la IP privada",
            "Bypass de zona ciega local, resolviendo desde /var/www"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significa el estado 'LISTEN 1442/named' si se comprueba con netstat un proceso DNS escuchando bajo UDP o TCP en su puerto natural? [75, 76]",
        "opciones": [
            "Indica que el servidor de transferencia de zona está desactivado en esa IP por permisos erróneos de usuario",
            "Muestra que el servicio asociado (BIND) está bloqueado en bucle sin PID validado",
            "Muestra que el demonio DNS está ejecutándose exitosamente de fondo (running) asignado al puerto (Ej. 53) y a la espera de peticiones concurrentes",
            "Significa que se requiere un reinicio con el comando nscd obligatoriamente"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de los siguientes es un ejemplo de directorio clásico mencionado en el texto?",
        "opciones": [
            "Un servidor DNS",
            "Una guía telefónica impresa en papel",
            "Un router ADSL",
            "Una base de datos SQL"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el texto, ¿para qué sirven fundamentalmente los directorios?",
        "opciones": [
            "Para bloquear el acceso a Internet de usuarios no autorizados",
            "Para localizar información, definiendo qué se almacenará y en qué modo",
            "Únicamente para resolver nombres de dominio a direcciones IP",
            "Para monitorizar el tráfico de red en tiempo real"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es uno de los principales problemas de los directorios impresos tradicionales frente a los electrónicos?",
        "opciones": [
            "Son demasiado rápidos de actualizar",
            "Son estáticos y su información queda obsoleta fácilmente",
            "Requieren conexión a Internet permanente",
            "Son imposibles de imprimir a gran escala"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué característica define a los directorios electrónicos en cuanto a su frecuencia de actualización?",
        "opciones": [
            "Solo se actualizan anualmente",
            "No se pueden actualizar una vez creados",
            "Pueden ser consultados y actualizados en tiempo real",
            "Requieren de una nueva edición impresa para actualizarse"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el contexto de los directorios tradicionales, ¿a qué se refiere el problema de ser 'inflexibles'?",
        "opciones": [
            "A que el papel es rígido y difícil de manejar",
            "A que la información solo puede buscarse de una forma predeterminada (ej. orden alfabético)",
            "A que no permiten la entrada de nuevos usuarios bajo ningún concepto",
            "A que solo pueden ser leídos por máquinas y no por humanos"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ventaja tienen los directorios electrónicos respecto a la flexibilidad?",
        "opciones": [
            "Solo permiten buscar por el primer apellido",
            "Permiten que la búsqueda localice la información de múltiples maneras organizadas",
            "No permiten usar filtros de búsqueda",
            "Obligan al usuario a memorizar la IP del directorio"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En cuanto al control de acceso a la información, ¿cómo son los directorios clásicos como una revista de televisión?",
        "opciones": [
            "Inseguros, ya que es difícil controlar quién accede a la información",
            "Altamente seguros gracias al cifrado de páginas",
            "Totalmente privados, solo el comprador puede leerlos",
            "Restringidos mediante contraseñas físicas"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo garantizan la seguridad los directorios electrónicos?",
        "opciones": [
            "Imprimiendo la información en tinta invisible",
            "Permitiendo el acceso a la información únicamente a quien disponga de las claves de acceso",
            "Borrando la información después de ser leída una vez",
            "No almacenando ningún tipo de información personal"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué problema tienen los directorios clásicos en cuanto a ser 'difícilmente configurables'?",
        "opciones": [
            "No permiten realizar búsquedas complejas con múltiples condiciones a la vez",
            "Cuesta mucho encuadernarlos",
            "Requieren un software muy pesado para poder leerlos",
            "No se pueden traducir a otros idiomas"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué permiten hacer los directorios electrónicos a nivel de configuración de búsquedas?",
        "opciones": [
            "Nada, funcionan exactamente igual que una guía de papel",
            "Establecer la información que recibe una persona en función de sus necesidades específicas",
            "Solo buscar por orden cronológico estricto",
            "Limitar a una búsqueda por día por usuario"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de las siguientes NO es una ventaja de los directorios electrónicos mencionada en el texto?",
        "opciones": [
            "Actualización en tiempo real",
            "Uso exclusivo del protocolo UDP para garantizar rapidez",
            "Control de acceso a la información",
            "Flexibilidad en las formas de búsqueda"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el apartado 3.1, ¿cuál de las siguientes es una función eficiente de los directorios electrónicos?",
        "opciones": [
            "Gestionar información centralizada",
            "Aumentar el tamaño de los discos duros de los clientes",
            "Reemplazar completamente al protocolo HTTP",
            "Evitar el uso de direcciones IP en Internet"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre si varios servidores web utilizan bases de datos locales separadas en lugar de un directorio centralizado?",
        "opciones": [
            "Que la velocidad de Internet se multiplica por diez",
            "Que surge el problema de tener que sincronizar varios directorios con el riesgo de datos desactualizados",
            "Que los servidores se vuelven inmunes a ataques de denegación de servicio",
            "Que el protocolo DNS asume la autenticación"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En aplicaciones web con autenticación compartida entre varios servidores, ¿qué soluciona el uso de un servicio de directorio?",
        "opciones": [
            "El tiempo de carga de las imágenes",
            "El problema de gestión y sincronización de cuentas de usuario entre todos los servidores",
            "La compilación del código fuente",
            "El coste del alojamiento web"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En relación al control de seguridad, ¿qué solución proporcionan los servicios de directorio?",
        "opciones": [
            "La instalación automática de antivirus",
            "La gestión eficiente de certificados digitales",
            "El bloqueo de puertos USB en los clientes",
            "El cifrado completo del disco duro"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Dentro de la gestión de certificados digitales en un directorio, ¿en qué consiste la 'creación'?",
        "opciones": [
            "En imprimir el certificado en papel timbrado",
            "En incorporar a los certificados los datos contenidos en el directorio",
            "En generar un dominio de primer nivel nuevo",
            "En borrar el registro anterior"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se realiza la 'destrucción' o revocación de un certificado digital utilizando un servicio de directorio?",
        "opciones": [
            "Quemando el servidor que lo generó",
            "Apagando el servicio DNS asociado",
            "Borrando el certificado del directorio de forma sencilla",
            "Desconectando el cable de red del usuario"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué permite la 'ubicación' de certificados en un directorio electrónico?",
        "opciones": [
            "Saber las coordenadas GPS del servidor",
            "Que los usuarios puedan acceder fácilmente a los certificados de los restantes usuarios",
            "Ocultar los certificados a todos los usuarios de la red",
            "Mover físicamente los datos a un disco externo"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el texto, ¿qué es RADIUS en el contexto de aplicaciones de los servicios de directorio?",
        "opciones": [
            "Un diámetro de conexión para redes inalámbricas",
            "Un protocolo de autenticación y autorización para aplicaciones de acceso a la red o movilidad IP",
            "Una marca de servidores web",
            "Un tipo de base de datos relacional"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de los siguientes es un uso práctico de los servicios de directorio en los sistemas operativos?",
        "opciones": [
            "Gestión de la temperatura del procesador",
            "Libretas de direcciones compartidas y gestión de cuentas de acceso",
            "Aceleración del hardware gráfico",
            "Sustitución de la memoria RAM"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Para qué tipo de control físico se puede utilizar un servicio de directorio según el temario?",
        "opciones": [
            "Sistemas de control de entradas a edificios",
            "Control de tráfico aéreo",
            "Regulación de la temperatura del aire acondicionado",
            "Control de semáforos en la ciudad"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿En qué se parecen un servicio de directorio y un servicio DNS?",
        "opciones": [
            "Ambos utilizan exclusivamente el protocolo UDP",
            "Ambos proporcionan acceso a una base de datos jerárquica",
            "Ambos son de uso exclusivo para el ejército",
            "Ninguno de los dos permite consultar la información en tiempo real"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al comparar Directorio vs DNS, ¿cómo es el enfoque de cada uno?",
        "opciones": [
            "El directorio está particularizado a una acción concreta y el DNS es más general",
            "Los servidores de directorio están orientados de forma más general, mientras que el DNS está dedicado a la traducción de nombres a IP",
            "Ambos son exactamente iguales en su propósito general",
            "El DNS gestiona usuarios y el directorio traduce IPs"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué diferencia existe en la estructura de la información almacenada entre Directorio y DNS?",
        "opciones": [
            "La información en el directorio no es fija, mientras que en el servicio DNS tiene una estructura fija",
            "Ambas tienen estructuras completamente rígidas y fijas",
            "El DNS es dinámico y sin estructura, el directorio es fijo",
            "El directorio almacena solo números y el DNS solo letras"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de los dos servicios (Directorio o DNS) permite de forma natural actualizaciones de la información de manera generalizada por las aplicaciones?",
        "opciones": [
            "El servicio DNS",
            "El servicio de directorio",
            "Ninguno de los dos",
            "Ambos por igual sin ninguna restricción"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tipo de protocolo de la capa de transporte suelen utilizar por defecto los servicios de directorio?",
        "opciones": [
            "UDP (No orientado a conexión)",
            "TCP (Orientado a conexión)",
            "ICMP",
            "ARP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tipo de protocolo de la capa de transporte utiliza habitualmente el servicio DNS para sus operaciones estándar?",
        "opciones": [
            "TCP",
            "UDP (No orientado a conexión)",
            "HTTP",
            "FTP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Es posible utilizar conjuntamente DNS y LDAP en una misma aplicación web?",
        "opciones": [
            "No, son tecnologías incompatibles y excluyentes",
            "Sí, por ejemplo accediendo por URL mediante DNS y autenticándose mediante LDAP",
            "Solo si se desactivan los puertos UDP del servidor",
            "Sí, pero solo en redes locales sin conexión a Internet"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el cuadro 'Debes conocer', antes de configurar autenticación LDAP en OpenCart, ¿qué se recomienda probar?",
        "opciones": [
            "La instalación y autenticación por medio de una base de datos SQL",
            "El servicio de DNS inverso",
            "La edición del archivo /etc/hosts",
            "La instalación del paquete bind9utils"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se denomina la organización del directorio cuando un único servidor ofrece todo el servicio respondiendo a todas las consultas?",
        "opciones": [
            "Directorio distribuido",
            "Directorio fragmentado",
            "Directorio centralizado",
            "Directorio replicado"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significa que un servicio de directorio distribuido tenga la información 'fraccionada'?",
        "opciones": [
            "Que cada entrada se copia en todos los servidores de la red",
            "Que cada servidor almacena un subconjunto único y no solapado de la información",
            "Que los datos están corruptos y divididos",
            "Que solo se guarda la mitad de cada registro"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significa que un servicio de directorio distribuido tenga la información 'replicada'?",
        "opciones": [
            "Que una misma entrada puede estar almacenada en varios servidores",
            "Que ningún servidor tiene la información completa",
            "Que el servidor contesta dos veces a cada consulta",
            "Que los datos se borran y se vuelven a crear constantemente"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la práctica, ¿cómo suele organizarse la información cuando el servicio de directorio es distribuido?",
        "opciones": [
            "Solo fraccionada",
            "Solo replicada",
            "Generalmente parte de la información está fraccionada y parte está replicada",
            "Nunca se distribuye la información, siempre es centralizada"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué estándar sobre servicios de directorio creó la CCITT (ahora ITU-T) en 1988?",
        "opciones": [
            "El estándar IPv6",
            "El estándar X.500",
            "El estándar RFC 1035",
            "El estándar IEEE 802.11"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué protocolo especificaba X.500 para la comunicación entre el cliente y el servidor de directorio?",
        "opciones": [
            "HTTP",
            "LDAP",
            "DAP",
            "DNS"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué nivel de la torre de protocolos OSI exigía implementar el protocolo DAP?",
        "opciones": [
            "Únicamente el nivel físico",
            "Solamente el nivel de transporte",
            "La torre de protocolos OSI completamente implementada",
            "El nivel de enlace de datos exclusivamente"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué protocolo surge como una alternativa más ligera y simple a DAP?",
        "opciones": [
            "LDAP",
            "SNMP",
            "SMTP",
            "FTP"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de las siguientes es una ventaja de LDAP en comparación con DAP de X.500?",
        "opciones": [
            "Utiliza complejas estructuras ASN.1",
            "Obliga a usar el modelo completo OSI",
            "Su modelo funcional es más simple y elimina opciones raramente utilizadas en X.500",
            "No permite conexiones seguras"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo representa la información el protocolo LDAP a diferencia de las complicadas estructuras ASN.1 de DAP?",
        "opciones": [
            "Mediante código binario puro",
            "Mediante cadenas de caracteres",
            "Mediante imágenes vectoriales",
            "Mediante archivos comprimidos ZIP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significan las siglas DIT en el contexto de un directorio LDAP?",
        "opciones": [
            "Directorio de Internet y Telefonía",
            "Árbol de Directorios de la Información (Directory Information Tree)",
            "Transferencia de Información de Directorio",
            "Directorio Interno de Trabajo"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué estructura tiene el directorio LDAP (DIT)?",
        "opciones": [
            "Una estructura plana o lineal",
            "Una base de datos relacional de tablas",
            "Una estructura en forma de árbol",
            "Una malla de red descentralizada"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, ¿qué describe cada entrada del directorio?",
        "opciones": [
            "Una dirección IP",
            "Un registro de zona SOA",
            "Un objeto (como una persona, impresora, etc.)",
            "Un dominio de nivel superior"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué concepto en LDAP representa la ruta completa que identifica a una entrada de modo inequívoco?",
        "opciones": [
            "El protocolo DAP",
            "El RDN (Nombre Completo Relativo)",
            "El FQDN",
            "El DN (Nombre 'distinguible' o Completo)"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿De qué está compuesto un DN (Nombre Completo) en LDAP?",
        "opciones": [
            "De una secuencia de partes más pequeñas llamadas RDN",
            "Únicamente de la dirección IP y la máscara de red",
            "De una dirección MAC",
            "De un único atributo sin clasificar"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿A qué es similar la forma en que el DN está compuesto por RDNs en LDAP?",
        "opciones": [
            "A la forma en que se dividen las subredes en IPv4",
            "A cómo el nombre de un fichero consiste en un camino de directorios en muchos sistemas operativos",
            "A la forma en que el DNS iterativo busca los servidores raíz",
            "Al cifrado simétrico de datos"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué es 'objectClass' en la organización del directorio LDAP?",
        "opciones": [
            "Una clase de direcciones IP",
            "Una descripción general de un tipo de objeto que especifica qué atributos requiere",
            "Un usuario administrador del servidor",
            "El protocolo de transporte que usa LDAP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En relación al atributo objectClass en un objeto LDAP, ¿es posible eliminar el atributo objectClass en sí mismo de un objeto?",
        "opciones": [
            "Sí, siempre que se tenga permiso de root",
            "Sí, es un atributo opcional en LDAP",
            "No, todos los objetos deben tenerlo y el atributo en sí no puede eliminarse",
            "Solo si el objeto es un contenedor, no si es una hoja"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Quién define qué clases de objetos se pueden almacenar en el directorio, qué atributos deben contener y cuáles son opcionales en LDAP?",
        "opciones": [
            "El DNS Maestro",
            "El esquema (schema)",
            "El enrutador ADSL",
            "El registro SOA"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un directorio LDAP, ¿cómo se denominan los objetos que pueden contener a su vez otros objetos?",
        "opciones": [
            "Objetos Hoja",
            "Objetos Contenedor",
            "Objetos Raíz exclusivamente",
            "Objetos Terminales"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de las siguientes es la figura análoga a un objeto 'Contenedor' de LDAP en un sistema de archivos?",
        "opciones": [
            "Un archivo de texto (.txt)",
            "Un enlace simbólico",
            "Un directorio (carpeta)",
            "Un sector del disco duro"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué elemento de LDAP es un ejemplo de objeto Contenedor?",
        "opciones": [
            "InetOrgPerson",
            "groupOfNames",
            "ou (OrganizationalUnit)",
            "El atributo SN (Surname)"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se denominan en LDAP los objetos que se encuentran al final de una rama y carecen de objetos subordinados?",
        "opciones": [
            "Objetos Contenedor",
            "Objetos de Dominio (dc)",
            "Objetos Padre",
            "Objetos Hoja"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál de los siguientes es un ejemplo de objeto tipo 'Hoja' en LDAP?",
        "opciones": [
            "dc (domainComponent)",
            "ou (OrganizationalUnit)",
            "Person / InetOrgPerson",
            "c (country)"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué elemento se encuentra en la cúspide de la jerarquía del directorio LDAP?",
        "opciones": [
            "El elemento c (country)",
            "El elemento raíz Root",
            "El elemento ou (OrganizationalUnit)",
            "El objeto InetOrgPerson"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿El elemento raíz 'Root' en la cúspide del árbol LDAP existe como un objeto real con atributos que puedes modificar?",
        "opciones": [
            "Sí, es el objeto más pesado de la base de datos",
            "No, es un elemento que no existe en realidad, sirve como punto de partida",
            "Sí, pero solo en los sistemas Windows",
            "Sí, y contiene toda la información de las contraseñas"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, ¿qué significa la abreviatura 'c' cuando se usa como contenedor debajo de Root?",
        "opciones": [
            "company",
            "country",
            "component",
            "container"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, ¿qué significa la abreviatura 'dc'?",
        "opciones": [
            "domainController",
            "directoryComponent",
            "domainComponent",
            "dataContainer"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, ¿qué significa la abreviatura 'ou'?",
        "opciones": [
            "organizationUnknown",
            "OrganizationalUnit",
            "objectUnion",
            "operatingUnit"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, ¿qué significa la abreviatura 'o'?",
        "opciones": [
            "organization",
            "operator",
            "object",
            "origin"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Dada la ruta DN 'dn: uid=upruebas,ou=People,dc=ejemplo,dc=com', ¿cuál es el RDN que representa al objeto final u hoja?",
        "opciones": [
            "dc=com",
            "dc=ejemplo",
            "ou=People",
            "uid=upruebas"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el ejemplo del DN 'uid=upruebas,ou=People,dc=ejemplo,dc=com', si se lee la jerarquía de arriba hacia abajo desde Root, ¿cuál es el primer nivel que se encuentra?",
        "opciones": [
            "uid=upruebas",
            "ou=People",
            "dc=ejemplo",
            "dc=com"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿A qué se refiere el documento RFC 2252 y RFC 2256 mencionados en el texto?",
        "opciones": [
            "A las especificaciones del protocolo HTTP",
            "A la estructura de los servidores raíz DNS",
            "A esquemas de uso extendido en directorios LDAP",
            "Al formato de compresión de imágenes"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un entorno de aplicación LDAP que requiera tipos de datos no estándar, ¿es posible crear esquemas propios?",
        "opciones": [
            "No, está totalmente prohibido por la ITU-T",
            "Sí, pueden crearse nuevos esquemas en función del usuario o combinarse varios entre sí",
            "Solo se permite si se paga una licencia a ICANN",
            "Solo si el directorio es centralizado, no en uno distribuido"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si queremos guardar objetos en el DIT de LDAP, ¿dónde se encuentra la definición global que dictamina qué atributos tienen?",
        "opciones": [
            "En el archivo /etc/hosts",
            "En el esquema (schema)",
            "En el servidor DNS Primario",
            "En la zona de búsqueda inversa"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El concepto de DIT en LDAP se asemeja gráficamente a:",
        "opciones": [
            "Un círculo cerrado",
            "Un árbol invertido",
            "Una línea recta",
            "Una tabla plana bidimensional"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un directorio electrónico permite que múltiples aplicaciones accedan a los mismos datos de usuario para validarlos, ¿qué beneficio directo obtenemos?",
        "opciones": [
            "Multiplicar el espacio en disco utilizado",
            "Centralizar los datos y evitar problemas de desincronización entre servicios",
            "Que el servidor DNS tenga que resolver más peticiones",
            "Que no se puedan usar contraseñas"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el apartado 3.5 del temario, ¿qué formato es mencionado como el formato de intercambio de datos en LDAP?",
        "opciones": [
            "JSON",
            "XML",
            "LDIF",
            "CSV"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el apartado 3.6 del temario, ¿qué software se propone para la instalación del servicio de directorio?",
        "opciones": [
            "Active Directory",
            "OpenLDAP",
            "Apache Directory Studio",
            "BIND9"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el temario (apartado 3.6.5), ¿con qué herramienta se propone probar la autenticación tras configurar los clientes?",
        "opciones": [
            "pingtest",
            "dig",
            "nslookup",
            "pamtest"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre con los valores del atributo objectClass en LDAP?",
        "opciones": [
            "Los valores son fijos desde la instalación y no se pueden alterar",
            "Los valores los pueden modificar los clientes, pero el atributo en sí no se puede eliminar",
            "Solo el esquema los puede leer, pero no los clientes",
            "Se reinician cada vez que se apaga el servidor"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se denominan los componentes 'uid=upruebas' y 'ou=People' por separado dentro del DN completo?",
        "opciones": [
            "FQDN",
            "Zonas DNS",
            "RDN (Nombre Completo Relativo)",
            "Registros PTR"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un entorno de servicio web, ¿qué rol jugaría un servidor LDAP respecto a Apache HTTPD si trabajan juntos?",
        "opciones": [
            "LDAP compilaría el código PHP de Apache",
            "LDAP serviría las imágenes y estilos CSS",
            "LDAP proveería el servicio de autenticación de los usuarios que se conectan a Apache",
            "LDAP resolvería el nombre de dominio de Apache a su IP"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se llama la organización encargada originalmente de crear el estándar X.500?",
        "opciones": [
            "ICANN",
            "IETF",
            "CCITT (actualmente ITU-T)",
            "IEEE"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El servicio de directorio distribuido donde 'una entrada puede estar almacenada en varios servidores' se describe como:",
        "opciones": [
            "Directorio fraccionado",
            "Directorio obsoleto",
            "Directorio replicado",
            "Directorio secuencial"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Por qué DAP (el protocolo original de X.500) era difícil de implementar?",
        "opciones": [
            "Porque usaba solo el puerto 80",
            "Porque era un protocolo a nivel de aplicación que requería implementar completamente la torre de protocolos OSI",
            "Porque no permitía el uso de contraseñas",
            "Porque no soportaba la estructura de árbol jerárquico"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tipo de búsqueda es casi imposible en un directorio telefónico de papel pero fácil en uno electrónico?",
        "opciones": [
            "Búsqueda por orden alfabético estricto de los apellidos",
            "Búsqueda por dirección de calle saltándose el orden del apellido",
            "Búsqueda leyendo página por página",
            "Búsqueda conociendo el número de página exacto"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En comparación con un directorio electrónico, un directorio clásico es:",
        "opciones": [
            "Dinámico, flexible y seguro",
            "Estático, inflexible, inseguro y difícilmente configurable",
            "Virtual, distribuido e indexado",
            "Relacional, normalizado y cifrado"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significa que el servicio de directorio de LDAP sea escalable?",
        "opciones": [
            "Que solo puede instalarse en servidores pequeños",
            "Que puede manejar y crecer con grandes cantidades de datos y consultas de manera eficiente",
            "Que escala obligatoriamente las consultas hasta los servidores raíz de DNS",
            "Que los datos deben borrarse periódicamente para que quepan"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si se desea guardar información sobre un 'grupo de nombres' en LDAP, ¿qué tipo de objeto se utilizaría como ejemplo mencionado en el texto?",
        "opciones": [
            "Root",
            "groupOfNames (Objeto Hoja)",
            "domainComponent (Objeto Contenedor)",
            "c (country)"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué garantiza el uso de un servicio de directorio centralizado cuando hay actualizaciones de información de los usuarios?",
        "opciones": [
            "Que todas las aplicaciones que accedan a la misma vean la información actualizada al instante",
            "Que la información deba esperar al reinicio del sistema operativo",
            "Que la base de datos se fragmente",
            "Que cada servidor mantenga su propia versión independiente de la información"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El servicio de directorio a nivel de sistema operativo se puede utilizar para:",
        "opciones": [
            "Asignar la dirección IP por DHCP a la placa de red",
            "La gestión de cuentas de acceso y libretas de direcciones compartidas",
            "Traducir las direcciones IPv4 a IPv6",
            "Dar formato a las particiones del disco duro"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En una estructura DIT de LDAP, si tenemos un objeto 'ou=People' que contiene dentro varios objetos 'uid=usuario', ¿qué rol cumple 'ou=People'?",
        "opciones": [
            "Objeto Raíz inalcanzable",
            "Objeto Hoja",
            "Objeto Contenedor",
            "Atributo Simple"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un entorno de red, LDAP se clasifica habitualmente dentro del grupo de servicios de:",
        "opciones": [
            "Resolución de nombres de dominio exclusivamente",
            "Servicios de directorio para gestión de datos, usuarios y autenticación",
            "Monitorización del estado del hardware de red",
            "Asignación dinámica de direcciones IP a hosts físicos"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En una guía telefónica clásica (directorio en papel), si una persona da de alta una nueva línea telefónica:",
        "opciones": [
            "La guía se actualiza mágicamente en la casa del usuario",
            "No aparecerá el cambio hasta la próxima edición impresa, reflejando su naturaleza estática",
            "Se notifica por radio a todos los vecinos",
            "El usuario debe escribirlo a mano en todas las guías de la ciudad"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El concepto de que 'una entrada es almacenada en un solo servidor' dentro de un directorio distribuido se asocia a la información:",
        "opciones": [
            "Clonada",
            "Fraccionada",
            "Replicada",
            "Centralizada"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ventaja tiene representar la información mediante cadenas de caracteres en LDAP (frente a DAP)?",
        "opciones": [
            "Requiere más ancho de banda pero es más seguro",
            "Solo puede ser leída por máquinas con software especial",
            "Hace que el modelo sea más simple de comprender e implementar",
            "Permite incluir videos de alta definición directamente en el atributo"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La característica de un esquema LDAP que indica 'qué atributos son opcionales' significa que:",
        "opciones": [
            "Puedes inventar cualquier nombre de atributo en tiempo real",
            "Esos atributos pueden o no estar presentes en una instancia válida del objeto",
            "El servidor borrará aleatoriamente esos atributos",
            "Esos atributos son solo visibles para el administrador"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al diseñar un DIT, el atributo 'dc' a menudo se utiliza mapeando los componentes del nombre de dominio DNS de la organización. Por ejemplo, para ejemplo.com:",
        "opciones": [
            "c=ejemplo, c=com",
            "o=ejemplo, o=com",
            "dc=ejemplo, dc=com",
            "ou=ejemplo.com"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Una 'aplicación práctica' de LDAP en sistemas de control físico es:",
        "opciones": [
            "La gestión del voltaje de los ordenadores",
            "El control de entradas a edificios validando credenciales centralizadas",
            "El manejo automático de ascensores sin autenticación",
            "La impresión de mapas del edificio"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Respecto a la comparación Directorio vs DNS, ¿es correcto afirmar que los servicios de directorio suelen estar orientados a conexión?",
        "opciones": [
            "No, usan siempre UDP igual que DNS",
            "Sí, suelen utilizar protocolos orientados a conexión como TCP",
            "No, usan exclusivamente protocolos de datagramas locales",
            "Sí, pero solo si están instalados en el mismo servidor web"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El nivel 'Root' en el árbol DIT de LDAP:",
        "opciones": [
            "Almacena las contraseñas de todos los usuarios",
            "Actúa como el punto de inicio conceptual en la cúspide de la jerarquía pero no existe en realidad",
            "Debe ser configurado obligatoriamente como un objeto Hoja",
            "Contiene las zonas de búsqueda inversa"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre si una aplicación de correo electrónico emplea el servicio de directorio de la empresa?",
        "opciones": [
            "Que no necesita enviar correos, el directorio los envía por ella",
            "Que puede usar el directorio para autenticar a los usuarios y buscar direcciones compartidas",
            "Que el servidor de correo se convierte en un servidor web",
            "Que el directorio LDAP rechaza los protocolos SMTP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué relación tiene el protocolo LDAP con el modelo OSI?",
        "opciones": [
            "LDAP es el nivel 1 (Físico) del modelo OSI",
            "LDAP requiere obligatoriamente implementar toda la torre de protocolos OSI (a diferencia de DAP)",
            "LDAP surgió como alternativa a DAP precisamente para NO tener que implementar completamente la complicada torre OSI",
            "LDAP y OSI son dos formas distintas de nombrar al sistema de nombres de dominio DNS"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según la figura análoga del temario, el DN (Nombre Completo) en LDAP se parece mucho a:",
        "opciones": [
            "El número de serie de un registro SOA",
            "El camino completo de directorios/carpetas de un fichero en un sistema operativo",
            "Una dirección IP de versión 4",
            "Un alias CNAME de DNS"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La jerarquía 'dn: uid=upruebas,ou=People,dc=ejemplo,dc=com' implica que:",
        "opciones": [
            "El objeto 'dc=com' está dentro del objeto 'dc=ejemplo'",
            "El objeto 'uid=upruebas' está contenido dentro del objeto 'ou=People'",
            "El objeto 'ou=People' es un objeto hoja sin subordinados",
            "El objeto 'uid=upruebas' es un objeto contenedor superior a 'dc=com'"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuál es uno de los problemas de los directorios NO electrónicos respecto al contenido (por ejemplo, una revista de televisión)?",
        "opciones": [
            "Que la programación nunca cambia a última hora",
            "Que si hay un cambio de última hora en la semana, la información de la revista queda obsoleta",
            "Que la revista se actualiza sola mediante radiofrecuencia",
            "Que es imposible leerla sin un navegador web"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La función principal del atributo 'objectClass' es:",
        "opciones": [
            "Determinar la IP del objeto",
            "Determinar el tipo de objeto y especificar qué atributos le corresponden",
            "Cifrar el objeto con clave pública",
            "Borrar el objeto al llegar su fecha de caducidad"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, el tipo de objeto 'InetOrgPerson' típicamente clasifica como:",
        "opciones": [
            "Un contenedor principal de país ('c')",
            "Un objeto Hoja que representa a un usuario/persona",
            "El servidor maestro de LDAP",
            "Un registro de intercambio de correo (MX)"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La flexibilidad de un directorio electrónico permite:",
        "opciones": [
            "Que su hardware no ocupe espacio físico",
            "Buscar información combinando campos, como todas las películas de acción de un día específico",
            "Que los datos sean leídos sin necesidad de energía eléctrica",
            "Que se convierta automáticamente en una revista de papel"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ventaja aporta a la seguridad el uso de directorios electrónicos para gestionar certificados?",
        "opciones": [
            "Hacen que los certificados sean indestructibles e imborrables para siempre",
            "Simplifican su distribución y permiten revocarlos de forma sencilla borrándolos del directorio",
            "Ocultan el nombre del dominio asociado al certificado",
            "Envían el certificado impreso a cada cliente"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significan las siglas URL según la introducción del temario?",
        "opciones": [
            "User Routing Language",
            "Uniform Resource Locator",
            "Universal Remote Link",
            "Unique Resource Locator"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿A qué IP de ejemplo redirige el nombre de dominio http://www.rediris.es según los apuntes?",
        "opciones": [
            "8.8.8.8",
            "192.168.200.100",
            "130.206.13.20",
            "127.0.0.1"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué significa que el servicio de nombres de dominio de Internet funciona mediante el protocolo TCP/IP?",
        "opciones": [
            "Que cifra todos los datos de navegación",
            "Que garantiza que los datos serán entregados en su destino sin errores y en el mismo orden en que se transmitieron",
            "Que no permite el uso de redes privadas",
            "Que asigna nombres de usuario a contraseñas"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué dominio de nivel superior (TLD) se utiliza como ejemplo de localización para Tokelau?",
        "opciones": [
            "tk",
            "to",
            "tl",
            "tu"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuáles son los tres documentos RFC que se mencionan donde se discute la sintaxis de los nombres de dominio?",
        "opciones": [
            "RFC 80, RFC 443, RFC 8080",
            "RFC 1918, RFC 2252, RFC 2256",
            "RFC 1035, RFC 1123, RFC 2181",
            "RFC 1, RFC 2, RFC 3"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según el esquema jerárquico DNS, si tienes el dominio 'departamento.empresa.org', ¿qué nivel ocupa 'departamento'?",
        "opciones": [
            "Dominio de primer nivel",
            "Dominio de segundo nivel",
            "Dominio de tercer nivel",
            "Dominio de cuarto nivel"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cuántos dominios TLD de código de país (ccTLD) existen aproximadamente según el temario?",
        "opciones": [
            "Alrededor de 50",
            "Más de 240",
            "Exactamente 13",
            "Menos de 100"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Dentro de los dominios de internet patrocinados (sTLD), ¿cuál de los siguientes ejemplos se menciona en el temario?",
        "opciones": [
            "com",
            "net",
            "aero",
            "biz"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿A qué organismo sustituyó la ICANN en el desempeño de la gestión de los identificadores técnicos y servidores raíz?",
        "opciones": [
            "A la ONU",
            "A la IANA (Autoridad de Números Asignados de Internet)",
            "A la IEEE",
            "Al W3C"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿En qué fecha exacta permitió la ICANN que las direcciones de dominios genéricos pudieran terminar con nombres de compañías o ciudades?",
        "opciones": [
            "1 de Enero de 2000",
            "20 de Junio de 2011",
            "15 de Marzo de 1996",
            "10 de Septiembre de 2015"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Quién era el presidente y jefe ejecutivo de la ICANN que anunció la apertura del sistema de direcciones a la imaginación humana?",
        "opciones": [
            "Tim Berners-Lee",
            "Vint Cerf",
            "Rod Beckstrom",
            "Bill Gates"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un registro de recursos DNS, ¿qué función cumple el campo 'Propietario'?",
        "opciones": [
            "Define la fecha de creación del registro",
            "Indica el nombre de dominio DNS que posee el registro de recursos",
            "Contiene el correo del administrador",
            "Especifica el precio del dominio"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la sintaxis del registro SOA de ejemplo, ¿qué significa el valor '600' en la sección de tiempos?",
        "opciones": [
            "El número de serie",
            "El tiempo mínimo de TTL",
            "El intervalo de reintento (10 minutos)",
            "El intervalo de caducidad"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un registro SOA, ¿qué convención de nomenclatura estándar se utiliza para referirse al origen de todos los datos de la zona (ej. ejemplo.com)?",
        "opciones": [
            "El símbolo del asterisco (*)",
            "El símbolo del porcentaje (%)",
            "El símbolo de la arroba (@)",
            "El símbolo del dólar ($)"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Si el campo TTL de un registro DNS tiene el valor cero (0), qué le indica al servidor que lo consulta?",
        "opciones": [
            "Que el dominio es gratuito",
            "Que contiene datos volátiles que no deben ser cacheados para su uso posterior",
            "Que el servidor está caído",
            "Que la conexión requiere IPv6"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué información proporciona el comando 'ping' en relación al DNS?",
        "opciones": [
            "Descarga el código fuente de la página web",
            "Actúa como un cliente resolutor discreto que busca direcciones IP en segundo plano para comprobar conectividad",
            "Crea nuevas zonas maestras",
            "Borra la caché de los servidores raíz"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando de resolución de nombres genera una salida con la cabecera 'Non-authoritative answer' según las capturas del temario?",
        "opciones": [
            "host",
            "dig",
            "nslookup",
            "ping"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al ejecutar 'dig ftp.rediris.es', en la sección ';; flags:' se observan los valores 'qr rd ra'. ¿Qué representan?",
        "opciones": [
            "Dominios de país censurados",
            "Banderas de la cabecera de la respuesta de la consulta",
            "Las iniciales de los servidores raíz contactados",
            "Errores de conexión denegada"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la salida del comando 'dig -x 130.206.1.5', ¿qué tipo de registro se consulta explícitamente en la sección QUESTION SECTION?",
        "opciones": [
            "A",
            "CNAME",
            "PTR",
            "SOA"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al configurar un cliente DNS en /etc/resolv.conf con 'options timeout:1 rotate attempts:1', ¿cuál es el objetivo de usar 'rotate'?",
        "opciones": [
            "Cifrar las peticiones en bucle",
            "Distribuir la carga entre todos los servidores listados para no enviar siempre al preferido",
            "Girar la pantalla de comandos 90 grados",
            "Obligar a reiniciar la máquina si falla"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un comando 'service bind9 status' devuelve el mensaje 'could not access PID file for bind9 ... failed!', ¿qué indica esto?",
        "opciones": [
            "Que la tarjeta de red está rota",
            "Que el servidor de base de datos MySQL no responde",
            "Que el servicio de BIND está inactivo (parado)",
            "Que el usuario no tiene permisos de root"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Además del comando 'service', ¿qué otra ruta de script directo de sistema se utiliza para arrancar o parar BIND9 en Debian?",
        "opciones": [
            "/usr/bin/bind",
            "/etc/init.d/bind9",
            "/sbin/named",
            "/var/run/dns"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el fichero de opciones globales de BIND, ¿para qué sirve la línea 'auth-nxdomain no;'?",
        "opciones": [
            "Para bloquear la caché de resoluciones directas",
            "Para obligar al cumplimiento estricto con RFC1035 para dominios que no existen (NXDOMAIN)",
            "Para rechazar las conexiones de Windows",
            "Para pedir contraseñas a los clientes DNS"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el fichero named.conf.options, ¿qué directiva permite a BIND escuchar peticiones para protocolo IPv6 en cualquier interfaz?",
        "opciones": [
            "allow-ipv6 true;",
            "listen-on-v6 { any; };",
            "ipv6-mode on;",
            "bind-v6 1;"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando específico se utiliza para borrar o limpiar la caché de nombres del servicio cliente DNS en GNU/Linux (resolutor local del SO)?",
        "opciones": [
            "ipconfig /flushdns",
            "/etc/init.d/nscd restart",
            "clear-dns-cache",
            "rndc clear"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Cuando se utiliza 'allow-transfer' en la declaración de zona de un servidor DNS Maestro, ¿qué IPs deben incluirse obligatoriamente en esa lista?",
        "opciones": [
            "Todos los clientes que naveguen por internet",
            "Solo las IPs de los servidores de correo MX",
            "Todos los servidores esclavos que tengan configurado a éste como servidor maestro",
            "Exclusivamente la IP del router local"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al comprobar el puerto de escucha de BIND con 'netstat -natp | grep named', se observa que también escucha en el puerto TCP 953. ¿Para qué suele ser este puerto local?",
        "opciones": [
            "Para transferencias web HTTP",
            "Para la comunicación de control local del comando rndc",
            "Para peticiones LDAP inseguras",
            "Para enviar correos SMTP"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el temario, ¿qué archivo de zonas por defecto incluye la línea 'include \"/etc/bind/named.conf.default-zones\";' en su configuración inicial?",
        "opciones": [
            "/etc/bind/named.conf.local",
            "/etc/resolv.conf",
            "/etc/bind/named.conf",
            "/etc/hosts"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la verificación con 'named-checkconf -p', ¿qué hace exactamente el parámetro '-p'?",
        "opciones": [
            "Pausa la verificación si encuentra un error",
            "Pide la contraseña de administrador",
            "Imprime la salida del fichero analizado en forma canónica si no fueron detectados errores",
            "Purga los ficheros temporales"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el uso de la herramienta `named-checkzone`, ¿cuál es el orden correcto de los parámetros en la línea de comandos?",
        "opciones": [
            "named-checkzone {nombre_archivo} {nombre_zona}",
            "named-checkzone -z {nombre_archivo}",
            "named-checkzone {nombre_zona} {nombre_archivo}",
            "named-checkzone -f {nombre_zona}"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre si ejecutas 'service bind9 force-reload'?",
        "opciones": [
            "Apaga la máquina física",
            "Fuerza la recarga de configuración del servicio sin reiniciarlo de cero",
            "Borra los archivos de zona maestra",
            "Cambia el servidor maestro por un esclavo"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la base de configuración LDAP de OpenLDAP v2.4 (cn=config), ¿qué comando de consola se propone para sustituir la cadena 'dc=nodomain' en el fichero hdb.ldif?",
        "opciones": [
            "awk",
            "grep",
            "sed",
            "replace"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al utilizar el comando 'sed -e \"s/dc=nodomain/dc=proyecto-empresa,dc=local/g\"', ¿a qué fichero temporal se redirecciona la salida en el ejemplo?",
        "opciones": [
            "b.txt",
            "a.txt",
            "ldap.conf",
            "slapd.txt"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Tras instalar OpenLDAP (slapd), la consola muestra que escucha peticiones a través de qué puerto por defecto al ejecutar netstat?",
        "opciones": [
            "Puerto TCP 80",
            "Puerto TCP 389",
            "Puerto UDP 53",
            "Puerto TCP 636"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El comando 'dpkg-reconfigure slapd' es utilizado en Debian para:",
        "opciones": [
            "Borrar el paquete slapd del sistema",
            "Lanzar el asistente de configuración interactivo de OpenLDAP",
            "Convertir LDAP a DNS",
            "Crear un nuevo esquema"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tipo de base de datos (Motor) recomienda seleccionar el asistente de OpenLDAP en el ejemplo de configuración?",
        "opciones": [
            "BDB",
            "MDB",
            "HDB",
            "MySQL"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el fichero hdb.ldif de OpenLDAP, ¿qué atributo almacena la ruta física del directorio donde reside la base de datos (ej. /var/lib/ldap)?",
        "opciones": [
            "olcSuffix",
            "olcRootDN",
            "olcDbDirectory",
            "objectClass"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el fichero hdb.ldif, la contraseña del administrador de LDAP aparece ofuscada (en base64) en el atributo:",
        "opciones": [
            "olcRootPW::",
            "userPassword:",
            "adminPass:",
            "olcSecret::"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se estructuran los atributos multivaluados dentro de un archivo LDIF de intercambio de datos?",
        "opciones": [
            "Separados por comas en una misma línea",
            "Escritos en múltiples líneas con el mismo nombre de atributo seguido de dos puntos",
            "Encerrados entre corchetes []",
            "No se permiten atributos multivaluados en LDIF"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué separador se debe usar en un archivo LDIF para separar dos entradas distintas (ej. dos usuarios diferentes)?",
        "opciones": [
            "Un carácter punto y coma (;)",
            "Una línea en blanco",
            "Tres guiones medios (---)",
            "La palabra END"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al usar el comando 'ldapadd -x -D cn=admin... -w admin -f archivo.ldif', ¿qué hace el parámetro '-f'?",
        "opciones": [
            "Fuerza la detención del servidor LDAP",
            "Filtra los resultados de búsqueda",
            "Indica el archivo (file) desde el cual se leerán las entradas a añadir",
            "Formatea el disco duro"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el archivo LDIF usado para cambiar una contraseña con `ldapmodify`, ¿qué directiva especifica qué operación se va a realizar sobre la entrada?",
        "opciones": [
            "changetype: modify",
            "action: update",
            "mode: change",
            "execute: alter"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el mismo archivo LDIF para modificar una contraseña, bajo 'changetype: modify', ¿qué directiva se usa para sustituir el valor anterior?",
        "opciones": [
            "delete:",
            "add:",
            "replace: userPassword",
            "swap: password"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el comando 'ldapsearch', ¿qué permite definir el parámetro '-b'?",
        "opciones": [
            "El modo binario de búsqueda",
            "La base de búsqueda (Base DN) a partir de la cual iniciarla en el árbol",
            "La copia de seguridad (backup)",
            "El tamaño de bloque a enviar"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Cómo se indica en `ldapsearch` una búsqueda con múltiples condiciones que deben cumplirse simultáneamente (Y lógico)?",
        "opciones": [
            "Usando el símbolo + (ej. cn=a + sn=b)",
            "Usando la palabra AND",
            "Agrupando los filtros dentro de un ampersand y paréntesis (ej. (&(filtro1)(filtro2)) )",
            "Escribiéndolos separados por comas"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando en Linux se debe usar si queremos borrar la entrada completa de un usuario en LDAP?",
        "opciones": [
            "ldapremove",
            "ldapdelete",
            "rm -ldap",
            "del-ldap-user"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el comando `ldapsearch`, ¿qué hace el parámetro `-h`?",
        "opciones": [
            "Muestra la ayuda (help)",
            "Oculta la salida (hidden)",
            "Indica el host (nombre de dominio o IP) que identifica al servidor LDAP",
            "Realiza una búsqueda hash"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Tras instalar `ldapscripts`, ¿en qué ruta de Debian se encuentran las plantillas LDIF de ejemplo para crear usuarios/grupos?",
        "opciones": [
            "/etc/ldap/scripts/",
            "/var/lib/ldap/templates/",
            "/usr/share/doc/ldapscripts/examples/",
            "/opt/ldap/ejemplos/"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué tres paquetes se especifican en el temario para configurar un sistema Linux como cliente LDAP?",
        "opciones": [
            "bind9, apache2, mysql-client",
            "libnss-ldap, libpam-ldap, nscd",
            "ldap-client, pam-client, nss-client",
            "openldap-utils, bash, sudo"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Durante la configuración del cliente LDAP en Debian, el asistente pregunta la 'Versión de LDAP a utilizar'. ¿Qué número se responde según los apuntes?",
        "opciones": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el archivo /etc/nsswitch.conf modificado para el cliente LDAP, ¿cómo quedan las líneas de passwd, group y shadow?",
        "opciones": [
            "ldap only",
            "files ldap",
            "local remote",
            "db dns"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Para qué se reinicia el demonio `nscd` tras modificar `/etc/nsswitch.conf`?",
        "opciones": [
            "Para borrar el disco duro",
            "Para que el sistema operativo recoja los usuarios locales primero y luego los del servidor LDAP, aplicando los cambios",
            "Para detener los ataques DDoS en LDAP",
            "Para actualizar la hora del sistema"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El comando `pam-auth-update` abre un menú para habilitar perfiles PAM. ¿Cuáles deben quedar marcados con un asterisco [*] para el cliente LDAP?",
        "opciones": [
            "Kerberos y Samba",
            "Unix authentication y LDAP Authentication",
            "Winbind y Fingerprint",
            "SQL Authentication y Local access"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para verificar rápidamente que el sistema operativo 've' a los usuarios LDAP, ¿qué comando de consola se ejecuta y se filtra con grep?",
        "opciones": [
            "cat /etc/passwd",
            "ldapsearch users",
            "getent passwd",
            "ls -la /home"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué paquete se debe instalar explícitamente para disponer de la herramienta de pruebas `pamtest`?",
        "opciones": [
            "pam-tools",
            "libpam-dotfile",
            "pamtest-cli",
            "auth-tester"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un administrador ejecuta `pamtest passwd upruebas2` e introduce la clave correcta, ¿qué mensaje final muestra la consola?",
        "opciones": [
            "Success! User verified.",
            "Authentication successful.",
            "Password accepted.",
            "OK"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Además de `passwd`, ¿con qué otros dos servicios se demuestra el uso de `pamtest` en el temario?",
        "opciones": [
            "http y smtp",
            "ssh y ftp",
            "pop3 y imap",
            "sudo y su"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la creación del archivo LDAP de un usuario (posixAccount), ¿qué atributo almacena la ruta del directorio personal (ej. /home/upruebas)?",
        "opciones": [
            "userDirectory",
            "loginPath",
            "homeDirectory",
            "posixHome"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué valor numérico tiene el atributo uidNumber en el ejemplo LDIF de creación del usuario 'upruebas'?",
        "opciones": [
            "500",
            "1000",
            "10001",
            "0"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al ejecutar ApacheBench, en la línea 'Document Length: 35817 bytes', ¿a qué se refiere ese dato?",
        "opciones": [
            "El peso del código fuente de ApacheBench",
            "El tamaño total de la memoria RAM consumida",
            "El tamaño en bytes del documento o página solicitada al servidor",
            "La cantidad de datos descartados por error"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En los resultados de ApacheBench, ¿qué valor te indica exactamente la media de velocidad de transferencia de la red durante el test?",
        "opciones": [
            "Time taken for tests",
            "Transfer rate",
            "Concurrency Level",
            "Failed requests"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la tabla de 'Connection Times' de ApacheBench, ¿qué tres estadísticas de tiempo se muestran además del mínimo y máximo?",
        "opciones": [
            "Media (mean), desviación estándar (sd) y mediana (median)",
            "Moda, rango y cuartiles",
            "Hora, minuto y segundo",
            "Ninguna extra, solo min y max"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿En qué formato queda la tabla de resultados cuando usas el parámetro '-w' de ApacheBench y lo rediriges a un archivo .html?",
        "opciones": [
            "Como una lista de viñetas HTML",
            "Como una tabla HTML nativa (etiquetas <table>, <tr>, <td>)",
            "Como texto plano dentro de una etiqueta <pre>",
            "Como un gráfico incrustado SVG"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Cuando se usa el flag '-g' en ApacheBench para exportar datos para GNuplot, ¿qué tipo de separador de columnas usa el fichero .tsv resultante?",
        "opciones": [
            "Puntos y comas",
            "Espacios simples",
            "Tabulaciones (Tab)",
            "Comas"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el script de GNuplot ('gnuplot1.p'), ¿qué instrucción se encarga de definir el aspecto proporcional de los ejes del gráfico?",
        "opciones": [
            "set size ratio 0.6",
            "set aspect ratio fixed",
            "define proportion 16:9",
            "set grid proportion"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la instrucción de GNuplot `plot \"resultados.tsv\" using 9 ...`, ¿qué significa el '9'?",
        "opciones": [
            "Que utilice la paleta de 9 colores",
            "Que genere 9 líneas distintas",
            "Que dibuje tomando los datos de la columna 9 del archivo TSV",
            "Que ignore las primeras 9 filas"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la misma instrucción de GNuplot, la parte `smooth sbezier` sirve para:",
        "opciones": [
            "Suavizar la línea resultante usando un algoritmo de curva de Bezier",
            "Borrar los puntos atípicos",
            "Rellenar el área bajo la curva con color",
            "Cambiar la tipografía a una fuente suave"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la misma instrucción de GNuplot, ¿qué hace `with lines`?",
        "opciones": [
            "Añade un borde a la imagen",
            "Traza el gráfico dibujando líneas en lugar de puntos sueltos",
            "Imprime el código fuente a continuación",
            "Dibuja líneas de cuadrícula adicionales"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Durante la instalación de Nagios en Fedora, se requiere el paquete `httpd`. ¿Qué servicio provee este paquete?",
        "opciones": [
            "El servidor DNS Maestro",
            "El motor de la base de datos",
            "El servidor web Apache para alojar la interfaz de Nagios",
            "El compilador de C"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La instalación de Nagios en Fedora requiere el paquete `gcc`. ¿Qué es `gcc`?",
        "opciones": [
            "Un motor de bases de datos relacional",
            "Un compilador de C necesario para compilar código durante la instalación de plugins o núcleo",
            "Un protocolo de cifrado web",
            "Un analizador de tráfico de red gráfico"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué dos librerías básicas de C (paquetes) se instalan mediante yum antes de instalar Nagios en la guía del tema?",
        "opciones": [
            "libc y libc-dev",
            "glibc y glibc-common",
            "c-libs y sys-libs",
            "unix-base y linux-headers"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Para la interfaz de Nagios, se configura un bloque `<Directory /usr/share/nagios/html/>` en Apache. ¿Qué valor tiene `DirectoryIndex`?",
        "opciones": [
            "default.html",
            "home.php",
            "index.php",
            "start.cgi"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la configuración de Nagios en Apache, ¿qué directiva permite ejecutar scripts CGI dentro del directorio `/usr/lib64/nagios/cgi-bin/`?",
        "opciones": [
            "AllowCGI yes",
            "Options ExecCGI",
            "RunScripts on",
            "CGIEnable true"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Antes de arrancar Apache para Nagios, se cambian permisos con `chmod 750` sobre directorios. ¿A qué grupo de usuarios se asignan los permisos de ejecución (el número 5)?",
        "opciones": [
            "Al usuario propietario",
            "A los usuarios del grupo asociado (que se cambiará a 'apache')",
            "A todos los usuarios invitados (otros)",
            "A ningún usuario"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué servicio se debe iniciar tras Nagios y NRPE para almacenar los datos en la base de datos instalada (ndoutils-mysql)?",
        "opciones": [
            "mysqld",
            "ndo2db",
            "apache2",
            "php-fpm"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la captura de la interfaz de Nagios Core, ¿qué color indica habitualmente un servicio en estado 'Crítico' o 'Caído' en el panel táctico (Tactical Overview)?",
        "opciones": [
            "Verde",
            "Amarillo",
            "Rojo",
            "Azul"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la barra lateral izquierda de Nagios Core, bajo qué gran categoría o menú se suelen encontrar 'Map' y 'Tactical Overview'?",
        "opciones": [
            "Current Status",
            "System Configuration",
            "Historical Data",
            "Log Files"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué herramienta web se describe explícitamente como una evolución para 'facilitar la configuración de Nagios directamente desde la web'?",
        "opciones": [
            "phpMyAdmin",
            "ApacheBench Web",
            "Centreon",
            "Webmin"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el menú superior de Centreon, si deseas ver un resumen de incidencias y el estado actual de los poller (recolectores), ¿en qué pestaña estás?",
        "opciones": [
            "Administration",
            "Home",
            "Configuration",
            "Reporting"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En Centreon, si un técnico necesita dar de alta un nuevo servidor (Host) para monitorizar mediante un formulario web, ¿a qué pestaña debe acudir?",
        "opciones": [
            "Reporting",
            "Monitoring",
            "Configuration",
            "System"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando usarías en Linux para verificar la existencia del archivo de resultados HTML generado por ApacheBench?",
        "opciones": [
            "check file",
            "dir (o ls)",
            "find result",
            "echo file"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el contexto de Nagios, ¿qué significa el acrónimo NRPE?",
        "opciones": [
            "Nagios Remote Plugin Executor",
            "Network Request Ping Evaluator",
            "Node Resource Performance Engine",
            "Nagios Recursive Protocol Error"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la gráfica temporal de Centreon (ejemplo ERP QoE), el eje X típicamente representa:",
        "opciones": [
            "El número de usuarios conectados simultáneamente",
            "Las horas del día (Tiempo)",
            "La latencia en milisegundos",
            "El número de servidores activos"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la resolución DNS, cuando el servidor DNS preferido agota el tiempo y no responde, el cliente intenta con el DNS alternativo. ¿Qué parámetro regula este tiempo en `/etc/resolv.conf`?",
        "opciones": [
            "options timeout",
            "wait-time",
            "fallback-delay",
            "max-wait"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según la analogía del temario, los directorios tradicionales (como guías en papel) presentan el problema de que si alguien cambia de número, la información queda obsoleta. ¿Cómo se llama esta característica negativa?",
        "opciones": [
            "Son inflexibles",
            "Son estáticos",
            "Son inseguros",
            "Son inconfigurables"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En LDAP, un objeto 'Contenedor' se asemeja en un sistema operativo a:",
        "opciones": [
            "Un archivo ejecutable",
            "Una variable de entorno",
            "Un directorio (carpeta)",
            "Un disco duro físico"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un comando `nslookup` especifica un 'Server' como `80.58.61.254`, esto indica que:",
        "opciones": [
            "Es la dirección IP del dominio que buscamos",
            "Es el servidor de correo asociado al dominio",
            "Es el servidor DNS al que el cliente ha enviado la consulta",
            "Es la puerta de enlace predeterminada de la red local"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué paquete instalas en Debian si deseas las herramientas de línea de comandos del cliente LDAP (como ldapsearch o ldapadd)?",
        "opciones": [
            "slapd",
            "ldap-utils",
            "openldap-core",
            "ldap-client-gui"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un archivo LDIF, si hay un error tipográfico y no dejas una línea en blanco entre dos entradas de usuarios, ¿qué sucederá probablemente al importarlo?",
        "opciones": [
            "El servidor LDAP lo arreglará automáticamente dividiendo las entradas por 'dn:'",
            "El comando fallará por error de sintaxis al procesar una entrada mezclada",
            "Creará un solo usuario fusionando todos sus atributos repetidos",
            "Ignorará el archivo completo sin mostrar mensaje de error"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un sistema distribuido de directorio, ¿qué ocurre cuando la información está 'replicada'?",
        "opciones": [
            "Que cada servidor almacena un subconjunto único de datos",
            "Que se guardan los datos en discos duros espejo locales",
            "Que una misma entrada puede estar almacenada en varios servidores",
            "Que se borran las copias antiguas periódicamente"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el árbol DNS mostrado (Dominio Raíz -> TLD -> Segundo Nivel -> Subdominios), los equipos 'rrhh' y 'marketing' pertenecen al subdominio:",
        "opciones": [
            "consultas",
            "departamento",
            "empresa",
            "org"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la resolución inversa manual (in-addr.arpa) de la IP '192.168.200.100', ¿qué octeto aparece primero en la consulta de dominio?",
        "opciones": [
            "192",
            "168",
            "200",
            "100"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al visualizar el fichero `resultados.html` de ApacheBench en un navegador, el encabezado muestra información sobre el software del servidor al que atacamos. En el ejemplo del temario es:",
        "opciones": [
            "Microsoft-IIS/8.5",
            "Apache/2.4.25",
            "nginx/1.10.3",
            "Litespeed"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En BIND9, ¿qué comando de la consola utiliza el administrador para solicitar una transferencia manual de zona a un servidor secundario (esclavo)?",
        "opciones": [
            "named-xfer",
            "rndc retransfer",
            "dig axfr",
            "service bind9 sync"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué indica el campo 'gecos' en un archivo LDIF para una cuenta de tipo posixAccount?",
        "opciones": [
            "El directorio de trabajo",
            "El grupo primario numérico",
            "Una descripción o nombre real del usuario (ej. Pruebas DAW05)",
            "El shell de comandos"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el comando 'ldapsearch', si incluyes '(objectclass=*)' como filtro, ¿qué estás pidiendo al servidor?",
        "opciones": [
            "Que devuelva todas las entradas que posean la clase 'objectclass' (prácticamente todas en el DIT especificado)",
            "Que borre las clases de objetos redundantes",
            "Que busque objetos sin clase asignada",
            "Que muestre el esquema del servidor"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si configuras tu ApacheBench con '-n 1000 -c 50', y el servidor web rechaza 10 de ellas por saturación, ¿dónde se reflejará este dato en la salida tabulada?",
        "opciones": [
            "En el campo 'Time taken for tests'",
            "En el campo 'Failed requests'",
            "En el campo 'Complete requests'",
            "En el campo 'Concurrency Level'"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "El parámetro `options None` en la configuración de Apache para Nagios hace que:",
        "opciones": [
            "Se habiliten todas las opciones del servidor",
            "Se deshabiliten características avanzadas como listado de directorios o ejecución de scripts en ese bloque específico",
            "Se apague el módulo de seguridad",
            "Se deshabilite el registro de logs"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué ocurre cuando el demonio (servicio) BIND procesa una zona de tipo 'master' y el administrador cambia un registro pero olvida incrementar el 'serial number' en el SOA?",
        "opciones": [
            "El servidor no arrancará por error fatal",
            "El servidor maestro funcionará, pero los servidores esclavos no detectarán el cambio ni actualizarán su zona",
            "El servidor maestro autoincrementará el número de serie mágicamente",
            "El comando named-checkzone devolverá un error de sintaxis"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Según la captura del comando 'tree /etc/bind' tras instalar BIND9, ¿cuál de los siguientes archivos predeterminados (vacíos o de esqueleto) NO aparece en esa carpeta?",
        "opciones": [
            "db.empty",
            "db.local",
            "named.conf",
            "resolv.conf"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un sistema distribuido y jerárquico como el DNS, el nivel más alto del árbol DNS está gobernado por servidores:",
        "opciones": [
            "DNS Primarios",
            "Servidores Raíz",
            "Servidores de Caché locales",
            "ISP Providers"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Si un administrador quiere consultar por un servidor de intercambio de correo asociado a 'ejemplo.com' usando `dig`, ¿qué tipo de registro debe consultar?",
        "opciones": [
            "SOA",
            "MX",
            "PTR",
            "A"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué comando permite generar la contraseña inicial cifrada para un administrador web de Nagios usando Apache?",
        "opciones": [
            "apache-pass admin",
            "htpasswd -c /etc/nagios/passwd admin",
            "passwd nagiosadmin",
            "crypt-web admin"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "¿Qué diferencia funcional existe entre `ldapmodify` y `ldapdelete` en las utilidades cliente de OpenLDAP?",
        "opciones": [
            "Ninguna, son alias del mismo comando",
            "ldapmodify altera atributos de una entrada existente (ej. cambiar contraseña), mientras que ldapdelete elimina la entrada completa del DIT",
            "ldapmodify borra el servidor, ldapdelete modifica la IP",
            "ldapmodify requiere interfaz gráfica, ldapdelete se usa por consola"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "Al ejecutar 'getent passwd', ¿cómo se distinguen usualmente los usuarios proporcionados por LDAP de los locales si se ha configurado libnss-ldap correctamente?",
        "opciones": [
            "Tienen la palabra LDAP en su nombre de usuario obligatoriamente",
            "Tienen el prefijo 'ld_' en la consola",
            "Aparecen en la salida unificada junto con los locales, generalmente con IDs de usuario y grupo (uid/gid) altos especificados en el servidor LDAP (ej. 10001)",
            "Solo se pueden ver usando comandos exclusivos de LDAP, getent no los muestra"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "La instalación del paquete 'libpam-dotfile' propuesto en el temario tiene como objetivo principal:",
        "opciones": [
            "Configurar el fondo de escritorio de Debian",
            "Proveer la herramienta 'pamtest' para probar la autenticación desde la línea de comandos",
            "Instalar el servidor OpenLDAP gráfico",
            "Modificar los archivos de la carpeta root"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En el contexto del protocolo de monitorización remota de Nagios, el agente que debe estar instalado en la máquina esclava (cliente) para ejecutar los plugins y devolver resultados se llama:",
        "opciones": [
            "NRPE (Nagios Remote Plugin Executor)",
            "NCPA (Nagios Cross-Platform Agent)",
            "NSClient++",
            "NMAP"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En un entorno de Centreon/Nagios, ¿cómo se denomina el periodo desde que ocurre un problema hasta que el sistema de monitorización lanza la alerta?",
        "opciones": [
            "Tiempo de Recuperación",
            "Tiempo de Detección",
            "Tiempo de Resolución",
            "Tiempo de Inactividad"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad de Trabajo 4",
        "pregunta": "En la creación del gráfico de GNuplot con el título '1000 peticiones, 50 peticiones concurrentes', ¿qué tipo de archivo define la primera instrucción `set terminal`?",
        "opciones": [
            "Un archivo PDF",
            "Un archivo JPG",
            "Un archivo vectorial SVG",
            "Una imagen PNG ('set terminal png')"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "El comando: _____ permite solamente añadir entradas y no modificarlas en un servidor LDAP.",
        "opciones": [
            "ldapsearch",
            "ldapmodify",
            "slapdtest",
            "ldapadd"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre el formato LDIF es correcta respecto a su funcionalidad principal?",
        "opciones": [
            "Es un formato exclusivo para realizar copias de seguridad cifradas en /var/lib/backup.",
            "Es una especificación que permite intercambiar datos con servidores LDAP.",
            "Sirve para establecer una conexión de red privada virtual con el servidor.",
            "Es un lenguaje de programación para crear consultas iterativas DNS."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "El formato LDIF es una especificación muy útil en la administración de directorios porque permite, por ejemplo:",
        "opciones": [
            "Añadir un usuario a un servidor LDAP.",
            "Configurar el hardware de red del servidor.",
            "Compilar el código fuente del núcleo de Linux.",
            "Monitorizar el tráfico web en tiempo real."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Si quisieras añadir un usuario en un servidor OpenLDAP directamente por línea de comandos (sin los ldapscripts), en caso de existir, podrías utilizar el comando de nombre:",
        "opciones": [
            "ldapsearch",
            "ldapadd",
            "ldapdelete",
            "ldapmodify"
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué tipo de resoluciones DNS permite realizar el comando host?",
        "opciones": [
            "No permite realizar resoluciones inversas ni directas.",
            "Solamente permite realizar resoluciones inversas.",
            "Solamente permite realizar resoluciones directas, esto es, de nombres de dominio DNS a IP.",
            "Permite realizar resoluciones inversas y directas."
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En cuanto a la gestión centralizada de la resolución de nombres en una red, ¿cuál es la diferencia principal entre un servidor DNS y el fichero /etc/hosts?",
        "opciones": [
            "Ninguno de los dos métodos permite una gestión centralizada.",
            "El fichero /etc/hosts permite una gestión centralizada, pero el servidor DNS no.",
            "El servidor DNS permite una gestión centralizada a diferencia del fichero /etc/hosts que es estático localmente.",
            "Ambos permiten exactamente el mismo nivel de gestión centralizada y dinámica en la red."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Permite el servidor DNS traducir una IP a su nombre de dominio correspondiente (resolución inversa) únicamente cuando es una IP de versión 4?",
        "opciones": [
            "Sí, puesto que la IP versión 6 no lo permite de ninguna manera.",
            "No, el DNS también permite realizar resoluciones inversas para direcciones IPv6 (dominio ip6.arpa).",
            "Sí, y se realiza exclusivamente a través de los servidores raíz.",
            "Sí, porque IPv6 no requiere de resolución DNS."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué tipo de resoluciones DNS permite realizar el comando nslookup?",
        "opciones": [
            "No permite realizar resoluciones inversas ni directas.",
            "Solamente permite realizar resoluciones inversas.",
            "Solamente permite realizar resoluciones directas (nombres a IP).",
            "Permite realizar resoluciones inversas y directas."
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué registro de recursos DNS tiene como finalidad proporcionar información sobre el servidor DNS primario de la zona?",
        "opciones": [
            "MX",
            "NS",
            "SOA",
            "PTR"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué registro de recursos DNS se encarga de asociar un nombre de dominio a un servidor (o lista de servidores) de correo electrónico?",
        "opciones": [
            "PTR",
            "MX",
            "NS",
            "SOA"
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué registro de recursos DNS se utiliza para definir o indicar el servidor de nombres con autoridad sobre un dominio DNS concreto?",
        "opciones": [
            "NS",
            "PTR",
            "SOA",
            "MX"
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuál es el registro de recursos DNS utilizado para traducir direcciones IP en nombres de dominio (resolución inversa)?",
        "opciones": [
            "SOA",
            "MX",
            "NS",
            "PTR"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué comandos te permiten realizar una verificación de los ficheros de configuración y de zona por posibles fallos de sintaxis en BIND, respectivamente?",
        "opciones": [
            "named-check y zone-check",
            "named-checkconf y named-checkzone",
            "dns-verify y zone-verify",
            "bind-test y zone-test"
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Sobre las transferencias de zona en un entorno DNS, ¿entre qué roles de servidores son posibles?",
        "opciones": [
            "Solamente entre servidores primarios y secundarios estrictamente.",
            "Entre un servidor maestro (que puede ser a su vez primario o secundario de otra zona) y un servidor secundario/esclavo.",
            "Únicamente entre servidores raíz y servidores caché.",
            "Solamente entre servidores locales y el fichero /etc/hosts."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En un servidor LDAP, ¿qué nombre recibe su estructura jerárquica en forma de árbol?",
        "opciones": [
            "DN",
            "CN",
            "RDN",
            "DIT"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "El registro de recursos _____ proporciona información sobre el DNS primario de la zona y parámetros de autoridad.",
        "opciones": [
            "CNAME",
            "TXT",
            "AAAA",
            "SOA"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En la organización de un directorio LDAP, el único atributo que un objeto no puede eliminar (ya que define su tipo y atributos requeridos) es el atributo:",
        "opciones": [
            "uid",
            "ObjectClass",
            "dn",
            "cn"
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuál es una de las aplicaciones prácticas más comunes por las que el protocolo LDAP es utilizado en redes y sistemas operativos?",
        "opciones": [
            "La asignación dinámica de direcciones IP (DHCP).",
            "La autentificación centralizada de usuarios.",
            "La resolución de nombres de dominio DNS a IP.",
            "El balanceo de carga de tráfico en servidores web."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Dentro del registro SOA, ¿qué campo se debe incrementar o actualizar siempre cada vez que modificas la base de datos de zona del servidor DNS?",
        "opciones": [
            "El tiempo de vida mínimo (TTL).",
            "El intervalo de reintento.",
            "El intervalo de actualización (refresh).",
            "El número de serie."
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "De la suite de herramientas ldapscripts, el comando: _____ permite añadir a un servidor OpenLDAP el usuario de nombre 'usuario23' que pertenece al grupo de nombre 'gusers'.",
        "opciones": [
            "ldapadd usuario23 gusers",
            "ldapsetadduser usuario23 gusers",
            "ldapaddsetuser usuario23 gusers",
            "ldapadduser usuario23 gusers"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "El comando de consola dig:",
        "opciones": [
            "No permite realizar resoluciones inversas ni directas.",
            "Solamente permite realizar resoluciones inversas (-x).",
            "Solamente permite realizar resoluciones directas (nombres de dominio a IP).",
            "Permite realizar resoluciones inversas y directas."
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En relación a los esquemas (schema) en un servidor OpenLDAP, ¿cómo pueden ser añadidos o cargados al directorio de configuración cn=config?",
        "opciones": [
            "Solamente mediante la compilación del código fuente del servidor en C.",
            "Pueden cargarse a través de archivos de texto en formato LDIF.",
            "Únicamente a través del comando DNS rndc update.",
            "No pueden cargarse nuevos esquemas una vez finalizada la instalación."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué función principal cumplen los esquemas en cualquier servidor LDAP?",
        "opciones": [
            "Definir las direcciones IP permitidas de los clientes.",
            "Definir los permisos de escritura del sistema de archivos local.",
            "Definir los atributos y clases permitidas para los objetos.",
            "Configurar las reglas del cortafuegos interno del servidor."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuáles son los esquemas que vienen instalados por defecto en el directorio cn=schema dentro de una instalación limpia de OpenLDAP?",
        "opciones": [
            "core, cosine, nis e inetorgperson.",
            "base, network, security y users.",
            "ldap, dns, dhcp y apache.",
            "root, admin, local y public."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué afirmación describe correctamente a la herramienta ApacheBench?",
        "opciones": [
            "Es un entorno gráfico de ventanas para administrar bases de datos.",
            "Es un programa para medir el rendimiento de los distintos servidores Web que se ejecuta por línea de comandos.",
            "Es un módulo exclusivo de Apache para cifrar conexiones SSL.",
            "Es una base de datos distribuida para resolver direcciones IP."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En una resolución de nombres DNS, ¿qué expectativa tiene el cliente cuando solicita una consulta recursiva?",
        "opciones": [
            "Recibir una lista de referencias iterativas a otros servidores.",
            "Que el servidor DNS le resuelva totalmente la consulta y devuelva la respuesta final.",
            "Que el servidor DNS ignore su caché local.",
            "Descargar el archivo de zona completo mediante transferencia (AXFR)."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Una de las ventajas del proceso de las consultas recursivas por parte del servidor DNS es que:",
        "opciones": [
            "Evita completamente el uso del puerto 53 UDP.",
            "No requiere de una conexión a Internet bajo ninguna circunstancia.",
            "Da lugar a que la caché del servidor se pueda ver beneficiada de mucha información a medida que itera por otros servidores.",
            "Impide que los clientes almacenen resoluciones en su propia memoria."
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la jerarquía del espacio de nombres de dominio, ¿cómo se representa el dominio raíz que es el origen de todos los dominios?",
        "opciones": [
            "Con un guion (-)",
            "Con una arroba (@)",
            "Con un punto (.)",
            "Con un asterisco (*)"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué significan las siglas TLD en el contexto de la jerarquía de dominios?",
        "opciones": [
            "Top-Level Domain (Dominio de Nivel Superior)",
            "Transfer Local Domain (Dominio Local de Transferencia)",
            "Transport Layer Data (Capa de Transporte de Datos)",
            "Translation Linked Directory (Directorio Vinculado de Traducción)"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué característica define a los dominios de nivel superior de código de país (ccTLD)?",
        "opciones": [
            "Están formados por 3 o más letras.",
            "Están formados siempre por 2 letras y asociados a países y territorios.",
            "Son exclusivos para organizaciones sin ánimo de lucro internacionales.",
            "Representan redes informáticas internas."
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Cómo se denominan los dominios genéricos de tres o más letras que representan una comunidad de intereses y tienen una organización u organismo que establece sus reglas?",
        "opciones": [
            "uTLD (Dominios no patrocinados)",
            "ccTLD (Dominios de código de país)",
            "sTLD (Dominios patrocinados)",
            "rTLD (Dominios raíz)"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Cuál es un ejemplo de dominio genérico no patrocinado (uTLD) que no tiene una organización restrictiva detrás?",
        "opciones": [
            ".museum",
            ".edu",
            ".gov",
            ".com"
        ],
        "correcta": 3
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Por qué se dice que una de las ventajas del DNS es que 'desaparece la carga excesiva en la red'?",
        "opciones": [
            "Porque los datos se comprimen al máximo en cada consulta.",
            "Porque al ser una base de datos distribuida, la información y las consultas se reparten por toda la red.",
            "Porque funciona exclusivamente en redes locales cerradas.",
            "Porque utiliza el protocolo UDP de forma exclusiva bloqueando a otros."
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿A qué ventaja del DNS se refiere el hecho de que un cambio efectuado en un único servidor se replique en el resto de forma automática sin intervención manual en cada equipo?",
        "opciones": [
            "A la eliminación de duplicidad de nombres.",
            "A la escalabilidad de hardware.",
            "A la consistencia de la información mediante cambios dinámicos.",
            "A la encriptación de datos de extremo a extremo."
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué registro de recursos DNS se utiliza para traducir nombres de hosts a direcciones IPv4?",
        "opciones": [
            "A (Address)",
            "AAAA (Address)",
            "CNAME (Canonical Name)",
            "PTR (Pointer)"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué registro de recursos DNS tiene la misma finalidad que el registro A, pero diseñado para traducir nombres a direcciones IPv6?",
        "opciones": [
            "AAAA",
            "IPv6-A",
            "PTR",
            "SOA"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué requisito previo es indispensable para utilizar correctamente un registro de tipo CNAME (alias)?",
        "opciones": [
            "Debe apuntar directamente a un registro MX.",
            "El nombre al que referencia el alias debe haber sido definido previamente mediante un registro de tipo 'A'.",
            "Debe asignarse en el archivo /etc/hosts de manera exclusiva.",
            "Debe poseer la prioridad más alta de la red local."
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué registro DNS indica qué servidores de nombres tienen total autoridad sobre un dominio concreto?",
        "opciones": [
            "NS (Name Server)",
            "SOA (Start Of Authority)",
            "PTR (Pointer)",
            "TXT (TeXT)"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En un registro MX (Mail eXchange), ¿qué indica el valor numérico asociado (por ejemplo, 10)?",
        "opciones": [
            "El tiempo de vida (TTL) del servidor en la caché.",
            "La cantidad máxima de correos por segundo permitida.",
            "El valor de preferencia, donde a menor número mayor preferencia para recibir correos.",
            "El número de puerto TCP a utilizar en la conexión."
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué registro DNS realiza la función inversa al registro A, traduciendo direcciones IP en nombres de dominio?",
        "opciones": [
            "PTR (Pointer)",
            "CNAME (Canonical Name)",
            "SOA (Start Of Authority)",
            "NS (Name Server)"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué registro proporciona información vital sobre el servidor DNS primario que tiene autoridad de la zona, incluyendo el número de serie y tiempos de actualización?",
        "opciones": [
            "NS",
            "PTR",
            "SOA (Start Of Authority)",
            "TXT"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué registro permite a los dominios identificarse de modos arbitrarios mediante cadenas de texto con información adicional?",
        "opciones": [
            "CNAME",
            "AAAA",
            "SPF",
            "TXT (TeXT)"
        ],
        "correcta": 3
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué tipo de registro TXT se utiliza específicamente para evitar la suplantación de identidades y combatir el SPAM autorizando IPs de envío?",
        "opciones": [
            "SOA",
            "SPF (Sender Policy Framework)",
            "PTR",
            "CNAME"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando de red actúa como un 'resolutor' local realizando una consulta simple, rápida y directa al sistema de nombres de dominio?",
        "opciones": [
            "ping",
            "traceroute",
            "host",
            "netstat"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la salida del comando nslookup, ¿qué significa el mensaje 'Respuesta no autoritativa'?",
        "opciones": [
            "Que el servidor DNS que responde no es el administrador oficial ni tiene autoridad directa sobre el dominio.",
            "Que el dominio ha expirado y debe renovarse.",
            "Que la conexión no es segura y puede ser interceptada.",
            "Que el servidor web destino está apagado."
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué archivo del sistema en entornos GNU/Linux se modifica para indicar qué servidor DNS preferido debe utilizar la propia máquina para resolver nombres?",
        "opciones": [
            "/etc/bind/named.conf",
            "/etc/hosts",
            "/etc/resolv.conf",
            "/etc/network/interfaces"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué dirección IP se utiliza comúnmente para referirse a la propia máquina local (localhost) al configurar el cliente DNS?",
        "opciones": [
            "192.168.1.1",
            "127.0.0.1",
            "8.8.8.8",
            "255.255.255.0"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En el servidor DNS BIND, ¿cuál es el archivo de configuración principal donde típicamente se declaran las zonas particulares (directa e inversa) a gestionar?",
        "opciones": [
            "/etc/bind/named.conf.local",
            "/etc/bind/db.local",
            "/etc/resolv.conf",
            "/etc/hosts"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "Al declarar una zona en BIND, ¿qué instrucción se utiliza dentro de la configuración para indicar que el servidor tiene autoridad sobre ese dominio?",
        "opciones": [
            "type slave;",
            "role authority;",
            "type master;",
            "mode primary;"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué dominio especial estandarizado se utiliza obligatoriamente para las zonas de resolución inversa en redes IPv4?",
        "opciones": [
            "in-addr.arpa",
            "reverse.dns",
            "ip6.arpa",
            "arpa.local"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "Para la red IPv4 192.168.1.X, ¿cuál es el nombre correcto y estandarizado para declarar su zona de resolución inversa?",
        "opciones": [
            "192.168.1.in-addr.arpa",
            "1.168.192.in-addr.arpa",
            "x.1.168.192.rev",
            "arpa.in-addr.192.168.1"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué herramienta proporcionada por BIND permite comprobar que el archivo de configuración principal no tiene errores de sintaxis?",
        "opciones": [
            "named-checkzone",
            "dns-verify",
            "named-checkconf",
            "bind-test"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando se utiliza para comprobar la sintaxis y la integridad de un archivo de zona específico en BIND?",
        "opciones": [
            "named-checkconf",
            "named-checkzone",
            "zone-check",
            "bind-zone"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la salida del comando 'dig', ¿qué estado (status) en la sección HEADER indica que el servidor ha entendido la pregunta y encontrado la respuesta sin fallos?",
        "opciones": [
            "SERVFAIL",
            "NXDOMAIN",
            "REFUSED",
            "NOERROR"
        ],
        "correcta": 3
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la salida de 'dig', ¿qué significan las banderas 'aa' (Authoritative Answer) en la respuesta?",
        "opciones": [
            "Que el servidor está respondiendo desde su memoria caché exclusivamente.",
            "Que el servidor responde como el 'dueño' y administrador supremo con autoridad sobre ese dominio.",
            "Que la respuesta es completamente anónima.",
            "Que la consulta ha sido reenviada a un servidor raíz."
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "Al utilizar 'dig' para realizar una consulta, ¿en qué sección de la salida se encuentra el resultado principal con la IP resuelta?",
        "opciones": [
            "HEADER SECTION",
            "QUESTION SECTION",
            "AUTHORITY SECTION",
            "ANSWER SECTION"
        ],
        "correcta": 3
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué parámetro se añade al comando 'dig' para forzar explícitamente una consulta de resolución inversa (IP a nombre)?",
        "opciones": [
            "-r",
            "-inv",
            "-x",
            "-ptr"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando se utiliza en el servidor LDAP para volcar o mostrar el contenido completo del árbol de directorios (DIT) por consola?",
        "opciones": [
            "slapcat",
            "ldapdump",
            "ldapshow",
            "ldap-tree"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En LDAP, ¿qué formato de texto estándar se utiliza para crear, insertar y representar entradas del directorio?",
        "opciones": [
            "XML",
            "JSON",
            "LDIF",
            "CSV"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando de cliente LDAP permite añadir o inyectar nuevas entradas en la base de datos a partir de un fichero de texto?",
        "opciones": [
            "ldapmodify",
            "ldapadd",
            "ldapinsert",
            "slapadd"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la estructura de LDAP, ¿qué clase de objeto (objectClass) se utiliza para crear un contenedor lógico similar a una carpeta para agrupar usuarios y grupos?",
        "opciones": [
            "posixGroup",
            "inetOrgPerson",
            "organizationalUnit",
            "domainComponent"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué atributo se utiliza en LDAP para asignar el nombre de identificación a una Organizational Unit (Unidad Organizativa)?",
        "opciones": [
            "dn",
            "cn",
            "ou",
            "sn"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué clase de objeto (objectClass) se emplea en LDAP para definir un grupo que sea compatible con los permisos de sistemas Unix/Linux?",
        "opciones": [
            "unixGroup",
            "posixGroup",
            "shadowGroup",
            "systemGroup"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "Al crear un grupo en LDAP (posixGroup), ¿qué atributo se utiliza para asignarle un identificador numérico único dentro del directorio?",
        "opciones": [
            "uidNumber",
            "groupID",
            "gidNumber",
            "id"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "Para crear un usuario en LDAP compatible con Unix/Linux, ¿qué clase de objeto (objectClass) define los parámetros de cuenta como UID y GID?",
        "opciones": [
            "inetOrgPerson",
            "posixAccount",
            "shadowAccount",
            "top"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En una entrada de usuario LDAP, ¿qué atributo define el nombre de inicio de sesión (login) del usuario?",
        "opciones": [
            "cn",
            "sn",
            "uid",
            "gecos"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En un usuario LDAP de tipo posixAccount, ¿qué atributo almacena la ruta de su directorio personal en el sistema (ej. /home/usuario)?",
        "opciones": [
            "userDirectory",
            "homePath",
            "loginDir",
            "homeDirectory"
        ],
        "correcta": 3
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En un usuario LDAP de tipo posixAccount, ¿qué atributo define el intérprete de comandos que utilizará el usuario al iniciar sesión?",
        "opciones": [
            "userShell",
            "loginShell",
            "bashPath",
            "cmdShell"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando cliente de LDAP se debe utilizar para aplicar cambios o actualizaciones a una entrada que ya existe en el directorio?",
        "opciones": [
            "ldapupdate",
            "ldapchange",
            "ldapmodify",
            "ldapedit"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En un fichero LDIF diseñado para actualizar una entrada, ¿qué directiva indica al comando ldapmodify la acción concreta a realizar sobre el objeto?",
        "opciones": [
            "changetype",
            "action",
            "modifytype",
            "operation"
        ],
        "correcta": 0
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En un grupo de tipo posixGroup en LDAP, ¿qué atributo se utiliza para vincular al grupo los nombres de inicio de sesión de los usuarios que pertenecen a él?",
        "opciones": [
            "groupMember",
            "memberUid",
            "users",
            "member"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando cliente de LDAP permite realizar consultas y recuperar la información de los objetos almacenados en el directorio?",
        "opciones": [
            "ldapquery",
            "ldapget",
            "ldapsearch",
            "slapsearch"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En el formato LDIF, ¿cómo debe comenzar siempre la primera línea de la definición de una entrada para identificarla de forma única con su ruta completa?",
        "opciones": [
            "Con objectClass:",
            "Con cn:",
            "Con dn:",
            "Con uid:"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué significan las siglas DN en la terminología de la estructura de LDAP?",
        "opciones": [
            "Domain Name",
            "Directory Node",
            "Distinguished Name",
            "Data Network"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué atributo se utiliza en LDAP para definir el nombre común de un usuario o grupo?",
        "opciones": [
            "uid",
            "sn",
            "cn",
            "ou"
        ],
        "correcta": 2
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la creación de un usuario en LDAP (inetOrgPerson), ¿qué atributo representa el apellido del usuario?",
        "opciones": [
            "surname",
            "sn",
            "lastname",
            "sl"
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "En la estructura de una base de datos DNS distribuida con maestros y esclavos, ¿qué sucede si un servidor secundario intenta resolver un dominio pero el primario está caído?",
        "opciones": [
            "La red se bloquea permanentemente.",
            "El servidor secundario puede seguir ofreciendo el servicio respondiendo con la zona transferida previamente.",
            "El dominio es eliminado automáticamente.",
            "Se borra la memoria caché del cliente local."
        ],
        "correcta": 1
    },
    {
        "tema": "Tarea tema 4",
        "pregunta": "¿Qué comando se suele utilizar en sistemas GNU/Linux para conocer rápidamente si el servicio BIND (named) está levantado y corriendo?",
        "opciones": [
            "/etc/init.d/named status",
            "dns-status",
            "check-bind",
            "netstat -dns"
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Según el temario y el examen, el protocolo LDAP surge como una alternativa más simple frente a DAP, el cual formaba parte del estándar:",
        "opciones": [
            "IEEE 802.11",
            "X.400",
            "X.500",
            "IPv6"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En el funcionamiento del cliente DNS, al realizar consultas iterativas, ¿qué espera obtener el cliente del servidor consultado?",
        "opciones": [
            "Que el servidor DNS le resuelva totalmente la consulta recursivamente hasta la raíz.",
            "Que el servidor DNS no use recursividad y sí iteración obligatoria con otros servidores DNS.",
            "Está interesado en recibir la mejor respuesta posible por parte del servidor DNS consultado de forma inmediata.",
            "Que le transfiera el archivo de zona completo mediante TCP."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En relación con las consultas iterativas DNS, ¿cuál de los siguientes escenarios justifica que un servidor responda de manera iterativa?",
        "opciones": [
            "El cliente puede haber solicitado recursividad en el servidor DNS y ésta estar deshabilitada en dicho servidor.",
            "El cliente exige que la respuesta provenga exclusivamente de un servidor de nivel superior (TLD).",
            "El cliente se niega a recibir una respuesta que provenga de la memoria caché.",
            "El servidor es de tipo 'sólo caché' y tiene prohibido enviar referencias."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuál de las siguientes características define correctamente a un servicio de directorio moderno (electrónico) frente a uno clásico (impreso)?",
        "opciones": [
            "Es inflexible.",
            "Es estático.",
            "Es dinámico.",
            "Es inseguro."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "A diferencia de un directorio tradicional que no puede reorganizar su información sobre la marcha, se dice que un servicio de directorio electrónico es:",
        "opciones": [
            "Inflexible",
            "Difícilmente configurable",
            "Flexible",
            "Secuencial"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En lo que respecta al acceso y control de la información, ¿qué adjetivo describe mejor a un servicio de directorio electrónico según la revisión del examen?",
        "opciones": [
            "Totalmente público sin control",
            "Inseguro",
            "Seguro",
            "Vulnerable por defecto"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Analizando la sintaxis de la entrada 'dn: uid=usuario,ou=People,dc=empresa,dc=local' de un directorio LDAP, podemos afirmar que:",
        "opciones": [
            "Es una entrada definida incorrectamente por carecer de contraseña.",
            "Es una entrada definida correctamente según los estándares de LDAP.",
            "Es un objeto que no es unívoco y puede repetirse en la misma ruta.",
            "Es un registro perteneciente a una base de datos DNS MySQL."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Al leer la entrada LDAP 'dn: uid=usuario,ou=People,dc=empresa,dc=local', ¿a qué dominio de la red pertenece dicho usuario?",
        "opciones": [
            "A una entrada dentro del dominio empresa.local.",
            "A un dominio de primer nivel genérico (.com).",
            "A una unidad organizativa llamada 'local'.",
            "A un grupo de red Windows."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Es cierto que un único servidor raíz DNS recoge y almacena todos los dominios existentes en Internet en su base de datos local?",
        "opciones": [
            "Sí, esa es su principal función.",
            "Sí, mediante la descarga diaria de los dominios TLD.",
            "No, la resolución DNS se consigue mediante una estructura jerárquica y distribuida entre servidores DNS.",
            "No, pero los servidores raíz sí almacenan las contraseñas de los dominios."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En cuanto al papel de los servidores raíz DNS en el proceso de resolución de nombres, ¿cuál de estas afirmaciones es correcta?",
        "opciones": [
            "Tienen que ser contactados obligatoriamente en cada una de las consultas que hace un usuario.",
            "Puede que sea necesario en una consulta escalar y llegar a un servidor raíz DNS si la resolución no se halla en niveles inferiores.",
            "Solamente aceptan consultas de tipo iterativo procedentes de navegadores Firefox.",
            "Almacenan de forma directa la dirección IP de cada ordenador conectado a Internet."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué afirmación describe correctamente la diferencia funcional entre una resolución directa y una resolución inversa en un servidor DNS?",
        "opciones": [
            "La resolución inversa traduce nombres de dominio a IP, y la directa IP a nombres.",
            "La resolución inversa traduce direcciones IP a nombres de dominio de forma contraria a la lectura humana tradicional.",
            "La resolución inversa se utiliza exclusivamente para el correo electrónico.",
            "La resolución directa sólo puede resolver dominios .com."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿En qué formato estándar se representan y estructuran los datos de las entradas de un directorio LDAP utilizando el Formato de Intercambio de Datos (LDIF)?",
        "opciones": [
            "En formato EBCDIC.",
            "En código binario compilado.",
            "En formato de texto ASCII.",
            "En tablas relacionales normalizadas."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Según la terminología empleada en los directorios, ¿qué definición se asocia con las siglas DIT?",
        "opciones": [
            "Estructura jerárquica LDAP en forma de árbol.",
            "Descripción general de un tipo de objeto.",
            "Ruta completa unívoca a una entrada.",
            "Protocolo seguro de transferencia de archivos."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Dentro de la arquitectura de LDAP, ¿qué es exactamente una 'objectClass'?",
        "opciones": [
            "Una consulta recursiva del cliente.",
            "La descripción general de un tipo de objeto (por ejemplo, especificar qué atributos requiere).",
            "La IP estática asignada al servidor de directorio.",
            "La estructura física del disco duro del servidor."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué función primordial cumple el 'Esquema' (schema) dentro de una base de datos de directorio LDAP?",
        "opciones": [
            "Establecer la ruta completa unívoca de un fichero.",
            "Realizar copias de seguridad automáticas diariamente.",
            "Guardar y definir las clases de objetos y atributos que se pueden almacenar en el directorio.",
            "Limpiar la memoria caché del servicio."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En un directorio LDAP, ¿a qué término corresponde la definición 'ruta completa unívoca que identifica a una entrada de modo inequívoco'?",
        "opciones": [
            "DIT (Árbol de Directorios de la Información)",
            "DN (Nombre Distinguible o Completo)",
            "FQDN (Nombre de Dominio Totalmente Cualificado)",
            "SOA (Inicio de Autoridad)"
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "De acuerdo con el contenido del examen, ¿cuáles son las principales herramientas avanzadas recomendadas para la monitorización de sistemas?",
        "opciones": [
            "Code y Nagios",
            "Apache y Nagios",
            "Centreon y Aqua",
            "Nagios y Centreon"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué registro de recursos específico se configura en la zona DNS y permite combatir el correo electrónico no deseado (suplantación de identidad/SPAM)?",
        "opciones": [
            "SOA",
            "CNAME",
            "SPF",
            "A"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Tras la instalación inicial por defecto del servidor DNS BIND, ¿cómo viene preconfigurado su servicio de resolución?",
        "opciones": [
            "Como servidor maestro exclusivamente sin opción a caché.",
            "Como un simple archivo de texto plano sin demonio activo.",
            "Preconfigurado como servidor caché.",
            "Como servidor esclavo bloqueado hasta recibir una zona."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Para qué tipo de direcciones y resoluciones se emplea específicamente el árbol de dominio 'in-addr.arpa.'?",
        "opciones": [
            "Para consultas directas de nombres IPv4.",
            "Para consultas inversas IP versión 4.",
            "Para consultas inversas IP versión 6.",
            "Para transferencias de zona maestras."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En la configuración de un servidor DNS BIND, ¿qué utilidad principal tiene el uso de la zona terminada en 'in-addr.arpa.'?",
        "opciones": [
            "Es una necesidad para la resolución de una IP a un nombre de dominio (resolución inversa).",
            "Sirve para almacenar los registros MX del correo corporativo.",
            "Se emplea para reenviar las consultas a los servidores raíz mundiales.",
            "Garantiza el cifrado de las transferencias de zonas esclavas."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué tipo de registro de recursos (RR) utiliza indispensablemente el dominio 'in-addr.arpa.' para llevar a cabo su función de resolución?",
        "opciones": [
            "Registro SOA",
            "Registro CNAME",
            "Registro TXT",
            "Registro PTR"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En la administración de un servicio de directorio, ¿qué comando permite solamente añadir entradas y no modificarlas?",
        "opciones": [
            "ldapsearch",
            "ldapmodify",
            "slapdtest",
            "ldapadd"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En cuanto a sus capacidades de consulta, ¿qué afirmación es correcta respecto al comando de consola 'dig'?",
        "opciones": [
            "No permite realizar resoluciones inversas y directas.",
            "Solamente permite realizar resoluciones inversas.",
            "Solamente permite realizar resoluciones directas, esto es, de nombres de dominio DNS a IP.",
            "Permite realizar resoluciones inversas y directas."
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué registro de recursos DNS específico permite combatir el correo electrónico no deseado al autorizar qué hosts pueden enviar correo desde el dominio?",
        "opciones": [
            "SOA",
            "CNAME",
            "A",
            "SPF"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En comparación con el fichero local /etc/hosts, ¿qué característica diferencial en la gestión ofrece un servidor DNS para una red?",
        "opciones": [
            "El servidor DNS es exclusivamente estático y no permite cambios sin reiniciar la red.",
            "El servidor DNS, a diferencia del fichero /etc/hosts, no permite una gestión centralizada.",
            "El servidor DNS permite una gestión centralizada y dinámica que el fichero /etc/hosts (local y estático) no posee.",
            "Ambos sistemas ofrecen exactamente el mismo nivel de administración descentralizada."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Observando la siguiente entrada de directorio: 'dn: uid=usuario,ou=People,dc=empresa,dc=local', ¿qué se puede afirmar sobre su composición?",
        "opciones": [
            "Es una entrada definida incorrectamente por usar el atributo 'uid'.",
            "Es una entrada definida correctamente siguiendo los estándares de estructura LDAP.",
            "Es una entrada inválida porque carece del atributo de contraseña obligatoria.",
            "Provocará un error de sintaxis por concatenar dos atributos 'dc'."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Analizando la jerarquía de la entrada 'dn: uid=usuario,ou=People,dc=empresa,dc=local', ¿a qué dominio de red pertenece lógicamente este objeto?",
        "opciones": [
            "A una entrada dentro del dominio empresa.local.",
            "Al subdominio people.local.",
            "Al dominio raíz global estandarizado (.com).",
            "A la unidad organizativa principal 'empresa'."
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuál de las siguientes afirmaciones define correctamente las capacidades de resolución DNS del comando 'host'?",
        "opciones": [
            "No permite realizar resoluciones inversas y directas.",
            "Solamente permite realizar resoluciones inversas buscando direcciones IP.",
            "Solamente permite realizar resoluciones directas, esto es, de nombres de dominio DNS a IP.",
            "Permite realizar resoluciones inversas y directas."
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué es exactamente la herramienta ApacheBench y cómo interactúa el usuario con ella?",
        "opciones": [
            "Es una interfaz gráfica web para configurar los módulos de seguridad del servidor Apache.",
            "Es un programa para medir el rendimiento de los distintos servidores Web que se ejecuta por línea de comandos.",
            "Es un módulo de bases de datos para guardar los registros de peticiones de los clientes HTTP.",
            "Es una herramienta exclusivamente orientada al diseño y edición de páginas web HTML."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Analizando la sintaxis de la entrada 'dn: uid=juan,ou=Ventas,dc=empresa,dc=com' de un directorio LDAP, ¿qué podemos afirmar sobre el parámetro 'ou=Ventas'?",
        "opciones": [
            "Indica que el usuario pertenece al dominio de nivel superior Ventas.",
            "Define a 'Ventas' como una Unidad Organizativa (OrganizationalUnit), que actúa como un objeto contenedor de forma similar a una carpeta.",
            "Especifica la contraseña cifrada del usuario Juan dentro de la red.",
            "Es el identificador numérico único (uidNumber) asignado a ese departamento."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Dada la entrada 'dn: cn=admin,ou=Sistemas,dc=educacion,dc=es' en un directorio LDAP, ¿qué función cumple el fragmento 'dc=educacion,dc=es'?",
        "opciones": [
            "Define la clase de objeto principal (objectClass) del administrador de sistemas.",
            "Representa los Componentes de Dominio (domainComponent) que conforman la base del dominio raíz educacion.es.",
            "Indica la ubicación física del servidor (Data Center) dentro de la red.",
            "Configura el nombre del esquema (schema) que se está utilizando para validar la entrada."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Observando la entrada 'dn: cn=profesores,ou=despliegue,dc=distancia26,dc=com', extraída de la tarea práctica, ¿qué nos indica el parámetro 'cn=profesores' en el inicio de la ruta?",
        "opciones": [
            "Que 'profesores' es un usuario individual con cuenta de inicio de sesión (posixAccount) y directorio propio.",
            "Que 'profesores' es el Nombre Común (Common Name) asignado a la entrada, utilizado en este caso para identificar a un grupo.",
            "Que 'profesores' es un Dominio de Código de País (ccTLD).",
            "Que el directorio personal del usuario se encuentra en la ruta lógica /home/profesores."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Analizando la entrada completa 'dn: uid=rmoreno,ou=despliegue,dc=distancia26,dc=com', ¿cuál es la finalidad de la etiqueta inicial 'dn:'?",
        "opciones": [
            "Establecer la contraseña del usuario en la red de dominio (Domain Network).",
            "Definir la ruta completa que identifica a esta entrada de modo inequívoco, conocida como Nombre Distinguible o Completo (Distinguished Name).",
            "Indicar que el objeto es estrictamente de tipo Hoja y no puede almacenar atributos.",
            "Configurar el servidor DNS inverso asociado exclusivamente a este usuario."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Analizando la jerarquía que marca la entrada 'dn: uid=alberto,ou=Alumnos,dc=instituto,dc=local', podemos afirmar que:",
        "opciones": [
            "El objeto hoja 'uid=alberto' cuelga o está contenido directamente dentro de la unidad organizativa 'ou=Alumnos'.",
            "El dominio 'dc=local' es un contenedor que se encuentra dentro de 'ou=Alumnos'.",
            "'uid=alberto' actúa como un objeto contenedor que agrupa a todos los alumnos.",
            "La entrada dará un error de sintaxis porque carece obligatoriamente de la etiqueta 'c' (country)."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Si encontramos una entrada LDAP con la sintaxis 'dn: ou=Ventas,o=MiEmpresa,c=ES', ¿qué significado tienen los parámetros 'o' y 'c' según la jerarquía estudiada?",
        "opciones": [
            "'o' se refiere a origin (origen) y 'c' a component (componente).",
            "Ambos son atributos de seguridad exclusivos para almacenar las contraseñas ofuscadas.",
            "'o' corresponde a organization (organización) y 'c' a country (país), actuando ambos como objetos contenedores.",
            "Indican que se trata de un registro DNS de tipo SOA y CNAME respectivamente."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Si una entrada tiene el DN 'dn: ou=Sistemas,dc=ejemplo,dc=com' y su propósito es actuar como un contenedor jerárquico lógico en el DIT, ¿qué atributo obligatorio de clase de objeto (objectClass) se le suele asignar en su fichero LDIF?",
        "opciones": [
            "objectClass: posixGroup",
            "objectClass: inetOrgPerson",
            "objectClass: organizationalUnit",
            "objectClass: shadowAccount"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Si en un archivo LDIF defines la ruta 'dn: uid=upruebas,ou=People,dc=ejemplo,dc=com' y entre los datos de la entrada incluyes el atributo 'cn: Usuario Pruebas', ¿qué diferencia hay entre ellos según la sintaxis LDAP?",
        "opciones": [
            "No hay diferencia, son parámetros incompatibles que darán error si se usan juntos en la misma entrada.",
            "El 'uid' representa el nombre de inicio de sesión (ID de usuario) que forma parte de la ruta unívoca, mientras que el 'cn' es el Nombre Común (el nombre real o descriptivo) almacenado como atributo del objeto.",
            "El 'cn' es obligatorio para validar la contraseña, y el 'uid' especifica en qué disco duro se guarda el directorio home.",
            "El 'uid' es siempre el objeto contenedor y el 'cn' es el elemento de la cúspide (raíz)."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "En la entrada 'dn: uid=empleado1,ou=Ventas,dc=empresa,dc=local', ¿cómo se denomina técnicamente en la teoría a cada una de las partes más pequeñas separadas por comas (por ejemplo 'uid=empleado1' u 'ou=Ventas') que componen el nombre completo?",
        "opciones": [
            "DIT (Árbol de Directorios de la Información)",
            "RDN (Nombre Completo Relativo)",
            "TLD (Dominio de Nivel Superior)",
            "FQDN (Nombre de Dominio Totalmente Cualificado)"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Analizando la sintaxis del DN 'dn: dc=proyecto-empresa,dc=local' visto en los ficheros LDIF de estructura básica, podemos afirmar que:",
        "opciones": [
            "Es el identificador de un usuario individual llamado 'proyecto-empresa'.",
            "Representa un objeto hoja dentro del contenedor 'local' que no puede tener subordinados.",
            "Es una entrada que define los objetos base o raíz del dominio LDAP, de la cual colgarán posteriormente las unidades organizativas y usuarios.",
            "Indica obligatoriamente un grupo de usuarios de tipo 'posixGroup'."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Si al definir una entrada de usuario en LDAP se incluye 'objectClass: posixAccount', ¿qué le estás proporcionando formalmente al sistema?",
        "opciones": [
            "Un contenedor lógico similar a una carpeta para poder guardar otros objetos en su interior.",
            "Los parámetros estructurados y necesarios para que el usuario pueda iniciar sesión de forma compatible con sistemas operativos Unix/Linux.",
            "Una regla de seguridad que bloquea automáticamente los accesos no autorizados a esa cuenta.",
            "El nombre de dominio totalmente cualificado (FQDN) del equipo personal del usuario."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Analizando un archivo LDIF de creación de usuario, ¿qué función práctica cumple exactamente el atributo 'loginShell: /bin/bash'?",
        "opciones": [
            "Determina el intérprete de comandos (terminal) que el sistema operativo ejecutará por defecto cuando el usuario inicie sesión.",
            "Indica la ruta del servidor de bases de datos relacional que usará el cliente.",
            "Fija la contraseña cifrada del usuario utilizando el algoritmo Bash.",
            "Abre un túnel seguro por el puerto 22 para permitir conexiones SSH exclusivas."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Observando los ejemplos de la tarea y los apuntes, ¿qué tipo de información almacena el atributo 'gecos' dentro de una cuenta posixAccount?",
        "opciones": [
            "El identificador numérico del grupo secundario al que pertenece la cuenta.",
            "El estado de la cuenta (activa, bloqueada o caducada).",
            "Información adicional sobre la persona, como una descripción o su nombre real y completo (ej. Pruebas DAW05).",
            "El dominio de nivel superior (TLD) al que está asociado el correo electrónico."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Analizando la configuración y parámetros de una cuenta posixAccount, ¿qué diferencia clave existe entre los atributos 'uid' y 'uidNumber'?",
        "opciones": [
            "No hay diferencia técnica, ambos almacenan secuencias de números enteros de cuatro cifras.",
            "El 'uid' define el nombre de inicio de sesión en texto (ej. rmoreno), mientras que el 'uidNumber' es el identificador numérico único que el sistema Unix asigna a esa cuenta (ej. 1000).",
            "El 'uid' es el identificador numérico del usuario y el 'uidNumber' es el identificador numérico del grupo principal.",
            "El 'uid' se utiliza exclusivamente para inicios de sesión en Windows y el 'uidNumber' para sistemas Linux."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "De acuerdo con el archivo de ejemplo 'usuario.ldif' documentado en la tarea, si quieres definir que la ruta física del directorio personal de un usuario sea '/home/rmoreno', ¿qué atributo exacto debes emplear?",
        "opciones": [
            "loginDirectory",
            "userPath",
            "homeDirectory",
            "personalFolder"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "En el contexto de la creación de un usuario compatible con Linux en LDAP, ¿qué nos indica concretamente la asignación del valor 'gidNumber: 5000'?",
        "opciones": [
            "El número total de bytes de cuota que el usuario puede almacenar en su directorio personal.",
            "El identificador numérico del grupo principal (como el grupo 'profesores') al que se asocia y pertenece dicho usuario.",
            "El puerto de red específico asignado para sus comunicaciones entrantes y salientes.",
            "El número de serie (serial number) del servidor LDAP que generó el alta del usuario."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "En la práctica, para definir un perfil de usuario integral en LDAP que abarque tanto sus datos personales (nombre, apellidos) como sus parámetros de inicio de sesión en Unix, la clase 'posixAccount' suele combinarse en la misma entrada con:",
        "opciones": [
            "organizationalUnit y dcObject",
            "groupOfNames y posixGroup",
            "inetOrgPerson y shadowAccount",
            "country y domainComponent"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 4 ejemplos",
        "pregunta": "Si en la configuración de la tarea práctica visualizas el atributo 'uid: rmoreno', ¿qué papel desempeñará ese valor exacto 'rmoreno' cuando el usuario intente conectarse al sistema?",
        "opciones": [
            "Será la clave de seguridad ofuscada del usuario para desencriptar sus correos.",
            "Servirá como el nombre de inicio de sesión o 'login' que el usuario deberá teclear en la pantalla para validarse.",
            "Determinará el subdominio del servidor web donde se alojan sus páginas personales.",
            "Actuará como un alias CNAME para redirigir sus peticiones al router de la red local."
        ],
        "correcta": 1
    }





];