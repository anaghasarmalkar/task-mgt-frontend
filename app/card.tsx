import { useState } from "react";

export enum Status {
  ToDo,
  InProgress,
  Done,
}

export type CardType = {
  id: string;
  text: string;
  status: Status;
};

export type CardProps = {
  text: string;
  dragEnd: () => void;
};

export function Card(props: CardProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className="card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      draggable
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        props.dragEnd();
        setIsDragging(false);
      }}
    >
      {props.text}
    </div>
  );
}
