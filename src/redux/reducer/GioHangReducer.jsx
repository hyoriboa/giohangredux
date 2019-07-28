import { stat } from "fs";

const stateDefault = {
    dsSanPham:  [
        { id: 'sp_1', name: 'iphoneX', price: 30000000, screen: 'screen_1', backCamera:
        'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
        { id: 'sp_2', name: 'Note 7', price: 20000000, screen: 'screen_2', backCamera: 'backCamera_2',
        frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
        { id: 'sp_3', name: 'Vivo', price: 10000000, screen: 'screen_3', backCamera: 'backCamera_3',
        frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
        { id: 'sp_4', name: 'Blacberry', price: 15000000, screen: 'screen_4', backCamera:
        'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is line of smartphones, tablets, and services originally designed' }
    ],
    gioHang: []
}

const storeGioHangReducer = (state = stateDefault, action) => {
    
    switch(action.type){
        case 'MUA_HANG': {
            let spGioHang = {
                maSP: action.sanPham.id,
                tenSP: action.sanPham.name,
                hinhAnh: action.sanPham.img,
                gia: action.sanPham.price,
                soLuong: 1
            };
            let gioHangCapNhat = [...state.gioHang];
            //ktra gio hang co sp ko
            let index = gioHangCapNhat.findIndex(item => item.maSP === spGioHang.maSP);
            if(index !== -1){//sp co trong gio hang => tang so luong
                gioHangCapNhat[index].soLuong += 1;
            }else{
                gioHangCapNhat.push(spGioHang);
            }

            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'XOA_GIO_HANG': {
            //tim trong gio hang sp nao co masP = action.maSP
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1){
                gioHangCapNhat.splice(index, 1);
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        };
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1){
                //xu li tang giam
                const spGH = gioHangCapNhat[index];
                if(action.tangGiam){
                    //xu li tang
                    spGH.soLuong += 1;
                }else{//giam
                    //ktra so luong > 1 => giam
                    if(spGH.soLuong > 1){
                        spGH.soLuong -= 1;
                    }else{
                        alert('Số lượng tối thiểu không thể giảm !!');
                    }
                }
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        default: {
            // console.log('AAAAAAAAAA');
        }
    }

    return {...state};
}

export default storeGioHangReducer;