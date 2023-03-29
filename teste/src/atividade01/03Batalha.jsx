import React from "react";

const Hero = ({name}) => {
    return (
        <div>
        <h1>Sou o heroi {name}</h1>
        <img 
            src = "https://s2.glbimg.com/naouMe5Yd_5oqGWvrd9HGWLTlUU=/0x0:819x1024/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/m/0/TyvyVFRZCkXuqA062mqA/whatsapp-image-2022-11-26-at-20.20.59.jpeg"
            style = {{width: "200"}}
        />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
        <h1>Sou o inimigo {name}</h1>
        <img 
            src = "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportSportsNews/tagreuters.com2022binary_LYNXMPEIAG117-FILEDIMAGE-e1668729389935.jpg?w=876&h=484&crop=1"
            style = {{width: "200"}}
        />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name = "Messi o maior"/>
            <Enemy name = "CR7 pequenininho"/>
        </div>
    )
}

const World = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export {Hero, Enemy, Arena, World}