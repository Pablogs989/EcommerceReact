# Proyecto de E-Commerce

Este es un proyecto de una aplicación de e-commerce desarrollada utilizando React, Ant Design y SCSS. La aplicación incluye funcionalidades como autenticación de usuarios, registro de nuevos usuarios, un panel de administración, y la capacidad de listar y gestionar productos y pedidos.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

### Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

Navega al directorio del proyecto:

```bash
cd tu-repositorio
```
Instala las dependencias:

```bash
npm install
```
Inicia la aplicación:

```bash
npm start
```


## Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Ant Design**: Un framework de componentes UI para React que proporciona una variedad de componentes pre-diseñados.
- **SCSS**: Un preprocesador CSS que añade características como variables, anidación y mixins para escribir CSS más mantenible.

## Funcionalidades

- **Autenticación de Usuarios**: Los usuarios pueden registrarse, iniciar sesión y cerrar sesión en la aplicación.
- **Registro de Nuevos Usuarios**: Los nuevos usuarios pueden crear una cuenta proporcionando su nombre, correo electrónico, contraseña y dirección de envío.
- **Gestión de Productos**: Los administradores pueden crear y eliminar productos.
- **Perfil de Usuario**: Los usuarios autenticados pueden ver y actualizar su información de perfil, así como sus pedidos.
- **Panel de Administración**: Un área exclusiva para administradores donde pueden gestionar los productos.

## Contexto de Usuario

El contexto de usuario (`UserContext`) gestiona el estado de autenticación y la información del usuario en toda la aplicación. Incluye acciones como `login`, `register`, `logout` y `getLoggedUserInfo`.

## Estilos

Los estilos están escritos en SCSS y organizados por componentes para mantener un código limpio y modular. Cada componente tiene su propio archivo `.scss` asociado.

## Notificaciones

Se utiliza el componente `notification` de Ant Design para mostrar notificaciones al usuario, como cuando se registra o inicia sesión correctamente.

## Navegación

Se utiliza `react-router-dom` para gestionar la navegación entre las diferentes rutas de la aplicación.
