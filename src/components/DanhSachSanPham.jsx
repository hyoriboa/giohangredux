import React, { Component } from 'react'

import {connect} from 'react-redux';
import SanPham from './SanPham';

class DanhSachSanPham extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.dsSanPham.map((item, index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                <SanPham sanPham = {item} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        dsSanPham: state.storeGioHangReducer.dsSanPham
    }
}

export default connect(mapStateToProps, null)(DanhSachSanPham);