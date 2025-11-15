import { useParams } from "react-router-dom"

export default function Stream() {
    const { id } = useParams();
    
  return (
    <div>
        {id};
    </div>
  )
}

