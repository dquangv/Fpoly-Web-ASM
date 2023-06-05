const $ = document.querySelector.bind(document)
const products = [
    {
        id: 2,
        name: 'Esprit Ruffle Shirt 2',
        price: 17.64,
        img: 'images/product-02.jpg',
        category: 'women'
    }
]

function render() {
    const product = $('.cart');

    const htmls = products.map((product) => {
        return `<div class="product">
        <h1>Giỏ hàng của bạn</h1>
        <table>
            <tr>
                <th>Sản phẩm</th>
                <th></th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
            </tr>

            <tr>
                <td><img src="pic/sp1.jpg" alt="" style="width: 100px;"></td>
                <td>Kem dưỡng ẩm L'Occitane Pivoine</td>
                <td style="color: pink;">840,000₫</td>
                <td>
                    <div class="num-count">
                        <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                        <p>1</p>
                        <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
                    </div>
                </td>
                <td style="color: pink;">840,000₫</td>
            </tr>

            <tr>
                <td><img src="pic/sp2.webp" alt="" style="width: 100px;"></td>
                <td>Kem lót Burberry Fresh Glow</td>
                <td style="color: pink;">960,000₫</td>
                <td>
                    <div class="num-count">
                        <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                        <p>2</p>
                        <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
                    </div>
                </td>
                <td style="color: pink;">960,000₫</td>
            </tr>
        </table>
    </div>`
    })

    product.innerHTML = htmls.join('');
}

function app() {
    render()
}

app()