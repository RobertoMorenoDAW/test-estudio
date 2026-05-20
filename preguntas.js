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
    },
    {
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué arquitectura principal emplea el protocolo FTP para su funcionamiento?",
"opciones": [
"Arquitectura Peer-to-Peer (P2P).",
"Arquitectura Cliente/Servidor.",
"Arquitectura de Anillo.",
"Arquitectura de bus de datos compartido."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuál es uno de los principales problemas de seguridad del protocolo FTP estándar?",
"opciones": [
"No permite transferir archivos mayores de 1 GB.",
"Suele bloquear los puertos del router automáticamente.",
"La transferencia tiene lugar sin cifrar la información.",
"Solo funciona correctamente en sistemas operativos de tipo UNIX."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué extensión del protocolo FTP asegura el cifrado en la transferencia de archivos?",
"opciones": [
"TFTP",
"SFTP",
"FTPS",
"HTTP"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué protocolos criptográficos emplea FTPS para proporcionar comunicaciones seguras?",
"opciones": [
"WEP/WPA",
"SSL/TLS",
"IPsec/VPN",
"SSH/RSA"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Con qué otro servicio se implementa el protocolo SFTP para conexiones seguras?",
"opciones": [
"Servicio Apache (HTTP).",
"Servicio SSH.",
"Servicio DNS.",
"Servicio DHCP."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué RFC detalla el estándar relacionado con el protocolo FTP?",
"opciones": [
"RFC 959",
"RFC 4251",
"RFC 8080",
"RFC 1918"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿A qué familia de protocolos de red pertenece FTP?",
"opciones": [
"Familia UDP",
"Familia TCP",
"Familia ICMP",
"Familia IGMP"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al pertenecer a la familia de protocolos TCP, podemos afirmar que FTP es un protocolo...",
"opciones": [
"No orientado a conexión.",
"Orientado a conexión.",
"De multidifusión (multicast).",
"De enrutamiento estático."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuántos puertos requiere el servidor FTP tradicional para su funcionamiento?",
"opciones": [
"Un único puerto TCP.",
"Dos puertos TCP.",
"Tres puertos UDP.",
"Un puerto TCP y un puerto UDP."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En un servidor FTP, ¿para qué se emplea típicamente el puerto TCP 21?",
"opciones": [
"Para la transferencia directa de los datos binarios.",
"Para cifrar la información de la sesión.",
"Para establecer el control de la conexión (comandos).",
"Para resolver los nombres de dominio de los clientes."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El puerto 20 en un servidor FTP es habitualmente conocido como...",
"opciones": [
"Puerto de comandos.",
"Puerto de datos.",
"Puerto de control cifrado.",
"Puerto pasivo auxiliar."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Es obligatorio que los puertos de un servidor FTP sean siempre el 21 y el 20?",
"opciones": [
"Sí, están fijados por hardware en todos los servidores.",
"Sí, modificar estos puertos infringe el RFC 959.",
"No, estos puertos pueden ser modificados en la configuración del servidor.",
"No, pero solo se puede cambiar el puerto de datos, el 21 es inamovible."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "A pesar de su inseguridad, ¿cuál es una ventaja de utilizar el protocolo FTP estándar?",
"opciones": [
"Genera automáticamente certificados digitales para el usuario.",
"Su alto rendimiento y sencillez para transferir archivos.",
"Evade cualquier cortafuegos perimetral sin configuración extra.",
"No consume ancho de banda en la red local."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuáles de los siguientes son ejemplos de clientes FTP en terminal de comandos?",
"opciones": [
"FileZilla y CuteFTP.",
"gftp y Firefox.",
"ftp y lftp.",
"Chrome y Nautilus."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuál de estas características NO pertenece al cliente gráfico FileZilla?",
"opciones": [
"Es exclusivo para sistemas operativos Windows.",
"Soporta y reanuda la transferencia de archivos de gran tamaño.",
"Soporta FTP, FTP sobre SSL/TLS y SFTP.",
"Permite configurar límites de velocidad de transferencia."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En un servidor FTP, ¿qué son los 'usuarios anónimos'?",
"opciones": [
"Usuarios que ocultan su dirección IP mediante un proxy remoto.",
"Usuarios que acceden al nivel raíz del servidor con privilegios de administrador.",
"Usuarios con permisos limitados que suelen usar un correo como contraseña simbólica.",
"Cuentas generadas automáticamente que se eliminan al finalizar la sesión."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué característica define a los 'usuarios del sistema' en un entorno FTP?",
"opciones": [
"No necesitan introducir contraseña al conectarse.",
"Poseen una cuenta en la máquina que ofrece el servicio FTP y usan su contraseña del sistema.",
"Solo pueden acceder desde la red local, nunca desde Internet.",
"Están definidos exclusivamente en un directorio LDAP externo."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué ventaja tienen los 'usuarios virtuales' en un servidor FTP como ProFTPD?",
"opciones": [
"Poseen acceso FTP sin necesidad de existir como usuarios del sistema operativo.",
"Tienen privilegios absolutos para modificar el fichero /etc/passwd.",
"Su conexión está cifrada automáticamente con clave pública sin configurar TLS.",
"Pueden saltarse el uso de cualquier puerto TCP."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Dónde pueden estar definidos los usuarios virtuales de un servidor FTP?",
"opciones": [
"Exclusivamente en ficheros XML cifrados.",
"En bases de datos SQL, LDAP, RADIUS o ficheros de texto propios.",
"Única y obligatoriamente en el archivo /etc/shadow del servidor.",
"En los registros de conexión del cliente gráfico FileZilla."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué módulo emplea el servidor ProFTPD para permitir la autenticación de usuarios mediante MySQL o Postgres?",
"opciones": [
"mod_ldap",
"mod_radius",
"mod_pam",
"mod_sql"
],
"correcta": 3
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué es PAM en el contexto de la autenticación de usuarios?",
"opciones": [
"Un protocolo de acceso rápido a ficheros binarios de Linux.",
"Un mecanismo de autenticación flexible que permite abstraer políticas de identificación.",
"Un servidor de cortafuegos para conexiones en modo pasivo.",
"Un gestor de descargas reanudables integrado en clientes texto."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si empleas la directiva UserPassword en FTP, ¿qué ocurre con el archivo /etc/passwd del sistema?",
"opciones": [
"Se modifica automáticamente con la nueva contraseña.",
"Se borra por razones de seguridad.",
"No se modifica, la contraseña solo es efectiva dentro del contexto FTP.",
"Se sobrescribe con formato de base de datos SQL."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el modo de conexión ACTIVO, ¿qué máquina inicia la conexión de DATOS?",
"opciones": [
"El cliente, abriendo una conexión hacia el puerto 21 del servidor.",
"El servidor, abriendo una conexión desde su puerto 20 hacia el cliente.",
"El cliente, conectando al puerto 20 del servidor.",
"El servidor, abriendo un puerto aleatorio >1024 y esperando al cliente."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Por qué el modo activo puede dar problemas si el cliente tiene un cortafuegos (firewall) estándar?",
"opciones": [
"Porque el cliente no puede enviar comandos al puerto 21 del servidor.",
"Porque el cortafuegos suele rechazar las conexiones entrantes desde el servidor hacia el cliente.",
"Porque el puerto 20 está siempre prohibido por los ISP (Proveedores de Internet).",
"Porque el modo activo utiliza el protocolo UDP, el cual es filtrado por defecto."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el modo de conexión PASIVO, ¿quién proporciona la dirección IP y el puerto aleatorio para los datos?",
"opciones": [
"El router del cliente mediante NAT.",
"El servidor DNS de la red pública.",
"El propio cliente FTP.",
"El servidor FTP."
],
"correcta": 3
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el modo PASIVO, ¿qué máquina inicia la conexión hacia el puerto de datos?",
"opciones": [
"El servidor se conecta al puerto 20 del cliente.",
"El cliente se conecta al puerto sin privilegios indicado por el servidor.",
"El servidor se conecta a un puerto aleatorio >1024 del cliente.",
"Ambos intercambian datos a través del puerto de control 21 simultáneamente."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En sistemas GNU/Linux, ¿qué archivo contiene una lista de puertos TCP/UDP relacionados con servicios estándar?",
"opciones": [
"/etc/protocols",
"/etc/ports.conf",
"/etc/services",
"/etc/network/interfaces"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Desde el punto de vista de FTP, ¿en qué dos tipos fundamentales se agrupan los archivos para su transferencia?",
"opciones": [
"Locales y Remotos.",
"ASCII y Binarios.",
"Ejecutables y Comprimidos.",
"Cifrados y en Texto Plano."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué extensión correspondería a un archivo de tipo ASCII en FTP?",
"opciones": [
".jpg",
".mp3",
".exe",
".txt"
],
"correcta": 3
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué ocurre si transfieres un archivo binario (como una imagen) utilizando opciones de transferencia ASCII?",
"opciones": [
"Se comprime automáticamente para ahorrar ancho de banda.",
"El archivo se convierte en un script ejecutable en el servidor.",
"Se puede destruir la información del archivo, quedando corrupto.",
"El cliente FTP mostrará un aviso visual y lo corregirá automáticamente."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Antes de transferir un archivo que no es de texto en la consola ftp, ¿qué comando debes usar?",
"opciones": [
"mode data",
"set octet",
"binary",
"transfer exe"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El protocolo FTP sigue los permisos de entornos UNIX. ¿Cuál es el orden correcto de los tres grupos de permisos?",
"opciones": [
"Grupo, Otros, Propietario.",
"Propietario, Grupo, Otros.",
"Administrador, Usuarios locales, Usuarios remotos.",
"Lectura, Escritura, Ejecución."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al establecer permisos en GNU/Linux, el permiso de lectura ('r') equivale al valor numérico:",
"opciones": [
"1",
"2",
"4",
"7"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El permiso de escritura ('w') tiene un equivalente numérico de:",
"opciones": [
"1",
"2",
"4",
"0"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿A qué equivale numéricamente el conjunto de permisos rw- para un usuario en Linux?",
"opciones": [
"3 (1+2+0)",
"5 (4+0+1)",
"6 (4+2+0)",
"7 (4+2+1)"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si un archivo muestra los permisos rw-r--r--, ¿cuál es su equivalente numérico total?",
"opciones": [
"755",
"644",
"777",
"600"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al usar 'ls -l' en Linux, si la línea comienza con 'd', significa que el elemento es:",
"opciones": [
"Un demonio de sistema (daemon).",
"Un archivo de datos (data).",
"Un directorio.",
"Un disco virtual."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué fichero de Linux contiene una lista de usuarios que, por seguridad, NO tienen permiso de acceso por FTP?",
"opciones": [
"/etc/ftpusers",
"/etc/proftpd/deny.conf",
"/etc/shadow",
"/etc/hosts.deny"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué usuarios típicos del sistema se recomienda listar en /etc/ftpusers para que no accedan por FTP?",
"opciones": [
"anonymous y ftp.",
"root, bin, uucp, news.",
"Usuarios virtuales creados por LDAP.",
"Cualquier usuario con permisos 644."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si en el archivo /etc/ftpusers una línea comienza con el carácter '#', ¿qué significa?",
"opciones": [
"Que ese usuario tiene privilegios de administrador en FTP.",
"Que el usuario debe usar clave cifrada obligatoriamente.",
"Que la línea es tratada como un comentario y será ignorada.",
"Que es un usuario anónimo restringido a su directorio home."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuál es la sintaxis básica para ejecutar el cliente en modo texto ftp desde la consola conectando a un host?",
"opciones": [
"ftp:// [host]",
"ftp [-pinegvd] [host [port]]",
"connect ftp [host] [port]",
"start-ftp --target [host]"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si ejecutas el comando `ftp` sin parámetros en la terminal, ¿qué sucede?",
"opciones": [
"Muestra un mensaje de error por falta de host.",
"Se conecta automáticamente al servidor localhost.",
"Abre directamente la consola ftp interactiva (ftp>).",
"Reinicia el servicio del servidor FTP local."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si ya te encuentras dentro de la consola `ftp>`, ¿qué comando debes usar para saber qué otros comandos están habilitados?",
"opciones": [
"list commands",
"help (o ?)",
"show all",
"man ftp"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la consola `ftp>`, el comando `open servidor` sirve para:",
"opciones": [
"Abrir un archivo en el servidor remoto para editarlo.",
"Iniciar una conexión remota con un servidor ftp.",
"Abrir un puerto en el cortafuegos local.",
"Mostrar los puertos abiertos del servidor."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si deseas finalizar la sesión ftp actual PERO sin cerrar la consola ftp, ¿qué comandos utilizas?",
"opciones": [
"bye / quit / exit",
"close / disconnect",
"stop / halt",
"logout / logoff"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para terminar por completo la sesión ftp y salir de la consola ftp al sistema operativo, usas:",
"opciones": [
"close / disconnect",
"bye / quit / exit",
"end / kill",
"return / back"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la consola ftp, ¿para qué sirve el comando `!` (signo de exclamación)?",
"opciones": [
"Fuerza la sobreescritura de un archivo remoto.",
"Cifra inmediatamente la conexión.",
"Sale a la línea de comandos del sistema operativo local temporalmente sin cortar la conexión.",
"Reinicia el demonio del servidor remoto."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El comando `cd directorio` en la consola ftp se usa para:",
"opciones": [
"Copiar un directorio en el servidor.",
"Cambiar de directorio en el servidor remoto.",
"Crear un nuevo directorio en el cliente local.",
"Comprimir un directorio antes de descargarlo."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué comando permite cambiarse de directorio en el equipo LOCAL (cliente ftp)?",
"opciones": [
"lcd",
"cd local",
"chdir",
"lwd"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para listar el contenido del directorio remoto actual en la consola ftp, se usa:",
"opciones": [
"tree o show",
"dir o ls",
"list-all",
"cat"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En ftp modo texto, ¿qué comando muestra tu directorio activo en el servidor remoto?",
"opciones": [
"pwd",
"lpwd",
"whereis",
"path"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para mostrar el directorio activo en tu equipo local (cliente ftp) mientras estás en la consola, empleas:",
"opciones": [
"pwd",
"dir-local",
"lpwd",
"echo $HOME"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué comando elimina un directorio VACÍO en el servidor remoto?",
"opciones": [
"deldir",
"rmdir",
"removedir",
"deltree"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para crear un directorio en el servidor remoto desde la consola ftp, el comando es:",
"opciones": [
"maked",
"newfolder",
"mkdir",
"crdir"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué comando usas en la consola ftp para obtener (descargar) un archivo desde el servidor hacia el cliente?",
"opciones": [
"download",
"receive",
"get",
"fetch"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué comando usarías para descargar VARIOS archivos desde el servidor remoto a la vez?",
"opciones": [
"get-all",
"mget",
"multiget",
"sync"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para enviar (subir) un archivo desde tu equipo local al servidor remoto mediante la consola ftp, el comando es:",
"opciones": [
"upload",
"send",
"put",
"push"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si necesitas subir múltiples archivos al servidor remoto mediante un patrón, ¿qué comando ftp utilizas?",
"opciones": [
"put *",
"upload-many",
"mput",
"send-batch"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En consola ftp, el comando `delete archivo` sirve para:",
"opciones": [
"Borrar un archivo en tu ordenador local.",
"Borrar un archivo en el servidor remoto.",
"Mover un archivo a la papelera remota.",
"Cancelar una transferencia en curso."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cómo borrarías varios archivos en el servidor según un patrón empleando consola ftp?",
"opciones": [
"Con el comando mdelete.",
"Con el comando del *.*.",
"Con el comando rm -rf.",
"Es imposible, hay que borrarlos de uno en uno."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué comando permite cambiar el nombre de un archivo en el servidor ftp remoto?",
"opciones": [
"mv",
"rename",
"chname",
"alias"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En consola ftp, ¿para qué sirve el comando `chmod`?",
"opciones": [
"Para cambiar el propietario del servidor FTP.",
"Para cifrar la conexión de control.",
"Para el cambio de permisos en el servidor remoto.",
"Para modificar la cuota de disco asignada."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué función cumple el comando `umask` en la consola ftp?",
"opciones": [
"Oculta la contraseña al teclearla.",
"Configura el sistema de permisos en el lado remoto (archivos nuevos).",
"Desactiva el cortafuegos temporalmente.",
"Activa el modo pasivo de manera forzada."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "De acuerdo con el texto, ¿cómo es usualmente la interfaz de los clientes FTP gráficos?",
"opciones": [
"Una sola ventana con botones gigantes tipo asistente.",
"Una consola negra que autocompleta comandos complejos.",
"Ventana dividida en dos: izquierda el equipo cliente, derecha el equipo servidor.",
"Cuatro paneles simultáneos de registro de logs."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Mencionados en la unidad teórica, dos ejemplos representativos de clientes gráficos FTP son:",
"opciones": [
"Putty y WinSCP.",
"gftp y filezilla.",
"Nautilus y Dolphin.",
"lftp y ncurses-ftp."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si en un cliente FTP gráfico dejas el puerto en blanco al intentar conectar por FTP puro, ¿qué puerto asume por defecto?",
"opciones": [
"80",
"22",
"21",
"443"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el cliente FileZilla, si te conectas a un servidor de acceso anónimo, ¿qué debes poner en 'Contraseña'?",
"opciones": [
"Dejarlo completamente en blanco o dará error.",
"La clave de root del servidor remoto.",
"Cualquier secuencia de caracteres, pues exige escribir algo por su interfaz.",
"El número de puerto de control."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el cliente gráfico gftp, si cancelas la petición de usuario al conectar a un sitio como ftp.rediris.es, ¿qué hace el programa?",
"opciones": [
"Cierra la aplicación por error fatal.",
"Cubre los campos usuario y contraseña entrando como anónimo al servidor.",
"Te bloquea la IP por intento de acceso nulo.",
"Cambia automáticamente al protocolo SFTP."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cómo se accede al servicio de transferencia de archivos desde un navegador web genérico?",
"opciones": [
"Escribiendo en la barra: http://ftp.servidor.com",
"Escribiendo en la barra: ftp://nombre_servidor_ftp:puerto",
"Instalando un plugin de Java obligatorio.",
"Solamente buscando 'FTP' en Google y pulsando 'Voy a tener suerte'."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si usas un navegador web (como Firefox) y accedes a un FTP anónimo, ¿cómo descargas un archivo?",
"opciones": [
"Escribiendo el comando 'get' en la barra de direcciones.",
"Haciendo doble clic y esperando que se ejecute en el servidor.",
"Pulsando botón derecho sobre él y eligiendo 'Guardar enlace como…'.",
"Arrastrando el archivo hacia el escritorio directamente."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Una desventaja de usar el navegador web como cliente FTP frente a un cliente gráfico (como FileZilla) es:",
"opciones": [
"El navegador no puede mostrar carpetas, solo archivos sueltos.",
"El navegador no soporta el puerto 21 bajo ninguna circunstancia.",
"El cliente ftp del navegador no tiene la posibilidad de continuar (reanudar) descargas interrumpidas.",
"El navegador exige siempre autenticación en texto plano."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué ocurre con los datos cuando se transmiten empleando el protocolo FTP puro sin extensiones?",
"opciones": [
"Viajan comprimidos en formato ZIP de forma nativa.",
"Viajan cifrados mediante certificados auto-firmados.",
"Cualquiera con acceso al canal de transmisión podrá ver en texto claro todo lo transmitido.",
"Se envían a través del puerto 22, asegurando su privacidad."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para entidades que necesitan que los datos viajen cifrados, ¿qué alternativas a FTP se deben contemplar?",
"opciones": [
"TFTP o FTPD.",
"FTPS o SFTP.",
"Telnet o rlogin.",
"HTTP o SNMP."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué dos modos principales de funcionamiento permite la extensión FTPS?",
"opciones": [
"Activo e Inactivo.",
"Simétrico y Asimétrico.",
"SSL Implícito y SSL/TLS Explícito.",
"Público y Privado."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En FTPS usando 'SSL Implícito', ¿qué puertos se usan típicamente en lugar de los convencionales?",
"opciones": [
"20 y 21",
"80 y 443",
"990 y 989",
"1024 y 2048"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En FTPS usando 'SSL Explícito', ¿qué puertos utiliza el cliente?",
"opciones": [
"Los mismos puertos estándar FTP: 20 y 21, efectuando el cifrado en ellos.",
"Solo el puerto 443.",
"Puertos TCP mayores a 65000.",
"Los puertos 990 y 989."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuál es la directiva/comando que se emplea en 'TLS Explícito' para iniciar el cifrado?",
"opciones": [
"START TLS",
"AUTH TLS",
"ENCRYPT ON",
"SECURE CONN"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El cifrado de clave pública o asimétrico utiliza...",
"opciones": [
"Una única clave secreta compartida por cliente y servidor.",
"Una clave maestra controlada por la Autoridad de Certificación.",
"Un par de claves: clave pública (kpub) y clave privada (kpriv).",
"Un algoritmo basado exclusivamente en el filtrado de direcciones MAC."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el cifrado asimétrico, si una información es cifrada mediante la clave pública (kpub), ¿quién puede descifrarla?",
"opciones": [
"Cualquier persona que conozca esa misma clave pública.",
"Solamente quien posea la clave privada (kpriv) correspondiente.",
"Solamente el servidor de nombres de dominio (DNS).",
"Nadie, es un mecanismo de solo escritura."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el funcionamiento del cifrado asimétrico entre cliente y servidor, ¿a quién interesa publicar su clave pública?",
"opciones": [
"A nadie, ambas claves deben permanecer en estricto secreto.",
"Interesa publicarla para que llegue a ser conocida por cualquiera que desee enviar información segura.",
"Solo debe enviarse a la policía o autoridades competentes.",
"Se publica solo si la conexión es mediante una VPN privada."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el despliegue de una aplicación web, ¿por qué puede ser más ventajoso usar FTP para subir archivos grandes en lugar de un formulario web?",
"opciones": [
"Porque el formulario web no soporta extensiones .zip.",
"Porque el servidor web suele estar configurado con límites de tamaño máximo y tiempo corto de conexión.",
"Porque FTP no consume datos de la tarifa de Internet.",
"Porque las aplicaciones web cifran todo dos veces ralentizando el proceso."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Normalmente, ¿qué permiten las empresas de alojamiento web (hosting) para que subas los ficheros de tu página?",
"opciones": [
"Utilizar un servidor de correo SMTP para mandar adjuntos.",
"Utilizar exclusivamente disquetes físicos por correo postal.",
"La subida mediante un servidor ftp usando clientes como FileZilla, Cute FTP, etc.",
"Solo permiten editar el código online mediante SSH estricto."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si en un cliente como FileZilla indicas conectar de forma cifrada mediante el puerto 22, ¿qué protocolo estás utilizando?",
"opciones": [
"SFTP (sobre SSH)",
"FTPS (SSL Implícito)",
"Telnet",
"HTTPs"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la transferencia FTP de tu aplicación web, ¿qué significa el error típico 'access denied' al intentar subir ficheros?",
"opciones": [
"Que el disco duro del servidor se ha roto físicamente.",
"Que el cortafuegos local de Windows bloquea el programa FTP.",
"Que tu usuario FTP no tiene permisos suficientes sobre la carpeta en la que deseas subir.",
"Que tu IP pública ha sido baneada permanentemente por el ISP."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Tras subir tu página web por FTP, notas que 'Index.html' no es reconocido automáticamente pero 'index.html' sí. ¿A qué se debe?",
"opciones": [
"El servidor FTP corrompió el primer archivo.",
"Los servidores GNU/Linux son sensibles a mayúsculas y minúsculas.",
"El navegador cliente está fallando en la lectura de HTML5.",
"El modo transferencia ASCII elimina letras mayúsculas."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si un cliente FTP muestra el error 'too many connections from your IP address', significa que:",
"opciones": [
"El cable de red está saturado de colisiones.",
"Se ha superado el número de conexiones permitidas abiertas desde una misma IP al servidor FTP.",
"El servidor ha detectado un virus y ha bloqueado la IP.",
"Estás utilizando el puerto pasivo equivocado."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Ante el error 'too many connections from your IP', ¿qué elemento local de red/software puede estar provocándolo indirectamente?",
"opciones": [
"Un cortafuegos que bloquee las conexiones y provoque que el cliente establezca más intentos de los necesarios.",
"El antivirus local escaneando la memoria RAM.",
"Tener abierto YouTube de fondo consumiendo ancho de banda.",
"Un fallo en el cable HDMI conectado al monitor."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué se desaconseja totalmente al subir archivos o actualizar tu web por FTP?",
"opciones": [
"El uso de programas con interfaz gráfica por su lentitud.",
"Subir archivos en horario nocturno.",
"El uso de aplicaciones FTP no actualizadas que podrían comprometer la seguridad.",
"Emplear el modo texto puro (comandos) en un entorno de producción."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Según la teoría, ¿cómo inicia un cliente la negociación en FTPS usando SSL explícito (AUTH SSL/TLS)?",
"opciones": [
"1º Solicita conexión al servidor, 2º el servidor envía una copia del certificado.",
"1º Comprueba el certificado, 2º abre el puerto UDP 69.",
"1º Cifra toda su partición de disco local, 2º contacta al puerto 990.",
"1º Envía su clave privada en texto plano, 2º recibe datos."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la autenticación de servidor con TLS, una vez que el cliente FTP comprueba y confía en el certificado, ¿qué hace el servidor?",
"opciones": [
"Se desconecta automáticamente para aplicar directivas locales.",
"Confirma su identidad mediante una firma digital, y a partir de ahí la información viaja cifrada.",
"Inicia un escaneo completo de puertos en la red del cliente.",
"Envía la clave privada del cliente de vuelta."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué ocurre en un cliente FTPS si NO confía en la copia del certificado enviada por el servidor?",
"opciones": [
"Se ve un mensaje/aviso en el cliente advirtiendo de la situación.",
"Se formatea el cliente FTP automáticamente por seguridad.",
"Conecta en modo UDP ignorando la seguridad por completo.",
"Cambia automáticamente a usar puertos inferiores a 1024."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la infraestructura de FTP pasivo, si el cliente envía el comando PASV, el servidor responde con...",
"opciones": [
"El nombre de usuario actual y la ruta del directorio (PWD).",
"Su dirección IP y el puerto aleatorio donde esperará la conexión de datos.",
"Un error 503 indicando caída de red local.",
"El comando PORT solicitando que sea el cliente quien abra el puerto."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si debes automatizar la descarga de un fichero diariamente por FTP en un servidor Linux usando un script bash simple sin interfaz, ¿qué cliente elegirías?",
"opciones": [
"FileZilla Server",
"Firefox Browser",
"Un cliente modo consola como ftp o lftp.",
"Internet Explorer FTP mode"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué sucedería con el permiso 0 si aplicamos chmod a un archivo?",
"opciones": [
"Otorga permisos de ejecución exclusivamente.",
"Revoca cualquier tipo de permiso (lectura, escritura y ejecución) mostrando un guión (-).",
"Indica que el archivo se vuelve un directorio estático.",
"Es un error de sintaxis del sistema operativo."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al conectar al servidor de RedIRIS con cliente consola desde una máquina Debian básica, ¿qué tipo de usuario se usa típicamente para acceder sin cuenta oficial?",
"opciones": [
"Usuario 'root' con contraseña maestra.",
"Un usuario creado mediante módulos LDAP o mod_sql.",
"Cualquier usuario y contraseña cualquiera (acceso anónimo).",
"Un usuario de pago de la institución RedIRIS exclusivamente."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué muestra el cliente consola ftp si se introduce el comando 'ls' y el directorio remoto está vacío?",
"opciones": [
"Genera un fallo de segmentación (segmentation fault) y aborta.",
"Cambia automáticamente al directorio raíz.",
"No lista ningún archivo/directorio u arroja información genérica de directorio vacío.",
"Abre un cliente gráfico para que sea más fácil buscar."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Por qué motivo es importante conocer si un archivo es ASCII o Binario en FTP de la vieja escuela?",
"opciones": [
"Porque usar la opción incorrecta en FTP altera bytes importantes, como los saltos de línea (CR/LF), corrompiendo ejecutables o multimedia.",
"Porque el modo ASCII cobra tarifas extra a nivel de red.",
"Porque el protocolo TCP/IP descarta paquetes de archivos binarios puros.",
"En realidad es un mito, FTP lo detecta el 100% de las veces sin intervención del usuario o la aplicación."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué aporta el cliente gráfico 'gftp' además de interactividad en comparación con la consola cruda?",
"opciones": [
"Reemplaza a Apache como servidor web integral.",
"Se usa principalmente para modelado 3D.",
"Permite gestionar marcadores/sitios y transferencias de forma muy visual y dividida.",
"Solo funciona si desactivas tu cortafuegos físico."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué significa que el servidor FTP transfiere información 'en claro' (texto plano)?",
"opciones": [
"Que solo admite colores blanco y negro en archivos de imagen.",
"Que un analizador de red (sniffer) en el medio podría capturar credenciales y datos tal cual se escribieron.",
"Que todo el contenido binario se pasa obligatoriamente a archivos .txt locales.",
"Que requiere contraseñas sin ningún carácter especial ni números."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si empleamos el cliente FileZilla para conectarnos a nuestra página web alojada y vemos la opción SFTP en la configuración del gestor de sitios, estamos activando...",
"opciones": [
"Transferencia mediante el protocolo FTP simple sin cifrar.",
"El protocolo de transferencia segura de archivos operando sobre el subsistema de SSH.",
"Una red P2P anónima de servidores distribuidos.",
"Una conexión cifrada, pero exclusivamente para archivos de texto plano."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Bajo qué tipo de licencia se distribuye el servidor ProFTPd?",
"opciones": [
"Licencia Propietaria.",
"Licencia GPL.",
"Licencia MIT.",
"Licencia Freeware Shareware."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Según el temario, ¿cuáles son los sistemas de bases de datos que ProFTPd soporta nativamente para usuarios virtuales?",
"opciones": [
"MongoDB y SQLite.",
"Oracle y MariaDB exclusivas.",
"MySQL y PostgreSQL.",
"SQL Server y Access."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para instalar el servidor ProFTPd en un sistema operativo Debian 6.0, ¿qué comando se debe ejecutar?",
"opciones": [
"apt-get update proftpd",
"yum install proftpd-server",
"apt-get install proftpd",
"dpkg --install proftpd.tar.gz"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Durante la instalación de ProFTPd, se debe elegir entre dos modos de ejecución. ¿Cuáles son?",
"opciones": [
"Modo gráfico o modo consola.",
"Como servicio desde inetd o como servidor independiente.",
"Como módulo de Apache o como script PHP.",
"Modo Activo o Modo Pasivo obligatorio."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si un servidor FTP sólo va a recibir unas pocas conexiones diarias, ¿qué modo de ejecución es el más recomendable para ahorrar recursos?",
"opciones": [
"Ejecutarlo como servidor independiente (standalone).",
"Ejecutarlo desde inetd.",
"Apagar el daemon después de cada uso.",
"Utilizar exclusivamente el puerto UDP 21."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si el servidor FTP tiene mucho tráfico, ¿por qué debería ejecutarse como servidor independiente?",
"opciones": [
"Para evitar crear un proceso nuevo por cada conexión entrante.",
"Para que funcione obligatoriamente sobre el puerto 80.",
"Porque inetd elimina los archivos binarios grandes.",
"Porque el modo independiente cifra las contraseñas por defecto."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué usuarios del sistema se crean automáticamente durante la instalación estándar de ProFTPd en Debian?",
"opciones": [
"admin y ftpadmin",
"proftpd y ftp",
"root-ftp y anon",
"virtualftp y proftp-user"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿A qué grupo pertenecen por defecto los usuarios creados ('proftpd' y 'ftp') en la instalación?",
"opciones": [
"ftp-users",
"root",
"nogroup",
"daemon"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para evitar que los usuarios 'proftpd' y 'ftp' tengan acceso al sistema mediante consola de comandos, ¿qué shell se les asigna?",
"opciones": [
"/bin/bash",
"/bin/sh",
"/usr/sbin/nologin",
"/bin/false"
],
"correcta": 3
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿En qué archivo del sistema GNU/Linux se puede comprobar la creación y configuración de los usuarios de ProFTPd?",
"opciones": [
"/etc/shadow",
"/etc/passwd",
"/etc/proftpd/users.conf",
"/var/log/proftpd.users"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El temario afirma que la configuración de ProFTPd resulta familiar si se poseen conocimientos sobre otro servidor. ¿Sobre cuál?",
"opciones": [
"Servidor Apache.",
"Servidor Nginx.",
"Servidor de correo Postfix.",
"Servidor DHCPd."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuál es la ruta absoluta del fichero de configuración principal de ProFTPd?",
"opciones": [
"/etc/proftpd.conf",
"/usr/local/etc/proftpd/proftpd.conf",
"/etc/proftpd/proftpd.conf",
"/var/ftp/conf/proftpd.conf"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En ProFTPd, si una configuración no está incluida dentro de la definición de un host virtual (virtualhost), ¿qué ocurre?",
"opciones": [
"Da un error de sintaxis y el servidor no arranca.",
"Toma un valor nulo por defecto.",
"Se hereda directamente de la configuración principal.",
"El virtualhost se desactiva por seguridad."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuáles son ejemplos de contextos de configuración disponibles en ProFTPd?",
"opciones": [
"kernel, user, module, system.",
"global, directorio, virtualhost, anonymous.",
"tcp, udp, icmp, igmp.",
"local, remote, proxy, cache."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Igual que Apache, ProFTPd soporta la activación y desactivación de funcionalidades adicionales a través de:",
"opciones": [
"Ficheros DLL compilados.",
"Módulos.",
"Bases de datos externas.",
"Parches del kernel."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el archivo proftpd.conf, ¿cómo interpreta el servidor las líneas que comienzan con el carácter '#'",
"opciones": [
"Son directivas obligatorias de seguridad.",
"Son líneas tratadas como comentarios y por tanto ignoradas.",
"Indican comandos de importación de módulos.",
"Declaran usuarios con permisos de superadministrador."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué directiva del fichero proftpd.conf se utiliza para recoger e importar la configuración de ficheros externos?",
"opciones": [
"Import",
"LoadConfig",
"Include",
"Require"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Por defecto, en el proftpd.conf recién instalado, ¿cómo se encuentran los soportes de LDAP, SQL, TLS, virtualhosts y cuotas?",
"opciones": [
"Activados por motivos de seguridad.",
"Desactivados (sus líneas Include están comentadas).",
"Inexistentes, requieren recompilar el servidor.",
"Configurados para arrancar sólo en modo gráfico."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿En qué fichero suele encontrarse por defecto el mensaje de bienvenida del servidor ProFTPd?",
"opciones": [
"welcome.msg",
"motd.txt",
"banner.html",
"hello.ftp"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para 'enjaular' a los usuarios en sus respectivos directorios personales y evitar que naveguen por todo el sistema, ¿qué directiva se debe usar?",
"opciones": [
"JailRoot on",
"ChrootUser /home",
"DefaultRoot ~",
"LockDirectory /*"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué propósito cumple la directiva 'MaxInstances 30' configurada por defecto?",
"opciones": [
"Limitar el tamaño de cada archivo subido a 30 MB.",
"Permitir sólo 30 megabytes de transferencia por usuario.",
"Evitar ataques de denegación de servicio permitiendo solo 30 conexiones simultáneas.",
"Cerrar la conexión FTP si el usuario está inactivo durante 30 minutos."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Con la directiva 'umask 022', los archivos creados tienen permisos 644 y los directorios 755. ¿A qué se refiere el primer grupo de números en la directiva umask?",
"opciones": [
"Identifican los permisos de los directorios.",
"Identifican los permisos de los enlaces simbólicos.",
"Identifican los permisos de ejecución de scripts.",
"Identifican los permisos de los ficheros creados."
],
"correcta": 3
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Una vez modificada la configuración en /etc/proftpd/proftpd.conf, ¿cómo se aplican los cambios sin reiniciar el proceso por completo?",
"opciones": [
"/etc/init.d/proftpd reload",
"/etc/init.d/proftpd stop",
"kill -9 proftpd",
"service ftp update"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué ocurre si ejecutas '/etc/init.d/proftpd restart' en lugar de 'reload'?",
"opciones": [
"Se borran todos los usuarios conectados y sus archivos.",
"Se reinicia el servicio por completo, cortando posibles conexiones activas.",
"Abre el puerto 22 para SSH automáticamente.",
"Actualiza la versión del paquete mediante apt-get."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En un servidor proftpd configurado como 'ftp privado' por defecto, ¿qué usuarios pueden conectarse?",
"opciones": [
"Cualquier usuario de Internet sin contraseña.",
"Sólo el usuario 'root'.",
"Cualquier usuario del sistema que posea una consola de comandos activa definida en /etc/shells.",
"Únicamente los usuarios definidos en el módulo mod_sql."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para conectarte a un FTP privado, la estructura de conexión desde el cliente de comandos sería:",
"opciones": [
"ftp://privado@servidor",
"ftp usuario_del_sistema@servidor_ftp",
"connect ftp -u usuario",
"start-ftp --private servidor"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En un servidor FTP privado por defecto, ¿qué puerto TCP utiliza el cliente para establecer la conexión de control?",
"opciones": [
"Puerto 22.",
"Puerto 80.",
"Puerto 21.",
"Puerto 20."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si un cliente FTP no es capaz de conectarse al FTP privado, ¿qué elemento de seguridad local es típico revisar según el temario?",
"opciones": [
"La configuración de la tarjeta gráfica.",
"El servidor DNS de Google.",
"La configuración de su cortafuegos (firewall).",
"El cable USB del teclado."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué permisos suele tener asignados un usuario anónimo por seguridad en un servidor FTP mixto?",
"opciones": [
"Control total, lectura y escritura en todo el disco duro.",
"Moverse por directorios y descargar, pero nunca subir ni eliminar archivos.",
"Permisos exclusivos para borrar archivos antiguos.",
"Permiso de escritura únicamente en la carpeta /etc."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para configurar un contexto anónimo en el archivo proftpd.conf, ¿qué etiqueta delimitadora principal se usa?",
"opciones": [
"<Anonymous ~ftp>",
"<VirtualHost anon>",
"<Directory /anonymous>",
"<Global Anonymous>"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la etiqueta '<Anonymous ~ftp>', ¿qué significa concretamente '~ftp'?",
"opciones": [
"Es una expresión regular que bloquea al usuario ftp.",
"Indica que el usuario anónimo entra en la variable $HOME del usuario ftp (ej. /home/ftp).",
"Redirige al usuario al servidor raíz del sistema operativo.",
"Define la cuota máxima en megabytes (~ftp)."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué efecto tiene sobre el directorio /home/ftp usar la etiqueta <Anonymous ~ftp> en Debian?",
"opciones": [
"Lo enjaula (chroot), impidiendo que el usuario acceda a directorios situados fuera de /home/ftp.",
"Lo convierte en un enlace simbólico a la web pública de Apache.",
"Lo borra al desconectarse el usuario.",
"Lo cifra con clave pública automáticamente."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Dentro del bloque Anonymous, la directiva 'UserAlias anonymous ftp' sirve para:",
"opciones": [
"Evitar que alguien use el nombre 'anonymous'.",
"Permitir hacer login con el nombre 'anonymous' igual que si fuera el usuario 'ftp'.",
"Enviar un correo a ftp cada vez que se conecta un anónimo.",
"Sustituir la cuenta root por la cuenta anonymous."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Las directivas 'DirFakeUser on ftp' y 'DirFakeGroup on ftp' cumplen la función de:",
"opciones": [
"Falsificar la IP del servidor por seguridad.",
"Cambiar la apariencia para que todos los ficheros parezcan pertenecer al usuario y grupo ftp.",
"Ocultar los archivos maliciosos de los escaneos antivirus.",
"Crear usuarios falsos en /etc/passwd."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si un usuario anónimo (como el usuario ftp) tiene configurada una shell en /bin/false, ¿qué directiva es indispensable activar para que logre entrar?",
"opciones": [
"DefaultRoot off",
"AllowFalseShell yes",
"RequireValidShell off",
"UseFtpShell on"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para limitar el máximo número de inicios de sesión anónimos concurrentes a 10, se usa la directiva:",
"opciones": [
"MaxClients 10",
"LimitConnections 10",
"UsersQuota 10",
"AnonymousMax 10"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué combinación de directivas deniega la posibilidad de ESCRITURA en cualquier directorio al usuario anónimo?",
"opciones": [
"<Limit READ> AllowAll </Limit>",
"<Directory *> <Limit WRITE> DenyAll </Limit> </Directory>",
"<WritePermission False>",
"<DisableUpload on>"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para configurar el servidor FTP permitiendo conexiones anónimas SIN requerir contraseña alguna, ¿qué directiva se usa?",
"opciones": [
"PasswordRequired no",
"AnonRequirePassword off",
"EmptyPassword allowed",
"AuthUserFile none"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si configuras un usuario privado (ej: 'invitado') como base para un bloque Anonymous pero quieres que se requiera su contraseña de sistema, utilizas:",
"opciones": [
"AnonRequirePassword on",
"RequireValidShell on",
"PasswordAuthentication strong",
"ForcePassword true"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el contexto de restricciones, ¿qué hace la directiva 'Order allow, deny'?",
"opciones": [
"Ordena alfabéticamente los ficheros antes de subirlos.",
"Indica el orden de evaluación de reglas de permisos: primero las que permiten, luego las que deniegan.",
"Permite todo a usuarios 'allow' y rechaza a usuarios 'deny'.",
"Establece una prioridad de ancho de banda."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si quiero permitir explícitamente acceso desde la red 192.168.200 a un directorio, ¿qué directiva escribo en el bloque <Limit>?",
"opciones": [
"Accept IP 192.168.200.*",
"Allow from 192.168.200.",
"NetworkPermit 192.168.200.0/24",
"WhiteList 192.168.200"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cómo prohibiría el acceso a todos los equipos que no coincidan con las reglas 'Allow' previas?",
"opciones": [
"Deny from all",
"Reject rest",
"Block IP *",
"Drop ALL"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cómo se estructuran múltiples redes o dominios permitidos en una sola directiva 'Allow from'?",
"opciones": [
"Separados por espacios exclusivamente.",
"En líneas separadas obligatoriamente.",
"Separados por una coma (,).",
"Separados por punto y coma (;)."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Permite la directiva 'Allow from' utilizar nombres de dominios DNS (ej. tuhostA.tudominio.edu) además de IPs?",
"opciones": [
"Sí, separándolos con comas al igual que las IPs.",
"No, solo admite IPs en notación decimal.",
"Solo si se emplea el protocolo IPv6.",
"Sí, pero requiere recompilar el módulo mod_dns."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué tecnología permite alojar y separar configuraciones de varios dominios (como empresa1.com y empresa2.com) en un mismo servidor ProFTPd?",
"opciones": [
"Cloud Computing.",
"Hosts virtuales o virtualhosts.",
"Docker containers.",
"NAT (Traducción de direcciones de red)."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si estableces la directiva 'TimeoutIdle 1200' en la configuración principal (fuera de cualquier virtualhost), ¿qué ocurre con los virtualhosts?",
"opciones": [
"La ignoran, los virtualhosts deben llevar todas las directivas de forma explícita.",
"Se bloquean al entrar en conflicto.",
"Heredan esa configuración, aplicándose el timeout a todos los dominios alojados.",
"Causa un error 500 y detiene ProFTPD."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué utilidad tiene la directiva 'TimeoutIdle' mencionada en el temario?",
"opciones": [
"Cerrar la conexión FTP si un usuario permanece inactivo el número máximo de segundos definido.",
"Limitar la velocidad de descarga cuando el servidor está saturado.",
"Retrasar el inicio del servidor en el arranque del sistema.",
"Definir el tiempo de vigencia de las contraseñas."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al definir la directiva VirtualHost, ¿qué se puede utilizar como parámetro identificador en su apertura?",
"opciones": [
"Exclusivamente el nombre del usuario administrador.",
"La IP del servidor FTP o bien el nombre DNS correspondiente.",
"El identificador MAC de la tarjeta de red.",
"El número de puerto obligatoriamente."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si empleas dominios DNS apuntando a IPs privadas para los virtualhosts, ¿qué requisito de red es imprescindible?",
"opciones": [
"Desactivar cualquier cortafuegos perimetral.",
"Tener un contrato de IP pública estática.",
"Existir un servidor DNS que las resuelva en local o tener entradas en /etc/hosts.",
"Que el puerto FTP se reasigne al 8080."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué herramienta de comandos se menciona para generar ficheros de autenticación de usuarios virtuales sin necesidad de crearlos en el sistema operativo?",
"opciones": [
"useradd-virtual",
"htpasswd",
"ftpasswd",
"mysql-adduser"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En el comando 'ftpasswd', ¿qué función cumple el parámetro '--passwd'?",
"opciones": [
"Fuerza a no pedir contraseña.",
"Indica que se solicitará la contraseña del usuario a crear.",
"Almacena la contraseña en texto plano en la raíz del sistema.",
"Extrae la contraseña de /etc/shadow."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al crear un usuario virtual con 'ftpasswd', ¿qué representa el parámetro '--uid 107'?",
"opciones": [
"La cuota en megabytes asignada al usuario.",
"El número de conexiones simultáneas permitidas.",
"El identificador de usuario de red (UID) del sistema, que suele corresponder al usuario 'ftp'.",
"El número de días hasta que la clave caduque."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Por qué un usuario virtual se crea especificando el parámetro '--shell /bin/false'?",
"opciones": [
"Para engañar a los hackers con una shell trampa.",
"Para ahorrar memoria RAM en el servidor.",
"Para identificar una consola de comandos que no permite la conexión real como usuario del sistema.",
"Porque es el único intérprete de comandos compatible con FTP."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para que los virtualhosts estén habilitados y aislados organizativamente en su propio fichero, ¿qué se debe hacer en proftpd.conf?",
"opciones": [
"Borrar el archivo proftpd.conf original.",
"Descomentar la línea 'Include /etc/proftpd/virtuals.conf'.",
"Cambiar el puerto general a 2121.",
"Añadir la opción 'EnableVirtual on'."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Cuando se configuran virtualhosts basados en nombre (identificando ambos a la misma máquina e IP), ¿qué condición es necesaria para que no colisionen?",
"opciones": [
"Deben pertenecer a subredes IP distintas.",
"Ambos deben carecer de cifrado TLS.",
"Cada virtualhost debe servir en un puerto TCP distinto (ej. 2121 y 2122).",
"Solo uno de ellos puede permitir escritura."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Dentro del bloque `<VirtualHost 192.168.200.250>`, ¿qué directiva indica el archivo donde residen los usuarios virtuales de ese dominio?",
"opciones": [
"VirtualAuth none",
"AuthUserFile /etc/passwd.usuarios.virtuales",
"PasswdFile /var/ftp/passw",
"LoadUsers /etc/proftpd/users"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué finalidad tiene la directiva `ServerName \"Servidor FTP empresa1\"` dentro de un VirtualHost?",
"opciones": [
"Cambiar el nombre del host a nivel del núcleo de Linux.",
"Sirve para uso interno del registro log exclusivamente.",
"Configura el nombre descriptivo que se muestra al usuario en el momento de la conexión.",
"Permite acceder al servidor desde un navegador web."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para aislar por completo el directorio de un virtualhost (ej. empresa1) de forma que el cliente no pueda salir de él, se emplea:",
"opciones": [
"ChrootPath /var/ftp/empresa1/",
"LockUser true",
"DefaultRoot /var/ftp/empresa1/",
"HomeDir /empresa1/"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Una vez definidos los virtualhosts y sus directorios locales como /var/ftp/empresa1/, ¿qué debes hacer con los permisos del sistema?",
"opciones": [
"Asignar permisos 777 a toda la rama /var.",
"Hacer chown al usuario ftp para que tenga propiedad sobre las carpetas (ej. chown ftp /var/ftp/empresa1/).",
"Cifrar el directorio con GPG.",
"Borrar cualquier archivo oculto que contenga."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En la configuración de Virtualhosts basados en IP, ¿se exige que las IPs del servidor sean iguales para cada dominio?",
"opciones": [
"Sí, deben compartir la misma IP y distinto puerto obligatoriamente.",
"No, cada dominio/virtualhost corresponde a una dirección IP distinta asignada a una interfaz de red.",
"Sí, pero deben resolver a diferentes MACs virtuales.",
"No, el VirtualHost basado en IP ignora las IPs físicas de la máquina."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al utilizar Virtualhosts basados en IPs diferentes, ¿qué ocurre con el puerto TCP de cada host virtual?",
"opciones": [
"Deben ser puertos altos (mayores a 10000).",
"Es indiferente, puede ser el mismo puerto estándar (ej. 21) ya que las IPs son distintas.",
"Solo se permite usar puertos en formato UDP.",
"El RFC exige usar el puerto 21 para el primero y 2121 para el segundo obligatoriamente."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Según el temario, ¿cuál es una desventaja de los virtualhosts basados en IP frente a los basados en nombre?",
"opciones": [
"Son menos seguros ante ataques de denegación de servicio.",
"No aportan ventajas adicionales y pueden ser más difíciles de mantener si las IP cambian con frecuencia.",
"No admiten usuarios virtuales mediante ftpasswd.",
"Exigen hardware dedicado en cada tarjeta de red."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué archivo incluye proftpd.conf donde deben activarse los módulos necesarios para habilitar el uso de cuotas?",
"opciones": [
"/etc/proftpd/modules.conf",
"/etc/proftpd/quota.conf",
"/etc/modprobe.d/proftpd.conf",
"/var/lib/ftp/modules.load"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para habilitar las cuotas por completo en proftpd.conf, la directiva QuotaEngine debe estar en el valor:",
"opciones": [
"off",
"on",
"auto",
"strict"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para gestionar cuotas locales en ficheros, ¿cuáles son los dos módulos esenciales que debemos asegurar que están cargados en modules.conf?",
"opciones": [
"mod_sql.c y mod_ldap.c",
"mod_tls.c y mod_crypto.c",
"mod_quotatab.c y mod_quotatab_file.c",
"mod_limit.c y mod_tally.c"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué directiva define la ubicación del archivo de registro específico de la operativa de cuotas?",
"opciones": [
"LogQuota /var/log/quota",
"QuotaLog /var/log/proftpd/quota.log",
"SyslogLevel debug",
"WriteLog /etc/quota.txt"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En ProFTPD existen básicamente dos tipos funcionales de cuotas. ¿Cuáles son?",
"opciones": [
"limit y tally.",
"upload y download.",
"soft y hard.",
"user y group."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Para qué se utiliza de forma específica el tipo de cuota 'limit'?",
"opciones": [
"Para restringir el tiempo que un usuario puede estar conectado.",
"Para limitar o contabilizar el espacio en disco (tamaño en bytes) utilizado.",
"Para forzar un ancho de banda máximo de 1 MB/s.",
"Para limitar la cantidad máxima de subdirectorios creados."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Para qué se utiliza específicamente el tipo de cuota 'tally'?",
"opciones": [
"Para restringir la transferencia en horario nocturno.",
"Para cifrar las descargas a la mitad de velocidad.",
"Para limitar o contabilizar el número de ficheros individuales que se utilizan.",
"Para llevar la cuenta de errores de inicio de sesión."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Cuál es la diferencia entre un límite 'soft' y un límite 'hard' en las cuotas?",
"opciones": [
"Soft afecta a software y hard al hardware del disco.",
"Soft permite un espacio de gracia (en bytes) donde se puede sobrepasar el límite temporalmente, hard no.",
"Soft borra archivos antiguos automáticamente, hard bloquea la subida.",
"Hard bloquea al usuario de forma permanente y soft lo expulsa temporalmente."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El temario sugiere que restringir el espacio de subida de archivos (upload) actúa de facto como limitación de espacio en disco porque:",
"opciones": [
"Los archivos en modo ASCII pesan menos de lo esperado.",
"Los bytes cargados a través de FTP se almacenan automáticamente en el disco, consumiendo ese espacio directo.",
"Las particiones Linux comprimen el upload de forma estricta.",
"El protocolo borra los archivos tras finalizar la sesión."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué comando interactivo o desde terminal se proporciona para inicializar y gestionar las tablas de cuotas?",
"opciones": [
"edquota",
"setquota",
"ftpquota",
"quota-ftp-manager"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué hace el comando `ftpquota --create-table --type=limit --table-path=/etc/proftpd/ftpquota.limittab`?",
"opciones": [
"Imprime una tabla en pantalla con los límites actuales.",
"Asigna 1GB de límite por defecto a todos los usuarios.",
"Crea e inicializa el archivo binario de base de datos para registrar las cuotas de tipo limit.",
"Borra la tabla actual provocando que nadie tenga límite."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si quisieras establecer un límite de 4 GB de subida al usuario user-empresa1, ¿qué parámetro usas con ftpquota para agregar esa nueva entrada?",
"opciones": [
"--insert-row",
"--add-record",
"--new-user",
"--append-limit"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Dentro de la ejecución de ftpquota, el modificador `--bytes-upload=4 --units=Gb` indica que:",
"opciones": [
"Se permite la descarga de 4 Gigabytes diarios.",
"Se reserva 4 Gigabytes de espacio RAM para el usuario.",
"Se restringe la cantidad máxima de archivos subidos a 4.",
"Se establece un límite máximo de subida de datos de 4 Gigabytes."
],
"correcta": 3
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Es posible asignar límites distintos de subida y descarga simultáneamente con ftpquota al mismo usuario?",
"opciones": [
"No, solo puede elegirse limitar subida o descarga, pero no ambos.",
"Sí, utilizando por ejemplo `--bytes-upload=4 --bytes-download=2`.",
"Solo si se crean dos cuentas de usuario separadas.",
"Sí, pero solo con el tipo de cuota tally, no limit."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué argumento se añade a ftpquota para ver a quién se le está ejerciendo restricciones y en qué medida?",
"opciones": [
"--list-all",
"--show-records",
"--display-quota",
"--cat-table"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al consultar los registros de cuota, si aparece 'Downloaded bytes: unlimited', significa que:",
"opciones": [
"El comando falló al leer el archivo de base de datos.",
"El usuario no tiene fijado un límite de descarga de datos.",
"El usuario ha superado su cuota y se le ha cancelado la cuenta.",
"El disco duro del servidor no tiene espacio disponible."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si un usuario requiere más espacio o modificar su restricción (ej: de 4Gb a 2300Mb), ¿qué acción usamos en ftpquota?",
"opciones": [
"--edit-quota",
"--modify-limit",
"--update-record",
"--change-user"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué debes usar para desactivar o eliminar por completo la restricción de cuota impuesta a un usuario específico?",
"opciones": [
"ftpquota --delete-record --name=usuario",
"Borrar manualmente la carpeta del usuario.",
"Establecer sus bytes a -1.",
"Pausar el demonio cron de proftpd."
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si ejecutas `--show-records` tras haber borrado todos los usuarios de la base de datos de cuotas, el comando devolverá:",
"opciones": [
"ftpquota: (empty table)",
"Error 404: File not found",
"Segmentation fault",
"All users unlimited"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Para dotar de acceso seguro al servidor ProFTPd empleando cifrado SSL/TLS, ¿qué fichero de configuración se debe importar primero?",
"opciones": [
"/etc/proftpd/crypto.conf",
"/etc/proftpd/ssl.conf",
"/etc/proftpd/tls.conf",
"/etc/proftpd/secure.conf"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En sistemas Debian 6 (squeeze), ¿qué paquete software se requiere instalar para generar manualmente certificados x509 y claves privadas?",
"opciones": [
"gnupg",
"openssl",
"ssh-keygen",
"certbot"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Al generar las claves con openssl para el servidor FTP, se producen un certificado (.crt) y una clave. ¿Qué naturaleza tiene la clave proftpd.key?",
"opciones": [
"Es una clave pública genérica.",
"Es un hash MD5 de la contraseña root.",
"Es la clave privada RSA del servidor, esencial para descifrar.",
"Es una clave simétrica temporal (sesión)."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué método alternativo y más directo se menciona en el texto para generar el certificado TLS válido por 1 año sin usar comandos largos de openssl?",
"opciones": [
"make cert",
"proftpd-gencert",
"auto-tls-setup",
"dpkg-reconfigure proftpd"
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Por estrictas razones de seguridad, ¿qué permisos octales deben aplicarse al archivo de la clave privada (`/etc/ssl/private/proftpd.key`)?",
"opciones": [
"0777",
"0644",
"0600",
"0400"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué permisos octales son los recomendados para el certificado público (`/etc/ssl/certs/proftpd.crt`)?",
"opciones": [
"0644",
"0600",
"0700",
"0755"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Una vez finalizada la configuración de TLS, ¿qué cliente gráfico es adecuado para comprobar la conexión segura (FTPES)?",
"opciones": [
"Navegador Mozilla Firefox estándar.",
"Cliente texto básico ftp.",
"FileZilla configurado para requerir FTP sobre TLS.",
"Internet Explorer versión 6."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si se desea depurar o verificar en tiempo real las conexiones seguras cifradas, ¿qué comando y archivo se deben utilizar?",
"opciones": [
"tail -f /var/log/proftpd/tls.log",
"cat /etc/shadow",
"less /var/log/auth.log",
"watch /var/log/proftpd/ssl.error"
],
"correcta": 0
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Durante la generación del certificado con openssl, si aparece la pregunta 'Common Name (eg, YOUR name)', ¿qué dato es el correcto a introducir?",
"opciones": [
"El nombre de pila del administrador.",
"El nombre o dirección DNS resoluble del servidor (ej: ftp.empresa1.com).",
"El nombre del sistema operativo (Debian).",
"Cualquier cadena aleatoria, es irrelevante."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Durante el proceso de crear un certificado con openssl, si deseas dejar un campo en blanco según las instrucciones del promt, ¿qué carácter debes teclear?",
"opciones": [
"Un asterisco (*)",
"La palabra NULL",
"Un punto (.)",
"Un espacio en blanco ( )"
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Qué riesgo latente elimina la implantación de TLS en ProFTPd?",
"opciones": [
"Que el disco duro se quede sin espacio por falta de cuotas.",
"Que las credenciales de usuarios e información se transmitan en texto claro y puedan ser espiadas.",
"Que el servidor no soporte virtualhosts por IP.",
"Que el servicio se inicie automáticamente en cada arranque."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "¿Se puede aplicar la configuración segura TLS de manera global afectando también a los virtualhosts?",
"opciones": [
"No, el protocolo FTPES es incompatible con Virtualhosts.",
"Sí, modificando el fichero tls.conf o incluyendo las directivas en el ámbito adecuado.",
"Solo si todos los virtualhosts comparten el mismo directorio raíz.",
"Sí, pero requiere un certificado digital diferente por cada usuario local."
],
"correcta": 1
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "El parámetro `QuotaLimitTable file:/etc/proftpd/ftpquota.limittab` indica:",
"opciones": [
"Que los límites de ancho de banda se aplican por red.",
"El archivo en formato texto plano donde el administrador anota los avisos.",
"El fichero de tabla (base de datos) que contiene las restricciones de cuota tipo limit.",
"El fichero ejecutable que comprime los datos al subir."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "En las tablas Limit y Tally, si una cuota se marca como 'Per Session: False', quiere decir que:",
"opciones": [
"La conexión se cerrará abruptamente en la siguiente sesión.",
"El usuario no tiene permiso de sesión interactiva.",
"El registro de datos almacenados perdura entre las distintas conexiones del usuario, es global.",
"Las cuotas no se aplican en la sesión activa actual."
],
"correcta": 2
},
{
"tema": "Unidad de Trabajo 3",
"pregunta": "Si combinamos configuraciones, un servidor ProFTPd es capaz de soportar simultáneamente:",
"opciones": [
"Sólo acceso anónimo y usuarios de sistema, no admite virtuales.",
"Usuarios anónimos, usuarios de sistema, usuarios virtuales, virtualhosts, cuotas y conexiones cifradas TLS.",
"TLS y Virtualhosts, pero desactivando cualquier cuota.",
"Un único dominio a la vez si se utilizan cuotas 'hard'."
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "¿Por qué se recomienda ejecutar el servidor ProFTPd en modo independiente (standalone) en lugar de usar inetd cuando hay mucho tráfico?",
"opciones": [
"Porque el modo standalone comprime los archivos automáticamente.",
"Para evitar la sobrecarga y el consumo de recursos que supone crear un proceso nuevo por cada conexión entrante.",
"Porque inetd no es compatible con el cifrado TLS.",
"Para que el servidor pueda utilizar el puerto 80 en lugar del 21."
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "En el contexto del protocolo FTP, ¿qué característica define al 'Modo Activo' de conexión?",
"opciones": [
"El servidor inicia la conexión de datos desde su puerto 20 hacia un puerto aleatorio del cliente.",
"El cliente cifra los datos antes de establecer la conexión.",
"El servidor obliga al cliente a conectarse a través del puerto 22 (SSH).",
"El cliente inicia ambas conexiones, la de control y la de datos."
],
"correcta": 0
},
{
"tema": "tarea tema 3",
"pregunta": "¿Por qué los cortafuegos (firewalls) modernos en el lado del cliente suelen bloquear las transferencias FTP en modo activo?",
"opciones": [
"Porque el protocolo FTP activo transmite virus en los archivos de texto.",
"Porque perciben la conexión de datos iniciada por el servidor como tráfico entrante no autorizado o malicioso.",
"Porque el modo activo usa el protocolo UDP, que siempre se bloquea por defecto.",
"Porque saturan la tabla NAT del router del cliente."
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "Para evitar los bloqueos del cortafuegos del cliente, se utiliza el 'Modo Pasivo'. ¿Cómo funciona la conexión de datos en este modo?",
"opciones": [
"El servidor envía los datos empaquetados por el puerto de control 21.",
"El servidor se conecta al puerto 20 del cliente de forma encubierta.",
"El cliente solicita el modo pasivo y es él mismo quien inicia la conexión hacia un puerto abierto proporcionado por el servidor.",
"Se utiliza una red privada virtual (VPN) obligatoria."
],
"correcta": 2
},
{
"tema": "tarea tema 3",
"pregunta": "¿Qué directiva se debe configurar en ProFTPd para indicar el rango de puertos que el servidor ofrecerá a los clientes en el modo pasivo?",
"opciones": [
"ActivePorts",
"DataPortsRange",
"PassivePorts",
"Port 50000-50010"
],
"correcta": 2
},
{
"tema": "tarea tema 3",
"pregunta": "Para configurar usuarios anónimos en ProFTPd y restringir su navegación a un directorio específico, ¿qué directiva o técnica se aplica habitualmente?",
"opciones": [
"La etiqueta <Anonymous ruta> o la directiva DefaultRoot para 'enjaular' (chroot) al usuario.",
"Otorgar permisos 777 a la carpeta /var/ftp.",
"Crear un enlace simbólico desde la raíz del sistema hacia la carpeta del usuario.",
"Desactivar el cortafuegos local."
],
"correcta": 0
},
{
"tema": "tarea tema 3",
"pregunta": "Si deseas limitar el número máximo de conexiones simultáneas que pueden realizar los usuarios anónimos en ProFTPd, ¿qué directiva utilizas?",
"opciones": [
"LimitConnections",
"MaxClients",
"UsersQuota",
"MaxInstances"
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "¿Cómo se bloquea completamente la capacidad de subir, borrar o modificar archivos (solo lectura) para un grupo de usuarios en un directorio con ProFTPd?",
"opciones": [
"Con la directiva <Limit WRITE> configurada con el valor DenyAll.",
"Con el comando chmod 000 ejecutado en el cliente FTP.",
"Cambiando el puerto de datos a uno de solo lectura.",
"Estableciendo UserAlias a nobody."
],
"correcta": 0
},
{
"tema": "tarea tema 3",
"pregunta": "Al intentar borrar un archivo en un servidor FTP recibes el error '550 Permission denied' (Operación no permitida). ¿Qué significa a nivel teórico?",
"opciones": [
"Que la conexión TLS ha caducado.",
"Que el servidor ha detectado que el archivo está infectado.",
"Que el cliente está en modo activo y el servidor lo ha bloqueado.",
"Que las políticas del servidor o los permisos del sistema deniegan la acción de escritura/borrado a tu usuario."
],
"correcta": 3
},
{
"tema": "tarea tema 3",
"pregunta": "Al crear usuarios virtuales para FTP o configurar el acceso anónimo, a menudo no se requiere que tengan acceso al sistema operativo. ¿Qué directiva permite su conexión FTP en ProFTPd?",
"opciones": [
"RequireValidShell off",
"AllowSystemUsers no",
"ShellAccess false",
"VirtualUsers on"
],
"correcta": 0
},
{
"tema": "tarea tema 3",
"pregunta": "¿Qué ventaja principal ofrece el uso de 'Usuarios Virtuales' en un servidor FTP?",
"opciones": [
"Son usuarios que navegan sin revelar su dirección IP pública.",
"Poseen acceso al servidor FTP sin necesidad de existir como usuarios reales en el sistema operativo subyacente.",
"Pueden saltarse el uso del protocolo TLS sin ser detectados.",
"No ocupan espacio en el disco duro porque se almacenan en la memoria RAM."
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "¿Qué herramienta de línea de comandos se utiliza habitualmente junto a ProFTPd para generar y gestionar los ficheros de contraseñas de los usuarios virtuales?",
"opciones": [
"htpasswd",
"useradd",
"ftpasswd",
"mysql-adduser"
],
"correcta": 2
},
{
"tema": "tarea tema 3",
"pregunta": "Cuando se crea un usuario virtual mediante comandos, ¿qué intérprete de comandos (shell) se le suele asignar como medida de seguridad para evitar que inicie sesión en el sistema host?",
"opciones": [
"/bin/bash",
"/bin/sh",
"/bin/false (o /usr/sbin/nologin)",
"/bin/ftp"
],
"correcta": 2
},
{
"tema": "tarea tema 3",
"pregunta": "¿Qué directiva indica a ProFTPd la ruta del fichero de texto donde debe verificar las credenciales de los usuarios virtuales creados?",
"opciones": [
"AuthUserFile",
"VirtualPasswd",
"UserDatabase",
"LoadUsers"
],
"correcta": 0
},
{
"tema": "tarea tema 3",
"pregunta": "En sistemas GNU/Linux, ¿por qué es importante que la carpeta asignada a un usuario virtual pertenezca al mismo usuario de sistema que ejecuta el servicio FTP (por ejemplo, chown ftp:nogroup)?",
"opciones": [
"Porque el demonio ProFTPd necesita poseer los permisos de sistema de archivos adecuados para poder escribir/subir archivos en nombre del usuario virtual.",
"Porque el protocolo FTP rechaza carpetas propiedad del usuario root.",
"Porque si no, el comando cd (cambiar directorio) bloquea el cliente.",
"Es indiferente, ProFTPd ignora los permisos del sistema operativo."
],
"correcta": 0
},
{
"tema": "tarea tema 3",
"pregunta": "¿Para qué sirve el 'Gestor de sitios' (Site Manager) en un cliente gráfico como FileZilla?",
"opciones": [
"Para alojar bases de datos SQL de usuarios virtuales.",
"Para configurar y guardar perfiles de conexión persistentes, facilitando el acceso a diferentes servidores FTP.",
"Para compilar el código fuente de las aplicaciones web antes de subirlas.",
"Para administrar los cortafuegos locales de forma automatizada."
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "¿Qué paquete de software se utiliza típicamente en distribuciones Linux para generar un certificado digital X.509 y su clave privada para asegurar ProFTPd?",
"opciones": [
"certbot",
"openssl",
"gnupg",
"ssh-keygen"
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "Por cuestiones críticas de seguridad criptográfica, ¿qué permisos octales deben configurarse en el archivo de la CLAVE PRIVADA del certificado TLS (.key)?",
"opciones": [
"0777 (Lectura, escritura y ejecución para todos)",
"0644 (Lectura para todos)",
"0600 (Lectura y escritura solo para el propietario)",
"0000 (Bloqueo total)"
],
"correcta": 2
},
{
"tema": "tarea tema 3",
"pregunta": "Al implementar la seguridad TLS en ProFTPd (mediante mod_tls.c), ¿qué directiva fuerza a los clientes a usar obligatoriamente una conexión cifrada en lugar de enviar contraseñas en texto plano?",
"opciones": [
"TLSEngine on",
"TLSVerifyClient off",
"TLSRequired on",
"ForceSSL true"
],
"correcta": 2
},
{
"tema": "tarea tema 3",
"pregunta": "Si utilizas un 'certificado autofirmado' en tu servidor FTP, ¿qué advertencia lógica te mostrará el cliente (como FileZilla) la primera vez que intentes conectar de forma cifrada?",
"opciones": [
"Que la conexión usa un protocolo obsoleto y se desconectará.",
"Que el certificado es desconocido (no emitido por una Autoridad de Certificación comercial) y te pedirá confirmación manual para confiar en él.",
"Que el puerto 21 está cerrado y debe usar el puerto 443.",
"Que la contraseña enviada no cumple con las políticas de complejidad."
],
"correcta": 1
},
{
"tema": "tarea tema 3",
"pregunta": "Cuando configuras en tu cliente FTP la opción 'Requiere FTP explícito sobre TLS', estás utilizando un protocolo también conocido como:",
"opciones": [
"SFTP (SSH File Transfer Protocol).",
"TFTP (Trivial File Transfer Protocol).",
"FTPES (FTP over explicit TLS).",
"HTTPS (Hypertext Transfer Protocol Secure)."
],
"correcta": 2
},
{
"tema": "Examen online tema 3",
"pregunta": "El certificado digital que un servidor ftp envía a un cliente _____ mediante una autoridad de certificación la autenticación del servidor ftp.",
"opciones": [
"por si solo no asegura",
"mediante el protocolo ftp enbasic no asegura",
"mediente el protocolo ftps enbasic asegura",
"asegura"
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "Para recargar el servicio proftpd se puede emplear el comando:",
"opciones": [
"/etc/init.d/proftpd reload",
"/etc/init.d/proftpd update",
"systemctl proftpd refresh",
"/etc/proftpd/restart"
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "Un servidor ftp ProFTPD permite enjaular a los usuarios en una ruta raíz definida. ¿Verdadero o falso?",
"opciones": [
"Verdadero, usando directivas como DefaultRoot.",
"Falso, ProFTPD no soporta enjaulamiento (chroot).",
"Verdadero, pero solo para el usuario root del sistema.",
"Falso, los usuarios siempre pueden navegar por la raíz del disco."
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "Un archivo de texto .txt puede transferirse como:",
"opciones": [
"Tipo de archivo binary exclusivamente.",
"Un archivo comprimido obligatoriamente.",
"Tipo de archivo ascii.",
"Un script remoto."
],
"correcta": 2
},
{
"tema": "Examen online tema 3",
"pregunta": "En el modo activo la conexión de datos es iniciada por el cliente ftp. ¿Verdadero o falso?",
"opciones": [
"Verdadero, el cliente inicia tanto la conexión de control como la de datos.",
"Falso, en el modo activo es el servidor quien inicia la conexión de datos hacia el cliente.",
"Verdadero, pero solo a través del puerto 21.",
"Falso, en el modo activo no se utilizan conexiones de datos."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "FTPS y SFTP identifican el mismo protocolo de cifrado. ¿Verdadero o falso?",
"opciones": [
"Verdadero, son nombres distintos para el mismo servicio.",
"Falso, FTPS es una extensión de FTP (usa SSL/TLS) y SFTP funciona sobre SSH.",
"Verdadero, ambos utilizan únicamente el puerto 21 de control.",
"Falso, FTPS no existe y SFTP es el único estándar seguro."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "El cliente ftp del navegador permite la configuración de plantillas. ¿Verdadero o falso?",
"opciones": [
"Verdadero, en la sección de opciones de red.",
"Falso, el navegador carece de gestión de sitios o plantillas como los clientes gráficos dedicados.",
"Verdadero, siempre que se acceda mediante HTTPS.",
"Falso, solo permite guardar temporalmente la contraseña en memoria."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "En un host virtual _____ significa que por la interfaz de red 192.168.200.250 atenderá peticiones.",
"opciones": [
"<VirtualHost *:??>",
"<VirtualHost 192.168.200.0::21>",
"<VirtualHost *:*>",
"<VirtualHost 192.168.200.250>"
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "En la consola ftp, los comandos quit y exit:",
"opciones": [
"Finalizan la sesión ftp sin cerrar la consola ftp.",
"Salen a línea de comandos del sistema operativo temporalmente sin cortar la conexión.",
"Son alias de los comandos qut y ext.",
"Terminan la sesión ftp y salen de la consola ftp."
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "En ProFTPD, en relación a las cuotas de tipo Limit:",
"opciones": [
"No pueden subdividirse y son siempre de limitación estricta.",
"Pueden subdividirse en soft, donde se puede sobrepasar el límite, o hard cuando no existe un espacio de gracia.",
"Se utilizan exclusivamente para limitar la cantidad de ficheros, no el espacio en disco.",
"Solamente afectan a las transferencias por usuarios anónimos."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "El modo de funcionamiento de un servidor ftp puede ser activo o pasivo. ¿Verdadero o falso?",
"opciones": [
"Verdadero, dependiendo de quién inicie la conexión de datos para evitar bloqueos de cortafuegos.",
"Falso, el único modo existente es el modo activo.",
"Falso, en la actualidad los servidores solo admiten el modo pasivo.",
"Verdadero, pero el modo pasivo solo es compatible con redes locales."
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "Los permisos rw-r--r-- identifican:",
"opciones": [
"Los permisos: 655.",
"Los permisos: 644.",
"Los permisos: 544.",
"Los permisos: 744."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "En una comunicación cliente(A)-servidor(B) mediante el cifrado asimétrico, 'A' envía la información cifrada mediante la clave _____ y 'B' la descifra mediante su clave privada.",
"opciones": [
"privada de 'B'",
"privada y pública de 'B'",
"privada y pública de 'A'",
"pública de 'B'"
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "En la consola ftp, los comandos close y disconnect:",
"opciones": [
"Terminan la sesión ftp y salen de la consola ftp.",
"Salen a línea de comandos del sistema operativo temporalmente sin cortar la conexión.",
"Son alias de los comandos qut y ext.",
"Finalizan la sesión ftp sin cerrar la consola ftp."
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "ProFTPD es modular y por lo tanto debe instalarse cada vez que queremos actualizarlo. ¿Verdadero o falso?",
"opciones": [
"Verdadero, requiere reinstalación completa para añadir nuevas funciones.",
"Falso, al ser modular permite activar/desactivar opciones adicionales en su configuración sin reinstalar todo.",
"Verdadero, los módulos están compilados de forma estática obligatoriamente.",
"Falso, no es modular en absoluto."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "El archivo de configuración /etc/proftpd/proftpd.conf permite incorporar otros archivos de configuración mediante la directiva:",
"opciones": [
"Include",
"Require",
"Import",
"LoadModule"
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "En la consola ftp, los comandos ? y help:",
"opciones": [
"No funcionan ambos en la consola ftp, solamente funciona el comando ?.",
"No funcionan ambos en la consola ftp, solamente funciona el comando help.",
"Muestran la información relativa al estado del servidor remoto.",
"Muestran una lista de los comandos disponibles."
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "El cliente ftp FileZilla permite la configuración de plantillas (gestor de sitios). ¿Verdadero o falso?",
"opciones": [
"Verdadero, permite recordar los perfiles y parámetros de las conexiones (sitios).",
"Falso, carece de cualquier función de almacenamiento de sesiones.",
"Verdadero, pero solo a través de la instalación de complementos de terceros.",
"Falso, hay que introducir los datos manualmente cada vez."
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "Asocia la directiva del servidor ProFTPD con su uso: ¿Qué directiva se emplea para definir el fichero de autenticación de usuarios?",
"opciones": [
"Port",
"AuthUserFile",
"DefaultRoot",
"ServerName"
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "¿Qué directiva de ProFTPD se encarga de configurar el nombre que se muestra en la conexión de los usuarios?",
"opciones": [
"TimeoutIdle",
"RequireValidShell",
"AuthUserFile",
"ServerName"
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "Un archivo de imagen .jpg puede transferirse como:",
"opciones": [
"Tipo de archivo ascii.",
"Texto plano si no supera los 10 KB.",
"Tipo de archivo binary.",
"Cualquiera de los anteriores sin pérdida de calidad."
],
"correcta": 2
},
{
        "tema": "Examen Online tema 4",
        "pregunta": "¿Cuál es el único atributo de una entrada en LDAP que, según la teoría y su definición de clases, no puede eliminarse en sí mismo?",
        "opciones": [
            "uid (User ID)",
            "dn (Distinguished Name)",
            "objectClass",
            "cn (Common Name)"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En la organización de un servidor LDAP, ¿qué nombre o siglas recibe exactamente su estructura jerárquica en forma de árbol?",
        "opciones": [
            "DN (Nombre Distinguible)",
            "CN (Nombre Común)",
            "RDN (Nombre Completo Relativo)",
            "DIT (Árbol de Directorios de la Información)"
        ],
        "correcta": 3
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En la administración de un directorio LDAP, ¿qué comando se emplea exclusivamente para añadir nuevas entradas (inyectarlas) y no para modificarlas?",
        "opciones": [
            "ldapsearch",
            "ldapmodify",
            "ldapadd",
            "slapdtest"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Es cierto que el servidor DNS permite traducir una IP a su nombre de dominio correspondiente únicamente cuando es una IP versión 4?",
        "opciones": [
            "Sí, puesto que la IP versión 6 no lo permite.",
            "Sí, mediante resolución inversa exclusiva del dominio local.",
            "No, porque también proporciona un proceso de resolución inversa para el Protocolo de Internet versión 6 (IPv6) usando el dominio ip6.arpa.",
            "Sí, mediante resolución directa de tipo AAAA."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué característica define a un servicio de directorio electrónico en cuanto a la actualización de sus datos frente a un directorio impreso tradicional?",
        "opciones": [
            "Es estático.",
            "Es inflexible.",
            "Es dinámico, permitiendo consultas y actualizaciones en tiempo real.",
            "Es inseguro."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "A diferencia de un directorio tradicional que presenta problemas para reorganizar o añadir nuevos campos de información sobre la marcha, se dice que un servicio de directorio electrónico es:",
        "opciones": [
            "Flexible, ya que permite localizar la información de distintas maneras y modificar cualquier contenido al instante.",
            "Inflexible",
            "Difícilmente configurable",
            "Secuencial"
        ],
        "correcta": 0
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En lo que respecta a la gestión y el acceso a la información confidencial, ¿qué cualidad describe mejor a un servicio de directorio electrónico?",
        "opciones": [
            "Totalmente público sin control",
            "Vulnerable por defecto",
            "Seguro, porque permite controlar el acceso a la información exigiendo claves para obtenerla.",
            "Inseguro"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En el funcionamiento del cliente DNS, al realizar consultas recursivas, ¿qué espera obtener exactamente el cliente del servidor consultado?",
        "opciones": [
            "Quiere que el servidor DNS no use recursividad y sí iteración.",
            "Está interesado en la mejor respuesta inmediata sin contactar a otros servidores.",
            "Quiere que el servidor DNS le resuelva totalmente la consulta, asumiendo la asistencia de otros servidores si fuera necesario.",
            "Siempre solicita anteriormente una consulta iterativa."
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "¿Qué ventaja en el rendimiento general tiene para un servidor DNS realizar y completar procesos de consultas recursivas por todo el árbol?",
        "opciones": [
            "Libera instantáneamente la memoria RAM del servidor.",
            "Da lugar a que la caché del servidor se pueda ver beneficiada de mucha información obtenida sobre el espacio de nombres de dominio.",
            "Evita por completo el uso posterior de los servidores raíz DNS en todo el mundo.",
            "Limita la necesidad de utilizar el protocolo UDP en la red local."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "Si quisieras administrar y añadir un usuario o grupo en un servidor OpenLDAP de forma sencilla sin tener que crear manualmente los archivos LDIF, en caso de existir e instalarse, podrías utilizar la suite de comandos de nombre:",
        "opciones": [
            "ldapadduser",
            "slapadd",
            "ldapscripts",
            "ldapmodify"
        ],
        "correcta": 2
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "En cuanto a las capacidades del comando 'dig' al realizar consultas al servidor DNS, ¿qué afirmación es correcta?",
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
        "pregunta": "En comparación con la gestión de nombres utilizando el fichero local /etc/hosts, ¿qué nos permite un servidor DNS en una red?",
        "opciones": [
            "El servidor DNS, a diferencia del fichero /etc/hosts, no permite una gestión centralizada.",
            "El servidor DNS permite una gestión centralizada y dinámica que facilita las actualizaciones sin tener que editar los ficheros equipo por equipo.",
            "Ambos sistemas ofrecen exactamente el mismo nivel de descentralización de la información.",
            "El servidor DNS impide la resolución inversa local."
        ],
        "correcta": 1
    },
    {
        "tema": "Examen Online tema 4",
        "pregunta": "El protocolo LDAP fue diseñado y surge como una alternativa mucho más ligera, simple y funcional frente a DAP, ¿de qué estándar formaba parte este último protocolo?",
        "opciones": [
            "IPv4",
            "X.400",
            "X.500",
            "IEEE 802.11"
        ],
        "correcta": 2
    },
    {
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 755 identifican:",
"opciones": [
"Los permisos: rwxr--r--",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-r--r--",
"Los permisos: rwxrw-rw-"
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rwxr-xr-x identifican:",
"opciones": [
"Los permisos: 777.",
"Los permisos: 644.",
"Los permisos: 755.",
"Los permisos: 750."
],
"correcta": 2
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rw-r--r-- identifican:",
"opciones": [
"Los permisos: 655.",
"Los permisos: 644.",
"Los permisos: 544.",
"Los permisos: 744."
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 644 identifican:",
"opciones": [
"Los permisos: rw-r--r--",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-rw-rw-",
"Los permisos: r--r--r--"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 777 identifican:",
"opciones": [
"Los permisos: rwx------",
"Los permisos: rw-rw-rw-",
"Los permisos: rwxr-xr-x",
"Los permisos: rwxrwxrwx"
],
"correcta": 3
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rwxrwxrwx identifican:",
"opciones": [
"Los permisos: 666.",
"Los permisos: 777.",
"Los permisos: 755.",
"Los permisos: 700."
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 600 identifican:",
"opciones": [
"Los permisos: r--------",
"Los permisos: rw-r--r--",
"Los permisos: rw-------",
"Los permisos: rwx------"
],
"correcta": 2
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rw------- identifican:",
"opciones": [
"Los permisos: 644.",
"Los permisos: 600.",
"Los permisos: 400.",
"Los permisos: 700."
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 400 identifican:",
"opciones": [
"Los permisos: r--------",
"Los permisos: rw-------",
"Los permisos: r-xr-xr-x",
"Los permisos: --------w-"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos r-------- identifican:",
"opciones": [
"Los permisos: 200.",
"Los permisos: 400.",
"Los permisos: 600.",
"Los permisos: 100."
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 666 identifican:",
"opciones": [
"Los permisos: r--r--r--",
"Los permisos: rw-rw-rw-",
"Los permisos: rwxrwxrwx",
"Los permisos: rw-r--r--"
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rw-rw-rw- identifican:",
"opciones": [
"Los permisos: 777.",
"Los permisos: 644.",
"Los permisos: 222.",
"Los permisos: 666."
],
"correcta": 3
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 700 identifican:",
"opciones": [
"Los permisos: rwx------",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-------",
"Los permisos: rwxrwxrwx"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rwx------ identifican:",
"opciones": [
"Los permisos: 755.",
"Los permisos: 700.",
"Los permisos: 600.",
"Los permisos: 400."
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 750 identifican:",
"opciones": [
"Los permisos: rwxr-xr-x",
"Los permisos: rw-r-----",
"Los permisos: rwxrw-r--",
"Los permisos: rwxr-x---"
],
"correcta": 3
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rwxr-x--- identifican:",
"opciones": [
"Los permisos: 755.",
"Los permisos: 740.",
"Los permisos: 750.",
"Los permisos: 700."
],
"correcta": 2
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 444 identifican:",
"opciones": [
"Los permisos: r--r--r--",
"Los permisos: rwxrwxrwx",
"Los permisos: rw-rw-rw-",
"Los permisos: -w--w--w-"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos r--r--r-- identifican:",
"opciones": [
"Los permisos: 222.",
"Los permisos: 666.",
"Los permisos: 777.",
"Los permisos: 444."
],
"correcta": 3
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 744 identifican:",
"opciones": [
"Los permisos: rwxr--r--",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-r--r--",
"Los permisos: rwxrw-rw-"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos rwxr--r-- identifican:",
"opciones": [
"Los permisos: 755.",
"Los permisos: 644.",
"Los permisos: 744.",
"Los permisos: 700."
],
"correcta": 2
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos 000 identifican:",
"opciones": [
"Los permisos: ---------",
"Los permisos: r--r--r--",
"Los permisos: --x--x--x",
"Los permisos: -w--w--w-"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Los permisos --------- identifican:",
"opciones": [
"Los permisos: 111.",
"Los permisos: 000.",
"Los permisos: 777.",
"Los permisos: 444."
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "En un servidor ProFTPD, los permisos recomendados para el archivo de la clave privada (proftpd.key) son 600. Esto identifica:",
"opciones": [
"Los permisos: r--------",
"Los permisos: rwx------",
"Los permisos: rw-------",
"Los permisos: rw-r--r--"
],
"correcta": 2
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Según la teoría, el certificado público (proftpd.crt) suele tener asignados los permisos 644, que identifican:",
"opciones": [
"Los permisos: rw-r--r--",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-------",
"Los permisos: r--r--r--"
],
"correcta": 0
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Con una directiva umask 022, los directorios creados adquieren permisos 755. Estos permisos identifican:",
"opciones": [
"Los permisos: rwxrwxrwx",
"Los permisos: rwxr-xr-x",
"Los permisos: rwxrw-rw-",
"Los permisos: rw-r--r--"
],
"correcta": 1
},
{
"tema": "Ejemplo de permisos Tema 3",
"pregunta": "Con una directiva umask 022, los ficheros creados en una conexión ftp adquieren permisos 644. Estos identifican:",
"opciones": [
"Los permisos: rw-r--r--",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-rw-rw-",
"Los permisos: rwx------"
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "En la consola ftp, el comando ! se utiliza para:",
"opciones": [
"Terminar la sesión ftp y salir de la consola ftp.",
"Finalizar la sesión ftp sin cerrar la consola ftp.",
"Ejecutar un alias del comando exiture.",
"Salir a línea de comandos del sistema operativo temporalmente sin cortar la conexión. Para volver debes teclear exit."
],
"correcta": 3
},
{
"tema": "Examen online tema 3",
"pregunta": "En el modo activo como en el pasivo el cliente ftp es quién inicia la conexión (de control). ¿Verdadero o falso?",
"opciones": [
"Verdadero, el cliente ftp siempre inicia la solicitud de conexión al servidor.",
"Falso, el servidor es quien inicia siempre la conexión en ambos modos.",
"Falso, en el modo pasivo el servidor inicia la conexión de control.",
"Verdadero, pero solo si la transferencia es de un archivo binario."
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "El protocolo FTP nativo permite cifrar la información entre el cliente y el servidor ftp:",
"opciones": [
"Sí, mediante el método AUTH basic auto.",
"No, la transferencia tiene lugar sin cifrar la información transferida.",
"Sí, independientemente del modo de funcionamiento usado.",
"Sí, siempre y cuando el cliente sea el origen de la información."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "Los permisos 755 identifican:",
"opciones": [
"Los permisos: rwxr--r--",
"Los permisos: rwxr-xr-x",
"Los permisos: rw-r--r--",
"Los permisos: rwxrw-rw-"
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "El servidor ftp ProFTPD permite configurar hosts virtuales:",
"opciones": [
"No, la configuración de hosts virtuales solamente es posible en servidores web.",
"Sí, permite configurar hosts virtuales, por ejemplo, basados en IP o nombre.",
"Sí, pero exclusivamente permite hosts virtuales basados en nombre.",
"Sí, pero solo si se usa el protocolo UDP."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "En una consola ftp, si ejecutamos 'o' corresponde al comando:",
"opciones": [
"open",
"options",
"output",
"out"
],
"correcta": 0
},
{
"tema": "Examen online tema 3",
"pregunta": "Los hosts virtuales basados en IP en ProFTPD permiten:",
"opciones": [
"Configurar en una misma IP varios dominios obligatoriamente.",
"Configurar en un conjunto de IP un único dominio tipo local.",
"Configurar un dominio por host virtual, asignando una IP a cada uno.",
"Configurar dominios independientemente de la IP del servidor ftp siempre y cuando el puerto TCP de escucha sea el 20."
],
"correcta": 2
},
{
"tema": "Examen online tema 3",
"pregunta": "Para ProFTPD existen básicamente dos tipos de cuotas:",
"opciones": [
"No, solamente existen las cuotas limit.",
"Limit y tally. Estando las limit subdivididas en soft y hard.",
"Solamente existen las cuotas tally, divididas en blandas y duras.",
"Limit y upload, sin subdivisiones."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "Dos nombres DNS distintos que identifican a la misma máquina y a la misma IP, pueden servir una configuración ftp distinta mediante el servidor ProFTPD.",
"opciones": [
"No, es imposible para cualquier servidor ftp.",
"Sí, es posible configurando virtualhosts, siempre y cuando cada virtualhost sirva en un puerto TCP distinto.",
"Sí, es posible configurando virtualhosts, pudiendo utilizar exactamente el mismo puerto TCP para todos.",
"No, a menos que se instalen físicamente dos tarjetas de red separadas."
],
"correcta": 1
},
{
"tema": "Examen online tema 3",
"pregunta": "Los clientes ftp solamente confían y permiten la comunicación cifrada con un servidor ftp si ya poseen por defecto en su instalación los certificados digitales del mismo. ¿Verdadero o falso?",
"opciones": [
"Verdadero, si no poseen el certificado por defecto, bloquean la conexión inmediatamente.",
"Falso, el cliente puede pedir confirmación manual al usuario para confiar en un certificado desconocido o autofirmado.",
"Verdadero, siempre y cuando el certificado haya caducado.",
"Falso, los clientes FTP ignoran completamente los certificados digitales."
],
"correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuáles son los tres aspectos fundamentales que conviene documentar en una aplicación?",
    "opciones": [
        "Variables, Constantes y Clases.",
        "Interfaz, Implementación y Toma de decisiones.",
        "Bases de datos, Servidor y Cliente.",
        "Rendimiento, Seguridad y Escalabilidad."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Dentro de la documentación, ¿qué describe la 'interfaz'?",
    "opciones": [
        "Cómo está implementada cada función internamente.",
        "Qué hace una función, qué parámetros se le pasan y qué devuelve.",
        "El análisis de rendimiento y optimización de recursos.",
        "La interfaz gráfica de usuario (HTML/CSS)."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Para quién es tremendamente útil la información de la 'interfaz' documentada?",
    "opciones": [
        "Para las personas que utilizan funciones o clases diseñadas por otros.",
        "Exclusivamente para los administradores de sistemas.",
        "Para los auditores de seguridad de bases de datos.",
        "Para el compilador del código."
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué aspecto de la documentación indica qué algoritmo se utiliza o qué hacen los métodos privados?",
    "opciones": [
        "La interfaz.",
        "La implementación.",
        "La toma de decisiones.",
        "El manual de usuario."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿A quién resulta especialmente interesante la información sobre la 'implementación'?",
    "opciones": [
        "Al usuario final de la aplicación web.",
        "A quienes tengan que depurar o actualizar bloques de código.",
        "A los clientes que compran el software.",
        "A los diseñadores gráficos del equipo."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué documenta la 'toma de decisiones' en un proyecto de software?",
    "opciones": [
        "Los parámetros que devuelve una función.",
        "Por qué se ha implementado la aplicación de determinada forma y no de otra.",
        "El código fuente exacto de las clases privadas.",
        "Las contraseñas de acceso a la base de datos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Normalmente, ¿dónde conviene plasmar la información sobre la 'interfaz'?",
    "opciones": [
        "Oculta dentro de las variables privadas.",
        "En un documento independiente del código fuente (manual de uso).",
        "Únicamente en diagramas de flujo de papel.",
        "En la base de datos de la aplicación."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuál es el principal problema de mantener la documentación en un manual de uso externo al código?",
    "opciones": [
        "Que ocupa demasiado espacio en el disco duro.",
        "Que cada modificación en el código implica reflejarlo en el manual, lo que es un doble trabajo.",
        "Que los usuarios finales pueden leer el código fuente.",
        "Que requiere servidores de bases de datos muy potentes."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para evitar el problema de mantener un manual externo desactualizado, lo ideal sería:",
    "opciones": [
        "Dejar de documentar el código.",
        "Automatizar la generación de documentación a partir del código fuente.",
        "Contratar a una persona solo para escribir manuales en Word.",
        "Escribir el código directamente en el manual."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuál es la herramienta estándar para generar documentación automática en Java?",
    "opciones": [
        "PhpDocumentor.",
        "Doxygen.",
        "Javadoc.",
        "EclipseDoc."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuál es una de las herramientas más utilizadas para documentar código en PHP?",
    "opciones": [
        "Javadoc.",
        "PhpDocumentor.",
        "PHPMaker.",
        "JavaPHP."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Para qué utilizan los entornos de programación modernos los comentarios del código fuente?",
    "opciones": [
        "Para ejecutar el programa más rápido.",
        "Para mostrarlos en el 'autocompletado' de código.",
        "Para compilar las funciones privadas de forma aislada.",
        "Para cifrar el código antes de enviarlo a producción."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "El autocompletado basado en comentarios es imprescindible en lenguajes como PHP porque:",
    "opciones": [
        "No necesita que se declare el tipo del argumento de una función.",
        "Es un lenguaje fuertemente tipado que lo exige.",
        "PHP no soporta programación orientada a objetos.",
        "Es la única forma de que Apache interprete el código."
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué entornos aprovechan los comentarios del código fuente para mostrar información muy útil?",
    "opciones": [
        "Photoshop e Illustrator.",
        "NetBeans o Eclipse.",
        "Word y Excel.",
        "Apache y Nginx."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Tanto NetBeans, Eclipse como phpDocumentor esperan comentarios basados en el estándar de:",
    "opciones": [
        "C++Doc.",
        "JavaDoc.",
        "HTML5.",
        "XML Standard."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Quién podrá aprovechar más y mejor la documentación de nuestro proyecto según la teoría?",
    "opciones": [
        "El cliente final que navega por la web.",
        "Toda persona (o tercera persona) que se acerque a nuestro proyecto.",
        "Únicamente el administrador de redes.",
        "Exclusivamente el creador original del código."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Según los apuntes, la documentación de un proyecto de software...",
    "opciones": [
        "Es secundaria frente a la interfaz gráfica.",
        "Es tan importante como su código.",
        "Solo es necesaria en proyectos de código cerrado.",
        "Debe escribirse siempre en un documento de texto a mano."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué tipo de licencia o distribución tiene PhpDocumentor?",
    "opciones": [
        "Es software propietario de pago.",
        "Es de uso exclusivo para entornos Windows.",
        "Es software libre.",
        "Es una herramienta que requiere pago por suscripción."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué significan las siglas CLI en el contexto de las formas de utilizar PhpDocumentor?",
    "opciones": [
        "Code Line Interface.",
        "Command Line Interpreter.",
        "Common Logic Interface.",
        "Computer Language Index."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Además de la línea de comandos y la interfaz web, ¿de qué otra forma se puede utilizar phpDocumentor?",
    "opciones": [
        "A través de una aplicación móvil iOS.",
        "Desde código, incluyéndolo dentro de scripts propios en PHP.",
        "Mediante una extensión del navegador Chrome.",
        "A través de comandos de voz."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Al configurar phpDocumentor, ¿qué ocurre con los subdirectorios dentro del directorio de código que indicamos?",
    "opciones": [
        "Deben indicarse uno por uno manualmente.",
        "Son ignorados por defecto.",
        "Se encarga de recorrerlos de forma automática.",
        "Generan un error en la compilación de la documentación."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Opcionalmente, al ejecutar phpDocumentor, se pueden indicar los paquetes que deseamos documentar mediante la etiqueta:",
    "opciones": [
        "@module",
        "@folder",
        "@group",
        "@package"
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué se mostrará si indicamos en phpDocumentor que la documentación generada será 'interna'?",
    "opciones": [
        "Solo los métodos públicos.",
        "Los bloques private y los comentarios @internal.",
        "Exclusivamente las variables globales.",
        "Solo el diagrama de bases de datos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuáles son los formatos de salida que puede generar phpDocumentor?",
    "opciones": [
        "HTML, PDF y XML (DocBook).",
        "JPG, PNG y GIF.",
        "DOCX, XLSX y PPTX.",
        "EXE, BAT y SH."
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué ventaja tiene generar la salida de phpDocumentor en formato XML (DocBook)?",
    "opciones": [
        "Que ocupa mucho menos espacio que un archivo de texto plano.",
        "Que a partir de él podemos transformar a cualquier otro usando XSLT.",
        "Que es el único formato que se puede leer en un móvil.",
        "Que se ejecuta como un programa independiente."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuál es una herramienta alternativa a phpDocumentor que también sirve para documentar PHP?",
    "opciones": [
        "PHP-DocGen.",
        "JavaDoc.",
        "Doxygen.",
        "XSLT-Doc."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuál es la principal diferencia técnica entre Doxygen y phpDocumentor?",
    "opciones": [
        "Doxygen solo genera HTML y phpDocumentor solo PDF.",
        "Doxygen es un programa, mientras que phpDocumentor es código PHP.",
        "Doxygen requiere un servidor web y phpDocumentor no.",
        "Doxygen es de pago y phpDocumentor es gratuito."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué requisito tiene phpDocumentor frente a Doxygen debido a su naturaleza?",
    "opciones": [
        "No necesita PHP, pero sí un servidor Java.",
        "Genera la documentación con PHP, por lo que necesita PHP instalado.",
        "Requiere compilación manual en C++.",
        "Solo funciona en sistemas Windows 10."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En phpDocumentor, la documentación se distribuye en bloques denominados:",
    "opciones": [
        "CodeBlocks.",
        "DocBlock.",
        "PHP-Blocks.",
        "CommentSets."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Dónde se colocan siempre los 'DocBlocks' en el código PHP?",
    "opciones": [
        "Al final del fichero, tras cerrar la etiqueta de PHP.",
        "Al principio del fichero, en la primera línea.",
        "Justo antes del elemento al que documentan.",
        "Dentro del cuerpo de la función a documentar."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Con qué caracteres debe empezar obligatoriamente un DocBlock para ser reconocido por phpDocumentor?",
    "opciones": [
        "//",
        "/*",
        "/**",
        "<!--"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué sucede con las líneas dentro de un DocBlock que NO comienzan con un asterisco (*) en phpDocumentor?",
    "opciones": [
        "Provocan un error fatal de sintaxis.",
        "Son procesadas como código PHP ejecutable.",
        "Se resaltan en color rojo en la documentación.",
        "Son ignoradas."
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "De los siguientes elementos, ¿cuál SÍ puede ser documentado con DocBlocks según los apuntes?",
    "opciones": [
        "Bucles for y while.",
        "Condicionales if/else.",
        "class y function.",
        "Llamadas a echo y print."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Es posible documentar elementos como include/require en phpDocumentor?",
    "opciones": [
        "No, solo clases y métodos.",
        "Sí, están entre los elementos que pueden ser documentados.",
        "Solo en su versión de pago.",
        "Sí, pero solo si están dentro de una clase."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué etiqueta de phpDocumentor usarías si solo deseas generar documentación sobre la interfaz (métodos públicos) pero no sobre la implementación?",
    "opciones": [
        "@public",
        "@ignore",
        "@access 'private'",
        "@hide"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Para qué sirve la marca @author en un DocBlock?",
    "opciones": [
        "Para definir la autorización de ejecución del código.",
        "Para indicar el autor del código.",
        "Para asignar permisos de lectura a un archivo.",
        "Para enlazar con el perfil social del programador."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué etiqueta se utiliza en phpDocumentor para proporcionar información sobre derechos de autor?",
    "opciones": [
        "@author",
        "@rights",
        "@copyright",
        "@license"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si un elemento del código no debería utilizarse porque en futuras versiones podría no estar disponible, ¿qué marca usamos?",
    "opciones": [
        "@delete",
        "@warning",
        "@obsolete",
        "@deprecated"
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué funcionalidad específica ofrece la etiqueta @example de phpDocumentor?",
    "opciones": [
        "Imprime el texto en negrita.",
        "Permite especificar la ruta a un fichero y muestra su código resaltado (syntax-highlighted).",
        "Ejecuta una prueba unitaria del código.",
        "Redirige al usuario a la documentación oficial de PHP."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué etiqueta utilizaríamos para evitar que phpDocumentor documente un determinado elemento de forma explícita?",
    "opciones": [
        "@avoid",
        "@exclude",
        "@ignore",
        "@skip"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para incluir información que no debería aparecer en la documentación pública, pero sí en la de desarrolladores, usamos:",
    "opciones": [
        "@internal",
        "@private",
        "@developer",
        "@hidden"
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cómo se incluye un enlace HTTP a un determinado recurso dentro de un DocBlock?",
    "opciones": [
        "Con la marca @href.",
        "Con la marca @url.",
        "Con la marca @link.",
        "Con la marca @web."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué marca se emplea en phpDocumentor para crear enlaces internos a la documentación de otro elemento?",
    "opciones": [
        "@go",
        "@linkto",
        "@see",
        "@internal-link"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "La etiqueta @since se utiliza para indicar:",
    "opciones": [
        "La fecha de la última modificación.",
        "Que el elemento está disponible desde una determinada versión del paquete o distribución.",
        "El tiempo estimado de ejecución de una función.",
        "El momento exacto de la compilación."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Para qué sirve la etiqueta @version en phpDocumentor?",
    "opciones": [
        "Para forzar el uso de PHP 7.",
        "Para indicar la versión actual del elemento.",
        "Para mantener el historial de versiones en Git.",
        "Para comprobar la versión del navegador web."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "De las siguientes etiquetas, ¿cuál se utiliza específicamente para documentar parámetros que recibe una función?",
    "opciones": [
        "@arg",
        "@variable",
        "@input",
        "@param"
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Con qué etiqueta documentamos el valor que devuelve una función?",
    "opciones": [
        "@output",
        "@return",
        "@yield",
        "@result"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Para qué se utiliza la marca @global?",
    "opciones": [
        "Para declarar una variable en la configuración del servidor.",
        "Para especificar el uso de variables globales dentro de una función.",
        "Para traducir la aplicación a múltiples idiomas.",
        "Para aplicar estilos CSS a toda la página web."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Según los apuntes, ¿qué distribución de Linux se utiliza como ejemplo para instalar phpDocumentor?",
    "opciones": [
        "Ubuntu 20.04 LTS.",
        "Debian 6.0.1 Squeeze.",
        "CentOS 7.",
        "Fedora 34."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Como requisito previo a instalar phpDocumentor, si accedemos a http://localhost y Apache funciona, ¿qué mensaje debería aparecer?",
    "opciones": [
        "Welcome to Apache!",
        "Hello World!",
        "It works!",
        "Server is running."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para probar si PHP funciona desde línea de comandos (CLI) ejecutamos: <?php echo 10; ?> | php. ¿Cuál debería ser el resultado?",
    "opciones": [
        "1",
        "0",
        "10",
        "php: command not found"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿En qué carpeta busca Apache por defecto el contenido web según el tema (donde está index.html)?",
    "opciones": [
        "/var/www",
        "/usr/share/nginx",
        "/etc/apache2/htdocs",
        "/home/user/public_html"
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para comprobar que Apache ejecuta código PHP creamos un archivo en el directorio raíz web. ¿Qué nombre se propone en los apuntes?",
    "opciones": [
        "test.php",
        "index.php",
        "phpinfo.php",
        "apache.php"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué código exacto introducimos en el archivo 'phpinfo.php' para mostrar la información del servidor web y PHP?",
    "opciones": [
        "<?php echo phpinfo(); ?>",
        "<?php show_info(); ?>",
        "<?php phpinfo(); ?>",
        "<?php system_info(); ?>"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "El primer paso de instalación de phpDocumentor es instalar un entorno de desarrollo y sistema de distribución de componentes PHP. ¿Cuál es?",
    "opciones": [
        "Composer.",
        "php-pear.",
        "NPM.",
        "APT-PHP."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué comando usamos en Debian para instalar el paquete php-pear?",
    "opciones": [
        "yum install php-pear",
        "apt-get install php-pear",
        "pacman -S php-pear",
        "dpkg -i php-pear"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué comando configurará el directorio donde queremos que phpDocumentor trabaje a través de pear?",
    "opciones": [
        "pear config-set data_dir /var/www",
        "pear update dir /var/www",
        "phpdoc --dir /var/www",
        "apt-get configure pear /var/www"
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para instalar PhpDocumentor y TODAS sus dependencias utilizando pear, el comando es:",
    "opciones": [
        "pear install PhpDocumentor",
        "pear install --alldeps PhpDocumentor",
        "pear add PhpDocumentor --all",
        "apt-get install --alldeps PhpDocumentor"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Según los apuntes, en lugar de usar pear, ¿de qué otra forma directa se puede descargar el paquete PhpDocumentor?",
    "opciones": [
        "Haciendo un git clone a github.",
        "Usando wget a sourceforge.net y luego descomprimiendo el tgz.",
        "Mediante composer require phpdocumentor/phpdocumentor.",
        "Descargándolo desde el panel de control de Apache."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Una vez terminada la instalación, se crea un directorio de salida para phpDocumentor (ej. /var/www/docs). ¿A qué usuario debemos asignarle la propiedad?",
    "opciones": [
        "root",
        "alumno",
        "www-data",
        "apache-user"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué comando empleamos para dar propiedad del directorio /var/www/docs/ al usuario del servidor web?",
    "opciones": [
        "chmod 777 /var/www/docs/",
        "chown www-data /var/www/docs/",
        "usermod -aG www-data root",
        "chgrp admin /var/www/docs/"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿A qué URL accederíamos en el navegador para comprobar la instalación y usar la interfaz web de phpDocumentor en local?",
    "opciones": [
        "http://localhost/PhpDocumentor/",
        "http://localhost/docs/",
        "http://127.0.0.1:8080/phpdoc",
        "http://localhost/admin"
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Según la nota 'Debes conocer', para que funcione bien la instalación en Ubuntu (versión 14.04), hay que añadir un parámetro a pear install. ¿Cuál es?",
    "opciones": [
        "--force",
        "--nocompress",
        "--ignore-errors",
        "--ubuntu-fix"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si generamos la documentación desde línea de comandos, ¿qué parámetro se usa para indicar el formato de la documentación generada?",
    "opciones": [
        "-d",
        "-t",
        "-f",
        "-o"
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En línea de comandos (phpdoc), ¿qué indica el parámetro '-d'?",
    "opciones": [
        "El formato de salida de la documentación.",
        "La carpeta donde están los proyectos PHP origen.",
        "La carpeta donde se almacena la documentación de destino.",
        "Si se muestran o no los mensajes de depuración (debug)."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En línea de comandos (phpdoc), ¿para qué se utiliza el parámetro '-t'?",
    "opciones": [
        "Para establecer un temporizador límite de ejecución (timeout).",
        "Para generar la documentación de tutoriales.",
        "Para indicar la carpeta de destino donde se almacenan los archivos generados (target).",
        "Para traducir la documentación (translate)."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si ejecutamos el comando '#phpdoc -o HTML:frames:phpedit -d /var/www/ -t /var/www/docs/', ¿qué sucederá?",
    "opciones": [
        "Se borrará el directorio /var/www/docs/ y se creará un archivo HTML único.",
        "Generará la documentación de /var/www en formato HTML y la guardará en /var/www/docs/.",
        "Generará la documentación de /var/www/docs/ y la guardará en /var/www/.",
        "Producirá un error porque le falta el parámetro -p."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué comando emplearíamos para ver la ayuda y obtener información de los múltiples parámetros de phpdoc?",
    "opciones": [
        "phpdoc --info",
        "phpdoc -help",
        "phpdoc -h",
        "man phpdoc"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para configurar phpDocumentor a través de su entorno web, debemos ir a la ruta 'PhpDocumentor/user' y duplicar un archivo. ¿Qué archivo?",
    "opciones": [
        "config.php",
        "settings.xml",
        "default.ini",
        "phpdoc.conf"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Una vez duplicado 'default.ini' con un nuevo nombre (ej. mi_proyecto.ini), debemos editarlo para modificar la línea de 'target'. ¿Qué define 'target'?",
    "opciones": [
        "El formato en el que se generará la salida.",
        "La ruta donde se encuentran los archivos fuente del proyecto.",
        "El nombre del proyecto a documentar.",
        "La ruta donde se guardará la documentación generada."
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En el mismo archivo .ini, ¿qué define la variable 'directory'?",
    "opciones": [
        "La ruta donde guardar la documentación generada.",
        "La ruta donde se encuentran los archivos del proyecto (código fuente).",
        "El directorio de instalación de Apache.",
        "La carpeta de estilos de phpDocumentor."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Dentro de la interfaz web de phpDocumentor, ¿en qué opción del menú debemos entrar para seleccionar nuestro archivo '.ini' personalizado?",
    "opciones": [
        "Output",
        "Files",
        "Config",
        "Options"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Tras seleccionar el archivo .ini en la interfaz web, ¿qué botón debemos presionar para que comience a crearse la documentación?",
    "opciones": [
        "Start",
        "Generate",
        "Run",
        "Go"
    ],
    "correcta": 3
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para visualizar la documentación final generada, ¿qué archivo debemos abrir en el directorio de salida?",
    "opciones": [
        "main.php",
        "index.html",
        "default.htm",
        "doc.pdf"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "phpDocumentor es capaz de crear su propia documentación; sus ficheros fuente de documentación están en una subcarpeta llamada:",
    "opciones": [
        "docs",
        "manuals",
        "tutorials",
        "guides"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si queremos compilar los tutoriales propios de phpDocumentor, ¿qué debemos especificar como directorio de entrada a phpdoc?",
    "opciones": [
        "La carpeta '/var/www'.",
        "El archivo 'default.ini'.",
        "El directorio raíz de phpDocumentor.",
        "El directorio '/tutorials' de forma exclusiva."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Es posible usar phpDocumentor para compilar SÓLO los tutoriales sin procesar el código fuente principal vinculado?",
    "opciones": [
        "Sí, usando el flag -t en consola.",
        "No, no es posible compilar sólo tutoriales (deben vincularse a algún código fuente).",
        "Sí, pero únicamente desde la interfaz web.",
        "Sí, borrando previamente los archivos .php."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para compilar la documentación propia de la herramienta, ¿qué se debe especificar como nombre del proyecto?",
    "opciones": [
        "tutorials",
        "my_project",
        "phpDocumentor",
        "default"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Según la cita de Rich Cook mencionada en los apuntes, 'La programación es una carrera entre ingenieros de software intentando construir programas a prueba de idiotas y...'",
    "opciones": [
        "...el universo intentando producir cada vez mejores ordenadores.",
        "...el universo intentando producir cada vez más grandes y mejores idiotas.",
        "...el cliente pidiendo cambios constantemente.",
        "...los plazos de entrega que siempre se retrasan."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En términos de documentación, si la implementación cambia de forma drástica, pero los parámetros de entrada y salida no se modifican, ¿qué tipo de documentación seguramente NO cambiará?",
    "opciones": [
        "La de la toma de decisiones.",
        "La de la implementación.",
        "La de la interfaz.",
        "El DocBlock interno de las variables privadas."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "El formato estándar usado por phpDocumentor es similar a otra herramienta. ¿A cuál?",
    "opciones": [
        "A Javadoc.",
        "A HTML5 validator.",
        "A PHPUnit.",
        "A MySQL Workbench."
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si un desarrollador incluye una nota explicando por qué se eligió usar un array en vez de un objeto para ahorrar memoria, esta información pertenece a:",
    "opciones": [
        "Interfaz.",
        "Implementación.",
        "Toma de decisiones.",
        "Despliegue."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué problema fundamental ocurre cuando tenemos un 'manual de uso' desconectado del código fuente?",
    "opciones": [
        "Que los programadores no saben leer.",
        "Que requiere software propietario para visualizarlo.",
        "Que al realizar actualizaciones o corregir errores en el código, el manual queda desactualizado si no se hace doble trabajo.",
        "Que el servidor Apache se bloquea al intentar servirlo."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En phpDocumentor, las variables globales dentro de un script PHP pueden ser documentadas. ¿Verdadero o falso?",
    "opciones": [
        "Falso, phpDocumentor solo lee clases orientadas a objetos.",
        "Verdadero, las variables globales están entre los elementos que pueden ser documentados.",
        "Falso, arrojan un error de seguridad.",
        "Solo es verdadero si usamos Doxygen."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Cuál de las siguientes combinaciones representa la forma correcta de abrir y cerrar un comentario de documentación para phpDocumentor (DocBlock)?",
    "opciones": [
        "/* y */",
        "// y //",
        "/** y */",
        "<!-- y -->"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "La etiqueta @access 'private' tiene el efecto principal de:",
    "opciones": [
        "Asegurar la red contra ataques maliciosos.",
        "Ocultar esa porción de código para que no se genere documentación (a menos que se fuerce documentación interna).",
        "Denegar permisos de escritura en el servidor de archivos.",
        "Encriptar el archivo PHP resultante."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si queremos mostrar una advertencia de que una clase concreta está obsoleta, escribiremos:",
    "opciones": [
        "@warning obsoleta",
        "@deprecated obsoleta",
        "@alert obsoleta",
        "@obsolete true"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En un equipo de trabajo, la herramienta de documentación automática resulta crucial especialmente porque:",
    "opciones": [
        "Acelera la velocidad del servidor de bases de datos.",
        "Ayuda a saber qué hacen las partes desarrolladas por otras personas, facilitando el uso de esas funciones.",
        "Corrige los errores de sintaxis automáticamente.",
        "Reemplaza a los analistas de sistemas."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Qué ocurre si dentro de un DocBlock incluimos una línea de texto que NO empiece por el carácter '*' ?",
    "opciones": [
        "Produce un error fatal que detiene la generación de la documentación.",
        "Se interpreta como una variable global.",
        "Dicha línea es ignorada por phpDocumentor.",
        "Se imprime en rojo llamativo en la web generada."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Al definir la configuración de phpDocumentor, si queremos omitir el código fuente no público, generaremos la documentación en modo:",
    "opciones": [
        "Internal.",
        "Pública (solo interfaz).",
        "Depuración profunda.",
        "Strict PHP."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Cuando phpDocumentor encuentra la etiqueta @example apuntando a un archivo, muestra el código de dicho archivo...",
    "opciones": [
        "...ejecutando su contenido en tiempo real.",
        "...con resaltado de sintaxis (syntax-highlighted).",
        "...ocultando las contraseñas que tenga dentro.",
        "...solamente si es código HTML."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Puede Doxygen generar documentación de código PHP?",
    "opciones": [
        "No, solo puede documentar C y C++.",
        "Sí, es una alternativa a phpDocumentor que también soporta PHP.",
        "Sí, pero requiere licencia comercial.",
        "No, está obsoleto desde 2010."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "El comando 'pear config-set data_dir /var/www' sirve fundamentalmente para:",
    "opciones": [
        "Crear la carpeta /var/www en el sistema.",
        "Reiniciar el servicio de base de datos MySQL.",
        "Decirle a PEAR dónde queremos que phpDocumentor deba trabajar respecto al directorio de contenido web.",
        "Eliminar los datos de la carpeta /var/www."
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Al usar la interfaz web 'docBuilder' de phpDocumentor, la pestaña donde definimos si usar 'default.ini' o 'mi_proyecto.ini' es:",
    "opciones": [
        "Config",
        "Introduction",
        "Output",
        "Files"
    ],
    "correcta": 0
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "La etiqueta @see en phpDocumentor se parece a @link, pero a diferencia de @link (@link enlaza a HTTP externa), @see se usa para:",
    "opciones": [
        "Comprobar visualmente los errores de sintaxis.",
        "Crear enlaces internos a la documentación de otro elemento del proyecto.",
        "Abrir la cámara web del desarrollador.",
        "Generar un documento PDF anexo."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "El parámetro '--alldeps' al ejecutar 'pear install --alldeps PhpDocumentor' significa:",
    "opciones": [
        "All deployments.",
        "All dependencies (instalar phpDocumentor y también sus dependencias).",
        "Allow deprecations (ignorar elementos obsoletos).",
        "Allocate depth (recorrer todas las carpetas)."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para documentar un bloque 'class', ¿es válido usar phpDocumentor?",
    "opciones": [
        "No, phpDocumentor solo funciona con funciones.",
        "Sí, 'class' y 'class vars' son elementos documentables.",
        "No, para las clases se debe usar obligatoriamente Javadoc.",
        "Sí, pero solo en la versión CLI, no en la web."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "¿Por qué motivo NetBeans y Eclipse se convierten en herramientas imprescindibles en lenguajes como PHP según los apuntes?",
    "opciones": [
        "Porque compilan PHP a binario mucho más rápido.",
        "Porque ofrecen autocompletado leyendo los comentarios, supliendo la falta de declaración estricta de tipos de argumentos en PHP.",
        "Porque incluyen un servidor Apache embebido en la aplicación.",
        "Porque impiden guardar archivos con errores lógicos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si quisieras indicar que una función está disponible a partir de la versión 2.5 de tu proyecto, ¿qué etiqueta usarías en su DocBlock?",
    "opciones": [
        "@version 2.5",
        "@release 2.5",
        "@since 2.5",
        "@build 2.5"
    ],
    "correcta": 2
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "En un entorno Debian, si descargamos phpDocumentor comprimido con wget (tar.gz o tgz), ¿con qué comando se descomprimiría usualmente según los conocimientos básicos de sistema (aunque el apunte muestre descargar y usar)?",
    "opciones": [
        "unzip archivo.zip",
        "tar -xzf (o similar para descomprimir el tgz/tar.gz).",
        "rar x archivo.rar",
        "pear extract archivo"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Para la generación de la documentación web, se recomienda duplicar 'default.ini' desde la carpeta:",
    "opciones": [
        "PhpDocumentor/admin",
        "PhpDocumentor/user",
        "PhpDocumentor/config",
        "PhpDocumentor/bin"
    ],
    "correcta": 1
},
{
    "tema": "Unidad de Trabajo 5 apartados 1 y 2",
    "pregunta": "Si una etiqueta de bloque DocBlock está mal escrita (ej. @paramm en vez de @param), ¿qué es lo más probable que haga phpDocumentor según el estándar general?",
    "opciones": [
        "Formateará el disco duro por seguridad.",
        "La ignorará o la mostrará como texto normal, no reconociendo su significado especial.",
        "Corregirá automáticamente la palabra por inteligencia artificial.",
        "Enviará un correo al administrador de red."
    ],
    "correcta": 1
},{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué es Javadoc según el material proporcionado? [1]",
    "opciones": [
        "Un entorno de desarrollo integrado (IDE).",
        "Una utilidad de Sun Microsystems para generar APIs en formato HTML.",
        "Un gestor de bases de datos para aplicaciones web.",
        "Un lenguaje de programación orientado a objetos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cuál es el formato de salida predeterminado de la documentación generada por Javadoc? [1]",
    "opciones": [
        "PDF.",
        "XML.",
        "HTML.",
        "DOCX."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cuál es la finalidad principal de utilizar Javadoc al programar? [2]",
    "opciones": [
        "Evitar que la documentación se quede rápidamente obsoleta manteniendo los comentarios junto al código.",
        "Aumentar la velocidad de compilación del programa Java.",
        "Cifrar el código fuente para que no sea legible por terceros.",
        "Comprimir los archivos .java para que ocupen menos espacio."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Dónde se pide a los programadores de Java que escriban la documentación básica para Javadoc? [2]",
    "opciones": [
        "En un documento de Word externo.",
        "En una wiki compartida en la intranet.",
        "En el propio código fuente, mediante comentarios especiales.",
        "En un archivo de configuración XML independiente."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué extrae exactamente la herramienta Javadoc para generar la documentación? [2]",
    "opciones": [
        "Las variables privadas de la clase.",
        "Los comentarios incrustados en el código fuente de los programas Java.",
        "Las sentencias SQL ejecutadas.",
        "Los mensajes de error de la consola."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cómo interpreta el formato HTML resultante de Javadoc la comunidad de desarrolladores? [3]",
    "opciones": [
        "Como un formato obsoleto y en desuso.",
        "Como el formato de toda la documentación estándar de Java provista por Sun.",
        "Como un formato inestable que requiere conversores externos.",
        "Como exclusivo para plataformas Linux."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Con qué caracteres deben comenzar obligatoriamente los comentarios interpretados por Javadoc? [3]",
    "opciones": [
        "/*",
        "//",
        "/**",
        "<!--"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Con qué caracteres terminan los comentarios de Javadoc? [3]",
    "opciones": [
        "*/",
        "***/",
        "//",
        "-->"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Dentro de un bloque de comentario Javadoc, ¿por qué carácter comienza habitualmente cada línea? [3]",
    "opciones": [
        "#",
        "*",
        "-",
        ">"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Es posible incluir código HTML dentro de los comentarios de Javadoc? [3]",
    "opciones": [
        "No, generará un error de compilación.",
        "Sí, se puede escribir código HTML y operadores para que los interprete Javadoc.",
        "Solo en la versión comercial de Javadoc.",
        "Sí, pero únicamente la etiqueta <b>."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué símbolo se utiliza generalmente para preceder a las etiquetas o operadores de Javadoc? [4]",
    "opciones": [
        "&",
        "%",
        "@",
        "$"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Las etiquetas de Javadoc son sensibles a mayúsculas y minúsculas? [4]",
    "opciones": [
        "No, dan el mismo resultado en cualquier formato.",
        "Sí, son sensibles a mayúsculas-minúsculas.",
        "Solo en sistemas operativos Windows.",
        "Depende de la versión del JDK instalada."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Dónde debe situarse exactamente una etiqueta Javadoc para que la herramienta la interprete como tal? [4]",
    "opciones": [
        "En cualquier parte del comentario, sin restricciones.",
        "Al final de la línea, después de un punto y coma.",
        "Siempre al principio de una línea, o sólo precedida por espacio(s) y asterisco(s).",
        "Únicamente en la primera línea del archivo .java."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué sucede si una etiqueta Javadoc no se ubica correctamente al principio de la línea o tras un asterisco? [4]",
    "opciones": [
        "Se elimina automáticamente del código.",
        "El programa no compila.",
        "La herramienta Javadoc la interpretará como texto normal.",
        "El archivo HTML generado se corrompe."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cuáles son los dos tipos principales de etiquetas en Javadoc? [5]",
    "opciones": [
        "Globales y locales.",
        "Públicas y privadas.",
        "De bloque e inline (en línea).",
        "Estructurales y visuales."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Dónde se pueden utilizar exclusivamente las etiquetas de bloque en Javadoc? [5]",
    "opciones": [
        "En cualquier parte de la descripción principal.",
        "Sólo en la sección de etiquetas que sigue a la descripción principal.",
        "Fuera de los comentarios, en el código ejecutable.",
        "Antes de importar las librerías."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué formato visual define a una etiqueta de bloque? [5]",
    "opciones": [
        "{@etiqueta}",
        "@etiqueta",
        "<etiqueta>",
        "$$etiqueta$$"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Dónde está permitido utilizar las etiquetas inline en Javadoc? [5]",
    "opciones": [
        "Únicamente en la sección de variables de clase.",
        "Sólo en la sección final de etiquetas.",
        "Tanto en la descripción principal como en la sección de etiquetas.",
        "Nunca dentro de un comentario Javadoc."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cuál es la sintaxis correcta para escribir una etiqueta inline en Javadoc? [5]",
    "opciones": [
        "[@tag]",
        "(@tag)",
        "{@tag}",
        "<@tag>"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En el ejemplo del tema, ¿sobre qué sistema operativo se realiza la instalación de Javadoc y los IDEs? [6]",
    "opciones": [
        "Ubuntu 20.04 LTS.",
        "Debian 6.0.1 Squeeze.",
        "Windows 10 Pro.",
        "macOS Catalina."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué dos entornos de desarrollo integrados (IDEs) se mencionan como los de mayor crecimiento para programar en Java? [7]",
    "opciones": [
        "IntelliJ IDEA y BlueJ.",
        "Visual Studio y Xcode.",
        "Eclipse y NetBeans.",
        "Sublime Text y Atom."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué pilar fundamental se menciona como base para el crecimiento y evolución de IDEs como Eclipse o NetBeans? [7]",
    "opciones": [
        "El soporte de hardware avanzado.",
        "Su comunidad de desarrolladores.",
        "El respaldo exclusivo de Microsoft.",
        "La falta de alternativas en el mercado."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Según el texto, ¿qué presiona a los programadores a mejorar los IDEs continuamente? [8]",
    "opciones": [
        "El pago por licencias comerciales.",
        "La competencia por ser el mejor IDE ante el avance de nuevas tecnologías.",
        "Las leyes internacionales de software.",
        "El límite de memoria RAM de los equipos antiguos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué comando se indica para instalar Eclipse desde un terminal en Debian? [8]",
    "opciones": [
        "yum install eclipse",
        "apt-get install eclipse",
        "pacman -S eclipse",
        "dpkg -i eclipse.deb"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Para instalar NetBeans, ¿qué método de obtención se sugiere en el documento? [8]",
    "opciones": [
        "Usar el comando apt-get directamente.",
        "Acceder a la página de NetBeans para realizar la descarga.",
        "Instalarlo a través del gestor Synaptic exclusivamente.",
        "Compilarlo desde su código fuente en GitHub."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Al descargar NetBeans desde su web, ¿qué plataforma y arquitectura se seleccionan en el ejemplo? [9]",
    "opciones": [
        "Windows (x86/x64).",
        "macOS (ARM).",
        "Linux (x86/x64).",
        "Solaris (SPARC)."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué comando se usa para crear la carpeta de instalación de NetBeans según los apuntes? [9]",
    "opciones": [
        "mkdir /usr/NetBeans69",
        "touch /usr/NetBeans69",
        "nano /usr/NetBeans69",
        "rmdir /usr/NetBeans69"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Tras crear la carpeta para NetBeans, ¿qué comando asigna los permisos de propietario al usuario 'alumno' de forma recursiva? [9]",
    "opciones": [
        "chmod 777 /usr/NetBeans69",
        "chown -R alumno /usr/NetBeans69",
        "useradd alumno /usr/NetBeans69",
        "usermod -aG alumno /usr/NetBeans69"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cómo se llama el archivo descargado para instalar NetBeans en el ejemplo de los apuntes? [9]",
    "opciones": [
        "netbeans-install.deb",
        "NetBeans-6.9-ml-linux.sh",
        "netbeans_setup.exe",
        "netbeans.tar.gz"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué comando se ejecuta para asignar permisos de ejecución al instalador de NetBeans? [10]",
    "opciones": [
        "chown root NetBeans-6.9-ml-linux.sh",
        "chmod a+x /usr/NetBeans69/NetBeans-6.9-ml-linux.sh",
        "attrib +x NetBeans-6.9-ml-linux.sh",
        "chmod 644 NetBeans-6.9-ml-linux.sh"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Para ejecutar el binario de instalación de NetBeans desde la consola, se utiliza el comando: [10]",
    "opciones": [
        "bash ./install",
        "sh NetBeans-6.9-ml-linux.sh",
        "run NetBeans",
        "start NetBeans-6.9-ml-linux.sh"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Una vez ejecutado el instalador de NetBeans y aceptada la licencia, ¿qué interfaz aparece para continuar? [10]",
    "opciones": [
        "Una consola de texto en blanco y negro.",
        "Un 'wizard' o asistente de configuración.",
        "Un formulario web en el navegador.",
        "Un editor de código."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Además de generar Javadoc, ¿qué otra funcionalidad útil ofrecen IDEs como Eclipse y NetBeans basada en los comentarios? [10]",
    "opciones": [
        "El completado de código javadoc.",
        "La traducción automática del código.",
        "La encriptación de la base de datos.",
        "La subida automática a producción."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En Eclipse, ¿en qué menú se encuentra la opción 'Generate Javadoc...'? [11]",
    "opciones": [
        "File",
        "Edit",
        "Project",
        "Window"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Al usar 'Generate Javadoc...' en Eclipse, ¿qué parámetros principales permite configurar la ventana? [11]",
    "opciones": [
        "El puerto de red y el servidor DNS.",
        "El proyecto del que generar documentación y la ruta de la carpeta de destino.",
        "La contraseña del administrador de base de datos.",
        "El lenguaje de programación al que se traducirá el código."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué archivo HTML se genera comúnmente como punto de entrada para iniciar la navegación de la documentación Javadoc? [12]",
    "opciones": [
        "main.html",
        "index.html",
        "default.htm",
        "home.html"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si no se usa un IDE, ¿cómo se puede ejecutar javadoc directamente sobre el código fuente? [12]",
    "opciones": [
        "Desde el panel de control de Windows.",
        "Yendo al directorio donde se instaló el JDK y ejecutando javadoc por consola.",
        "Instalando un servidor Apache y ejecutando un script PHP.",
        "Enviando el código por correo a Sun Microsystems."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cuál es el comando exacto para generar documentación de un archivo llamado 'ejemplo.java' desde la consola? [12]",
    "opciones": [
        "java doc ejemplo.java",
        "javadoc ejemplo.java",
        "javac ejemplo.java",
        "make javadoc ejemplo.java"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿A qué elementos están destinados principalmente los comentarios JavaDoc? [13]",
    "opciones": [
        "A bucles y condicionales.",
        "A clases y métodos.",
        "A archivos de configuración XML.",
        "A la interfaz gráfica HTML."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Según la teoría, ¿por qué se decidió fijar un formato común para los comentarios Javadoc? [13]",
    "opciones": [
        "Para que la compilación sea más rápida.",
        "Para que los comentarios escritos por un programador resultaran legibles y útiles para otro.",
        "Para reducir el peso de los archivos .java.",
        "Porque era un requisito del gobierno para software libre."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En un bloque Javadoc, la descripción general de la clase o método... [14]",
    "opciones": [
        "Debe comenzar siempre con el indicador @description.",
        "No va precedida de ningún indicador especial.",
        "Debe estar escrita obligatoriamente en inglés.",
        "Se oculta en la versión final del HTML."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Son obligatorios los indicadores (etiquetas) en los comentarios Javadoc? [15]",
    "opciones": [
        "Sí, sin ellos no se genera la documentación.",
        "Sí, siempre debe haber al menos un @author.",
        "No, los indicadores no son obligatorios.",
        "Solo son obligatorios para las variables privadas."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Es posible que un comentario incluya un mismo indicador más de una vez? [15]",
    "opciones": [
        "No, generaría un error de redundancia.",
        "Sí, por ejemplo si un método tiene varios parámetros, se repite @param.",
        "Solo en el caso de la etiqueta @version.",
        "Sí, pero Javadoc ignorará todos menos el primero."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué información proporciona el indicador @author? [15]",
    "opciones": [
        "El servidor donde está alojado el código.",
        "Quién escribió el código al que se refiere el comentario.",
        "La licencia de distribución del software.",
        "El usuario de la base de datos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si un código fue escrito por varias personas, ¿cómo se reflejan en la etiqueta @author? [15]",
    "opciones": [
        "Escribiendo los nombres separados por comas o repitiendo el indicador.",
        "Agrupándolos bajo un nombre ficticio.",
        "Solo se puede poner al programador principal.",
        "Se prohíbe poner más de un autor."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Dónde es normal incluir el indicador @author para no ser redundante? [16]",
    "opciones": [
        "En todos y cada uno de los métodos privados.",
        "En el comentario de la clase, y no repetirlo por método a menos que lo escriba otra persona.",
        "Fuera del archivo Java, en un txt.",
        "En el nombre del archivo."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué indicador se utiliza para especificar el número de versión de una clase? [15]",
    "opciones": [
        "@release",
        "@build",
        "@version",
        "@edition"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Para qué elementos se usa normalmente la etiqueta @version? [16]",
    "opciones": [
        "Principalmente para clases, y en ocasiones para métodos.",
        "Exclusivamente para variables globales.",
        "Solo para la función main().",
        "Para documentar importaciones de librerías."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "El indicador @param sirve específicamente para describir: [17]",
    "opciones": [
        "El tipo de retorno de la clase.",
        "Un parámetro de un método.",
        "La ruta del archivo en disco.",
        "Los permisos de ejecución del archivo."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Según el texto, si un método no tiene parámetros... [15]",
    "opciones": [
        "Se escribe '@param none'.",
        "Se genera una excepción al compilar.",
        "No se incluye obviamente el indicador @param.",
        "Se utiliza el indicador @empty."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué etiqueta Javadoc se emplea para describir el valor de salida o retorno de un método? [17]",
    "opciones": [
        "@yield",
        "@output",
        "@return",
        "@value"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿En qué situación se debe utilizar la etiqueta @see? [17]",
    "opciones": [
        "Cuando el método necesita mostrar algo por pantalla.",
        "Cuando el trozo de código está relacionado con otra clase o método cuyo nombre se indica.",
        "Para revisar errores de sintaxis visuales.",
        "Para ocultar la visibilidad de una variable."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si un método puede 'romperse' o fallar bajo alguna circunstancia lanzando un error, ¿qué etiqueta se usa para documentarlo? [17]",
    "opciones": [
        "@error",
        "@catch",
        "@break",
        "@throws"
    ],
    "correcta": 3
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué información acompaña al indicador @throws en su sintaxis? [17]",
    "opciones": [
        "El nombre de la clase de excepción y su descripción.",
        "El número de línea donde podría ocurrir el error.",
        "El correo del soporte técnico.",
        "Un código numérico de error."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si un método antiguo ha sido sustituido por uno nuevo y ya no debe usarse, lo documentaremos con: [17]",
    "opciones": [
        "@old",
        "@unused",
        "@deprecated",
        "@obsolete"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Según los apuntes, ¿es común encontrar la etiqueta @deprecated en una clase completa? [17]",
    "opciones": [
        "Sí, es su uso más habitual.",
        "No, es más raro encontrarlos para una clase que para un método.",
        "Es totalmente imposible y genera error.",
        "Solo si la clase es abstracta."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué facilidad brindan las convenciones en el código fuente (como usar /** y */) junto a herramientas como javadoc? [18]",
    "opciones": [
        "Evitan el uso de memoria RAM.",
        "Hacen que el trabajo de documentar el código de nuevas clases Java sea trivial.",
        "Previenen ataques de denegación de servicio (DDoS).",
        "Traducen automáticamente el código a C++."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "La documentación oficial del API de Java ha sido creada utilizando: [18]",
    "opciones": [
        "Microsoft Word.",
        "Las convenciones de comentarios Javadoc.",
        "Editores hexadecimales.",
        "Generadores de PDF de terceros."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué son exactamente las 'plantillas de código' (templates) mencionadas en los apuntes? [18]",
    "opciones": [
        "Imágenes de fondo para el entorno de programación.",
        "Sugerencias de código asociadas a palabras clave.",
        "Diseños CSS para el HTML generado por Javadoc.",
        "Modelos de arquitectura de bases de datos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿En qué ruta de menú se pueden encontrar o definir las plantillas en Eclipse? [18]",
    "opciones": [
        "File > New > Template",
        "Preferences > Java > Editor > Templates",
        "Window > View > Code Snippets",
        "Help > Install > Templates"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué recomendación se da en el tema acerca de las plantillas existentes en el IDE? [18]",
    "opciones": [
        "Borrarlas todas para ahorrar memoria.",
        "Examinarlas todas, ya que pueden ahorrar mucho trabajo.",
        "Usarlas únicamente en proyectos comerciales.",
        "No modificarlas nunca para no corromper el IDE."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Las plantillas suelen utilizar nombres similares a las construcciones Java que encapsulan, por ejemplo: [19]",
    "opciones": [
        "int, float, double",
        "public, private, protected",
        "try, for, while, if",
        "html, body, div"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Es posible crear plantillas personalizadas en el IDE? [19]",
    "opciones": [
        "No, vienen predefinidas e inmutables de fábrica.",
        "Sí, podemos definir y crear nuestras propias plantillas.",
        "Solo comprando la licencia Premium de Eclipse.",
        "Sí, pero requieren programarlas en C."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Además de plantillas de estructuras de código (como bucles), existen plantillas predefinidas específicas para: [19]",
    "opciones": [
        "Javadoc.",
        "Consultas SQL.",
        "Cifrado de contraseñas.",
        "Conexiones SSH."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Una plantilla de código se compone estructuralmente de: [19]",
    "opciones": [
        "Clase, método, paquete e importación.",
        "Variables globales y locales.",
        "Un nombre, una descripción, un contexto y un pattern.",
        "Una imagen, un texto alternativo y un enlace."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En la composición de una plantilla, ¿qué es el 'contexto'? [19]",
    "opciones": [
        "El ámbito donde se guarda el archivo en disco duro.",
        "El entorno en función del lenguaje (por ejemplo, si estamos en el código, en el javadoc...).",
        "La versión del compilador utilizada.",
        "El sistema operativo sobre el que corre el IDE."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Dentro de la definición de una plantilla, ¿qué es el 'pattern'? [19]",
    "opciones": [
        "El código de la plantilla, que puede incluir texto fijo y variables predefinidas.",
        "El diseño de colores del código en el editor.",
        "La frecuencia con la que se utiliza la plantilla.",
        "El nombre del autor de la plantilla."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué indica la variable predefinida ${cursor} dentro del 'pattern' de una plantilla? [20]",
    "opciones": [
        "El icono del ratón que se mostrará.",
        "La posición en la que se establecerá el cursor de texto tras desplegar el código.",
        "La selección automática de todo el texto generado.",
        "La ejecución de una macro de teclado."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Para qué sirve la variable predefinida ${enclosing_type} en una plantilla? [20]",
    "opciones": [
        "Para encapsular el código en un try/catch.",
        "Para escribir el nombre de la variable actual.",
        "Para insertar el tipo de la clase en la que nos encontramos.",
        "Para determinar el tipo de retorno genérico."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué información inserta automáticamente la variable ${enclosing_method}? [20]",
    "opciones": [
        "Los parámetros del método.",
        "El nombre del método en el que nos encontramos.",
        "El valor devuelto por el método.",
        "La visibilidad del método (public/private)."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si deseamos que nuestra plantilla de Javadoc incluya el año automáticamente, usaremos la variable: [20]",
    "opciones": [
        "${date}",
        "${current_year}",
        "${year}",
        "${yyyy}"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué variable predefinida inserta la hora en curso al usar una plantilla? [20]",
    "opciones": [
        "${hour}",
        "${time}",
        "${clock}",
        "${now}"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué atajo de teclado se utiliza comúnmente para desplegar sugerencias de plantillas tras comenzar a escribir su nombre? [20]",
    "opciones": [
        "ALT + F4",
        "SHIFT + Enter",
        "CTRL + espacio",
        "TAB + Flecha Abajo"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Para añadir una plantilla nueva desde la opción 'Templates' se requiere: [20]",
    "opciones": [
        "Reiniciar el entorno de desarrollo.",
        "Asignarle nombre, descripción y elegir el código que queremos que se muestre.",
        "Saber programar en lenguaje ensamblador.",
        "Pagar una licencia comercial a Oracle."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En el contexto empresarial descrito (BK programación), ¿qué factor fundamental afecta a la reutilización de código de manera positiva? [21]",
    "opciones": [
        "Ocultar el código fuente a los demás compañeros.",
        "Una buena documentación y los comentarios del código fuente mediante plantillas.",
        "El uso de sistemas operativos antiguos.",
        "No utilizar comentarios para que el código cargue más rápido."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En el ejemplo de código 'HolaMundo', ¿cuál es el autor definido en el comentario Javadoc? [14]",
    "opciones": [
        "Sun Microsystems",
        "Linus Torvalds",
        "Paco Programador Java",
        "Roberto Moreno"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En el ejemplo de código 'HolaMundo', el método 'main' tiene un comentario que documenta un parámetro, ¿cuál es? [11]",
    "opciones": [
        "@param args",
        "@param string",
        "@param none",
        "@param output"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué ocurre si en el código Java encontramos un bloque que comienza por '/*' en vez de '/**'? [3]",
    "opciones": [
        "Se interpreta como una etiqueta de bloque.",
        "Provoca un error fatal de compilación.",
        "Javadoc lo ignorará y no formará parte de la API generada.",
        "Se resaltará en color rojo avisando de la falta del asterisco."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿A qué se refiere Javadoc cuando menciona generar APIs? [1]",
    "opciones": [
        "Archivos de Protocolo de Internet.",
        "Aplication Programing Interface (Interfaz de Programación de Aplicaciones).",
        "Accesos Privados Internos.",
        "Asignaciones de Puertos Informáticos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Por qué Javadoc representa una ventaja sobre un manual de documentación completamente desconectado del código? [2]",
    "opciones": [
        "Porque Javadoc pesa menos en megabytes.",
        "Porque evita tener que mantener el manual al día realizando un doble trabajo al modificar el código.",
        "Porque permite agregar animaciones 3D al texto.",
        "Porque no requiere de ningún navegador para leerse."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si un desarrollador incluye una etiqueta `@author` en mayúsculas, como `@AUTHOR`, ¿qué pasará probablemente según las normas de Javadoc? [4]",
    "opciones": [
        "Funcionará exactamente igual.",
        "Provocará la eliminación del archivo por seguridad.",
        "No será interpretada como etiqueta al ser sensible a mayúsculas-minúsculas.",
        "Traducirá el nombre del autor a mayúsculas."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Es obligatorio el indicador `@return` para métodos que devuelven 'void' (nada)? [15]",
    "opciones": [
        "Sí, siempre debe ponerse `@return void`.",
        "No, los indicadores no son obligatorios y en este caso carece de sentido.",
        "Sí, debe ponerse `@return null`.",
        "La compilación exige que todo método tenga un `@return`."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Cómo se indica en Javadoc que una versión concreta de la documentación fue escrita el 24/07/11, basándonos en el ejemplo de los apuntes? [14]",
    "opciones": [
        "Con la etiqueta @date 24/07/11",
        "Con la etiqueta @version 1.2.0, 24/07/11",
        "Con la etiqueta @history 24/07/11",
        "Con la etiqueta @time 24/07/11"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si Eclipse ofrece opciones de Javadoc, ¿dónde podemos acceder a la navegación principal de la documentación que acaba de crear? [12]",
    "opciones": [
        "Abriendo el archivo index.html generado en la ruta indicada.",
        "Leyendo el código binario .class.",
        "Imprimiendo la consola del sistema.",
        "Mediante una conexión Telnet al puerto 8080."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "El comando de sistema operativo para dar de forma recursiva la propiedad a un usuario sobre una carpeta (como se vio en la instalación de NetBeans) usa el parámetro: [9]",
    "opciones": [
        "-r",
        "-R",
        "--recursive",
        "-all"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Durante la instalación de herramientas para Java en Debian, se usan comandos ejecutados con el símbolo '#' por delante. ¿Qué implica habitualmente el símbolo '#'? [8]",
    "opciones": [
        "Que es un comentario de Java.",
        "Que el comando debe ejecutarse como administrador o root en la consola.",
        "Que es una directiva de preprocesador.",
        "Que no debe ejecutarse, es solo un apunte."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En las etiquetas inline '{@tag}', ¿qué representan las llaves? [5]",
    "opciones": [
        "El inicio y fin del código ejecutable del programa.",
        "La delimitación física para que la herramienta interprete la etiqueta en medio de la descripción.",
        "Un error tipográfico del estándar.",
        "Un arreglo (array) de datos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué indicador sería apropiado para detallar que un método realiza una división y falla si el divisor es cero? [17]",
    "opciones": [
        "@error DivZero",
        "@warning Divisor cero",
        "@throws ArithmeticException descripción",
        "@deprecated No dividir por cero"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Según la nomenclatura de las plantillas predefinidas en IDEs, ¿qué plantilla usarías presumiblemente para generar la estructura de una condición? [19]",
    "opciones": [
        "for",
        "while",
        "if",
        "try"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué beneficio inmediato aporta a un desarrollador el autocompletado de javadoc en un IDE como NetBeans? [10]",
    "opciones": [
        "Genera interfaces gráficas con botones automáticamente.",
        "Acelera la escritura y evita memorizar la estructura exacta de etiquetas, al ofrecerlas y rellenarlas automáticamente.",
        "Optimiza el uso de CPU al 100%.",
        "Elimina los virus del ordenador."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Si abres la documentación HTML de un método y observas un texto tachado con una advertencia de que será eliminado en el futuro, ¿qué etiqueta usó el creador? [17]",
    "opciones": [
        "@deleted",
        "@removed",
        "@deprecated",
        "@trashed"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué relación existe entre las herramientas phpDocumentor (vista previamente) y Javadoc? [1]",
    "opciones": [
        "Ninguna, tienen sintaxis totalmente opuestas.",
        "phpDocumentor genera la documentación de una forma parecida al estándar y etiquetas de JavaDoc.",
        "Ambas son obligatorias para programar en C.",
        "Javadoc es un plugin interno de phpDocumentor."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "La instalación de software en distribuciones Linux de la familia Debian suele requerir la gestión de permisos. ¿Qué hace `chmod a+x` sobre el instalador de NetBeans? [10]",
    "opciones": [
        "Añade un usuario al sistema.",
        "Asigna permiso de ejecución (eXecute) a todos (All) los usuarios.",
        "Borra todos los archivos temporales.",
        "Cambia el dueño del archivo a 'alumno'."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Por qué es tan importante la variable predefinida `${cursor}` al diseñar una plantilla de código propia? [20]",
    "opciones": [
        "Porque cambia el color del puntero del ratón.",
        "Porque permite ubicar al desarrollador exactamente en el punto de escritura donde debe continuar codificando tras insertar la plantilla.",
        "Porque bloquea el uso del teclado numérico.",
        "Porque cierra el programa tras un error."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "Cuando en Eclipse vamos a `Preferences > Java > Editor > Templates`, estamos modificando configuraciones que afectan principalmente al: [18]",
    "opciones": [
        "Compilador visual del sistema operativo.",
        "Editor de código fuente del IDE.",
        "Navegador de internet predeterminado.",
        "Servidor Apache."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "¿Qué indica el apunte respecto al número de autores que se pueden citar con `@author`? [15]",
    "opciones": [
        "Existe un límite máximo de dos autores.",
        "Si son varias personas se escriben los nombres separados por comas o se repite el indicador.",
        "Solo la empresa propietaria puede ser autora.",
        "Si hay más de uno, la etiqueta se ignora automáticamente."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En un método que calcula un área, recibe 'base' y 'altura' y devuelve el resultado, ¿cuántos `@param` y `@return` utilizaríamos según las buenas prácticas? [15]",
    "opciones": [
        "Un `@param` conjunto y ningún `@return`.",
        "Dos `@param` (uno para base, otro para altura) y un `@return`.",
        "Solo un `@return`.",
        "Etiquetas `@var` exclusivas."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "El comando por terminal `javadoc ejemplo.java` procesa un archivo con extensión `.java`. ¿A qué corresponde esa extensión? [1]",
    "opciones": [
        "Un archivo ejecutable de Windows.",
        "Un archivo de código fuente Java.",
        "Un documento de texto enriquecido.",
        "Una imagen comprimida."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "El uso de plantillas, Javadoc y autocompletado en un IDE, ¿a qué gran objetivo de la ingeniería de software contribuye según los apuntes? [13]",
    "opciones": [
        "A realizar el trabajo más tedioso y repetitivo, facilitando el desarrollo y lectura por otras personas.",
        "A esconder el código de la vista de los jefes.",
        "A gastar más recursos del servidor.",
        "A programar juegos en 3D."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En el ejemplo proporcionado de 'HolaMundo', ¿se documenta la clase con alguna etiqueta? [14]",
    "opciones": [
        "No, solo se documenta el método main.",
        "Sí, se documenta la clase con `@version` y `@author`.",
        "Sí, con `@param` y `@throws`.",
        "No, las clases nunca se documentan."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "El comando Linux `mkdir` empleado durante la instalación de NetBeans sirve para: [9]",
    "opciones": [
        "Borrar una carpeta de forma forzada.",
        "Mover un archivo de origen a destino.",
        "Crear un nuevo directorio.",
        "Descargar un archivo de internet."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "La finalidad general de las 'Tags' o etiquetas de Javadoc es: [4]",
    "opciones": [
        "Hacer que el texto se vea de colores brillantes.",
        "Permitir generar una API completa y estructurada a partir del código fuente con los comentarios.",
        "Comprimir el archivo fuente.",
        "Cifrar contraseñas de bases de datos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 3",
    "pregunta": "En las plantillas de Eclipse, ¿qué ocurriría si insertas la variable predefinida `${enclosing_type}` dentro de la definición de una clase llamada 'Vehiculo'? [20]",
    "opciones": [
        "Mostraría un error por falta de parámetros.",
        "Se reemplazaría por el texto 'Vehiculo'.",
        "Escribiría 'void'.",
        "Borraría la clase completa."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué problema fundamental intentan resolver los sistemas de control de versiones al desarrollar un proyecto software?",
    "opciones": [
        "La optimización de la memoria RAM del servidor web.",
        "La necesidad de guardar distintas versiones de las fuentes de forma organizada antes de realizar cambios profundos.",
        "El cifrado asimétrico de las comunicaciones con la base de datos.",
        "La generación automática de la documentación en formato HTML."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En un sistema de control de versiones típico, ¿dónde se guardan las fuentes del proyecto con todas sus versiones?",
    "opciones": [
        "En un documento de Word en la nube.",
        "En un directorio controlado por el propio sistema de herramientas.",
        "Exclusivamente en los correos electrónicos de los programadores.",
        "En la caché del navegador del cliente."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Cuando queremos guardar fuentes nuevas o modificadas, el sistema de control de versiones suele pedirnos:",
    "opciones": [
        "Reiniciar el ordenador.",
        "Que metamos un comentario para identificar los cambios realizados.",
        "Un pago adicional por uso de ancho de banda.",
        "Que declaremos las variables globales explícitamente."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Es útil un sistema de control de versiones para un único desarrollador trabajando en su casa?",
    "opciones": [
        "Sí, de esa forma siempre tendrá todas las versiones de su programa controladas.",
        "No, estas herramientas solo se activan si detectan más de un usuario en red.",
        "No, solo tienen sentido en proyectos de más de mil líneas de código.",
        "Solo es útil si programa exclusivamente en Java."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "De acuerdo a los conceptos básicos, ¿qué es una 'Revisión'?",
    "opciones": [
        "El borrado completo de un repositorio para liberar espacio.",
        "Una visión estática en el tiempo del estado de un grupo de archivos y directorios.",
        "La corrección automática de los errores de sintaxis del código.",
        "El cobro de la licencia de uso del sistema distribuido."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Entre los metadatos asociados comúnmente a una revisión se encuentran:",
    "opciones": [
        "El tamaño del disco duro del servidor.",
        "El sistema operativo de destino y la IP del cliente.",
        "Identidad de quién hizo las modificaciones, fecha y hora de los cambios.",
        "Las contraseñas de las bases de datos de la empresa."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué es la 'Copia de trabajo' o 'Árbol de trabajo'?",
    "opciones": [
        "Un respaldo que se hace en cintas magnéticas cada semana.",
        "El conjunto de directorios y archivos controlados por el sistema, que se encuentran en edición activa.",
        "Un virus que duplica los archivos del proyecto.",
        "La base de datos donde se almacena el servidor web Apache."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En el contexto de una 'Rama de trabajo', la revisión más reciente se denomina:",
    "opciones": [
        "Principal (main) o cabeza.",
        "Footer o final.",
        "Commit-cero.",
        "Rama obsoleta."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El lugar en donde se almacenan las revisiones en un sistema de control de versiones se denomina:",
    "opciones": [
        "Directorio temporal.",
        "Copia caché.",
        "Grafo de conflicto.",
        "Repositorio."
    ],
    "correcta": 3
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué ocurre a nivel lógico cuando las ramas de un proyecto se separan y se juntan según es necesario?",
    "opciones": [
        "Se forma un grafo de revisión.",
        "Se bloquea el repositorio definitivamente.",
        "Se corrompe la copia de trabajo.",
        "El servidor envía un correo de error crítico."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El estado de 'Conflicto' en un sistema de control de versiones ocurre cuando:",
    "opciones": [
        "El servidor se queda sin memoria RAM.",
        "Varias personas han hecho cambios contradictorios en un mismo documento o grupo de documentos.",
        "Dos usuarios intentan acceder a la vez a internet.",
        "Se agota el número máximo de líneas de código permitidas."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Cuando se detecta un conflicto, ¿qué suele hacer el sistema de control de versiones?",
    "opciones": [
        "Lo resuelve de forma automática borrando el último cambio.",
        "Formatea el repositorio para prevenir daños.",
        "Solamente alerta de la existencia del conflicto.",
        "Cierra el proyecto y expulsa a los usuarios."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El proceso manual o guiado para solucionar un conflicto se denomina:",
    "opciones": [
        "Resolución.",
        "Limpieza profunda.",
        "Rollback crítico.",
        "Checkout forzado."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Cuando se unen los cambios en un archivo (o varios) generando una revisión unificada, se dice que se ha hecho una:",
    "opciones": [
        "División de repositorio.",
        "Sobrescritura ilícita.",
        "Combinación o integración.",
        "Descarga inicial (checkout)."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "La lista de cambios generada al comparar revisiones, que puede usarse para reproducir automáticamente las modificaciones, se denomina:",
    "opciones": [
        "Script cgi.",
        "Parche.",
        "Log de errores.",
        "Hoja de estilos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si un sistema de control de versiones permite trabajar directamente contra el repositorio, existe un aumento de transparencia, pero como desventaja produce:",
    "opciones": [
        "Un mayor consumo de papel.",
        "El bloqueo de ficheros.",
        "Que los parches se borren solos.",
        "Que no se puedan crear más de dos ramas."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Cómo se le llama al paso inicial de bajarse los ficheros del repositorio al empezar a trabajar?",
    "opciones": [
        "Commit.",
        "Checkout.",
        "Merge.",
        "Push."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Según la teoría de procedimientos de uso, ¿cuántas veces se hace el 'checkout' inicial de esos ficheros?",
    "opciones": [
        "Cada vez que encendemos el ordenador.",
        "Solo la primera vez que se usan esos ficheros.",
        "Al finalizar la jornada laboral.",
        "Cada vez que se sube un nuevo cambio al servidor."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En el ciclo de trabajo habitual, los ficheros modificados en local se sincronizan con los ficheros del repositorio mediante la operación de:",
    "opciones": [
        "Update (Actualización de ficheros en local).",
        "Commit (Actualización de ficheros en repositorio).",
        "Reset.",
        "Branching."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Como resultado de la operación Update, ¿qué detectará el sistema informando a los usuarios implicados?",
    "opciones": [
        "Si hay virus en la red local.",
        "Si los servidores web están activos.",
        "Si existen conflictos en el código.",
        "Si el usuario ha pagado la licencia de uso."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "La modificación de los ficheros en el servidor/repositorio (subiendo nuestros cambios) se denomina:",
    "opciones": [
        "Checkout.",
        "Commit.",
        "Pull.",
        "Diff."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Una de las grandes utilidades del histórico de cambios en estas herramientas es que permite:",
    "opciones": [
        "Aumentar el salario del programador.",
        "Saber exactamente el consumo eléctrico del PC.",
        "Recuperar versiones pasadas y deshacer cambios.",
        "Evitar el uso de lenguajes como PHP o Java."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Por qué permite el sistema 'actualizar una copia local con la última versión del servidor' como una gran ventaja técnica?",
    "opciones": [
        "Porque elimina la necesidad de repetir descargas completas del proyecto, moviendo solo lo modificado.",
        "Porque así se esquivan las multas de derechos de autor.",
        "Porque formatea el disco duro automáticamente.",
        "Porque el servidor obliga a ello para poder arrancar."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿En qué consiste el sistema de autorización 'basado en el honor' en algunos proyectos?",
    "opciones": [
        "En usar biometría y huellas dactilares para cada línea escrita.",
        "En proporcionar una contraseña global, confiando en que cada persona modificará solo su área asignada (ya que todo está supervisado y se puede revertir).",
        "En firmar un contrato legal por escrito cada día.",
        "En que no existen usuarios administradores en todo el mundo."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Antes de los VCS, ¿cuál era el método de control más usado (y más propenso a errores como sobrescribir archivos accidentalmente)?",
    "opciones": [
        "Almacenamiento en cintas de casete.",
        "Escribir el código en papel y escanearlo.",
        "Copiar los archivos manualmente a otro directorio controlando fecha y hora.",
        "No guardar absolutamente nada."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Menciona una de las primeras y populares herramientas locales que guardaba parches/diferencias entre archivos en disco:",
    "opciones": [
        "Subversion.",
        "Git.",
        "rcs.",
        "Mercurial."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué siglas representan a los Sistemas de Control de Versiones Centralizados?",
    "opciones": [
        "DVCSs.",
        "CVCSs.",
        "HTMLs.",
        "XMLs."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué herramientas son ejemplos clásicos de sistemas centralizados (CVCSs)?",
    "opciones": [
        "Git, Mercurial y Bazaar.",
        "CVS, Subversion y Perforce.",
        "Linux, Windows y MacOS.",
        "Apache, Tomcat y Nginx."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Cuál es la principal desventaja estructural que posee un CVCS (sistema centralizado)?",
    "opciones": [
        "El alto coste de la fibra óptica.",
        "El punto único de fallo que representa el servidor centralizado.",
        "Que requiere programar en ensamblador.",
        "Que no permite más de 10 usuarios conectados."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si en un CVCS el disco del servidor se corrompe y no hay copias de seguridad externas, ¿cuál es el resultado?",
    "opciones": [
        "El sistema reconstruye la historia leyendo la mente de los usuarios.",
        "Se pierde absolutamente toda la historia del proyecto salvo las instantáneas locales que tengan los clientes.",
        "Se descarga una copia de seguridad automáticamente de Google.",
        "No pasa nada, el servidor central es redundante por naturaleza."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué siglas definen a los Sistemas de Control de Versiones Distribuidos?",
    "opciones": [
        "CVCSs.",
        "DVCSs.",
        "SQLs.",
        "TCPs."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En los DVCSs, cada vez que un cliente descarga una instantánea de los archivos (clone), ¿qué sucede en realidad?",
    "opciones": [
        "Que bloquea el servidor para el resto.",
        "Que hace una réplica/copia de seguridad completa de todos los datos y de la historia del repositorio.",
        "Que borra los datos en el servidor por motivos de seguridad.",
        "Que se traduce automáticamente todo el código a inglés."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Son ejemplos de Sistemas de Control de Versiones Distribuidos (DVCS):",
    "opciones": [
        "Subversion, CVS y Perforce.",
        "Eclipse, NetBeans e IntelliJ.",
        "Git, Mercurial, Bazaar y Darcs.",
        "Apache, Nginx y Tomcat."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "A diferencia de los sistemas centralizados, los distribuidos permiten trabajar simultáneamente con varios repositorios facilitando, por ejemplo:",
    "opciones": [
        "Crear código HTML más rápido.",
        "Flujos de trabajo no posibles en los CVCSs, como modelos jerárquicos.",
        "Instalar Windows encima de Linux.",
        "Evitar tener que documentar las funciones."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué proyecto monumental de código abierto impulsó el desarrollo inicial de Git?",
    "opciones": [
        "El servidor Apache.",
        "El IDE Eclipse.",
        "El núcleo (kernel) de Linux.",
        "El gestor de bases de datos MySQL."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Entre 2002 y 2005, el proyecto del núcleo de Linux utilizaba un DVCS propietario llamado:",
    "opciones": [
        "Subversion.",
        "GitMaster.",
        "BitKeeper.",
        "SourceSafe."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Quién fue el creador inicial de Git basándose en las lecciones aprendidas tras la ruptura con BitKeeper?",
    "opciones": [
        "Bill Gates.",
        "Linus Torvalds.",
        "Steve Jobs.",
        "Mark Zuckerberg."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿En qué lenguaje de programación base está escrito Git, aportándole mucha velocidad?",
    "opciones": [
        "Java.",
        "PHP.",
        "Python.",
        "C."
    ],
    "correcta": 3
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Uno de los objetivos fundamentales en el diseño de Git era dar fuerte apoyo a:",
    "opciones": [
        "Sistemas operativos Windows exclusivamente.",
        "El desarrollo no lineal (permitiendo miles de ramas paralelas).",
        "El diseño de interfaces gráficas tridimensionales.",
        "La ofimática tradicional."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Sistemas como CVS o Subversion modelan la información que almacenan como:",
    "opciones": [
        "Un conjunto de instantáneas globales (fotos del proyecto).",
        "Un conjunto de archivos y la lista de modificaciones/diferencias hechas sobre cada uno a lo largo del tiempo.",
        "Páginas web dinámicas en PHP.",
        "Archivos vectoriales SVG."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "A diferencia de Subversion, ¿cómo modela y almacena Git sus datos conceptualmente?",
    "opciones": [
        "Como un conjunto de instantáneas (fotos completas) de un mini sistema de archivos.",
        "Exclusivamente como parches de texto en la nube.",
        "Como documentos PDF enlazados.",
        "Mediante cintas magnéticas indexadas."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En Git, si al hacer un commit un archivo no se ha modificado, para ser eficiente el sistema:",
    "opciones": [
        "Crea un clon exacto en el disco consumiendo el doble de memoria.",
        "Borra el archivo original.",
        "No almacena el archivo de nuevo, solo guarda un enlace al archivo idéntico ya almacenado.",
        "Genera un error obligando a cambiar el archivo."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En Git casi todas las operaciones son rápidas porque en la mayoría de los casos:",
    "opciones": [
        "El servidor remoto tiene mucha fibra óptica.",
        "Solo necesitan archivos y recursos locales para operar, leyendo la base de datos local al instante.",
        "El código en lenguaje C se salta los controles de hardware.",
        "Nunca comprueba errores."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para garantizar la integridad y que no haya corrupción de datos, antes de ser almacenado todo en Git es verificado mediante:",
    "opciones": [
        "Un contrato legal.",
        "Una suma de comprobación (checksum SHA-1).",
        "Una llamada a la API de Microsoft.",
        "La intervención manual de un administrador."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Cuáles son los tres estados principales en los que se pueden encontrar los archivos en Git?",
    "opciones": [
        "Compilado, Depurado y Ejecutado.",
        "Abierto, Cerrado y Bloqueado.",
        "Confirmado (committed), Modificado (modified) y Preparado (staged).",
        "Público, Privado y Protegido."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Cuando un archivo en Git está 'confirmado' (committed), significa que:",
    "opciones": [
        "Ha sido impreso en papel.",
        "Los datos están almacenados de manera segura en la base de datos local del directorio de Git.",
        "Se ha subido automáticamente a Github.",
        "Alguien lo está modificando en ese mismo instante."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si un archivo fue alterado desde su última copia obtenida, pero no ha sido confirmado ni preparado, se encuentra en estado:",
    "opciones": [
        "Dañado.",
        "Confirmado.",
        "Modificado.",
        "Bloqueado."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si un archivo modificado se ha marcado en su versión actual para incluirlo en la próxima confirmación, su estado es:",
    "opciones": [
        "Inestable.",
        "Preparado (staged).",
        "Committed.",
        "Enviado."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Las tres secciones principales físicas/lógicas de un proyecto Git local son el Directorio de Git, el Directorio de trabajo y:",
    "opciones": [
        "El servidor Apache.",
        "El área de preparación (staging area o índice).",
        "La base de datos MySQL.",
        "El archivo .ini de configuración."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué es la sección conocida como 'Directorio de Git' (Git directory)?",
    "opciones": [
        "La carpeta donde instalamos el servidor web.",
        "El lugar que almacena los metadatos y la base de datos de objetos, siendo lo que se copia al clonar un repositorio.",
        "El acceso directo en el escritorio de Windows.",
        "El sitio web oficial de descarga de Git."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Cuál es la función del 'Directorio de trabajo' (working directory) en Git?",
    "opciones": [
        "Mantener comprimidos todos los archivos para ahorrar espacio.",
        "Servir como copia extraíble de una versión del proyecto colocada en disco para usarla o modificarla.",
        "Hacer copias de seguridad en la nube.",
        "Monitorizar qué teclas pulsa el programador."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El área de preparación (staging area), a veces también denominada 'índice', consiste en:",
    "opciones": [
        "Un archivo que almacena la información acerca de lo que va a ir en la próxima confirmación (commit).",
        "Una carpeta donde se guardan los virus detectados.",
        "El catálogo de repositorios públicos de Github.",
        "Un espacio de almacenamiento en el núcleo de Linux."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El primer paso del flujo de trabajo básico en Git consiste en:",
    "opciones": [
        "Confirmar los cambios directamente.",
        "Preparar los archivos sin haberlos tocado.",
        "Modificar una serie de archivos en el directorio de trabajo.",
        "Desinstalar el sistema operativo."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El segundo paso del flujo de trabajo habitual de Git es:",
    "opciones": [
        "Modificar los archivos con el editor de textos.",
        "Preparar los archivos, añadiendo instantáneas de ellos al área de preparación.",
        "Enviar los archivos al administrador por correo electrónico.",
        "Borrar todos los ficheros locales."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En el flujo de trabajo de Git, 'Confirmar los cambios' significa:",
    "opciones": [
        "Cerrar la sesión de usuario.",
        "Tomar los archivos del área de preparación y almacenar la instantánea de forma permanente en el directorio de Git.",
        "Pagar la suscripción mensual del servicio.",
        "Subir los cambios al repositorio distribuido de otro compañero obligatoriamente."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Según los apuntes, ¿por qué suele ser útil instalar Git desde código fuente en lugar del gestor de paquetes básico?",
    "opciones": [
        "Porque así el ordenador funciona más frío.",
        "Porque obtendremos la versión más reciente, que a menudo incluye útiles mejoras en la interfaz de usuario.",
        "Porque el binario tiene un coste económico.",
        "Porque la instalación binaria es ilegal en sistemas Debian."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para poder compilar e instalar Git desde su código fuente es necesario disponer de ciertas librerías previas, como por ejemplo:",
    "opciones": [
        "curl, zlib y openssl.",
        "php, mysql y apache.",
        "java, javac y javadoc.",
        "office, excel y word."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué comando típico de entornos Debian/Ubuntu usaríamos para descargar el código fuente comprimido de Git desde internet mediante consola?",
    "opciones": [
        "apt-get",
        "wget",
        "ping",
        "ftp"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si tenemos el archivo fuente 'git-1.7.6.tar.bz2', el comando adecuado para descomprimirlo propuesto en los apuntes es:",
    "opciones": [
        "unzip git-1.7.6.tar.bz2",
        "tar -xjvf git-1.7.6.tar.bz2",
        "rar e git-1.7.6.tar.bz2",
        "gunzip git-1.7.6.tar.bz2"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En el caso de no querer compilar desde el código fuente y usar la herramienta básica de gestión de paquetes de Debian para instalar el binario, ejecutaríamos:",
    "opciones": [
        "apt-get install git-core",
        "yum install git",
        "pacman -S git",
        "dpkg -i git.exe"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué comando empleamos para comprobar que Git se ha instalado correctamente y nos devuelva la versión actual?",
    "opciones": [
        "git --info",
        "git status",
        "git --version",
        "git check"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "La mayoría de las opciones de configuración para adaptar nuestras preferencias de trabajo en Git se aplican en:",
    "opciones": [
        "El switch de red.",
        "El lado del cliente.",
        "El router central.",
        "El servidor DNS."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué comando o herramienta integrada trae Git para establecer y obtener variables de control y funcionamiento?",
    "opciones": [
        "git setup",
        "git control",
        "git init",
        "git config"
    ],
    "correcta": 3
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué es lo primero y más importante que se debe configurar al instalar Git?",
    "opciones": [
        "El color de fondo de la terminal.",
        "El nombre de usuario y la dirección de correo electrónico.",
        "El nivel de compresión de las imágenes.",
        "El tipo de base de datos SQL a emplear."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "El nombre de usuario y correo se deben configurar inmediatamente porque:",
    "opciones": [
        "Si no, la licencia de Git caduca.",
        "Las confirmaciones de cambios (commits) en Git usan esta información de manera inmutable para identificar quién envía los cambios.",
        "El servidor Apache exige un login activo.",
        "Permite que Git nos envíe un boletín de noticias mensual."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Para qué sirve el flag '--global' cuando ejecutamos 'git config --global user.name \"alumno\"'?",
    "opciones": [
        "Para establecerlo únicamente en la carpeta actual.",
        "Para que se comparta por internet automáticamente.",
        "Para que Git use esa configuración para todo lo que se haga con el usuario en el sistema operativo.",
        "Para crear un repositorio a nivel mundial."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si no se configura manualmente un editor de texto con 'core.editor', Git intentará usar por defecto el del sistema, que generalmente en Linux es:",
    "opciones": [
        "Notepad.",
        "Gedit.",
        "Nano.",
        "Vi o Vim."
    ],
    "correcta": 3
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué comando usaríamos si queremos cambiar nuestro editor de texto global en Git por 'emacs'?",
    "opciones": [
        "git change editor emacs",
        "git config --global core.editor emacs",
        "git emacs --enable",
        "git core --editor=emacs"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Otra configuración útil es 'merge.tool'. ¿Para qué sirve?",
    "opciones": [
        "Para unir varios repositorios en uno solo de forma física.",
        "Para establecer la herramienta de diferencias por defecto usada para resolver conflictos de unión.",
        "Para definir qué programa compilará el código.",
        "Para configurar la tarjeta de red."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "De la siguiente lista de herramientas, ¿cuál acepta Git como una herramienta válida para resolver conflictos (merge.tool)?",
    "opciones": [
        "Microsoft Excel.",
        "Photoshop.",
        "vimdiff.",
        "phpMyAdmin."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué comando nos permite ver una lista completa con la configuración actual que tiene Git en nuestra máquina?",
    "opciones": [
        "git config --list",
        "git status --all",
        "git show-config",
        "git log"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si no recordamos cómo usar un comando de Git, por ejemplo 'commit', ¿qué orden abre la página de manual (manpage)?",
    "opciones": [
        "git ayuda commit",
        "git help commit",
        "git --man commit",
        "help git-commit"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Debido a la importancia de las interfaces gráficas, los apuntes instalan un entorno web intuitivo para repositorios llamado:",
    "opciones": [
        "git-gui.",
        "gitweb.",
        "github-local.",
        "phpGit."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué servidor debe estar instalado y configurado previamente para que el paquete 'gitweb' pueda mostrar las páginas web localmente?",
    "opciones": [
        "Un servidor FTP.",
        "Apache.",
        "Tomcat.",
        "MySQL."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "En la configuración de gitweb (/etc/gitweb.conf), la variable '$projectroot' define:",
    "opciones": [
        "El nombre de la empresa dueña del código.",
        "La carpeta donde se guardan los repositorios git que queremos mostrar.",
        "La URL pública del repositorio.",
        "El tamaño máximo permitido para subir archivos."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Al comenzar a trabajar en la carpeta de nuestro nuevo proyecto local, ¿cuál es el primer comando de Git para inicializar el repositorio?",
    "opciones": [
        "git start",
        "git create",
        "git init",
        "git begin"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Tras ejecutar 'git init', podemos comprobar que se ha creado de manera automática una carpeta oculta. ¿Cómo se llama?",
    "opciones": [
        ".svn",
        ".config",
        ".git",
        ".git_repo"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Una vez creado código en la carpeta del proyecto local, para que Git añada todos los archivos actuales al área de preparación ejecutamos:",
    "opciones": [
        "git add .",
        "git update",
        "git include all",
        "git stage *"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para realizar la confirmación de los ficheros y guardar esa instantánea de forma permanente (commit), podemos ejecutar:",
    "opciones": [
        "git save",
        "git push",
        "git commit -a",
        "git store"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para iniciar el servicio en red básico de Git que hace público nuestro repositorio local y permite peticiones, usamos el comando:",
    "opciones": [
        "git server",
        "git apache",
        "git daemon",
        "git network"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Por defecto, al arrancar el servicio Git daemon, ¿en qué puerto de comunicaciones de la red se pone a la escucha?",
    "opciones": [
        "Puerto 80.",
        "Puerto 21.",
        "Puerto 8080.",
        "Puerto 9418."
    ],
    "correcta": 3
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué comando emplearían los desarrolladores para obtener una copia a través de la red del proyecto que acabamos de publicar?",
    "opciones": [
        "git clone git://servidor/proyecto.git",
        "git copy ftp://servidor/proyecto.git",
        "git download http://servidor",
        "git get proyecto"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si tras un primer 'git add' seguimos trabajando y creamos nuevos ficheros, ¿qué debe hacerse para que Git siga su pista?",
    "opciones": [
        "Reiniciar la máquina virtual.",
        "No hay que hacer nada, Git los detecta y añade automáticamente siempre.",
        "Indicarlo manualmente con un nuevo comando 'git add ARCHIVOSNUEVOS'.",
        "Realizar un 'git format' del repositorio."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si hemos borrado físicamente unos ficheros viejos del proyecto y queremos que Git 'se olvide' de ellos en el próximo commit, el comando apropiado es:",
    "opciones": [
        "git delete ARCHIVOSVIEJOS",
        "git rm ARCHIVOSVIEJOS",
        "git erase ARCHIVOSVIEJOS",
        "git drop ARCHIVOSVIEJOS"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "A nivel interno en Git, renombrar un archivo con 'git mv' equivale exactamente a:",
    "opciones": [
        "Encriptar el archivo.",
        "Cifrar su extensión.",
        "Eliminar el nombre anterior y agregar el nuevo.",
        "Hacer una copia de seguridad temporal."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "A veces es interesante ver hacia atrás el historial del proyecto. ¿Qué comando muestra una lista de commits recientes con sus identificadores (hashes SHA1)?",
    "opciones": [
        "git status",
        "git log",
        "git history",
        "git list"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si decidimos que todos los commits a partir de cierto punto estaban mal y queremos borrar todo rastro de los commits nuevos volviendo a un punto (SHA1) antiguo permanentemente, usamos:",
    "opciones": [
        "git format --deep",
        "git rollback SHA1_HASH",
        "git reset --hard SHA1_HASH",
        "git clean --force SHA1_HASH"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si sólo queremos saltar temporalmente a ver cómo estaba el código en un estado anterior (sin borrar ni modificar la línea de tiempo principal), ejecutaremos:",
    "opciones": [
        "git travel SHA1_HASH",
        "git checkout SHA1_HASH",
        "git preview SHA1_HASH",
        "git see SHA1_HASH"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Estando 'viajando en el tiempo' con checkout observando un commit antiguo, ¿qué comando nos devolverá al presente de nuestra rama principal?",
    "opciones": [
        "git checkout master",
        "git return present",
        "git branch --current",
        "git exit"
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Qué precaución importante debemos tener al hacer 'git checkout' para viajar a una versión anterior si tenemos ficheros modificados sin confirmar?",
    "opciones": [
        "Que borrará nuestras contraseñas de red.",
        "Que esta forma de checkout puede sobreescribir archivos sin avisar, por lo que se recomienda hacer commit antes de ejecutarlo.",
        "Que creará miles de ramas por accidente colapsando la memoria.",
        "Que publicará nuestros ficheros locales en internet."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Formando parte de un equipo y teniendo un repositorio remoto clonado localmente, si queremos bajarnos las últimas modificaciones que hicieron los compañeros en el servidor, usamos:",
    "opciones": [
        "git clone",
        "git pull",
        "git push",
        "git update"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Si queremos hacer un 'commit' adjuntando directamente el comentario desde la línea de comandos sin abrir el editor de texto Vi/Vim, usaremos la opción:",
    "opciones": [
        "-c",
        "-t",
        "-m",
        "-l"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para averiguar visualmente en la consola qué cambios exactos (diferencias) se han introducido en los archivos locales desde el último commit, usamos:",
    "opciones": [
        "git view",
        "git diff",
        "git compare",
        "git status"
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Git posee una increíble capacidad para crear líneas de trabajo aisladas (para probar características sin afectar la principal). Estas se denominan:",
    "opciones": [
        "Branches (Ramas).",
        "Roots (Raíces).",
        "Trunks (Troncos).",
        "Leaves (Hojas)."
    ],
    "correcta": 0
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Al proceso de integrar o unir los cambios de una rama aislada de vuelta a la línea principal o a otra rama se le denomina comúnmente en Git:",
    "opciones": [
        "Push.",
        "Commit.",
        "Merge (Fusión).",
        "Link (Enlace)."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Los apuntes mencionan una conocida web pública orientada a alojar y 'socializar' proyectos utilizando Git (ofreciendo wikis, foros y gráficos). Se trata de:",
    "opciones": [
        "SourceForge.net.",
        "Bitbucket.org.",
        "Github.com.",
        "GitLab.com."
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Desde el punto de vista de la seguridad en la transmisión de código, el protocolo nativo de Git suele ir frecuentemente montado sobre un acceso seguro conocido como:",
    "opciones": [
        "FTP",
        "Telnet",
        "SSH",
        "Gopher"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "¿Es obligatorio el uso de un servidor HTTP/Web (como Apache) para poder compartir y publicar repositorios en Git en una red interna?",
    "opciones": [
        "Sí, sin él no se pueden transferir datos.",
        "No, Git no requiere ningún servidor web obligatorio, se puede usar directamente su protocolo o SSH.",
        "Solo es obligatorio si usamos la plataforma Windows.",
        "Sí, pero solo para proyectos open source."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para eliminar el papel de 'responsable' que aprueba manualmente los parches, Git permite que los desarrolladores suban cambios directamente al repositorio público utilizando el comando:",
    "opciones": [
        "git receive",
        "git insert",
        "git push",
        "git upload"
    ],
    "correcta": 2
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Para que el comando push pueda ser aceptado por un repositorio servidor gestionado mediante el demonio de red nativo (git daemon), el servidor debe tener activado el servicio:",
    "opciones": [
        "ftp-transfer.",
        "receive-pack.",
        "http-upload.",
        "ssh-keygen."
    ],
    "correcta": 1
},
{
    "tema": "Unidad 5 de trabajo apartado 4",
    "pregunta": "Al clonar por primera vez un proyecto remoto y querer crear nuestro propio repositorio local independiente con copia de la base de datos, el primer paso que hace 'git clone' es:",
    "opciones": [
        "Crear una contraseña cifrada.",
        "Copiar localmente el 'directorio de Git' que contiene los metadatos y objetos históricos.",
        "Pedir permiso al administrador de base de datos MySQL.",
        "Desinstalar versiones previas de Git."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Cuál de las siguientes es una forma válida de generar documentación con PhpDocumentor?",
    "opciones": [
        "Desde un editor gráfico de imágenes.",
        "Desde línea de comandos (PHP CLI - Command Line Interpreter).",
        "Mediante llamadas a la API de Windows.",
        "Exclusivamente conectando un cable serie."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "PhpDocumentor permite generar documentación utilizando:",
    "opciones": [
        "Un compilador de C++.",
        "Una extensión de Microsoft Word.",
        "Una interfaz web incluida en la distribución.",
        "Un servidor FTP privado."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Además de la línea de comandos y la interfaz web, ¿cómo más puede PhpDocumentor generar documentación?",
    "opciones": [
        "Desde código, incluyendo su funcionalidad dentro de scripts propios en PHP.",
        "Mediante consultas SQL puras.",
        "Ejecutando macros de Excel.",
        "A través de un simulador de Android."
    ],
    "correcta": 0
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Cuál de los siguientes es un formato de salida válido en los que PhpDocumentor permite generar la documentación?",
    "opciones": [
        "ODT.",
        "DOCX.",
        "PDF.",
        "MP3."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Entre los formatos de salida que puede generar PhpDocumentor se encuentra:",
    "opciones": [
        "HTML.",
        "EXE.",
        "BAT.",
        "PSD."
    ],
    "correcta": 0
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "PhpDocumentor es capaz de generar documentación estructurada en el formato de salida:",
    "opciones": [
        "AVI.",
        "ISO.",
        "CSS.",
        "XML."
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Los sistemas de control de versiones son programas que permiten...",
    "opciones": [
        "Documentar aplicaciones.",
        "Insertar comentarios en el código fuente de las aplicaciones.",
        "Gestionar un repositorio de archivos y sus distintas versiones.",
        "Compilar aplicaciones web."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Cuáles son algunas de las herramientas más utilizadas para generar documentación de forma automática a partir del código fuente?",
    "opciones": [
        "Apache y PHP.",
        "MySQL y MariaDB.",
        "Javadoc y PhpDocumentor.",
        "HTML y CSS."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "La herramienta de control de versiones no soluciona el _____, sólo informa de su existencia.",
    "opciones": [
        "conflicto",
        "cambio",
        "parche",
        "repositorio"
    ],
    "correcta": 0
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué son exactamente las plantillas de código en Javadoc?",
    "opciones": [
        "Archivos de configuración del servidor web.",
        "Sugerencias de código asociadas a palabras clave.",
        "Imágenes predeterminadas para los manuales.",
        "Scripts de base de datos relacionales."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Para usar phpDocumentor desde su interfaz web, ¿qué requisitos previos deben estar instalados y funcionando correctamente en el servidor?",
    "opciones": [
        "MySQL y PostgreSQL.",
        "Tomcat y Java.",
        "Node.js y MongoDB.",
        "Apache y PHP."
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué hace esencialmente la herramienta Javadoc?",
    "opciones": [
        "Traduce código Java a PHP automáticamente.",
        "Extrae comentarios del código fuente y genera un juego de documentación en formato HTML.",
        "Encripta el código fuente para mayor seguridad.",
        "Optimiza la memoria RAM que consume el programa al compilar."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Una plantilla en Javadoc se compone de:",
    "opciones": [
        "Un nombre y una descripción.",
        "Un nombre, un contexto en función del lenguaje y un pattern.",
        "Un nombre, una descripción, un contexto en función del lenguaje y un pattern.",
        "Un nombre y un pattern."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "El comando _____ muestra cómo se encuentran los archivos de nuestro proyecto en relación al repositorio del servidor.",
    "opciones": [
        "git clone",
        "git status",
        "git add",
        "git cvs"
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Para establecer la ruta donde guardar la documentación generada por phpDocumentor, es necesario cambiar el contenido de una línea en el archivo .ini de nuestro proyecto. ¿De qué línea se trata?",
    "opciones": [
        "directory",
        "target",
        "destination",
        "path"
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En phpDocumentor la documentación se distribuye en bloques 'DocBlock'. Estos bloques siempre se colocan _____ del elemento al que documentan.",
    "opciones": [
        "después",
        "en la definición",
        "antes",
        "en medio"
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué archivo se emplea en Git si existe la necesidad de excluir archivos del directorio del proyecto para que no sean rastreados?",
    "opciones": [
        ".gitexclude",
        ".gitignore",
        ".gitconfig",
        ".gitremove"
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Respecto a las características técnicas de Git, ¿en qué lenguaje está escrito principalmente aportándole gran velocidad?",
    "opciones": [
        "En Java.",
        "En PHP.",
        "En C.",
        "En Python."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "El comando _____ sólo seguirá la pista de los archivos que estaban presentes la primera vez que se ejecutó git add.",
    "opciones": [
        "git clone",
        "git reboot",
        "git commit",
        "git init"
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "La documentación a ser utilizada por Javadoc se escribe en comentarios que comienzan con:",
    "opciones": [
        "*//",
        "**/",
        "//",
        "/**"
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué sección de Git almacena los metadatos y la base de datos de objetos para el proyecto?",
    "opciones": [
        "Working directory.",
        "Git directory.",
        "Tating directory.",
        "Staging area."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué ventajas ofrecen los IDEs como Eclipse y NetBeans respecto a la herramienta Javadoc?",
    "opciones": [
        "Obligan a generar la documentación subiéndola a repositorios remotos como Github de forma automática.",
        "Traducen automáticamente los comentarios Javadoc a varios idiomas.",
        "No soportan Javadoc nativamente sin instalar plugins de pago.",
        "Disponen de opciones para generarlo mediante ventanas y ofrecen completado de código basado en Javadoc."
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Para que Javadoc interprete una etiqueta es necesario:",
    "opciones": [
        "Que se sitúe siempre al principio de la definición de funciones Java, y que únicamente sea precedida por espacio(s) o asterisco(s).",
        "Que se sitúe siempre al principio de la clase Java, y que únicamente sea precedida por espacio(s) o asterisco(s).",
        "Que se sitúe siempre al principio de una línea, o que únicamente sea precedida por espacio(s) o asterisco(s).",
        "Que se sitúe siempre al principio de la aplicación Java."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Los 'DocBlock' de phpDocumentor comienzan con los caracteres:",
    "opciones": [
        "/**",
        "*//",
        "**/",
        "//"
    ],
    "correcta": 0
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En sistemas de control de versiones un _____ es el lugar en donde se almacenan las revisiones.",
    "opciones": [
        "conflicto",
        "cambio",
        "repositorio",
        "parche"
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Cómo identifica Javadoc las etiquetas incrustadas en los comentarios de un código Java?",
    "opciones": [
        "Comienzan con el símbolo # y no distinguen mayúsculas de minúsculas.",
        "Comienzan con el símbolo @ y son sensibles a mayúsculas y minúsculas.",
        "Comienzan con el símbolo $ y deben estar siempre en mayúsculas.",
        "Comienzan con el símbolo & y son ignoradas si tienen números."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Los comentarios JavaDoc deben incluir unos indicadores especiales, que comienzan siempre por _____ y se suelen colocar al comienzo de línea.",
    "opciones": [
        "#",
        "!",
        "@",
        "*"
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Una de las funciones principales que permite un sistema de control de versiones es:",
    "opciones": [
        "Únicamente el trabajo de un desarrollador en un momento determinado sobre un proyecto.",
        "Impedir que más de dos personas lean el código al mismo tiempo.",
        "Ejecutar la aplicación web automáticamente en los clientes.",
        "Que varios clientes puedan sacar copias del proyecto al mismo tiempo."
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué facilidad ofrece un sistema de control de versiones respecto a las modificaciones de los archivos a lo largo del tiempo?",
    "opciones": [
        "Eliminar automáticamente el código de más de 30 días.",
        "Recuperar versiones anteriores del proyecto.",
        "Comprimir el proyecto borrando su historial cada vez que se guarda.",
        "Impedir volver a una versión previa si ya fue confirmada."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En cuanto al seguimiento del proyecto, un sistema de control de versiones permite:",
    "opciones": [
        "Ver históricos de cambios y comentarios.",
        "Ocultar los cambios para que solo los vea el administrador.",
        "Generar un documento PDF con todos los usuarios del sistema.",
        "Mostrar estadísticas en tiempo real de la memoria RAM del servidor."
    ],
    "correcta": 0
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Dentro de un proyecto integrado con Git, un archivo está en estado 'Confirmado' (committed) cuando:",
    "opciones": [
        "Se ha marcado el archivo para ir en la próxima confirmación.",
        "Ha sido modificado pero no almacenado aún en la base de datos.",
        "Los datos están almacenados de manera segura en la base de datos local.",
        "No puede volver a modificarse en el futuro bajo ninguna circunstancia."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué significa que un archivo esté en estado 'Modificado' en Git?",
    "opciones": [
        "Que ha sido borrado físicamente del disco duro.",
        "Que está listo en el área de preparación para el próximo commit.",
        "Que se acaba de subir al servidor remoto con push.",
        "Que ha sufrido cambios desde que se obtuvo del repositorio, pero no se ha preparado ni confirmado."
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En Git, cuando un archivo modificado se ha marcado en su versión actual para incluirlo en la próxima confirmación, su estado es:",
    "opciones": [
        "Inmutable.",
        "Preparado (staged).",
        "Confirmado (committed).",
        "Ignorado."
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Qué herramienta integrada trae Git para obtener y establecer variables de configuración que controlan su aspecto y funcionamiento?",
    "opciones": [
        "git setup",
        "git properties",
        "git config",
        "git admin"
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En un sistema de control de versiones centralizado, ¿cómo suele ser la arquitectura empleada y el rol del servidor?",
    "opciones": [
        "Una arquitectura de red en anillo sin servidores.",
        "Una estructura donde cada cliente oculta sus archivos al servidor principal.",
        "Utilizan una arquitectura cliente-servidor en donde el servidor guarda las versiones actuales del proyecto y su historia.",
        "Una arquitectura exclusiva de servidor donde el cliente no puede descargar ninguna copia local."
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En el caso de ya tener una copia de un proyecto remoto clonada localmente (usando git clone), podemos actualizar nuestra copia a la última versión del servidor con:",
    "opciones": [
        "git pull",
        "git log",
        "git branch",
        "git add"
    ],
    "correcta": 0
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Cuál de las siguientes es una forma correcta de obtener ayuda sobre un comando específico en Git a través de la terminal?",
    "opciones": [
        "Ejecutando 'git add [comando] ?'",
        "Ejecutando 'git help [comando]'",
        "Ejecutando 'git -info [comando]'",
        "Ejecutando 'help-git [comando]'"
    ],
    "correcta": 1
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "Otra forma válida de visualizar la ayuda de un comando específico de Git en consola es añadiendo un parámetro, ¿cuál es?",
    "opciones": [
        "Ejecutando 'git [comando] /?'",
        "Ejecutando 'git [comando] -h'",
        "Ejecutando 'git [comando] --help'",
        "Ejecutando 'git help -all [comando]'"
    ],
    "correcta": 2
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "En sistemas basados en Linux/Unix, ¿cómo se puede acceder a la página del manual de un comando específico de Git?",
    "opciones": [
        "Ejecutando 'man -git [comando]'",
        "Ejecutando 'manual git [comando]'",
        "Ejecutando 'git man [comando]'",
        "Ejecutando 'man git-[comando]'"
    ],
    "correcta": 3
},
{
    "tema": "Examen Online tema 5",
    "pregunta": "¿Cuál de las siguientes herramientas sirve específicamente para generar documentación a partir del código fuente?",
    "opciones": [
        "Git.",
        "Subversion.",
        "JavaDoc.",
        "HTML."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Según la teoría aplicada en la configuración de la tarea, ¿qué tipo de sistema de control de versiones es Git?",
    "opciones": [
        "Un Sistema de Control de Versiones Centralizado (CVCS).",
        "Un Sistema de Control de Versiones Distribuido (DVCS).",
        "Un sistema de backups jerárquico.",
        "Un servidor de almacenamiento FTP puramente secuencial."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Cuál es una de las principales diferencias de Git (sistema DVCS) frente a los sistemas centralizados clásicos como Subversion?",
    "opciones": [
        "Que requiere estar siempre conectado a internet para hacer un commit.",
        "Que los clientes replican completamente el repositorio localmente, incluyendo toda su historia.",
        "Que no permite crear ramas de desarrollo.",
        "Que solo funciona en sistemas operativos basados en Linux."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "A nivel teórico y estructural, ¿cómo modela Git sus datos al realizar una confirmación (commit)?",
    "opciones": [
        "Como una lista de cambios o parches incrementales en cada archivo.",
        "Como documentos PDF enlazados.",
        "Como un conjunto de instantáneas (snapshots) de un mini sistema de archivos.",
        "Como consultas exclusivas a una base de datos MySQL."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En Git, para ser eficiente, ¿qué sucede si un archivo no se ha modificado entre una confirmación y otra?",
    "opciones": [
        "Git lo comprime nuevamente ocupando el doble de espacio.",
        "Git lo elimina por seguridad.",
        "Git no almacena el archivo de nuevo, solo guarda un enlace al archivo idéntico ya almacenado.",
        "Git obliga al usuario a modificar el archivo para poder avanzar."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué mecanismo utiliza Git internamente para garantizar la integridad de todos los archivos y evitar que se corrompan sin ser detectados?",
    "opciones": [
        "Copias de seguridad en cinta magnética.",
        "Una suma de comprobación (checksum) basada en SHA-1.",
        "Un antivirus integrado en la terminal.",
        "Permisos especiales de administrador de Windows."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para verificar que la herramienta se ha instalado correctamente en nuestra máquina, el comando utilizado en la terminal es:",
    "opciones": [
        "git check-install",
        "git status",
        "git --version",
        "git info"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En la teoría de Git, ¿cuáles son las tres secciones principales físicas/lógicas de un proyecto local?",
    "opciones": [
        "El servidor Apache, el cliente y la base de datos.",
        "El Directorio de Git, el Directorio de trabajo y el Área de preparación (staging area).",
        "La Rama principal, la Rama secundaria y la Nube.",
        "El archivo config, el archivo ignore y el ejecutable."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Según el flujo de trabajo de Git, ¿qué significa que un archivo esté en estado 'Confirmado' (committed)?",
    "opciones": [
        "Que ha sido subido a un servidor como GitHub.",
        "Que ha sido modificado en el disco duro pero no guardado.",
        "Que los datos están almacenados de manera segura en la base de datos local de Git.",
        "Que está listo en el área de preparación para el próximo paso."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué comando de Git utilizamos para establecer variables de configuración que controlan el aspecto y funcionamiento de la herramienta?",
    "opciones": [
        "git setup",
        "git init",
        "git config",
        "git properties"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Cuáles son los dos primeros datos que la teoría de Git exige configurar inmediatamente tras la instalación, tal como se hace en la práctica?",
    "opciones": [
        "El nombre del repositorio y la rama principal.",
        "El nombre de usuario y la dirección de correo electrónico.",
        "El editor de código y el sistema operativo.",
        "La contraseña de GitHub y la IP del servidor."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Por qué es tan importante configurar correctamente el nombre y el correo electrónico en Git?",
    "opciones": [
        "Porque si no, el programa se cierra automáticamente.",
        "Porque las confirmaciones de cambios (commits) usan esta información de manera inmutable para identificar al autor.",
        "Para recibir boletines de noticias de Linus Torvalds.",
        "Para que GitHub pueda cobrarnos la licencia."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Cuando configuramos nuestro nombre o email empleando el flag '--global', ¿qué le indicamos a Git?",
    "opciones": [
        "Que la configuración se aplique a todos los usuarios del mundo.",
        "Que Git use esa configuración de manera general para todo lo que haga el usuario en ese sistema operativo.",
        "Que envíe nuestra configuración a un servidor público.",
        "Que solo aplique la configuración a la carpeta actual."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si cometemos un error tipográfico al declarar una variable de configuración global (ej. 'usar.name'), ¿qué parámetro de 'git config' empleamos para eliminarla?",
    "opciones": [
        "--delete",
        "--remove",
        "--unset",
        "--clear"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué comando nos permite visualizar una lista con la configuración actual que tiene Git en nuestra máquina para comprobar que todo está correcto?",
    "opciones": [
        "git config --list",
        "git show config",
        "git status",
        "git log"
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para que Git empiece a controlar las versiones de una carpeta local convirtiéndola en un repositorio, se debe ejecutar:",
    "opciones": [
        "git start",
        "git create",
        "git init",
        "git make-repo"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Tras ejecutar 'git init' en nuestro directorio, se crea automáticamente una carpeta oculta donde Git guarda los metadatos y la base de datos de objetos. ¿Cómo se llama?",
    "opciones": [
        ".svn",
        ".config",
        ".git",
        ".repository"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "El comando `git add .` (con un punto final), ejecutado en la consola, tiene como función principal en el flujo de trabajo:",
    "opciones": [
        "Subir los archivos a internet silenciosamente.",
        "Añadir todos los archivos nuevos o modificados de la carpeta actual al Área de Preparación (staging area).",
        "Borrar los archivos que tienen errores.",
        "Confirmar los cambios definitivamente en el repositorio."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "De acuerdo a los estados teóricos de Git, un archivo que acabamos de pasar por `git add` pero que aún no tiene 'commit', se encuentra:",
    "opciones": [
        "Confirmado (committed).",
        "Modificado (modified) sin registrar.",
        "Preparado (staged).",
        "Ignorado."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "El comando `git commit -m \"Mensaje\"` se utiliza habitualmente en la terminal para:",
    "opciones": [
        "Bajar los cambios del servidor a la carpeta local.",
        "Guardar la instantánea permanentemente en el directorio de Git sin necesidad de abrir un editor de texto externo.",
        "Deshacer el último cambio guardado.",
        "Enviar un mensaje de correo electrónico al equipo."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si realizamos modificaciones en un archivo del proyecto, ¿qué comando muestra las diferencias exactas de lo que hemos modificado antes de prepararlo?",
    "opciones": [
        "git view",
        "git changes",
        "git diff",
        "git show"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "El concepto de 'Rama' (Branch) en Git es fundamental. Para renombrar la rama principal de 'master' a 'main', el comando adecuado es:",
    "opciones": [
        "git rename master main",
        "git branch -M main",
        "git checkout main",
        "git switch main"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué es GitHub (github.com) según la teoría vista en la unidad?",
    "opciones": [
        "Un programa de línea de comandos que se instala en el PC.",
        "Un lenguaje de programación basado en C.",
        "Una web pública donde alojar proyectos utilizando Git, que ofrece herramientas para socializarlos.",
        "El servidor Apache que ejecuta nuestras páginas PHP en la nube."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Cuando enlazamos nuestro repositorio local con un repositorio en la nube en GitHub, utilizamos el comando:",
    "opciones": [
        "git link cloud",
        "git remote add origin [URL]",
        "git connect origin [URL]",
        "git fetch [URL]"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué nombre estándar se le suele dar convencionalmente al repositorio remoto principal al enlazarlo con `git remote add`?",
    "opciones": [
        "master",
        "main",
        "origin",
        "cloud"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para enviar directamente nuestros cambios confirmados (commits) desde el repositorio local al repositorio público de GitHub, utilizamos el comando:",
    "opciones": [
        "git pull",
        "git upload",
        "git send",
        "git push"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si un equipo de desarrolladores quiere clonar y descargar a sus máquinas locales el repositorio que hemos publicado en GitHub, deberán usar:",
    "opciones": [
        "git clone [URL]",
        "git pull [URL]",
        "git get [URL]",
        "git copy [URL]"
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En el flujo habitual, si hacemos una modificación en el código y queremos consolidar el cambio en local, ¿cuál es el orden lógico de comandos?",
    "opciones": [
        "git commit -> git add",
        "git diff -> git commit -> git add",
        "git add -> git commit",
        "git push -> git commit"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Para qué sirve el sistema de autenticación que nos salta en Windows al realizar el primer `git push` hacia GitHub?",
    "opciones": [
        "Para encriptar el disco duro.",
        "Para acreditar que tenemos permisos de escritura y transferencia sobre ese repositorio remoto.",
        "Para instalar Visual Studio Code.",
        "Para firmar digitalmente el código fuente en PDF."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "De acuerdo a la teoría de sistemas de control de versiones, cuando subimos los cambios mediante un `push`, ¿qué es exactamente lo que recibe el servidor?",
    "opciones": [
        "Un archivo comprimido ZIP con todo el proyecto.",
        "Solo los archivos que tienen errores.",
        "Las instantáneas confirmadas que replican la historia local en el repositorio remoto.",
        "Un reporte PDF de los cambios."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si otro programador ha realizado modificaciones en el repositorio de GitHub y nosotros queremos actualizar nuestro código local con esa última versión, debemos ejecutar:",
    "opciones": [
        "git update",
        "git push",
        "git pull",
        "git status"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Una buena documentación del código (como la generada por PhpDocumentor) es esencial en el entorno laboral porque:",
    "opciones": [
        "Impide que el código sea copiado ilegalmente.",
        "Facilita en gran medida el mantenimiento futuro y la comprensión por parte de otros miembros del equipo.",
        "Convierte automáticamente el código a lenguaje Java.",
        "Reduce el consumo de memoria RAM del servidor web."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "PhpDocumentor es una herramienta capaz de generar la documentación de un proyecto recorriendo sus ficheros e interpretando...",
    "opciones": [
        "El código compilado en binario.",
        "Las etiquetas HTML estándar.",
        "Los comentarios estructurados en bloques DocBlock.",
        "Las sentencias SQL de la base de datos."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué dos formatos de salida populares (mencionados en el temario y aplicables a las prácticas) puede generar PhpDocumentor?",
    "opciones": [
        "DOCX y XLSX.",
        "HTML (mediante plantillas) y PDF.",
        "EXE y BAT.",
        "JPG y PNG."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Los bloques de comentarios reconocidos por PhpDocumentor (DocBlocks) se caracterizan porque siempre deben iniciar con:",
    "opciones": [
        "//",
        "/*",
        "/**",
        "<!--"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En la teoría de documentación, ¿dónde debe colocarse siempre un bloque DocBlock en el código PHP para que funcione correctamente?",
    "opciones": [
        "Al final del fichero.",
        "En la primera línea del archivo obligatoriamente.",
        "Justo antes del elemento al que documentan (función, clase, etc.).",
        "Dentro de las llaves de la función."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Dentro de un DocBlock, las etiquetas especiales que son interpretadas por PhpDocumentor están precedidas por el carácter:",
    "opciones": [
        "&",
        "$",
        "#",
        "@"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@author` utilizada en PhpDocumentor sirve específicamente para:",
    "opciones": [
        "Autenticar el acceso a la base de datos.",
        "Indicar el autor que ha programado ese bloque de código.",
        "Comprobar las credenciales de Git.",
        "Enlazar la documentación a una red social."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué etiqueta de PhpDocumentor empleamos para indicar la versión actual del elemento o script?",
    "opciones": [
        "@edition",
        "@release",
        "@version",
        "@build"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para documentar de forma correcta los parámetros de entrada que recibe una función, se debe emplear la etiqueta:",
    "opciones": [
        "@var",
        "@input",
        "@argument",
        "@param"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En un bloque DocBlock de una función que recibe un nombre de usuario como string, una línea correcta de documentación sería:",
    "opciones": [
        "@param string $nombre Nombre del usuario.",
        "@input $nombre string",
        "@variable nombre (string)",
        "@string $nombre"
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@return` en PhpDocumentor tiene la función de:",
    "opciones": [
        "Indicar el valor o tipo de dato devuelto por una función.",
        "Forzar la finalización del script PHP.",
        "Hacer una redirección HTTP.",
        "Indicar el retorno de carro en HTML."
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si una función PHP solo realiza tareas internas y no devuelve ningún valor, su etiqueta de retorno en el DocBlock debe especificarse como:",
    "opciones": [
        "@return null",
        "@return false",
        "@return void",
        "@return empty"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué etiqueta de PhpDocumentor sirve para incluir anotaciones y descripciones que NO deben aparecer en la documentación pública, pero sí en la de desarrolladores?",
    "opciones": [
        "@private",
        "@hidden",
        "@secret",
        "@internal"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué efecto tiene colocar `@access private` en la documentación de un elemento?",
    "opciones": [
        "Cifra la función en la ejecución del servidor.",
        "Evita que se genere documentación pública para ese elemento, ocultando la implementación.",
        "Convierte la variable local en global de forma privada.",
        "Bloquea la ejecución del script desde el navegador."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@package` se utiliza en la cabecera de un archivo para:",
    "opciones": [
        "Comprimir el archivo en un .zip.",
        "Incluir documentación global a nivel de fichero, agrupándolo lógicamente.",
        "Enviar el código por correo.",
        "Instalar módulos automáticamente."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Cuando ejecutamos PhpDocumentor desde línea de comandos (CLI), el parámetro `-d` sirve para:",
    "opciones": [
        "Especificar el directorio de destino de la documentación.",
        "Especificar el directorio de origen donde se encuentra nuestro código PHP.",
        "Borrar (delete) documentación antigua.",
        "Descargar (download) dependencias."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En la ejecución por consola de PhpDocumentor, ¿qué parámetro empleamos para indicar la carpeta de destino donde queremos que se guarde la documentación generada (HTML, etc.)?",
    "opciones": [
        "-d",
        "-o",
        "-t",
        "-f"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si ejecutamos el comando `phpdoc -d /origen -t /destino`, ¿qué encontraremos como punto de entrada principal en la carpeta `/destino` tras la generación?",
    "opciones": [
        "Un archivo .exe ejecutable.",
        "El código fuente modificado.",
        "Un archivo index.html para iniciar la navegación de la documentación.",
        "Un documento PDF con todo el código cifrado."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Al visualizar el árbol de carpetas generado por PhpDocumentor en la carpeta destino, es común encontrar subdirectorios de soporte como:",
    "opciones": [
        "css, js y packages.",
        "bin, sbin y root.",
        "src, lib y var.",
        "exe, dll y sys."
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "De acuerdo a los requisitos del DocBlock, ¿qué pasa si las líneas intermedias de un comentario largo no comienzan por un asterisco `*`?",
    "opciones": [
        "PhpDocumentor genera un error de compilación PHP fatal.",
        "Son procesadas como código ejecutable.",
        "Esa línea es ignorada por el motor de PhpDocumentor.",
        "El texto se imprime en rojo en el HTML final."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "A nivel de interfaz teórica de la aplicación web, lo que describe la interfaz (y que se plasma en la documentación) es:",
    "opciones": [
        "El algoritmo interno y uso de bases de datos.",
        "Qué hace un método, qué parámetros hay que pasar y qué devuelve.",
        "El rendimiento exacto del servidor Apache.",
        "El diseño CSS de la página."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué utilidad tienen las herramientas como PhpDocumentor frente a la escritura de un manual en un documento de texto tradicional separado?",
    "opciones": [
        "Que ocupa menos espacio en el disco duro.",
        "Que automatiza el proceso, evitando el doble trabajo de actualizar un manual externo cada vez que cambia el código.",
        "Que no requiere saber programar.",
        "Que traduce automáticamente el texto al inglés."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "PhpDocumentor no solo se puede utilizar en la línea de comandos de Linux/Windows, sino que también en entornos aislados o distribuciones preparadas. En la práctica se demostró su uso mediante:",
    "opciones": [
        "Una máquina de escribir electrónica.",
        "Un contenedor de Docker.",
        "Una macro incrustada en Word.",
        "Un cliente FTP."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En entornos modernos (como Visual Studio Code, NetBeans o Eclipse), estructurar los comentarios con el formato DocBlock permite adicionalmente:",
    "opciones": [
        "Ejecutar el programa sin necesidad de servidor Apache.",
        "Mostrar la información de forma automática mediante el autocompletado del código.",
        "Corregir los errores lógicos del programa.",
        "Cifrar el archivo PHP para que nadie pueda robarlo."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Al visualizar el archivo `index.html` resultante de PhpDocumentor, ¿qué información obtenemos de la etiqueta `@version` de un script?",
    "opciones": [
        "La versión del lenguaje PHP utilizada en el servidor.",
        "La versión actual del script o archivo que el autor ha documentado.",
        "La versión del sistema operativo del cliente.",
        "La versión de Git instalada."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "El comando `tree` mencionado en el desarrollo de la tarea de documentación sirve para:",
    "opciones": [
        "Eliminar repositorios Git antiguos.",
        "Mostrar visualmente en la consola la jerarquía o estructura de directorios y archivos.",
        "Crear las ramas de un proyecto en Git.",
        "Descomprimir archivos tar.gz de forma recursiva."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En Git, ¿cuál es el comando que solicita ver un historial de todas las confirmaciones (commits) realizadas, mostrando sus identificadores (SHA-1)?",
    "opciones": [
        "git list",
        "git log",
        "git history",
        "git show-commits"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En Git, cuando queremos obtener un repositorio remoto completo que aún no existe en nuestra máquina local, ejecutamos la orden:",
    "opciones": [
        "git pull",
        "git download",
        "git copy",
        "git clone"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Según la teoría de sistemas de control de versiones distribuidos (DVCS), si el servidor principal (como GitHub) sufre una caída masiva y pierde datos:",
    "opciones": [
        "Todo el historial del proyecto se pierde irremediablemente.",
        "Solo quedan las confirmaciones de las últimas 24 horas.",
        "Cualquiera de los repositorios locales de los clientes puede usarse para restaurarlo completo con su historia.",
        "Hay que pagar una cuota especial de recuperación a Linus Torvalds."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Una 'Copia de trabajo' (working directory) en el entorno de Git es definida como:",
    "opciones": [
        "La base de datos MySQL donde se guardan los usuarios.",
        "El conjunto de archivos comprimidos dentro de .git.",
        "La extracción y colocación en disco de una versión del proyecto para ser usada o modificada.",
        "El área de memoria RAM asignada al servidor web."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si queremos documentar que una función matemática `calcularAreaRectangulo` lanza un error si la altura es negativa, podríamos usar teóricamente la etiqueta (aunque es más habitual en JavaDoc, se soporta en phpDoc para excepciones):",
    "opciones": [
        "@error",
        "@catch",
        "@warning",
        "@throws"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué ocurre si dentro del DocBlock utilizamos el indicador `@deprecated` en una función de PHP?",
    "opciones": [
        "El compilador borra la función directamente.",
        "Indica que el elemento no debería utilizarse, ya que en futuras versiones podría ser eliminado.",
        "Cambia el nombre de la función.",
        "Redirige la función hacia una página web externa."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@example` en PhpDocumentor es especialmente útil porque permite:",
    "opciones": [
        "Mostrar ejemplos de cómo NO programar.",
        "Ejecutar código de prueba unitaria en tiempo real.",
        "Especificar la ruta a un fichero con código que se mostrará resaltado en la documentación.",
        "Insertar un video de YouTube en el index.html."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Al visualizar el código de PhpDocumentor, ¿qué elementos pueden ser documentados directamente incluyéndoles un DocBlock justo encima?",
    "opciones": [
        "Las sentencias `if/else` y bucles `for`.",
        "Clases, funciones, variables globales y require/include.",
        "Las llamadas a librerías CSS en HTML.",
        "Los comandos de Linux `ls` o `pwd` dentro del script."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En relación al control de versiones, cuando dos usuarios modifican simultáneamente la misma línea de un archivo y ambos intentan guardar sus cambios en el repositorio, se produce:",
    "opciones": [
        "Un formato del disco duro.",
        "Un Conflicto.",
        "Una Rama (Branch).",
        "Un Checksum."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para solucionar los conflictos, un sistema como Git por defecto:",
    "opciones": [
        "Sobrescribe siempre los cambios del usuario más reciente.",
        "Solo avisa de la existencia del conflicto, dejando la resolución en manos del usuario.",
        "Borra el archivo en disputa.",
        "Sortea de forma aleatoria qué versión conservar."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿A qué se refiere la teoría al mencionar una 'combinación' (merge) en un sistema de control de versiones?",
    "opciones": [
        "Al cifrado de varios archivos en un único ZIP.",
        "Al proceso de unir cambios realizados por diferentes usuarios sobre los mismos ficheros en una revisión unificada.",
        "Al borrado de la carpeta .git del sistema local.",
        "Al proceso de descargar el programa de instalación desde la red."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué ventaja tiene generar documentación en formato XML (DocBook) utilizando PhpDocumentor?",
    "opciones": [
        "Que ocupa un solo byte en el disco duro.",
        "Que es el único formato compatible con navegadores de móviles antiguos.",
        "Que a partir de este dialecto se puede transformar a cualquier otro formato utilizando hojas de estilo XSLT.",
        "Que se compila automáticamente en un archivo de lenguaje C."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Un sistema de control de versiones permite recuperar versiones pasadas, pero ¿exige mantener docenas de copias del proyecto en carpetas separadas (como V1, V2_final, etc.) en el directorio de trabajo?",
    "opciones": [
        "Sí, Git crea carpetas físicas visibles por cada versión.",
        "No, Git administra internamente la historia en la base de datos de `.git` y el directorio de trabajo solo muestra la revisión activa.",
        "Solo es posible si usamos Subversion.",
        "Sí, si no se guardan carpetas físicas no se puede viajar en el tiempo."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué comando usaríamos si queremos que Git deje de realizar seguimiento a un archivo en las futuras confirmaciones (borrándolo del control)?",
    "opciones": [
        "git clean ARCHIVO",
        "git erase ARCHIVO",
        "git rm ARCHIVO",
        "git destroy ARCHIVO"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para inicializar el entorno de Git y hacer que las subidas locales al servidor público en la nube (ej. GitHub) funcionen, Git a menudo utiliza transporte seguro bajo un protocolo externo. ¿Cuál es habitualmente?",
    "opciones": [
        "Telnet",
        "Gopher",
        "SSH (o HTTPS)",
        "FTP"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para comprobar el estado actual de nuestro directorio de trabajo en Git (viendo qué está modificado y qué está en el área de preparación), utilizamos frecuentemente el comando:",
    "opciones": [
        "git check",
        "git status",
        "git show",
        "git inspect"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si quisiéramos retroceder en el historial de forma definitiva (borrando commits defectuosos) recuperando el estado exacto de un commit dado con el SHA1 especificado, empleamos:",
    "opciones": [
        "git checkout SHA1",
        "git reset --hard SHA1",
        "git return SHA1",
        "git restore --all SHA1"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si un desarrollador solo quiere 'viajar en el tiempo' visualmente para ver cómo estaba el código en un commit antiguo, sin borrar los nuevos, usa:",
    "opciones": [
        "git checkout SHA1",
        "git reset --hard SHA1",
        "git delete --soft SHA1",
        "git diff SHA1"
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@see` en un DocBlock de PhpDocumentor es empleada para:",
    "opciones": [
        "Abrir una imagen en el navegador.",
        "Crear enlaces internos a la documentación de otro elemento.",
        "Comprobar el código de seguimiento de Git.",
        "Lanzar una alerta de seguridad al usuario."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "A diferencia de PhpDocumentor, otra herramienta similar y mencionada en el temario que además es estándar para el lenguaje Java es:",
    "opciones": [
        "Doxygen.",
        "JavaDoc.",
        "EclipseDoc.",
        "Subversion."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué información incluye típicamente el 'metadato' de una revisión (commit) generada por un sistema de control de versiones?",
    "opciones": [
        "Las especificaciones técnicas del ordenador del cliente.",
        "Identidad del autor, fecha, hora y razón de los cambios.",
        "La contraseña del administrador de redes.",
        "El manual de usuario completo de la herramienta."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué nombre técnico recibe la lista de diferencias generada al comparar revisiones, que puede usarse para reproducir los cambios en un código?",
    "opciones": [
        "Commit.",
        "Parche (Patch).",
        "Script de Bash.",
        "DocBlock."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Cuál es la función del archivo 'git-daemon-export-ok' creado durante la configuración de repositorios públicos según el temario?",
    "opciones": [
        "Marcar un repositorio como exportable y permitir el acceso público a él mediante git daemon.",
        "Autorizar al antivirus a analizar la carpeta .git.",
        "Convertir el repositorio a formato ZIP automáticamente.",
        "Habilitar el cifrado militar en los commits."
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La documentación de la 'Implementación' está orientada a:",
    "opciones": [
        "Los usuarios finales que no saben programar.",
        "Los auditores de seguridad de bases de datos.",
        "Los desarrolladores que tengan que depurar o actualizar los bloques de código.",
        "El diseñador gráfico de la interfaz web."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La documentación sobre la 'Toma de decisiones' documenta:",
    "opciones": [
        "Los parámetros que hay que pasarle a una función.",
        "Por qué se ha implementado de determinada forma y no de otra (ej. para optimizar recursos).",
        "La versión de Git instalada.",
        "Las variables del sistema operativo."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Al documentar la 'Interfaz' (no cómo lo hace, sino qué hace y qué parámetros necesita), esta información es tremendamente útil para:",
    "opciones": [
        "Ocultar el código al compilador de PHP.",
        "El gestor de versiones que hace los parches.",
        "Terceras personas (u otros programadores) que utilizan funciones o clases diseñadas por nosotros.",
        "Aumentar el tamaño del archivo final."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Cuál es un beneficio indirecto de escribir buenos bloques DocBlock en entornos IDE como Eclipse o VSCode?",
    "opciones": [
        "Que compila el código 10 veces más rápido.",
        "Que traduce la aplicación a diferentes idiomas en tiempo real.",
        "Que permite al IDE generar autocompletado y sugerencias informativas cuando llamamos a la función documentada.",
        "Que bloquea intentos de inyección SQL."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Cuál de las siguientes etiquetas en un DocBlock se usa para incluir información sobre licencias y derechos de código?",
    "opciones": [
        "@license",
        "@copyright",
        "@rights",
        "@author"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Si un archivo se modifica localmente pero el desarrollador NO ejecuta el comando `git add`, en qué estado de Git permanece?",
    "opciones": [
        "En estado Staged (Preparado).",
        "En estado Committed (Confirmado).",
        "En estado Modified (Modificado).",
        "En estado Ignorado."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué indica teóricamente que un archivo ha sido incorporado al 'Área de preparación' (Staging area)?",
    "opciones": [
        "Que ha sido subido a GitHub mediante `push`.",
        "Que el archivo se ha borrado temporalmente.",
        "Que se ha marcado una versión actual del archivo para incluirlo de manera definitiva en el próximo `commit`.",
        "Que el archivo está bloqueado para lectura por otros programas."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué etiqueta en un DocBlock de PhpDocumentor usarías si quisieras enlazar un determinado recurso HTTP externo (por ejemplo, la URL de un manual oficial)?",
    "opciones": [
        "@url",
        "@href",
        "@link",
        "@web"
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Git posee una increíble capacidad para crear líneas de trabajo separadas (para probar características nuevas sin tocar la línea principal de producción). A esto se le llama usar:",
    "opciones": [
        "Backups (Copias).",
        "Branches (Ramas).",
        "Tags (Etiquetas).",
        "Clones."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Cuando se usa el comando `git mv` para renombrar un archivo en Git, internamente se está indicando que:",
    "opciones": [
        "Se está moviendo el archivo a una rama secundaria.",
        "Se elimina el nombre anterior y se agrega el nuevo, todo en un solo paso de seguimiento.",
        "Se está borrando el historial completo del archivo.",
        "Se está subiendo el archivo al servidor público."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Además de PhpDocumentor, existe una alternativa para documentar código PHP (y otros lenguajes) que no requiere estar escrita en PHP ni servidor web. Es un programa ejecutable. ¿Cuál es?",
    "opciones": [
        "Doxygen.",
        "DocBook.",
        "EclipseDoc.",
        "GitDoc."
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En PhpDocumentor, el formato de comentarios se basa estrechamente en el estándar previamente establecido por:",
    "opciones": [
        "Microsoft Word.",
        "C++Doc.",
        "JavaDoc.",
        "XML."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@since` en PhpDocumentor sirve principalmente para:",
    "opciones": [
        "Declarar la fecha exacta y hora en la que se compila el script.",
        "Indicar que el elemento está disponible desde una determinada versión anterior del proyecto.",
        "Fijar el momento de finalización del proyecto.",
        "Reemplazar a la etiqueta `@author`."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué significa el uso de la directiva `--global` combinada con `core.editor` (ej. `git config --global core.editor code --wait`) vista en las configuraciones de Git?",
    "opciones": [
        "Que se descargará el editor globalmente desde internet.",
        "Que Git usará el editor configurado (ej. VS Code) por defecto en todo el sistema para operaciones que requieran escribir mensajes, como los commits largos.",
        "Que el editor modificará la configuración de todos los usuarios en red local.",
        "Que el editor solo funciona para archivos PHP."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En los Sistemas de Control de Versiones Centralizados (CVCS), si el servidor principal falla y su disco se corrompe sin respaldos...",
    "opciones": [
        "Los clientes continúan subiendo código entre sí automáticamente por P2P.",
        "No sucede nada porque el código se genera mediante inteligencia artificial.",
        "Se pierde absolutamente toda la historia del proyecto salvo la instantánea local actual que tengan los clientes.",
        "El servidor restaura el código comunicándose con GitHub."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Según la teoría aplicada, la combinación típica para un 'commit' en consola usa un parámetro para pasar el mensaje directamente. ¿Cuál es ese parámetro?",
    "opciones": [
        "-msg",
        "-t",
        "-c",
        "-m"
    ],
    "correcta": 3
},
{
    "tema": "Tarea tema 5",
    "pregunta": "A partir de un conjunto de archivos PHP documentados y ubicados en una carpeta, la ejecución en Docker del comando `phpdoc -d /origen -t /destino` se considera un ejemplo de:",
    "opciones": [
        "Generación automática de documentación a partir del código fuente.",
        "Control de versiones distribuido en red.",
        "Depuración remota de errores en ejecución.",
        "Cifrado de servidor web en Apache."
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "Para la integración de Git con entornos visuales web en local (antes de la popularidad de GitHub), el temario explica cómo instalar y configurar el paquete:",
    "opciones": [
        "git-apache",
        "gitweb",
        "git-ui",
        "git-php"
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "El comando `mkdir` empleado ocasionalmente en el entorno de consola durante el desarrollo de la tarea sirve de manera general para:",
    "opciones": [
        "Añadir archivos al staging area.",
        "Borrar una base de datos.",
        "Crear un nuevo directorio (carpeta).",
        "Descomprimir un archivo descargado."
    ],
    "correcta": 2
},
{
    "tema": "Tarea tema 5",
    "pregunta": "¿Qué aporta la estructura distribuida de Git (DVCS) en caso de que el servidor que contiene el proyecto principal falle permanentemente?",
    "opciones": [
        "Que cualquier repositorio de cliente contiene la historia y datos completos, pudiendo usarse para restaurar el servidor.",
        "Nada, porque los clientes solo tienen parches incrementales sin sentido.",
        "Que los clientes tendrán que volver a programar el sistema.",
        "El envío automático de un correo al soporte de GitHub."
    ],
    "correcta": 0
},
{
    "tema": "Tarea tema 5",
    "pregunta": "En las buenas prácticas de PhpDocumentor mostradas, si un método requiere recibir un objeto o variable de tipo numérico, la etiqueta `@param` debe indicar idealmente:",
    "opciones": [
        "Solo la descripción sin tipo, pues PHP no tiene tipos.",
        "El tipo de dato, el nombre de la variable y una descripción (ej. `@param float $base La medida...`).",
        "El tipo de retorno esperado de la variable.",
        "Únicamente el nombre de la variable."
    ],
    "correcta": 1
},
{
    "tema": "Tarea tema 5",
    "pregunta": "La etiqueta `@ignore` en un bloque DocBlock de PhpDocumentor produce la siguiente reacción en el generador:",
    "opciones": [
        "Destruye el archivo fuente original por seguridad.",
        "Evita explícitamente que PhpDocumentor documente y procese ese determinado elemento.",
        "Oculta la visualización de errores al compilar.",
        "Muestra la función en letra pequeña en el índice HTML."
    ],
    "correcta": 1
}






];