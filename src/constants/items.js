export default {
    EMPTY_SLOT: {  },
    DISABLED_SLOT: { disabled: true },
    GLASS_BOTTLE: {
        name: 'glass_bottle',
        text: 'Glass Bottle',
        texture: '/src/assets/minecraft/glass_bottle.png'
    },
    ARROW: {
        name: 'arrow',
        text: 'Arrow',
        texture: '/src/assets/minecraft/arrow.png'
    },
    TIPPED_ARROW: {
        name: 'tipped_arrow',
        text: 'Tipped Arrow',
        texture: {
            base: '/src/assets/minecraft/tipped_arrow_base.png',
            overlay: '/src/assets/minecraft/tipped_arrow_head.png'
        }
    },
    POTION: {
        name: 'potion',
        text: 'Potion',
        texture: {
            base: '/src/assets/minecraft/glass_bottle.png',
            overlay: '/src/assets/minecraft/potion_overlay.png'
        }
    },
    SPLASH_POTION: {
        name: 'splash_potion',
        text: 'Splash Potion',
        texture: {
            base: '/src/assets/minecraft/splash_potion.png',
            overlay: '/src/assets/minecraft/potion_overlay.png'
        }
    },
    LINGERING_POTION: {
        name: 'lingering_potion',
        text: 'Lingering Potion',
        texture: {
            base: '/src/assets/minecraft/lingering_potion.png',
            overlay: '/src/assets/minecraft/potion_overlay.png'
        }
    }
}