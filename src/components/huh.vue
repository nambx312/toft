<template>
    <div class="container">
        <h1>Gửi mọi người.......</h1>
        <h1>Có một món quà nhỏ dành cho mọi người nè</h1>
        <h1 v-if="acceptButton == true">Chúc mừng ngày Phụ nữ Việt Nam 20/10 💐</h1>
        <h1 v-if="acceptButton == true">Chúc mọi người luôn xinh đẹp, vui vẻ và hạnh phúc</h1>
        <h1 v-if="acceptButton == true">Mãi rạng rỡ và được yêu thương thật nhiều ❤️</h1>
        <div class="application">
            <div class="background" v-if="huh">
                <div class="img">
                    <img :src="imgSrc" alt="Random Image">
                </div>
            </div>
        </div>
        <form>
            <button type="submit" id="button-submit" @click.prevent="huhuhuhuhuhu">Ấn đi</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'huhCaiqq',
    data() {
        return {
            huh: false,
            acceptButton: false,
            imgSrc: require('@/assets/hinh-anh-20-10-27-1.jpg'),
        }
    },
    mounted() {
        document.title = 'Chúc mừng 20/10';
    },
    methods: {
        huhuhuhuhuhu() {
            // Chỉ chạy vòng tạo ảnh một lần, tránh ấn nhiều lần làm ảnh ra dồn dập
            if (this.acceptButton) return;
            this.huh = true;
            this.acceptButton = true;
            this.createRandomPopup();
        },
        createRandomPopup() {
            const popup = document.createElement('div');
            popup.classList.add('popup-img');

            // Tạo phần tử img và thêm vào
            const image = document.createElement('img');
            image.src = this.imgSrc;
            image.alt = 'Random Image';  // Thêm alt text cho hình ảnh
            popup.appendChild(image);  // Thêm img vào popup

            document.body.appendChild(popup);

            // Vị trí ngẫu nhiên trên màn hình
            const x = Math.random() * (window.innerWidth - 300); // Trừ đi kích thước của background để tránh vượt ra ngoài màn hình
            const y = Math.random() * (window.innerHeight - 300); // Tương tự như trên 

            popup.style.left = `${x}px`;
            popup.style.top = `${y}px`;

            // Hiển thị phần tử
            setTimeout(() => {
                popup.classList.add('show');
            }, 10);

            // Tạo phần tử mới mỗi 1 giây mà không ẩn phần tử trước đó
            setTimeout(() => {
                this.createRandomPopup();
            }, 1000);
        }
    }
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#button-submit:first-child {
    /* Bỏ position absolute và margin-right vì đã dùng flexbox */
    transition: all 0.3s ease;
    /* Thêm hiệu ứng mượt khi di chuyển */
}

.background {
    width: 300px;
    height: 300px;
    background: #aa29d9;
    box-shadow: 6px 6px 6px 6px rgba(0.5, 0.5, 0.5, 0.5);
    position: absolute;
    /* Đảm bảo phần tử có thể di chuyển tự do */
    opacity: 0;
    /* Bắt đầu ẩn */
    transition: opacity 0.5s ease;
    /* Tạo hiệu ứng mờ dần */
}

.background.show {
    opacity: 1;
    /* Khi thêm class show, phần tử sẽ xuất hiện */
}

form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 30px;
    min-height: 200px;
    /* Đảm bảo form có chiều cao để button không bị tràn */
}

.img img {
    width: 100%;
    height: 100%;
}

#button-submit {
    /* Bỏ position absolute và margin-top vì đã dùng flexbox */
    padding: 30px 80px;
    font-size: 16px;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

#button-submit:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
}

#button-submit:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(2px);
}

.application {
    margin: 0 auto;
    padding: 30px 30px;
}

@keyframes appear {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.btn-cancel {
    padding: 30px 80px;
    font-size: 16px;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, left 0.3s, top 0.3s;
    position: static;
    /* Mặc định là static, khi click sẽ đổi thành fixed */
}

.popup-img {
    width: 100px;
    height: 100px;
    position: absolute;
    background: transparent;
    box-shadow: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
}

.popup-img.show {
    opacity: 1;
}

.popup-img img {
    width: 100%;
    height: 100%;
}
</style>
