import { useState, useEffect } from 'react'
import supabase from "../../supabaseConfig"

import Loading from '../Loading';

interface Users {
  name: string;
  number: string;
  email: string;
}

function Users() {

  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("toPrint").select()
      if(error) {
        throw new Error(error.message)
      }
      if(data) {
        //console.log(data)
        setTimeout(() => {
          setUsers(data)
          setLoading(false)
        }, 500)
        
      } 
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }

  return (
    <div className='flex flex-col justify-evenly items-center p-3 ml-0 md:ml-52 mb-20 md:mb-0'>
        <h1 className='text-center text-4xl mb-5 font-semibold font-mono'>All Users:</h1>
        {
          loading 
          &&
          <Loading />
        }
        <ul className='flex flex-wrap justify-center gap-10 p-3 mt-10 text-center'>
        {
          users.map((user) => {
            return (
              <li className='text-lg list-decimal' key={user.name}>
                <div className='border-2 border-gray-500 font-mono p-5 rounded-md'>
                  <h1>{user.name}</h1>
                  <h1>{user.number}</h1>
                  <h1>{user.email}</h1>
                </div>
              </li>
            )
          })
        }
        </ul>
    </div>
  )
}

export default Users