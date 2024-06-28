import { forwardRef } from "react"


const Modal = forwardRef (function Modal ({email}, ref) {

return(

<dialog ref={ref}>

<h2>Du er nu tilmeldt nyhedsbrevet med emailen: {email}</h2>
<form method='dialog'>
    <button>Luk</button>
</form>
</dialog>

)

})
export default Modal