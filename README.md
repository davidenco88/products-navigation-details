# RESPUESTA A LAS PREGUNTAS TEORICAS

## ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

En el marco de la metodología Scrum, existen varias ceremonias importantes durante el desarrollo de un Sprint. Estas ceremonias se llevan a cabo para facilitar la colaboración, la transparencia y la toma de decisiones dentro del equipo Scrum. A continuación, se describen las principales ceremonias y su propósito:

Planificación del Sprint (Sprint Planning): Esta ceremonia tiene lugar al comienzo de cada Sprint. El equipo Scrum se reúne para determinar qué elementos del backlog del producto se incluirán en el próximo Sprint y cómo se llevará a cabo el trabajo. El objetivo es establecer un plan claro y alcanzable para el Sprint y definir los objetivos que se deben lograr.

Reunión Diaria de Scrum (Daily Scrum): También conocida como "stand-up", esta reunión se lleva a cabo diariamente durante el Sprint. El equipo Scrum se reúne durante un tiempo limitado (generalmente 15 minutos) para compartir el progreso realizado desde la última reunión, discutir los desafíos y coordinar el trabajo futuro. El propósito principal es mantener a todos los miembros del equipo informados y fomentar la colaboración.

Revisión del Sprint (Sprint Review): Al finalizar el Sprint, el equipo Scrum se reúne con los stakeholders para revisar el trabajo completado. Durante esta ceremonia, el equipo muestra las funcionalidades desarrolladas y recibe retroalimentación de los stakeholders. El objetivo es obtener comentarios sobre el producto y ajustar el backlog del producto en consecuencia.

Retrospectiva del Sprint (Sprint Retrospective): Después de la Revisión del Sprint, el equipo Scrum se reúne para reflexionar sobre el Sprint finalizado y mejorar continuamente su proceso de trabajo. Durante esta ceremonia, el equipo identifica qué funcionó bien, qué no funcionó y qué se puede mejorar. Se establecen acciones concretas para abordar los problemas identificados y se ajusta el proceso de trabajo para el próximo Sprint.

## ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Los wireframes son representaciones visuales básicas de la estructura y diseño de una interfaz de usuario. Son esquemas simples que muestran la distribución de los elementos clave de una página o aplicación, como los bloques de contenido, los botones, los menús y otros componentes.

Los wireframes se utilizan para comunicar de manera visual y rápida la disposición y organización de los elementos de una interfaz, sin preocuparse demasiado por los detalles estéticos o visuales. Permiten comprender la estructura y la navegación de un producto digital antes de pasar a etapas más avanzadas de diseño y desarrollo.

Una herramienta popular para crear wireframes es "Balsamiq Wireframes". Balsamiq es una herramienta de diseño de interfaz de usuario que permite crear wireframes de manera rápida y sencilla. Proporciona una biblioteca de elementos de interfaz comunes y un entorno de arrastrar y soltar para construir rápidamente los esquemas visuales. Además, cuenta con funcionalidades para agregar anotaciones y comentarios, lo que facilita la colaboración en el proceso de diseño.

## Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

En JavaScript, var, let y const son declaraciones utilizadas para crear variables. Cada una tiene características y comportamientos ligeramente diferentes. A continuación, se explica la diferencia entre ellas:

- var: Es la forma más antigua de declarar variables en JavaScript. Una variable declarada con var tiene un alcance de función o un alcance global, lo que significa que está disponible en todo el ámbito de la función en la que se declara o en el ámbito global si se declara fuera de una función. Además, las variables declaradas con var pueden ser redeclaradas y su valor puede ser modificado.

Ejemplo:

```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20; // redeclaración de la variable 'x'
    console.log(x); // salida: 20
  }
  console.log(x); // salida: 20
}
```
- let: Es una forma más moderna de declarar variables en JavaScript, introducida en ECMAScript 6 (ES6). Una variable declarada con let tiene un alcance de bloque, lo que significa que solo está disponible dentro del bloque en el que se declara, ya sea dentro de una función, un bucle o cualquier bloque delimitado por llaves {}. Además, las variables declaradas con let no pueden ser redeclaradas dentro del mismo ámbito, pero su valor puede ser modificado.

Ejemplo:

```javascript
function example() {
  let x = 10;
  if (true) {
    let x = 20; // variable 'x' diferente dentro del bloque
    console.log(x); // salida: 20
  }
  console.log(x); // salida: 10
}
```
- const: Al igual que let, const también fue introducido en ES6. Una variable declarada con const también tiene un alcance de bloque y no puede ser redeclarada dentro del mismo ámbito. Sin embargo, a diferencia de let, una vez que se le asigna un valor a una variable const, no se puede cambiar. Las variables const son constantes inmutables.

Ejemplo:

```javascript
function example() {
  const x = 10;
  if (true) {
    const x = 20; // variable 'x' diferente dentro del bloque
    console.log(x); // salida: 20
  }
  console.log(x); // salida: 10
}
```
En resumen, se recomienda utilizar let para declarar variables que necesiten modificarse en su ámbito, y const para declarar variables que no cambiarán su valor. La declaración var se utiliza principalmente en contextos más antiguos o cuando se necesita un alcance de función o global específico.

## Explicar la diferencia entre git merge y git rebase.

Tanto git merge como git rebase son comandos en Git que permiten combinar ramas en un repositorio. Sin embargo, hay diferencias fundamentales en cómo funcionan y el resultado que producen. A continuación, se explica la diferencia entre ellos:

- git merge: El comando git merge combina los cambios de una rama con otra rama. Cuando se ejecuta git merge, Git crea un nuevo commit de fusión que une los cambios de las ramas involucradas. El historial de commits original se mantiene intacto y se conserva una referencia a la rama fusionada.

Ejemplo:

```
git checkout rama-destino
git merge rama-origen
```
En este caso, se crea un nuevo commit de fusión en la rama de destino que contiene los cambios de la rama de origen.

```mathematica
A -- B -- C -- D -- E (rama-destino)
     \
      F -- G -- H (rama-origen)
```
Después de la fusión, el historial de commits se vería así:

```mathematica
A -- B -- C -- D -- E -- M (rama-destino)
     \                /
      F -- G -- H ---- (rama-origen)
```

- git rebase: El comando git rebase también combina cambios de una rama con otra, pero de una manera diferente. En lugar de crear un commit de fusión, git rebase traslada los commits de una rama y los aplica en la punta de otra rama. Esto reescribe el historial de commits y crea una secuencia lineal de commits.

Ejemplo:

```
git checkout rama-origen
git rebase rama-destino
```
En este caso, los commits de la rama de origen se aplican uno a uno sobre la punta de la rama de destino.

```mathematica
A -- B -- C -- D -- E (rama-destino)
                  \
                   F' -- G' -- H' (rama-origen)
```

Después del rebase, el historial de commits se vería así:

```mathematica
A -- B -- C -- D -- E -- F' -- G' -- H' (rama-destino/rama-origen)
```

La diferencia clave entre git merge y git rebase radica en cómo se estructura el historial de commits. git merge conserva la estructura de ramificación original, mientras que git rebase crea una secuencia lineal de commits. La elección entre uno u otro depende del flujo de trabajo y las preferencias del equipo de desarrollo. En general, git merge se utiliza para fusionar ramas públicas o estables, mientras que git rebase se utiliza para mantener un historial de commits más limpio y lineal antes de fusionar cambios en una rama principal.

## ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

La diferencia entre un Pull Request (PR) y el comando git pull radica en el contexto en el que se utilizan y la funcionalidad que ofrecen:

- Pull Request (PR):
Un Pull Request (PR) es una funcionalidad que se utiliza en plataformas de control de versiones como GitHub o Bitbucket para colaborar en el desarrollo de un proyecto en equipo. Un PR permite solicitar a otros miembros del equipo que revisen y fusionen los cambios realizados en una rama (normalmente una rama de características o de desarrollo) hacia otra rama (generalmente la rama principal o de producción). Los PRs son una herramienta para la revisión de código, la colaboración y la gestión de cambios antes de que se fusionen en el repositorio principal.

- Comando git pull:
El comando git pull se utiliza en Git para actualizar el repositorio local con los últimos cambios de una rama remota. Básicamente, combina dos comandos: git fetch y git merge. Cuando ejecutas git pull, Git descarga los últimos cambios del repositorio remoto (con git fetch) y luego fusiona esos cambios con la rama actual del repositorio local (con git merge).

En resumen, git pull se utiliza para sincronizar y actualizar tu copia local de un repositorio con los últimos cambios del repositorio remoto.

En contraste, un PR es una funcionalidad específica de las plataformas de control de versiones y se utiliza para solicitar la revisión y la fusión de cambios entre ramas en un entorno de colaboración. git pull es un comando de Git utilizado para actualizar tu repositorio local con los cambios de una rama remota.

## ¿Qué es el Virtual DOM?

El DOM (Document Object Model) es una representación en memoria de la estructura HTML de una página web. Cada vez que se realizan cambios en los elementos de la página, el DOM se actualiza y se vuelve a renderizar, lo que puede ser costoso en términos de rendimiento.

El Virtual DOM es una abstracción ligera y eficiente del DOM real. Es una copia en memoria del DOM que se utiliza internamente por bibliotecas como React. Cuando ocurren cambios en la aplicación, en lugar de realizar directamente las modificaciones en el DOM real, se aplican los cambios en el Virtual DOM. Luego, se compara el Virtual DOM modificado con el Virtual DOM anterior para determinar las diferencias (diffing) entre ellos.

Una vez que se han identificado las diferencias, solo se actualizan los elementos necesarios en el DOM real. Esta técnica de actualización selectiva ayuda a reducir la cantidad de cambios en el DOM y, por lo tanto, mejora el rendimiento de la aplicación.

La ventaja del Virtual DOM es que ofrece un modelo de programación más sencillo y eficiente. Los desarrolladores pueden trabajar con una representación virtual de la interfaz de usuario sin tener que preocuparse por manipular directamente el DOM real. Además, al aplicar cambios selectivos en el DOM, se minimiza el costo de las operaciones de actualización y renderizado.

En resumen, el Virtual DOM es una técnica que utiliza una representación en memoria de la estructura del DOM para mejorar el rendimiento y la eficiencia al renderizar y actualizar la interfaz de usuario en bibliotecas y frameworks de JavaScript como React.