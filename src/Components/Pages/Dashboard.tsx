import { useEffect, useState } from 'react'
import supabase from '../../supabaseConfig'

import Loading from '../Loading';
import DoneButton from '../DoneButton';
import DeleteButton from '../DeleteButton';

interface DataTypes {
  id: number;
  filename:string;
  name: string;
  number: string;
  email: string;
  purpose: string;
  message: string;
  files: any[];
}

function Dashboard() {

  const [customerInfo, setCustomerInfo] = useState<DataTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCustomerData()
  }, [])

  const getCustomerData = async () => {
    setLoading(true);
    try {
      const { data: customerData, error: customerError } = await supabase.from("toPrint").select()
      if(customerError) {
        throw new Error(customerError.message)
      }
      if(customerData) { // is an array of objects
        //let mappedData = data.map((data) => data.name) // this returns an array of the names from data
        //getFile(data)
        // setTimeout(() => {
        //   setCustomerInfo(data)
        //   setLoading(false)
        // }, 500)  
        const combinedData: DataTypes[] = [];

        for (const customer of customerData) {
          const folderName = `${customer.name}/`;
          const { data: fileData, error: fileError } = await supabase.storage
            .from('to_print')
            .list(folderName, {
              limit: 100,
              offset: 0,
              sortBy: { column: 'name', order: 'asc' },
            });
  
          if (fileError) {
            throw new Error(fileError.message);
          }
  
          combinedData.push({
            ...customer,
            files: fileData,
          });
        }

        setCustomerInfo(combinedData);
        setLoading(false);
      } 
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }

  // https://mzglgldsmcjedhciycas.supabase.co/storage/v1/object/public/to_print/{name}/{filename}
  return (
    <div className='flex flex-col justify-evenly items-center p-3 ml-0 md:ml-52 mb-28 md:mb-0'>
      <h1 className='text-center text-4xl mb-5 font-semibold font-mono'>Customer Queries</h1>
      { loading && <Loading /> }
      <div className='flex flex-wrap gap-3 justify-evenly'>
        {
          customerInfo.map((customer) => {
            return (
              <div className='flex flex-col mb-5 gap-3 text-center p-3 border-2 border-gray-500 rounded-md' key={customer.id}>
                <div className='flex justify-between'>
                  <h1 className='text-base font-mono font-semibold w-full'>Filename:</h1>
                  <h1 className='text-base w-full'>{customer.filename}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1 className='text-base font-mono font-semibold w-full'>Name:</h1>
                  <h1 className='text-base w-full'>{customer.name}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1 className='text-base font-mono font-semibold w-full'>Email:</h1>
                  <h1 className='text-base w-full'>{customer.email}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1 className='text-base font-mono font-semibold w-full'>Phone number:</h1>
                  <h1 className='text-base w-full'>{customer.number}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1 className='text-base font-mono font-semibold w-full'>Purpose:</h1>
                  <h1 className='text-base w-full'>{customer.purpose}</h1>
                </div>
                <div className='flex flex-col justify-around'>
                  <h1 className='text-base font-mono font-semibold w-full'>Message:</h1>
                  <h1 className='text-base w-full'>{customer.message}</h1>
                </div>
                <div className='flex flex-col justify-around'>
                  <h1 className='text-base font-mono font-semibold w-full'>File:</h1>
                  {
                    customer.files.map((file, index) => {
                      return (
                        <div className='flex flex-col' key={index} >
                          <a 
                            className='p-1 font-semibold text-white bg-orange-300 hover:bg-orange-400 duration-150 rounded-md'
                            title='file' 
                            href={`https://mzglgldsmcjedhciycas.supabase.co/storage/v1/object/public/to_print/${customer.name}/${file.name}`} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            download>
                            {file.name}
                          </a>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                  <DeleteButton />
                  <DoneButton />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Dashboard