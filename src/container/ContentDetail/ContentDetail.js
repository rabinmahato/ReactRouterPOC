import  React, { Component }  from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import GridList from '../GridList/GridList';
import GridListItem from '../../components/GridListItem/GridListItem';
import * as actionTypes from '../../store/action/';
import {secondsToHms} from '../../utility/common'; 
import "./ContentDetail.scss";

class ContentDetail extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }

    componentDidMount(){
      //get the id parameter
      const videoId = this.props.match.params.id;
      //Fetch video details
      this.props.onFetchVideoContent(videoId, this);
    }

    componentDidUpdate(){  
      //get the id parameter    
      const videoId = this.props.match.params.id;
      //Fetch video details
      (this.props.contentItem && !this.props.loading && (videoId !== this.props.contentItem.id))  && this.props.onFetchVideoContent(videoId, this); 
    }
    //This lifecycle hook is used to modify state based on properties recieved
    //if state is not modified return null
    static getDerivedStateFromProps(nextProps, prevState){
        return null;
    }

    onMouseOver = () => {

    }

    onMouseOut = () => {

    }

    onClick = () => {

    }

    render() {
        return (
          <React.Fragment>
            <Loader show={this.props.loading} />
            { this.props.contentItem ? 
              <div className="ItemDetailContainer">
                <div className="posterWrapper">
                <img key="image" src={`https://akamaividz1.zee5.com/resources/${this.props.contentItem.id}/list/1920x770/${this.props.contentItem.list_image}?imwidth=1920&impolicy=akamai_vidz1_zee5_com-IPM`} alt={this.props.contentItem.title}/>
                  <div className="LeftOverlay" />
                  <div className="BottomOverlay" />
                </div>
                <div className="ContentDetail" >
                  <div className="detailWrapper" >
                    <div className="DetailsHolder">
                      <div className="titlePinkAccent">{this.props.contentItem.asset_subtype}</div>
                      <div className="originalTitle"></div>
                      <div className="itemTitle">{this.props.contentItem.title}</div>
                      {/* <RatingStar key="ratingStar" /> */}
                      <div className="genres">{`|  ${secondsToHms(this.props.contentItem.duration)}  | ${this.props.contentItem.genre.map((ele)=>{return ele.value}).join(", ")}  | 3+   |`}</div>
                      <div className="icon-hd" >{'HD'}</div>
                      <div className="description">{this.props.contentItem.description}</div>
                                        
                      <div className="realeasedon" key="realeasedon">{`Released On: ${new Date(this.props.contentItem.release_date).toDateString()}`}</div>
                    </div>
                    <div className="castHolder">
                      <div key="castCrew" className="castCrew">
                        <table className="table1">
                          <tbody>
                            <tr className="tablehead">
                              <td className="cast">{'Cast'}</td>
                            </tr>
                            <tr className="firstrow">
                              {this.props.contentItem.actors.map((ele,index)=>{
                                return (index<4) ? <td className="padding-left" key={Math.random()}><span>{ele.split(":")[0]}</span></td> : null;
                              })}
                            </tr>
                            <tr className="secondrow"> 
                              {this.props.contentItem.actors.map((ele, index)=>{
                                return (index<4) ? <td className="padding-left" key={Math.random()}><span>{ele.split(":")[1]}</span></td> : null;
                              })}
                            </tr>
                          </tbody>   
                        </table>
                      </div>
        
                      <div key="moviedirector" className="moviedirector">
                        <div className="director">{'Director'}</div>
                        <div className="direcname">{this.props.contentItem.directors.join(", ")}</div>    
                      </div>
        
                      <div className="buttonList">
                        <div className="PlayButton playButtn" tabIndex="0" role="button">
                          <div className="Icon"></div>
                          <div className="Text">Play</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <GridList>
                    {this.props.contentItem.related.map((ele,index)=>{
                      return (
                        <Link key={ele.id} to={"/Content/" + ele.id} className="related-list-item">                      
                          <GridListItem 
                                    title={ele.title} 
                                    duration={ele.duration} 
                                    assettype={ele.asset_subtype}
                                    coverImage={`https://akamaividz1.zee5.com/resources/${ele.id}/cover/270x405/${ele.cover_image}?imwidth=270&impolicy=akamai_vidz1_zee5_com-IPM`}
                                    imageDescription={ele.cover_image}
                          />
                        </Link>
                      )
                    })}
                </GridList>
              </div> : null
            }
            
          </React.Fragment>
        )
      }
}


const mapStateToProps = state => {
  return {
      contentItem: state.contentItem,
      loading: state.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchVideoContent: (videoId, oComponentRef) => {
          dispatch(actionTypes.fetchVideoContent(videoId, oComponentRef));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetail);