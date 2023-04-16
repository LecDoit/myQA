import React ,{useState,useEffect} from "react"


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
            <div id='navbar--left'>myQA</div>
            <div id="navbar--right">
                <div id='home'>Home</div>
                <div id='about'>About</div>
                <div id='git'>github</div>
            </div>
        </div>
    )

}