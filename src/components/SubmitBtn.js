const SubmitBtn = ( { entrydata, onSubmit } ) => {
  return (
    <button className={`submitbtn`} disabled={!entrydata.isfocus} onClick={() => onSubmit(entrydata.entryid, entrydata.letterstate)}>Submit</button>
  )
}

export default SubmitBtn
