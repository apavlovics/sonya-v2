# Sonya V2

All the following commands should be executed from the project main folder.

## Preparing Workspace

After the initial checkout of the project, execute:

    npm install

This downloads and installs all the required dependencies in the local *node_modules* folder.

## Converting Images

To convert JPEG images for use on the web, refer to the *scripts/convert-images.sh* script.

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

Once packaged, the application is ready to be deployed as a static website from the *build* folder. It supports [Apache HTTP Server](https://httpd.apache.org/) out of the box. Refer to the *public/.htaccess* file for configuration details.
