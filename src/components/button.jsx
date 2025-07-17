 import { FaBackward } from "react-icons/fa";
 import BrowseBooks from "./BrowseBooks";
 import { useNavigate } from "react-router-dom";
//  import { useNavigate } from "react-router-dom";

 function Button(){
    const navigate = useNavigate();

  function handleBackClick() {
    navigate("/BrowseBooks");
  }
    return(<>
    <div className="mt-6 flex justify-start px-4">
     
      <button onClick={handleBackClick} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300" >
        <FaBackward />
        Back to Browse
      </button>
    </div>
    
    </>
        )
 }

 export default Button;
 
 