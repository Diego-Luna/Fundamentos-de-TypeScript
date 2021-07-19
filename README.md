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
