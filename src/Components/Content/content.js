import picture1 from "../../images/thumbnail/anime1.png"
import picture2 from "../../images/thumbnail/face1.jpg"

export const firstSection = {
   demolink: "https://myanimelist.herokuapp.com",
   codelink: "https://github.com/SvenRehm/Anime-Api-Practice-Project",
   headline: "MyAnimeList",
   description:
      "Anime Entdeckungsplatform, die dir hilft zu verfolgen welche Anime du gerade schaust",

   paragraph1: "Something Really good written",
   bullets: [
      "Focus und Ziel der Web App war es mein verständnis von React zu vertiefen und Redux zu lernen",
      "Kitsu Api als Datenbank verwendet",
      "Entwurf des UX/UI Designs in AdobeXD und Implementierung mit React/ReactRouter/Redux",
      "Entwicklung des Backends für Account erstellung mit Passwort-Hashen , Gestaltete Datenbank mit multiplen Datentabellen",
      "Implementierte JSON web token im Lokalen Speicher für Authentifikation ",
      "Hosting des Frontends und Backends auf Heroku",
   ],

   skills: ["HTML/CSS", "REACT", "REDUX", "NODE", "POSTGRESSQL", "POSTMAN"],

   picture: picture1,
}

export const secondSection = {
   demolink: "https://facedetectproject.herokuapp.com/",
   codelink: "https://github.com/SvenRehm/face-detect-master",
   headline: "Face Detect",
   description: "Face Detect App, die Gesichter in Bildern erkennt",
   paragraph1: "Something Really good written",
   bullets: [
      "Ziel bei der Entwicklung der Web App, war es mich mehr mit API's auseinander zu setzen und mehr Erfahrung sammeln",
      "Clarifai API, Face Detect Model angewandt",
      "Hosting des Frontends und Backends auf Heroku",
   ],
   skills: ["HTML/CSS", "REACT", "NODE"],
   picture: picture2,
}

export default {
   firstSection,
   secondSection,
}
