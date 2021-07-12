# Que es TypeScript 👨‍💻 

Es un superconjunto tipado de javascript, que compila a javascript.

Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.

* Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.

* Lenguaje de alto nivel: Entendible por humanos y posee un alto nivel de abstracción del código máquina.

* Genera como resultado código JavaScript: Emite código javascript compatible con browsers y otras herramientas de javascript.

* Código abierto.

* Desarrollo desde cualquier sistema.

* El código puede ejecutarse en cualquier navegador o plataforma que soporte javascript.


Porque usar TypeScript:

 * Programación orientada a objetos
 * Potenciar tu código JavaScript
 * Mayor productividad
 * Poderoso sistema de tipos
 * Compila a ES5, ES6 y más
 * Proyecto muy activo/Open source
 * Actualizaciones periódicas
 * Comunidad creciente
 * Puede prevenir cerca del 15% de bugs
 * Puede usar TypeScript para backend


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
* Especifica la raiz de un proyecto TS

* Permite configurar opciones para el compilador

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


* tsc // Busa la configuracion dentro del proyecto
* tsc --project folder // Especifica el directorio donde esta la configuracion
* tsc file.ts // Omite la configuracion
