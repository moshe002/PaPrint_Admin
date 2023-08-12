const handleClick = () => {
    console.log('delete clicked')
}

function DeleteButton() {
  return (
    <>
        <button 
            className="text-lg font-mono rounded-md p-3 bg-red-400 hover:bg-red-500 text-white duration-150"
            onClick={handleClick}
            type='button'>
                DELETE
        </button>
    </>
  )
}

export default DeleteButton