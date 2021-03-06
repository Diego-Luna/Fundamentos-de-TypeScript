# Que es TypeScript 👨‍💻

Es un superconjunto tipado de javascript, que compila a javascript.

Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.

- Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.

- Lenguaje de alto nivel: Entendible por humanos y posee un alto nivel de abstracción del código máquina.

- Genera como resultado código JavaScript: Emite código javascript compatible con browsers y otras herramientas de javascript.

- Código abierto.

- Desarrollo desde cualquier sistema.

- El código puede ejecutarse en cualquier navegador o plataforma que soporte javascript.

Porque usar TypeScript:

- Programación orientada a objetos
- Potenciar tu código JavaScript
- Mayor productividad
- Poderoso sistema de tipos
- Compila a ES5, ES6 y más
- Proyecto muy activo/Open source
- Actualizaciones periódicas
- Comunidad creciente
- Puede prevenir cerca del 15% de bugs
- Puede usar TypeScript para backend

## Instalación de TypeScript

Con el siguiente comando lo instalaremos de manera global:

```npm
  npm install -g typescript
```

### Consultar la versión del compilador de TS:

```npm
  tsc -v
```

### Compilar nuestros ficheros .ts

```
  tsc your_file.ts
```

### Compilar de manera ‘automática’ nuestros ficheros .ts

```
  tsc --watch your_file.ts
```

## Configurar Typescript

- Especifica la raiz de un proyecto TS

- Permite configurar opciones para el compilador

Para crear este archivo en cualquier proyecto:

```
  tsc --init
```

El archivo base es este:

```
  tsconfig.json
```

```javascript
  {
	"extends": "./config/base"
	"compilerOptions":{
		"target": "es6",
		"module": "commonjs"
		"strict": true,
		"removeComments": true
	},
	"include":[
		"src/**/*.ts"
	],
	"exclude": [
		"node_modules",
		"**/*.test.ts"
	]
}
```

Una vez que este archivo es generado, ejecutamos:

- tsc // Busa la configuracion dentro del proyecto
- tsc --project folder // Especifica el directorio donde esta la configuracion
- tsc file.ts // Omite la configuracion

## Tipado en TypeScript

- Explícito: Se define explícitamente una sintaxis (el orden, la formación y la combinación de las reglas) del tipo de la variables a usar.

```typeScript
	miVariableExplicita : string = 'Esta variable es explícita' // el `:` permite especificar el tipo del dato
```

- Inferido: TS tiene la habilidad de deducir el tipo de variable que se usa a partir del valor asignado a dicha variable

```typeScript
	miVariableInferida = "Esta variable será un string"  // TS deduce el tipo de miVariableInferida y el valor, a partir de la inicialización de la misma
```

### Tipos de datos primitivos:

 * Number 	-> cualquier numero
	 * hexadicimal
	 * binario
	 * octal
 * Boolean	-> cualquier numero.
 * String		-> cualquier cadena de texto.
 * Array		-> un arreglo para contener un conjunto de datos.
 * Tuple		-> es un array de elementos que están tipados.
 * Enum			-> permiten definir un conjunto de constantes con nombre.
 * Any  		-> acepta cualquier tipo de dato.
 * Void			-> es lo opuesto a nay: representa la ausencia de tipo, pero se usa como tipo de retorno en funciones.
 * Null			-> es la no existencia de la variable.Se pueden asumir como subtipos de los otros tipos de datos.
 * Undefined	-> es una variable sin ningun valor.Se pueden asumir como subtipos de los otros tipos de datos.
 * Never		-> Representa el tipo de valor que nunca ocurre.
 * object		-> Es el tipo de dato que representa un valor no primitivo.
 * Object		-> Clase Object JS.

Null y undefined se consideran subtipos de void

También que null y undefined son subtipos para el resto de tipos de datos que hemos estudiado

## Funciones en TS

* Los parametros en las funciones son tipados
* Se pueden definir parametros opcionales
* Se puede definir que tipo de datos devolvera la funcion

## Interfaces

Las interfaces en TypeScript constituyen una forma poderosa de definir "contratos" tanto para tu proyecto, como para el código externo del mismo.

### Interfaces: Propiedades de solo lectura

Algunas propiedades de la interfaz podrían no ser modificacbles una vez creado el objeto.

Esto es posible usando "readonly" antes del nomrbe de la propiedad.


## Extensión de interfaces

Las interfaces pueden extenderce unas de otras.Esto permite copiar los miembros ya definidos en una interfaz a otra. ganando flexibilidad y reusabilidad de componentes.


## Definiendo Clases y Constructores

A partir de ECMAScript 2015 es posible construir clases y hacer uso del paradigma de la Programacion Orientada a Objetos en JavaScript.

TypeScript permite aplicar estas tecnicas sin tener que esperar por otra version.

### Clases Miembors Publicos

TypeScript define un modificador de acceso público por defecto para los miembros de clase.

Tambien es posible marcar un miembro como publico usando la palabra reservada "public".

### Clases Miembors Privados

TypeScript define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada "private".

## Metodos Set y Get
TypeScript soporta los modelos accesores "set", "get" como una forma de interceptar los accesos a los miembros privados de un objeto.

## Herencia de Clases y Miempros Protegidos
TypeScript soporta este patron comun en el mundo de la POO.

Implementa la habilidad de extender codigo de clases existentes a traves de la "herencia".

Para eredar una clase a otra usan la palabra "extends". Para poner los valores a la mitad de publicos y privados usa "protected".

## Clases Abstractas
Las clases Abstractas son la base donde otras clases podrian derivarse. A diferencia de una interfaz una clase abstracta puede implementar funciones para sus instancias.

La palabra reservada es "abstract".

## Propiedades Estaticas y Propiedades de solo Lectura.

Las clases por lo general definen atributos y metodos aplicables a las instancias de las mismas.

A través de la palabra reservada "static" se puede definit un miembro visible a nivel de clase.

Al igual que las interfaces, podemos usar la palabra reservada "readonly" para marcar el miembro de una clase como solo lectura.


## Modulos en TypeScript
Los mudulos en TypeScript proveen un mecanismo para una mejor organizacion del codigo y promieven su reutilizacion.

A partir de ECMAScript 2015, los modulos son parte nativa del lenguaje JavaScript.

### Importando y Exportando en Modulos.

Generalmente se define un modulo con la idea de agrupar codigo relacionado.

Podemos tomar criterios en torno a la funcionalidad, features, utilitarios, modelos, etc.

Los miembros de modulo interactuan con el uso de las palabras reservadas "import" y "export".


## Principio de Responsabilidad Unica

Idealmente, un archivo deberia tener un proposito o responsavilidad unica: definir una clase, una interfaz, un enumerado, etc.

Esto mejora la legibilidad de codigo, facilita su lectura, testing y favorece su mantenimiento.

## Resolviendo Modulos

TypeScript resuelve la ubicacion de modulos observando referencias relativas y no relativas.

Posteriormente intenta localizar el modulo usando una estrategia de resolucion de modulos.
