import StaticImages from "../static/images"

export const GenderList = [
    {value: "male", label: "Nam"},
    {value: "female", label: "Nữ"},
    {value: "other", label: "Khác"}
]

export const categoryData=[
    {
        id:1,
        categoryName:'Áo nam',
        srcImg:StaticImages.shirt
    },
    {
        id:2,
        categoryName:'Quần jeans',
        srcImg:StaticImages.jeans
    },
    {
        id:3,
        categoryName:'Balo',
        srcImg:StaticImages.bag
    },
    {
        id:4,
        categoryName:'Giày',
        srcImg:StaticImages.shoes
    },
    {
        id:5,
        categoryName:'Áo hoodie',
        srcImg:StaticImages.hoodie
    },
    {
        id:6,
        categoryName:'Áo sweater',
        srcImg:StaticImages.sweater
    },
    {
        id:7,
        categoryName:'Đồng hồ',
        srcImg:StaticImages.watches
    },
    {
        id:8,
        categoryName:'Thắt lưng',
        srcImg:StaticImages.belt
    },
]

export const BUData=[
    {
        id:1,
        srcImg:StaticImages.hugu
    },
    {
        id:2,
        srcImg:StaticImages.mende
    },
    {
        id:3,
        srcImg:StaticImages.swe
    },
    {
        id:4,
        srcImg:StaticImages.davies
    },
]

export const FlashsaleData=[
    {
        id:1,
        title:'Áo hoodie xanh dương',
        srcImg:StaticImages.flashsale1,
        salePrice:66000,
        price:174000,
    },
    {
        id:2,
        title:'Quần jogger đen',
        srcImg:StaticImages.flashsale2,
        salePrice:76000,
        price:150000,
    },
    {
        id:3,
        title:'Áo sweater đen',
        srcImg:StaticImages.flashsale3,
        salePrice:90000,
        price:200000,
    },
    {
        id:4,
        title:'Quần jogger trắng',
        srcImg:StaticImages.flashsale4,
        salePrice:89000,
        price:169000,
    },
    {
        id:5,
        title:'Giày trắng đen cá tính',
        srcImg:StaticImages.flashsale5,
        salePrice:76000,
        price:201000,
    },
    {
        id:6,
        title:'Đồ bộ nhiều màu',
        srcImg:StaticImages.flashsale6,
        salePrice:89000,
        price:199000,
    },
]

export const ProductData=[
    {
        id:1,
        title:'Áo hoodie trắng đen',
        srcImg:StaticImages.product1,
        salePrice:66000,
        price:174000,
    },
    {
        id:2,
        title:'Quần tây âu',
        srcImg:StaticImages.product2,
        salePrice:76000,
        price:150000,
    },
    {
        id:3,
        title:'Áo sweater loang màu',
        srcImg:StaticImages.product3,
        salePrice:90000,
        price:200000,
    },
    {
        id:4,
        title:'Đồng hồ mạ vàng',
        srcImg:StaticImages.product4,
        salePrice:89000,
        price:169000,
    },
    {
        id:5,
        title:'Đồng hồ ánh kim',
        srcImg:StaticImages.product5,
        salePrice:76000,
        price:201000,
    },
    {
        id:6,
        title:'Thắt lưng nhiều màu',
        srcImg:StaticImages.product6,
        salePrice:89000,
        price:199000,
    },
]
export const ProductListData=[
    {
        id:1,
        title:'Áo hoodie trắng đen',
        searchTerm:'ao hoodie trang den',
        srcImg:StaticImages.product1,
        salePrice:66000,
        price:174000,
        BULogoSrcImg:StaticImages.hugu,
        BUName:'hugu.official'
    },
    {
        id:2,
        title:'Quần tây âu',
        searchTerm:'quan tay au',
        srcImg:StaticImages.product2,
        salePrice:76000,
        price:150000,
        BULogoSrcImg:StaticImages.hugu,
        BUName:'hugu.official'
    },
    {
        id:3,
        title:'Áo sweater loang màu',
        searchTerm:'ao sweater loang mau',
        srcImg:StaticImages.product3,
        salePrice:90000,
        price:200000,
        BULogoSrcImg:StaticImages.mende,
        BUName:'mende.official'
    },
    {
        id:4,
        title:'Đồng hồ mạ vàng',
        searchTerm:'dong ho ma vang',
        srcImg:StaticImages.product4,
        salePrice:89000,
        price:169000,
        BULogoSrcImg:StaticImages.swe,
        BUName:'swe.official'
    },
    {
        id:5,
        title:'Đồng hồ ánh kim',
        searchTerm:'dong ho anh kim',
        srcImg:StaticImages.product5,
        salePrice:76000,
        price:201000,
        BULogoSrcImg:StaticImages.swe,
        BUName:'swe.official'
    },
    {
        id:6,
        title:'Thắt lưng nhiều màu',
        searchTerm:'that lung nhieu mau',
        srcImg:StaticImages.product6,
        salePrice:89000,
        price:199000,
        BULogoSrcImg:StaticImages.davies,
        BUName:'davies.official'
    },
]
export const ProductDetailDataSample=[
    {
        id:1,
        title:'Áo hoodie trắng đen',
        srcImg:StaticImages.product1,
        salePrice:66000,
        price:174000,
        BULogoSrcImg:StaticImages.hugu,
        BUName:'hugu.official',
        detail:[
            {title:'Tên sản phẩm',content:'Áo hoodie trắng đen'},
            {title:'Kích cỡ',content:'XL'},
            {title:'Giá',content:66000},
            {title:'Nhà sản xuất',content:'hugu.official'},
            {title:'Hạn sử dụng',content:'31/12/2029'},
            {title:'Chính sách đổi trả',content:'Áp dụng'},
        ]
    },
]