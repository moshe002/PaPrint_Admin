import supabase from "../supabaseConfig"

interface DeleteProps {
  name: string;
  file: any[];
}

const DeleteButton:React.FC<DeleteProps> = ({ name, file }) => {

  // const deleteFile = async () => { 
    
  // }

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from('toPrint').delete().eq('name', name)

      let fileName = file.map((file) => file.name)
      console.log(fileName)
      const { data } = await supabase.storage.from('to_print').remove([`${name}+/+${fileName.toString()}`]) // folder/avatar1.png
      
      if(data){
        console.log("delete successful")
      }
      
      if(error) {
        throw new Error(error.message)
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handleClick = () => {
    //handleDelete()
    //window.location.reload()
    let fileName = file.map((file) => file.name)
    console.log(fileName.toString())
  }

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