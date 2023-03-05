import PlayerGuessLtr from './PlayerGuessLtr.js'
import Predictions from './Predictions.js'
import SubmitBtn from './SubmitBtn.js'
const EntryContainer = ( {entrydata, bgtoggle, onSubmit, letterchange} ) => {
  return (
    <div className={`entrycontainer ${!entrydata.visibility ? 'hidden' : ''}`}>
        <div className="playerguessword">
            {entrydata.letterstate?.map( (letter) => (<PlayerGuessLtr key={letter.letterid} letterchange={letterchange} entrydata={entrydata} bgtoggle={bgtoggle} bgs={letter.bgs} c={letter.c} letterid={letter.letterid} entryid={entrydata.entryid}/>) )}
        </div>
        <SubmitBtn entrydata={entrydata} onSubmit={onSubmit} />
        <Predictions entrydata={entrydata} />
    </div>
  )
}

export default EntryContainer
