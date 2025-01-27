"use client";
import { useRef, useState } from "react";
import { Card, CardType, Status } from "./card";
import { cards } from "./testdata";

export default function Home() {
  const [cardData, setCardData] = useState<CardType[]>(cards);
  // [cartType]
  // render each card in correct col
  // no of cols == status

  // const [dragEnter, setDragEnter] = useState<Status | null>(null);

  // useref doesnt trigger re render. usestate does
  const dragEnter = useRef<Status | null>(null);

  return (
    <div
      style={{ border: "1px solid black" }}
      className="w-screen h-screen flex justify-center gap-4"
    >
      {/* todo */}
      <div
        className="board-col"
        onDragEnter={() => {
          console.log("Todo col");
          dragEnter.current = Status.ToDo;
          // update the card status to Done
          // remove from cardData and append at the end of cardData
        }}
      >
        {cardData.map((card) => {
          if (card.status == Status.ToDo) {
            return (
              <Card
                key={card.id}
                text={card.text}
                dragEnd={() => {
                  setCardData((oldData) => {
                    return oldData.map((data) => {
                      if (data.id === card.id && dragEnter.current !== null) {
                        data.status = dragEnter.current;
                      }
                      return data;
                    });
                  });
                }}
              ></Card>
            );
          }
        })}
      </div>
      {/* InProgress */}
      <div
        className="board-col"
        onDragEnter={() => {
          dragEnter.current = Status.InProgress;
          // update the card status to Done
          // remove from cardData and append at the end of cardData
        }}
      >
        {cardData.map((card) => {
          if (card.status == Status.InProgress) {
            return (
              <Card
                key={card.id}
                text={card.text}
                dragEnd={() => {
                  setCardData((oldData) => {
                    return oldData.map((data) => {
                      if (data.id === card.id && dragEnter.current !== null) {
                        data.status = dragEnter.current;
                      }
                      return data;
                    });
                  });
                }}
              ></Card>
            );
          }
        })}
      </div>
      {/* Done */}
      <div
        className="board-col"
        onDragEnter={() => {
          dragEnter.current = Status.Done;
          // update the card status to Done
          // remove from cardData and append at the end of cardData
        }}
      >
        {cardData.map((card) => {
          if (card.status == Status.Done) {
            return (
              <Card
                key={card.id}
                text={card.text}
                dragEnd={() => {
                  setCardData((oldData) => {
                    return oldData.map((data) => {
                      if (data.id === card.id && dragEnter.current !== null) {
                        data.status = dragEnter.current;
                      }
                      return data;
                    });
                  });
                }}
              ></Card>
            );
          }
        })}
      </div>
    </div>
  );
}
