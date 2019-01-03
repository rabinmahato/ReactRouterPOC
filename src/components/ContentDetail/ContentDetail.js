import  React, { Component }  from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action/';
import "./ContentDetail.scss";

class ContentDetail extends Component {
    constructor(props){
        super(props);
    }
    state = {

    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }
    static getDerivedStateFromProps(nextProps, prevState){
        return null;
    }

    onMouseOver = () => {

    }

    onMouseOut = () => {

    }

    onClick = () => {

    }

    secondsToHms(seconds) {
      seconds = Number(seconds);
      const h = Math.floor(seconds / 3600);
      const m = Math.floor(seconds % 3600 / 60);
      const s = Math.floor(seconds % 3600 % 60);
  
      const hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
      const mDisplay = m > 0 ? m + (m == 1 ? "min " : "min ") : "";
      //var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      return hDisplay + mDisplay; 
  }
    render() {
        return (
          <div className="ItemDetailContainer" key="itemdetailcontainer">
            <div className="posterWrapper" key="posterWrapper">
            <img key="image" src={'https://akamaividz1.zee5.com/resources/0-0-2481/list/1920x770/commando2new_740x416.jpg?imwidth=1920&impolicy=akamai_vidz1_zee5_com-IPM'} alt={this.props.contentItem.title}/>
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
                  <div className="genres">{`|  ${this.secondsToHms(this.props.contentItem.duration)}  | ${this.props.contentItem.genre.map((ele)=>{return ele.value}).join(", ")}  | 3+   |`}</div>
                  <div className="icon-hd" >{'HD'}</div>
                  <div className="description">{this.props.contentItem.description}</div>
                                    
                  <div className="realeasedon" key="realeasedon">{`Released On: ${new Date(this.props.contentItem.release_date).toDateString()}`}</div>
                </div>
                <div className="castHolder" key="castholder">
                  <div key="castCrew" className="castCrew">
                    <table className="table1" key="table1">
                      <tbody>
                        <tr className="tablehead" key="tableheads">
                          <td className="cast">{'Cast'}</td>
                        </tr>
                        <tr className="firstrow" key="firstRow">
                          {this.props.contentItem.actors.map((ele,index)=>{
                            return (index<4) ? <td className="padding-left"><span>{ele.split(":")[0]}</span></td> : null;
                          })}
                        </tr>
                        <tr className="secondrow" key="secondRow"> 
                          {this.props.contentItem.actors.map((ele, index)=>{
                            return (index<4) ? <td className="padding-left"><span>{ele.split(":")[1]}</span></td> : null;
                          })}
                        </tr>
                      </tbody>   
                    </table>
                  </div>
    
                  <div key="moviedirector" className="moviedirector">
                    <div className="director">{'Director'}</div>
                    <div className="direcname">{this.props.contentItem.directors.join(", ")}</div>    
                  </div>
    
                  <div className="buttonList" key="buttonList" >
                  </div>
                </div>
              </div>
            </div>
            <div className="CollectionDetail Hidden" key="collectionDetail" />
          </div>
        )
      }
}


const mapStateToProps = state => {
  return {
      contentItem: state.contentItem
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchItems: () => {
          dispatch(actionTypes.fetchItems());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetail);