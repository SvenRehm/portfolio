import picture1 from "../../images/thumbnail/anime1.png"
import picture2 from "../../images/thumbnail/face2.jpg"

export const firstSection = {
   demolink: "https://myanimelist.herokuapp.com",
   codelink: "https://github.com/SvenRehm/Anime-Api-Practice-Project",
   headline: "MyAnimeList",
   description:
      "Anime Entdeckungsplatform, die dir hilft zu verfolgen welche Anime du gerade schaust",

   paragraph1: "Something Really good written",
   bullets: [
      "Focus und Ziel der Web App war es Redux zu lernen und das verständnis von React zu vertiefen",
      "Entwurf des UX/UI Designs in AdobeXD und Implementierung mit React/ReactRouter/Redux",
      "Kitsu Api Datenbank benutzt und diese mit Postman getestet",
      "Entwicklung des Backends für Account erstellung mit Passwort-Hashen , Gestaltete Datenbank mit mehreren Datentabellen um weitere information gespeichert werden",
      "Implementierte JSON web token für Authentifikation das im Lokalen Speicher gespeichert wird",
      "Hosting des Frontends und Backends auf Heroku",
   ],

   skills: ["HTML/CSS", "REACT", "REDUX", "NODE", "POSTGRESSQL", "POSTMAN"],

   picture: picture1,
}

export const secondSection = {
   demolink: "https://facedetectproject.herokuapp.com/",
   codelink: "https://github.com/SvenRehm/face-detect-master",
   headline: "Face Detect",
   description:
      "Face Detect App in der man gesichter in bildern erkennen lassen kann",
   paragraph1: "Something Really good written",
   bullets: [
      "Focus und Ziel der Web App war es Redux zu lernen und das verständnis von React zu vertiefen",
      "Entwurf des UX/UI Designs in AdobeXD und Implementierung mit React/ReactRouter/Redux",
      "Kitsu Api Datenbank benutzt und diese mit Postman getestet",
      "Entwicklung des Backends für Account erstellung mit Passwort-Hashen , Gestaltete Datenbank mit mehreren Datentabellen um weitere information gespeichert werden",
      "Implementierte JSON web token für Authentifikation das im Lokalen Speicher gespeichert wird",
      "Hosting des Frontends und Backends auf Heroku",
   ],
   skills: ["HTML/CSS", "REACT", "NODE", "POSTGRESSQL"],
   picture: picture2,
}

export default {
   firstSection,
   secondSection,
}
