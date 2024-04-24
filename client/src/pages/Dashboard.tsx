import ClientsDash from "./ClientsDash"
import OffersDash from "./OffersDash"

const Dashboard = () => {
  return (
    <>
      <div className="containerMain">
        <div>
          <div>
            <ClientsDash/>
          </div>
          <div>
            <OffersDash />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
