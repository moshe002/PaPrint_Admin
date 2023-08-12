const handleClick = () => {
    console.log('Document printed! Awaiting for payment and retrieval of document in our shop. Thank you!')
};

function DoneButton() {
  return (
    <>
        <button
            className="text-lg font-mono rounded-md p-3 bg-green-400 hover:bg-green-500 text-white duration-150" 
            onClick={handleClick}
            type='button'>
                DONE PRINTING
        </button>
    </>
  )
}

export default DoneButton