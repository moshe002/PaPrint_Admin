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
}

function Dashboard() {

  const [customerInfo, setCustomerInfo] = useState<DataTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCustomerData();
  }, [])

  const getCustomerData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("toPrint").select()
      if(error) {
        throw new Error(error.message)
      }
      if(data) {
        setTimeout(() => {
          setCustomerInfo(data)
          setLoading(false)
        }, 500)
        
      } 
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }

  return (
    <div className='flex flex-col justify-evenly items-center p-3 ml-0 md:ml-52 mb-28 md:mb-0'>
      <h1 className='text-center text-4xl mb-5 font-semibold font-mono'>Customer Queries</h1>
      {
        loading
        &&
        <Loading />
      }
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