const PlayerGuessLtr = ( { entrydata, entryid, letterid, bgtoggle, bgs, c, letterchange } ) => {
  return (
    <input value={entrydata.letterstate[letterid-1].l} onChange={(e) => letterchange(entryid, letterid, entrydata.letterstate, e)} readOnly={!entrydata.isfocus} className={`playerguessltr ${bgs[c]}`} maxLength={1} onClick={() => bgtoggle(entryid, letterid, entrydata.letterstate)}/>
  )
}



export default PlayerGuessLtr
