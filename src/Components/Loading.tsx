import { BiLoaderCircle } from 'react-icons/bi'

function Loading() {
  return (
    <div className='flex flex-col mt-10 justify-center items-center text-center'>
        <h1 className='text-gray-400 text-3xl font-mono font-bold'>Fetching Data</h1>
        <br />
        <h1 className='text-5xl text-gray-400'>
            <BiLoaderCircle />
        </h1>
    </div>
  )
}

export default Loading