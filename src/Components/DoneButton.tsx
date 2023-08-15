import emailjs from '@emailjs/browser'; 

interface DoneButtonProps {
  setDonePrinting: React.Dispatch<React.SetStateAction<boolean>>;
  customerEmail: string;
}

const DoneButton:React.FC<DoneButtonProps> = ({ setDonePrinting, customerEmail }) => {
  
  const handleClick = () => {
    setDonePrinting(true);
    
    // setEmailData({
    //   to_name: customerEmail,
    //   subject: 'PaPrint Service',
    //   message: 'Done printing! Please come to the shop for the payment and retrieval of the document. Thank you!',
    // })

    emailjs.send('service_qkn2n87', 'template_e1hjmnh', {
      to_name: customerEmail,
      subject: 'PaPrint Service',
      message: 'Done printing! Please come to the shop for the payment and retrieval of the document. Thank you!',
    }, 'zD8rVYJxeYDtN-AFB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // service id: service_qkn2n87

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