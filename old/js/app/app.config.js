
angular
    .module('app')
    .config(['ngImageGalleryOptsProvider', function(ngImageGalleryOptsProvider) {

        ngImageGalleryOptsProvider.setOpts({
            thumbnails  :   true,
            inline      :   false,
            imgBubbles  :   false,
            bgClose     :   false,
            bubbles     :   true,
            imgAnim     :   'fade'
        });

    }]);