import "./Projects.css"

function Project({img,p}){
    return(
    <div className="projects" id="Projects" style={{backgroundImage:`url(${img})`,
         backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        width: "300px",
        position: "relative",
        color: "white"}}>
 <div className="overlay">
<h3>{p}</h3>
</div>
<div>
</div>
    </div>)
}

export function ProjectsCopy(){
    return(
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <Project img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLUsCJ79wy3XfiWSki5ElIL8YTA59j02XfQ&s" p="Weather Application" />
            <Project img="https://i.ytimg.com/vi/aTsdv8rrqfA/hqdefault.jpg" p="Resturant Website"/>
            <Project img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTTwUBocsybRwBjbo7-cbDlu4ZeThiCz4wA&s" p="Personal Portfolio Website"/>

            </div>
    )
}
