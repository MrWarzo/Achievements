import { User } from "../User/User";
import { Achievement } from "./Achievement";

export function getAchievements(
  obj?: Array<Achievement> | undefined
): Array<Achievement> {
  let achievements = [
    new Achievement(
      "Yo !",
      "C'est le début du farm !",
      "Installer l'extension",
      false,
      (_user: User) => {
        return true;
      }
    ),
    new Achievement(
      "Vive typescript",
      "Toi tu choisis les bonnes choses dans la vie, ça se voit.",
      "Créer un fichier typescript.",
      false,
      (user: User) => {
        return user.filesCreated.has(".ts") || user.filesCreated.has(".tsx");
      }
    ),
    new Achievement(
      "Ma première fois",
      "Le premier caractère d'une très, très longue liste.",
      "Écrire quelque chose.",
      false,
      (user: User) => {
        if (user.characterWrited > 0) {
          return true;
        }
        return false;
      }
    ),
    new Achievement(
      "Ça devient sérieux",
      "Déjà 100 caractères ! C'est une bonne journée de travail.",
      "Écrire 100 caractères.",
      false,
      (user: User) => {
        if (user.characterWrited >= 100) {
          return true;
        }
        return false;
      }
    ),
    new Achievement(
      "Moins vite !",
      "1000 caractères, bientôt de l'arthrose...",
      "Écrire 1000 caractères.",
      false,
      (user: User) => {
        if (user.characterWrited >= 1000) {
          return true;
        }
        return false;
      }
    ),
    new Achievement(
      "Grand malade",
      "Plus rien ne t'arrête",
      "Écrire 10000 caractères.",
      false,
      (user: User) => {
        if (user.characterWrited >= 10000) {
          return true;
        }
        return false;
      }
    ),
    new Achievement(
      "Mode hacker activé",
      "Paré pour voler le wifi du voisin.",
      "Ouvrir un terminal.",
      false,
      (user: User) => {
        if (user.terminalOpened) {
          return true;
        }
        return false;
      }
    ),
  ];

  // If there is no initial object declared
  if (obj === undefined) {
    return achievements;
  }

  // Set the achievements to the state they were in the save
  achievements.forEach((achievement) => {
    let item = obj.find((k) => k.name === achievement.name);
    if (item !== undefined) {
      achievement.done = item.done;
    }
  });
  return achievements;
}
