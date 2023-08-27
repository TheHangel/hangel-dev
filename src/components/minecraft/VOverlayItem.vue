<template>
    <canvas
        class="float-left aspect-square"
        ref="canvas"
        width="160"
        height="160"
    />
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    mounted() {
        const ctx = this.$refs.canvas.getContext('2d');
        ctx.globalCompositeOperation = "color";
        
        const img1 = loadImage(this.item.texture.base, main);
        const img2 = loadImage(this.item.texture.overlay, main);
        /*img2.style.WebkitFilter = "sepia(53%) | saturate(6725%) | hue-rotate(358deg) | brightness(97%) | contrast(135%)";
        img2.style.filter = "sepia(53%) | saturate(6725%) | hue-rotate(358deg) | brightness(97%) | contrast(135%)";
        img2.style.setProperty('filter', 'sepia(53%) | saturate(6725%) | hue-rotate(358deg) | brightness(97%) | contrast(135%)');*/

        var imagesLoaded = 0;

        function loadImage(src, onload) {
            const img = new Image();
            
            img.onload = onload;
            img.src = src;

            return img;
        };

        function main() {
            imagesLoaded++;

            if(imagesLoaded == 2) {
                ctx.drawImage(img1, 0, 0);
                
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = "red";
                ctx.fillRect(0,0,50,50);
                ctx.drawImage(img2, 0, 0);
            }
        };
    }
}
</script>