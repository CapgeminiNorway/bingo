import React from "react";

export const gridSize = 5;

const cliches = [
  "Pinlig stillhet",
  "Stirrer på video av deg selv",
  "Jeg tror du er på mute",
  "Kan dere se skjermen min nå?",
  "Barnelyder i bakgrunnen",
  "Familiemedlem kommer inn i rommet",
  "Kan du mute mikrofonen din?",
  "Hører dere meg?",
  "Hallo? Hallo?",
  "Beklager, jeg har litt tekniske problemer",
  "Nei, den laster fortsatt",
  "Hvem var det som nettopp joina?",
  "Oi, sorry, jeg var på mute",
  "Hosting",
  "Beklager at jeg er sen, forrige møte varte litt lenger",
  "Vi hører deg, hører du oss?",
  "Vi ser ikke skjermen din",
  "Deler du?",
  "Å beklager, du først",
  "Jeg har et nytt møte nå, så jeg må gå",
  "Sender du ut det på mail etterpå?",
  "Glemmer at det er video; laang gjesp",
  "Er vi ferdige da?",
  "Kan vi parkere den?",
  "5min småprat mens man venter på siste deltaker"
];

export const initItems = () =>
  cliches
    .sort(() => 0.5 - Math.random())
    .map((title, i) => ({
      selected: false,
      key: i,
      row: Math.floor(i / gridSize),
      col: i % gridSize,
      title
    }));

export const initSelected = () => ({
  rows: Array(gridSize).fill(0),
  cols: Array(gridSize).fill(0),
  diags: Array(2).fill(0)
});

const Store = React.createContext({
  items: initItems(),
  selected: initSelected(),
  showBingo: false
});

export default Store;
