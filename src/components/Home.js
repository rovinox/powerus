import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Home extends Component {
    render() {
        return (
            <div style={{margin:"20px auto", height:"60vh", width:"60vw", border:"1px red solid"}}>
        <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={10}
                totalSlides={3}
                isPlaying="true"
                interval={3000}
        >
            <Slider style={{height:"70vh", width:"60vw"}}>
                <Slide index={0}><img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67653225_1100441646821967_956068551785847480_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&oh=d0dbbafeada04c9d1320cd1a27b5e92a&oe=5DDB7154&ig_cache_key=MjA5NzY1MDY4Nzk0ODI0NDU4MA%3D%3D.2"></img></Slide>
                <Slide index={1}><img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67653225_1100441646821967_956068551785847480_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&oh=d0dbbafeada04c9d1320cd1a27b5e92a&oe=5DDB7154&ig_cache_key=MjA5NzY1MDY4Nzk0ODI0NDU4MA%3D%3D.2"></img></Slide>
                <Slide index={2}><img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67653225_1100441646821967_956068551785847480_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&oh=d0dbbafeada04c9d1320cd1a27b5e92a&oe=5DDB7154&ig_cache_key=MjA5NzY1MDY4Nzk0ODI0NDU4MA%3D%3D.2"></img></Slide>
            </Slider>
            
      </CarouselProvider>
            </div>
        )
    }
}
