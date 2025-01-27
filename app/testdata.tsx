import { CardType, Status } from "./card";

export const cards: CardType[] = [
  {
    id: "1",
    text: "Write project documentation",
    status: Status.ToDo,
  },
  {
    id: "2",
    text: "Design the user interface",
    status: Status.InProgress,
  },
  {
    id: "3",
    text: "Implement authentication module",
    status: Status.ToDo,
  },
  {
    id: "4",
    text: "Test the API endpoints",
    status: Status.InProgress,
  },
  {
    id: "5",
    text: "Deploy to production",
    status: Status.Done,
  },
];
