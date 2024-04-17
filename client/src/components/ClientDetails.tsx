import PencilIcon from "../assets/pencil.svg"



const ClientDetails = () => {
  return (
    <div>
      <ul className="clientList">
        <li className="underline">Title</li>
        <li className="underline">Company</li>
        <li className="underline">Amount</li>
        <li className="underline">Sector</li>
        <li className="underline">State</li>
        <li className="underline">Commercial</li>
        <li><img src={PencilIcon} alt="pencilLogo" /></li>
      </ul>
    </div>
  )
}

export default ClientDetails
