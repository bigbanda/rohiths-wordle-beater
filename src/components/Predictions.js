const Predictions = ( { entrydata } ) => {
  return (
    <div className="predictions">
      <p>Next Best Guesses:
      </p>
      <p>{entrydata.preds[0]} OR {entrydata.preds[1]}</p>
    </div>
  )
}

export default Predictions
