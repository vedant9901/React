import React, { Component } from 'react'
import './file1.scss';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getVideos } from '../../actions/ContentActions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
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
    }


    render() {
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
               <div>
               <div class="owl-carousel owl-theme">
                    <div class="item-video" data-merge="3"><a class="owl-video" href="https://vimeo.com/23924346"></a></div>
                    <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>
                    <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=FBu_jxT1PkA"></a></div>
                    <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=oy18DJwy5lI"></a></div>
                    <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a></div>
                    <div class="item-video" data-merge="3"><a class="owl-video" href="https://www.youtube.com/watch?v=g3J4VxWIM6s"></a></div>
                    <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=0fhoIate4qI"></a></div>
                    <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=EF_kj2ojZaE"></a></div>
                </div>
               </div>
            </div>
        )
    }
}