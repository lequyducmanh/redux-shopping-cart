var initialState = [
    {
        id: 1,
        name: 'Iphone XS Max',
        image: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-select-2018-group?wid=552&hei=892&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536616752423',
        description: 'Sản phẩm do Apple sản xuất',      //Miêu tả
        price: 500,
        inventory: 10,                                   //Hàng tồn kho
        rating: 5
    },
    {
        id:2,
        name:'Iphone X',
        image: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-select-2018-group?wid=552&hei=892&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536616752423',
        description: 'Apple sản xuất', 
        price: 1000,
        inventory: 100,  
        rating: 3
    },
    {
        id:3,
        name:'Iphone 8',
        image: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-select-2018-group?wid=552&hei=892&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536616752423',
        description: 'Apple xuất khẩu',
        price: 2000,
        inventory: 1000,
        rating: 1
    }
];

const products = (state = initialState, action)=>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;