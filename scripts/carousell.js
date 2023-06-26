document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            '../assets/banners-hero/image2.jpeg',
            '../assets/banners-hero/image3.jpeg',
            '../assets/banners-hero/image1.jpeg'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})