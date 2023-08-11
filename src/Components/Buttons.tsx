interface Props {
    text:string;
    icon:React.ReactElement;
}

const Buttons:React.FC<Props> = ({ text, icon }) => {
  return (
    <div className="flex flex-col font-mono sm:flex-row gap-2 items-center text-center p-3 duration-150 hover:scale-110 bg-white rounded-md font-semibold">
        {icon}
        <h1>{text}</h1>
    </div>
  )
}

export default Buttons