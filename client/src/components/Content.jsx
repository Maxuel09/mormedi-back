import '../style/Content.css'
import ContentHeader from "./ContentHeader"
import BoardOffert from "./BoardOffert"
import BoardCustomers from "./BoardCustomers"

const Content = () => {
    return (
        <div className="content">
            <ContentHeader/>
            <BoardOffert/>
            <BoardCustomers/>
            
        </div>
    )
}

export default Content