import React, { Component } from 'react'

import {connect} from 'react-redux'

class SanPham extends Component {

    render() {
        let {sanPham} = this.props;
        return (
            <div className="card mt-2">
                <img className="card-img-top" width={100} height={200} src={sanPham.img} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.name}</h4>
                    <p className="card-text">{(sanPham.price).toLocaleString()} VND</p>
                    <button onClick={()=>this.props.muaHang(sanPham)}
                    className="btn btn-danger">Mua hang</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    
    return {
        muaHang: (sanPham) => {
            dispatch({
                type: 'MUA_HANG',
                sanPham
            })
            
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPham);