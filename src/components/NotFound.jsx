import Button from "./button"
function NotFound(){
    return(
    <div className="text-center p-10">
        <Button/>
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg">Sorry, the page you're looking for doesn't exist.</p>
    </div>
    
)
}
export default NotFound;