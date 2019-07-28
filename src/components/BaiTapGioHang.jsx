import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

export default class BaiTapGioHang extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h3>Danh Sach San Pham</h3>
                <DanhSachSanPham />
                <h3 className="mt-2">Gio hang</h3>
                <GioHang />
                
            </div>
        )
    }
}
