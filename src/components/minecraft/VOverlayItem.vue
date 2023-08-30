<template>
    <canvas
        class="float-left aspect-square"
        ref="canvas"
        width="160"
        height="160"
    />
</template>

<script>
import ITEMS from '@/constants/items.js';

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

        const item = this.item;

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
                //ctx.globalAlpha = 0.5;
                ctx.drawImage(img2, 0, 0);

                //ctx.globalAlpha = 0.5;
                ctx.fillStyle = item.effect.color;
                if(item.name !== ITEMS.tipped_arrow.name) { // potion, lingering_potion, splash_potion
                    ctx.fillRect(80, 80, 30, 30);
                    ctx.fillRect(60, 110, 30, 30);
                    ctx.fillRect(50, 90, 10, 40);
                    ctx.fillRect(110, 90, 10, 40);
                    ctx.fillRect(60, 80, 10, 10);
                    ctx.fillRect(100, 130, 10, 10);
                    ctx.fillRect(70, 90, 10, 20);
                    ctx.fillRect(90, 110, 10, 20);
                }
                else { // tipped_arrow
                    //head
                    ctx.fillRect(120, 20, 30, 20);
                    ctx.fillRect(120, 40, 20, 20);
                    ctx.fillRect(100, 30, 30, 10);
                    //particles
                    ctx.fillRect(60, 40, 20, 10);
                    ctx.fillRect(70, 50, 10, 10);
                    ctx.fillRect(30, 50, 10, 20);
                    ctx.fillRect(0, 60, 10, 10);
                    ctx.fillRect(90, 100, 20, 10);
                    ctx.fillRect(100, 110, 10, 10);
                    ctx.fillRect(80, 140, 10, 10);
                }
            }
        };
    }
}
</script>