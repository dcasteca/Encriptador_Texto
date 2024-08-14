# Encriptador de Mensajes

Este proyecto es una aplicación simple de encriptación y desencriptación de mensajes. Los usuarios pueden ingresar un mensaje de texto, que se encriptará utilizando un conjunto de reglas de sustitución predefinidas. También pueden desencriptar el mensaje encriptado para obtener el texto original.

## Características

- **Encriptar Mensajes:** Convierte las vocales del mensaje en sus equivalentes encriptados.
- **Desencriptar Mensajes:** Convierte el mensaje encriptado de vuelta a su forma original.
- **Copiar Texto:** Permite copiar el mensaje encriptado o desencriptado al portapapeles.
- **Indicador de Carga:** Muestra un indicador de carga mientras el mensaje se procesa.

## Tecnologías Utilizadas

- **HTML**
- **CSS**
- **JavaScript**

## Instrucciones de Uso

1. **Ingresar el Mensaje:**
   - Escribe o pega un mensaje en el área de texto.

2. **Encriptar el Mensaje:**
   - Haz clic en el botón "Encriptar". El mensaje se transformará utilizando las reglas de sustitución y se mostrará en la sección de resultados.

3. **Desencriptar el Mensaje:**
   - Haz clic en el botón "Desencriptar". El mensaje encriptado se convertirá de nuevo al texto original.

4. **Copiar el Mensaje:**
   - Haz clic en el botón "Copiar" para copiar el mensaje encriptado o desencriptado al portapapeles.

## Reglas de Encriptación

El proceso de encriptación se basa en las siguientes reglas de sustitución:

- **e** se convierte en **enter**
- **i** se convierte en **imes**
- **a** se convierte en **ai**
- **o** se convierte en **ober**
- **u** se convierte en **ufat**

Estas reglas se aplican en orden secuencial, y cada letra en el mensaje es reemplazada por su correspondiente valor encriptado.

## Estructura del Código

El código JavaScript está organizado de la siguiente manera:

- **Variables:**
  - Se seleccionan y almacenan referencias a los elementos del DOM como el área de texto, botones y elementos de resultados.

- **Funciones:**
  - `encryptMessage(message)`: Recorre el mensaje de entrada y aplica las reglas de encriptación.
  - `decryptMessage(message)`: Desencripta el mensaje aplicando las reglas inversas.
  
- **Eventos:**
  - Se añaden eventos a los botones para encriptar, desencriptar y copiar el mensaje.

## Personalización

Puedes personalizar las reglas de encriptación cambiando las entradas en la matriz `substitutionKeys`. También puedes ajustar el estilo del indicador de carga y otros elementos visuales modificando el CSS.

## Contribuciones

Si deseas contribuir a este proyecto, eres bienvenido a hacer un fork y enviar tus cambios a través de un pull request. También puedes abrir issues para reportar problemas o sugerir mejoras.

dcasteca ;)
