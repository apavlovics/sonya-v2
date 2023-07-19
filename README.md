# Sonya V2

The deployed single-page application is available at https://sonya.lv.

All the following commands should be executed from the project’s root folder.

## Preparing Workspace

After the initial checkout of the project, execute:

    npm install

This downloads and installs all the required dependencies in the local _node_modules_ folder.

## Converting Images

To convert JPEG images for use on the web, refer to the _scripts/convert-images.sh_ script.

## Testing

To test the application, execute:

    npm test

## Running

To run the application, execute:

    npm start

The application starts at http://localhost:3000 by default.

## Packaging

To build and package the application for production use, execute:

    npm run build

## Deploying

Once packaged, the application can be deployed as a static website from the _build_ folder. It supports [Apache HTTP Server](https://httpd.apache.org) out of the box. Refer to the _public/.htaccess_ file for configuration details.
