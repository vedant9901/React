import React, { Component } from 'react'
import './file1.scss';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getVideos } from '../../actions/ContentActions';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player'


export default class secureFile extends Component {
    state = {
        userName: '',
        videos: [],
        currentIndex: 0,
        translateValue: 0
    }

    componentDidMount(){
       this.getVideos()
    }
    logout(e) {
        localStorage.clear()
        this.props.history.push('/login');
    }

    async getVideos() {
        let response = [];
        response = await getVideos()
        this.setState({
            videos : response
        })
        console.log(this.state.videos)
    }


    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return (
            <div>
                <div className="flex row header">
                   <div className="leftDiv">
                   <div className='welcome'>Hello {JSON.parse(localStorage.getItem('response')).firstName + ' ' + JSON.parse(localStorage.getItem('response')).lastName } !</div>
                   </div>
                   <div className="rightDiv"> 
                   <span className="Icon"><FontAwesomeIcon icon={faSignOutAlt} onClick={(e)=>{this.logout(e)}} /></span>
                   </div>
                </div>
               <div className="mainDiv">

               <Carousel responsive={responsive}  infinite={true}>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/919638549990_1597043219510.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/919409215070_1599480310663.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/15167175011_1597930499270.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/919409215070_1599480310663.mp4'
                            volume='1'
                            width='100%'
                            controls = {true}
                        /></div>
                </Carousel>

                <br/>

                <Carousel responsive={responsive}  infinite={true}>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/919638549990_1597043219510.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/919409215070_1599480310663.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/15167175011_1597930499270.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                <div><ReactPlayer
                            url='http://media.begenuin.com/temp_video/919409215070_1599480310663.mp4'
                            width='100%'
                            controls = {true}
                        /></div>
                </Carousel>
               
               </div>
            </div>
        )
    }
}