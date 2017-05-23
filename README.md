# Angular.NetCoreTemplate
Simple "Message Board" application using Angular 2 + ASP .NET Core, it can be used as a template for full stack web application


# 1. Backend Project (using .NET core1.1)

- To install .NET Core please follow the steps on the official web site https://www.microsoft.com/net/core#windowsvs2017

- Open the solution in Visual Studio and run, to test the API you can use postman https://www.getpostman.com/ and send requests against "Messages" Controller.

- The data access layer is implemented using static array as data store, in order to allow you to use your data access technology (e.g: Entity Framework Core with SQL Server database).

# 2. Frontend Project (using Angular2 + TypeScript 2.3.2 + Material 2.0.0-beta.2)

- Install node.js and Visual Studio code (optional) from these links:
    https://nodejs.org/en/download/
    https://code.visualstudio.com/download
    
- In the frontend folder (which contains package.json file) hold "shift" key and right click, then choose "Open command window here".

- run:
     - npm install
     - npm install --save @angular/material@2.0.0-beta.2
     - npm start
     
 The last command will open the browser and start the application, have fun :).
 
 
  
