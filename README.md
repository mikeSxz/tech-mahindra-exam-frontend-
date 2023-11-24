# TmApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.
Is a small project with the UI to display users, it calls another application that is based in java
with Spring-boot, the Backend application will be running on `http://localhost:8080/`

## Development server

To setup and run this small Front-end project you must install Docker, according to your Operative System:
- Install [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/) 
- Install [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)              
- Install [Docker for Linux](https://docs.docker.com/desktop/install/linux-install/)

Once you have Docker, you should:
- Open a Command Prompt or Terminal in the root folder of this application
- Run this command to generate the Docker Image on your system (it will take some time to download      everything for you):
  - `docker build -t tm-frontend-app -f Dockerfile .`



- Run this command to generate and run the Docker container for this app:
  - `docker run -p 4200:4200 tm-frontend-app`

  If you are working over Windows, probably a little modal will ask you if you want to allow the connection through the firewall, please accept.

- Once it finishes you can open the application in your browser by typing [http://localhost:4200](http://localhost:4200) on your address bar

Have fun!
