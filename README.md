## Ideas al aire

Una biblioteca está compuesta por un inventario de libros, mismos que se permite

- vender
- comprar
- prestar

El prestamo debe ser localmente (leer en el lugar), remoto (llevarlo a algun lugar) y se debe devolver
en un plazo de tiempo, el plazo es decidido al momento de solicitar el prestamo del libro.

La compra a diferencia del prestamo, no genera un compromiso de retorno del libro pero si un compromiso de
pago, es decir; cuando alguien decide adquirir un libro, debe pagar la suma indicada por él, lo cual una vez
esté completada, hace que el dueño del libro pase a ser el comprador (lo que le permite posteriormente jugar
el papel de vendedor)

Como usuario quiero solicitar el prestamo de un libro con un identificador (ISBN) dado

Para que un usuario pueda solicitar el prestamo de un servicio (compra, venta, préstamo) debe estar registrado
en la plataforma

Cuando se tiene un nuevo libro que previamente no estaba registrado se da de alta en el **catálogo** de libros, para
identificar que no se tenia dado de alta previamente se compara la entidad por **ISBN**, si esté ya existiera no deja
generar el registro del libro.

Para el caso de que ya exista entonces solo se debe dar de alta una nueva entrada del **producto** para ese libro en su **catálogo**

Cuando no hay productos en existencia para algun producto debe mostrar leyenda indicando que no hay existencia del producto en cuestión y no debe permitir completar una compra con un producto agotado.

Cuando se genera la compra de un producto este cambia su estado a vendido y se descuenta del total de elementos del inventario
en el catalogo de ese producto

## bounded context

- Bibliotecaria
- Vendedor
- Comprador
- Lector

## Entidades

- Libro
- producto
- Usuario
- Bibliotecaria (agente)
- Lector

# Agregado

- Catalogo


## Value objects

- IdLibro
- IdUsuario
- IdBibliotecaria
- nombre persona (posiblemente de acá se desprendar vo's con más exactitud como nombreBibliotecaria, nombreLector, etc)
- contraseña
- nombre usuario
- nombre libro
- precio
  - moneda
  - tipo moneda
- Estado producto (Prestado, vendido,)
- Cantidad de existencias

## Subdominios

- Inventario
- purchase
- acceso

