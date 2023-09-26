import { useState } from "react"
import {PaperClipOutlined, FormOutlined} from "@ant-design/icons"

const BookmarkButton = () => {
  const [marked, setMarked] = useState(false)
  return (
    <div className = "bookmark" onClick={()=>{setMarked(!marked)}} style = {{padding: "20px"}}>  
    {marked?<PaperClipOutlined />:<FormOutlined />} 
    
    </div>
  )
}
export default BookmarkButton