import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Items from "./Items"

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{height:"100"}}>

                    <Carousel
                    autoPlay="true"
                    infiniteLoop="true"
                    interval="2000"
                    width="80vw"
                    >
                    <div>
                        <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67653225_1100441646821967_956068551785847480_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&oh=d0dbbafeada04c9d1320cd1a27b5e92a&oe=5DDB7154&ig_cache_key=MjA5NzY1MDY4Nzk0ODI0NDU4MA%3D%3D.2" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://http2.mlstatic.com/powerus-pw2500-1-ohm-D_NQ_NP_761466-MLM28552680388_112018-F.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67653225_1100441646821967_956068551785847480_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&oh=d0dbbafeada04c9d1320cd1a27b5e92a&oe=5DDB7154&ig_cache_key=MjA5NzY1MDY4Nzk0ODI0NDU4MA%3D%3D.2" />
                        <p className="legend">Legend 3</p>
                    </div>
                    </Carousel>
                </div>
                   
                    <div>
                        <Items/>
                    </div>
            </div>
        )
    }
}
