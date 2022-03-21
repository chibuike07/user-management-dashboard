import {
  faClock,
  faCog,
  faFolder,
  faHistory,
  faSignal,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import Lady from "../../Assests/lady.jpg";
import Guy from "../../Assests/guy.jpg";

export const menuItems = [
  { icon: faThLarge, text: "dashboard" },
  { icon: faSignal, text: "analytics" },
  { icon: faFolder, text: "projects" },
  { icon: faClock, text: "tracking" },
  { icon: faHistory, text: "history" },
  { icon: faCog, text: "setting" },
];

export const users = ["ronasIt", "finna a", "alex b", "code D"];

export const duration = ["month"];
export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const dayMonth = ({ month, year }) => {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month && days?.length < 17) {
    days.push({
      day: weekDays[new Date(date).getDay()][0],
      _date: new Date(date).getDate(),
    });
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const workItems = [
  "flow swift transfer",
  "dashboard",
  "user profile",
  "transfer by phone number",
  "chat bot",
  "transfer analytics",
  "setting",
];

export const taskUsers = [
  {
    name: "finna a",
    role: "ux designer",
    image: Guy,
    start: "03/01/2022",
    end: "03/15/2022",
    progress: 20,
  },
  {
    name: "emma f",
    role: "ui designer",
    image: Lady,
    start: "03/11/2022",
    end: "03/17/2022",
    progress: 40,
  },
  {
    name: "alex b",
    role: "ux analyst",
    image: Guy,
    start: "03/03/2022",
    end: "03/17/2022",
    progress: 50,
  },
  {
    name: "codey d",
    role: "ux designer",
    image: Guy,
    start: "03/08/2022",
    end: "03/16/2022",
    progress: 70,
  },
  {
    name: "samanta o",
    role: "senior ui/ux designer",
    image: Lady,
    start: "03/01/2022",
    end: "03/15/2022",
    progress: 30,
  },
  {
    name: "erik f",
    role: "ux designer",
    image: Guy,
    start: "03/03/2022",
    end: "03/10/2022",
    progress: 10,
  },
  {
    name: "jame i",
    role: "senior engineer",
    image: Guy,
    start: "03/07/2022",
    end: "03/16/2022",
    progress: 20,
  },
  {
    name: "rosemary p",
    role: "ui designer",
    image: Lady,
    start: "03/03/2022",
    end: "03/16/2022",
    progress: 40,
  },
  {
    name: "emma j",
    role: "senior ui/ux designer",
    image: Guy,
    start: "03/06/2022",
    end: "03/16/2022",
    progress: 60,
  },
  {
    name: "maryjane t",
    role: "app designer",
    image: Lady,
    start: "03/02/2022",
    end: "03/10/2022",
    progress: 10,
  },
];

export const colors = [
  { primary: "red", secondary: "#ff00001a" },
  { primary: "blue", secondary: "#0000ff69" },
  { primary: "yellow", secondary: "#ffff0047" },
  { primary: "brown", secondary: "#a52a2a2b" },
  { primary: "pink", secondary: "#ffc0cb38" },
];
