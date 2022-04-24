# Manipulacion de arrays en JavaScript

## Mutabilidad vs Inmutabilidad

- Mutabilidad: Este concepto se refiere a que cuando realizamos modificaciones sea sobre este array. Por ejemplo, si tengo un array y quiero modificar el último elemento

```
    const array = [1,2,3,4,5];
```

El resultado que obtendría sería este:

```
    array[4] = 8;
    //el array ahora tendría estos valores: [1,2,3,4,8]
```

- Inmutabilidad: Este concepto se refiere a que cuando realizamos modificaciones en un array, estos no se reflejen en el original, mas bien se genera otro array que contenga dicha modificación.

Utilizando el array del ejemplo anterior:

```
    const array = [1,2,3,4,5];
```
El resultado que obtendría sería este:

```
    array[4] = 8;
    //obtendriamos un array original: [1,2,3,4,5]
    //y tendriamos un array modificado: [1,2,3,4,8]
```

## ForEach

Permite realizar recorrido de los elementos de un array. Un array en JavaScript puede tener varios tipos de datos. Los métodos que nos ofrece JavaScript para manejar los arrays, permite tener una sintáxis mas amigable y permite que el código sea leido de una manera mas fácil.
 
```
    array.forEach( arrayItem => {
        //TODO code
    });
```