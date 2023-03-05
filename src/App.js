import EntryContainer from "./components/EntryContainer.js";
import { useState } from "react";
import { getNextBestGuess } from "./guesser/guesser";

// $env:OPENSSL_CONF = ''
// to prove that i own the domain:
// google-site-verification=XG9rOS5UdiUfIJV5SqX1YFLZOsfz9nQDJ0PNSmHnu7U

function App() {
  const [entries, setEntries] = useState([
    {
      entryid: 1,
      visibility: true,
      isfocus: true,
      preds: ["_____", "_____"],
      letterstate: [
        {
          letterid: 1,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 2,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 3,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 4,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 5,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
      ],
    },
    {
      entryid: 2,
      visibility: false,
      isfocus: false,
      preds: ["_____", "_____"],
      letterstate: [
        {
          letterid: 1,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 2,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 3,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 4,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 5,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
      ],
    },
    {
      entryid: 3,
      visibility: false,
      isfocus: false,
      preds: ["_____", "_____"],
      letterstate: [
        {
          letterid: 1,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 2,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 3,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 4,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 5,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
      ],
    },
    {
      entryid: 4,
      visibility: false,
      isfocus: false,
      preds: ["_____", "_____"],
      letterstate: [
        {
          letterid: 1,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 2,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 3,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 4,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 5,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
      ],
    },
    {
      entryid: 5,
      visibility: false,
      isfocus: false,
      preds: ["_____", "_____"],
      letterstate: [
        {
          letterid: 1,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 2,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 3,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 4,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 5,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
      ],
    },
    {
      entryid: 6,
      visibility: false,
      isfocus: false,
      preds: ["_____", "_____"],
      letterstate: [
        {
          letterid: 1,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 2,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 3,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 4,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
        {
          letterid: 5,
          l: "",
          bgs: ["grey", "yellow", "green"],
          c: 0,
        },
      ],
    },
  ]);
  const checkiffocused = (entryid) => {
    if (entryid === 6) return true;
    if (entries.at(entryid).visibility) return false;
    return true;
  };
  const changeBgLetter = (entryid, letterid, lstate) => {
    if (entries.at(entryid - 1).isfocus) {
      const newEntries = [...entries];
      const newLstate = [...lstate];
      newLstate[letterid - 1].c = (newLstate[letterid - 1].c + 1) % 3;
      newEntries[entryid - 1] = {
        ...newEntries[entryid - 1],
        letterstate: newLstate,
      };
      setEntries(
        newEntries
        //entries.map((entry) => checkiffocused(entry, entryid) ? entry.letterstate.map((letter) => letter.letterid === letterid ? { ...letter, c: (letter.c+1)%3 } : letter) : entry)
      );
    }
  };
  const onSubmit = (entryid, lstate) => {
    const carr = ["b", "y", "g"];
    const newEntries = [...entries];
    let string = "";
    let result = "";
    lstate.forEach((element) => {
      string += element.l;
      result += carr[element.c];
    });
    var bestPreds = getNextBestGuess(string, result);
    newEntries[entryid - 1].preds[0] = bestPreds[0];
    newEntries[entryid - 1].preds[1] = bestPreds[1];
    if (entryid !== 6) {
      newEntries[entryid - 1].isfocus = false;
      newEntries[entryid].isfocus = true;
      newEntries[entryid].visibility = true;
      setEntries(newEntries);
    }
  };
  const handleLetterChange = (entryid, letterid, lstate, e) => {
    const newEntries = [...entries];
    const newLstate = [...lstate];
    newLstate[letterid - 1].l = e.target.value;
    newEntries[entryid - 1] = {
      ...newEntries[entryid - 1],
      letterstate: newLstate,
    };
    setEntries(newEntries);
  };
  return (
    <div className="container">
      {entries.map((entry) => (
        <EntryContainer
          key={entry.entryid}
          letterchange={handleLetterChange}
          onSubmit={onSubmit}
          entryid={entry.entryid}
          entrydata={entry}
          bgtoggle={changeBgLetter}
        />
      ))}
    </div>
  );
}

export default App;
