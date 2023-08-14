
function About() {
  return (
    <div className='flex flex-col h-screen justify-evenly items-center p-3 ml-0 md:ml-52 mb-20 md:mb-0'>
        <h1 className='text-center text-4xl mb-5 font-semibold font-mono'>About:</h1>
        <div className="p-5 rounded-md font-mono text-sm sm:text-base md:text-xl w-1/2 text-center border-2 border-gray-500">
          <p className="leading-6 md:leading-8">
            This project is made for adding accessibility
            to printing services. Making it possible to still
            reach out to the services without being in the shop
            physically.
          </p>
        </div>
        <div>
          <h1 className="font-mono font-bold text-center">
            Made by: <a 
              rel="noopener" 
              href="https://www.facebook.com/mosesanthony873/" 
              target="_blank" 
              className="font-normal hover:text-green-500 duration-150"
              title="a coding partner would be nice">
                Moses Anthony Y. Fat</a>
          </h1>
        </div>
    </div>
  )
}

export default About