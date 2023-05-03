import React ,{useState} from "react"
import "../nav_css.css"

 export const Navbar = () =>{
    const [navbar,setNavbar] = useState(false)

    const changeBackground = () =>{
        if (window.scrollY>= 8){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackground)


    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div onClick={()=>{window.location.reload(false)}} id='navbar--left'>myQA</div>
            <div id="navbar--right">
                <div onClick={()=>{window.open('https://github.com/LecDoit/myQA')}} id='git'>GitHub</div>
            </div>
        </div>
    )

}