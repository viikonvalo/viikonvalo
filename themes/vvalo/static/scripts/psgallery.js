/********************************************************
 * psgallery.js
 * jQuery-plugin for creating an image gallery
 * Petri Salmela
 * pesasa@iki.fi
 * 06.07.2012
 *
 * License: WTFPL
 *    http://sam.zoy.org/wtfpl/COPYING
 ********************************************************/


(function($){
    // jQuery plugin
    $.fn.psgallery = function(options){
        // Extend default settings with user given options.
        var settings = $.extend({
            style: "psg_default",       // html class for styling
            tnmatch: /(\.[^\.]+)$/,     // RegExp (or string) to match for thumbnailing
            tnreplace: "-tn$1",         // Replace matched with this to get thumbnail url.
            tnadd: '',                  // String to add before '.extension' to get thumbnail url.
                                        // If this is used, tnmatch and tnreplace are not.
            notn: false,                // If true, the image itself is used as thumbnail.
                                        // Not recommended, since using big image as thumbnail is heavy!
            tnmaxsize: 200,             // Maximum size (x or y) of thumbnails.
            tnmaxheight: 200,           // Maximum y-size of thumbnails.
            tnmaxwidth: 200,            // Maximum x-size of thumbnails.
            circular: true,             // If true, the first image is next from last.
            fullscreen: false,          // If true, view-mode defaults for fullscreen.
            filmstrip: false,           // If true, show thumbnails as filmstrip in view-mode.
            effect: 'fade'             // The image change effect
            //fadespeed: 500              // Speed of fade effect in image change.
        }, options);
        settings.tnmaxheight = Math.min(settings.tnmaxheight, settings.tnmaxsize);
        settings.tnmaxwidth = Math.min(settings.tnmaxwidth, settings.tnmaxsize);
        // Return this so that methods of jQuery element can be chained.
        return this.each(function(){
            // Create new Psgallery object.
            var gallery = new Psgallery(this, settings);
            // Init the gallery.
            gallery.init();
        });
    }
    
    /**
     * Psgallery class. Constructor
     * @constructor
     * @param {jQuery} place - place for gallery
     * @param {Object} settings - settings of the gallery
     */
    var Psgallery = function(place, settings){
        // Constructor for Psgallery object.
        var imagetypes = ['jpg','jpeg','png','gif'];
        this.settings = settings;
        this.place = $(place);
        this.place.addClass('psgallery');
        this.isopen = false;
        var liitems = this.place.find('li');
        var aitem, href, caption, extension, picitem;
        this.addCss();
        this.items = [];
        for (var i = 0; i < liitems.length; i++){
            aitem = liitems.eq(i).children('a');
            href = aitem.attr('href') || '';
            caption = aitem.html();
            extension = href.split('.').pop().toLowerCase();
            if (imagetypes.indexOf(extension) !== -1){
                picitem = {
                    litem: liitems.eq(i),
                    href: href,
                    thumbnail: href.replace(this.settings.tnmatch, this.settings.tnreplace),
                    caption: caption
                };
                if (!!this.settings.tnadd){
                    picitem.thumbnail = href.replace(/(\.[^\.]+)$/, this.settings.tnadd + '$1');
                };
                if (this.settings.notn){
                    picitem.thumbnail = href;
                };
                this.items.push(picitem);
            };
        };
    };

    /**
     * Add css of the psgallery to the head of the document
     */
    Psgallery.prototype.addCss = function(){
        if ($('head style#psg_style').length == 0){
            $('head').append('<style type="text/css" id="psg_style">\n' + Psgallery.css + '</style>\n');
        };
    };
    
    /**
     * Set some classes and attributes.
     */
    Psgallery.prototype.setAttrs = function(){
        this.wrapper.attr('data-psgeffect', this.settings.effect);
    };
    
    /**
     * Init all required elements, classes and etc.
     */
    Psgallery.prototype.init = function(){
        var gallery = this;
        if (this.place.hasClass('psg_gallerified')){
            return false;
        };
        this.place.addClass('psg_gallerified').addClass(this.settings.style);
        // Convert list of links to a list of thumbnail images.
        for (var i = 0; i < this.items.length; i++){
            var imagename = this.items[i].href.split('/').pop() || '';
            var link = this.items[i].litem.find('a').eq(0);
            link.empty()
                .addClass('psg-imagelink')
                .attr('data-psgindex', i)
                .append('<img src="'+this.items[i].thumbnail+'" alt="'+imagename+'" title="'+this.items[i].caption+'" class="psg_thumbnail" style="max-width:'+this.settings.tnmaxwidth+'px; max-height:'+this.settings.tnmaxheight+'px;" />');
        };
        // Init the wrapper for big images
        this.initWrapper();
        // Init all event handlers
        this.initHandlers();
        // Set some attributes
        this.setAttrs();
    };
    
    /**
     * Init the wrapper for showing images
     */
    Psgallery.prototype.initWrapper = function(){
        this.wrapper = $('<div class="psgimage_wrapper '+this.settings.style+'" tabindex="0"><div class="psgimage_container"></div></div>');
        this.place.after(this.wrapper);
        if (this.settings.fullscreen){
            this.wrapper.addClass('psg_fullscreen');
        };
        this.container = this.wrapper.children('.psgimage_container');
        this.container.append(Psgallery.templates.content);
        this.iwprevious = this.container.children('.psgallery_imagewrapper').eq(0);
        this.iwcurrent = this.container.children('.psgallery_imagewrapper').eq(1);
        this.iwnext = this.container.children('.psgallery_imagewrapper').eq(2);
        this.kofn = this.container.find('.psgallery_captionwrapper .psgallery_kofn');
        this.caption = this.container.find('.psgallery_captionwrapper .psgallery_caption');
        this.tools = this.container.find('.psgallery_toolwrapper');
        // Filmsstrip
        if (this.settings.filmstrip){
            this.tools.append('<ul class="psgallery_filmstrip"></ul>');
            this.filmstrip = this.tools.find('ul.psgallery_filmstrip');
            for (var i = 0; i < this.items.length; i++){
                this.filmstrip.append('<li data-psgstripindex="'+i+'"><img src="'+this.items[i].thumbnail+'" title="'+this.items[i].caption+'" /></li>');
            };
        };
        // Navigation
        this.tools.append('<a href="javascript:;" class="psgallery_previous">'+Psgallery.icons.previous+'</a>');
        this.tools.append('<a href="javascript:;" class="psgallery_next">'+Psgallery.icons.next+'</a>');
        this.tools.append('<a href="javascript:;" class="psgallery_close">'+Psgallery.icons.close+'</a>');
        this.tools.append('<a href="javascript:;" class="psgallery_fullscreen"><span class="psg-fson">'+Psgallery.icons.fullscreen_yes+'</span><span class="psg-fsoff">'+Psgallery.icons.fullscreen_no+'</span></a>');

    };

    /**
     * Init event handlers
     */    
    Psgallery.prototype.initHandlers = function(){
        var gallery = this;
        // Click on thumbnails
        this.place.off('click', 'a.psg-imagelink').on('click', 'a.psg-imagelink', function(event){
            var index = $(this).attr('data-psgindex') | 0;
            event.preventDefault();
            event.stopPropagation();
            gallery.show(index);
        });
        // Close icon
        this.wrapper.off('click', 'a.psgallery_close').on('click', 'a.psgallery_close', function(event){
            event.stopPropagation();
            event.preventDefault();
            gallery.close();
        });
        // Fullscreen icon
        this.wrapper.off('click', 'a.psgallery_fullscreen').on('click', 'a.psgallery_fullscreen', function(event){
            event.stopPropagation();
            event.preventDefault();
            gallery.fullscreen();
        });
        // Previous icon
        this.wrapper.off('click', 'a.psgallery_previous').on('click', 'a.psgallery_previous', function(event){
            event.stopPropagation();
            event.preventDefault();
            gallery.previous();
            gallery.wrapper.focus();
        });
        // Next icon
        this.wrapper.off('click', 'a.psgallery_next').on('click', 'a.psgallery_next', function(event){
            event.stopPropagation();
            event.preventDefault();
            gallery.next();
            gallery.wrapper.focus();
        });
        this.wrapper.off('keypress').on('keypress', function(event){
            switch (event.keyCode){
                case 8:
                    // Backspace
                    gallery.previous();
                    break;
                case 37:
                    // Left
                    gallery.previous();
                    break;
                case 39:
                    // Right
                    gallery.next();
                    break;
                case 27:
                    // Esc
                    gallery.close();
                    break;
                case 0:
                    switch (event.which){
                        case 102:
                            // "f"-key
                            gallery.fullscreen();
                            break;
                        case 32:
                            gallery.next();
                            break;
                        default:
                            break;
                    };
                    break;
                default:
                    break;
            };
        });
        // Click on thumbnails on filmstrip
        this.wrapper.off('click', 'ul.psgallery_filmstrip li').on('click', 'ul.psgallery_filmstrip li', function(event){
            var index = $(this).attr('data-psgstripindex') | 0;
            gallery.showImage(index);
        });
        // Scroll the filmstrip, when mouse is over
        this.wrapper.off('mouseenter', 'ul.psgallery_filmstrip li').on('mouseenter', 'ul.psgallery_filmstrip li', function(event){
            var $li = $(this);
            var $parent = $li.offsetParent();
            var fromright = $parent.width() - ($li.offset().left - $parent.offset().left + $li.width());
            var fromleft = $li.offset().left - $parent.offset().left;
            if (fromright < 150){
                $parent.animate({scrollLeft: '+='+($li.width()+20)}, 'slow');
            };
            if (fromleft < 150){
                $parent.animate({scrollLeft: '-='+($li.width()+20)}, 'slow');
            };
        });
    };
    
    /**
     * Chage to the show mode. Show the image with given index.
     */
    Psgallery.prototype.show = function(index){
        this.index = index;
        if (this.settings.filmstrip) {
            this.filmstrip.children('[data-psgstripindex="'+this.index+'"]').addClass('psg_currentimage');
        };
        var imghtml = '<img class="psgimg" src="" alt="" title="" />';
        this.previousImage = $(imghtml);
        this.currentImage = $(imghtml);
        this.nextImage = $(imghtml);
        this.iwprevious.html(this.previousImage);
        this.iwcurrent.html(this.currentImage);
        this.iwnext.html(this.nextImage);
        this.wrapper.addClass('psg-visible').focus();
        this.showImage(this.index);
    }
    
    /**
     * Show the image with given index
     */
    Psgallery.prototype.showImage = function(index){
        if (typeof(index) === 'number'){
            this.oldindex = this.index;
            this.index = index;
        };
        var gallery = this;
        // If no circular viewing, hide previous button from first and next button from last image.
        if (!this.settings.circular) {
            this.tools.removeClass('psg_lastimage').removeClass('psg_firstimage');
            if (this.index === 0){
                this.tools.addClass('psg_firstimage');
            };
            if (this.index === this.items.length -1){
                this.tools.addClass('psg_lastimage');
            };
        };
        var imagename = this.items[this.index].href.split('/').pop() || '';
        var imagedata = this.items[this.index];
        
        var tmpwrapper;
        if ((!(this.index === this.items.length - 1 && this.oldindex === 0) && this.index > this.oldindex) || (this.index === 0 && this.oldindex === this.items.length - 1)) {
            this.iwnext.children('img')
                .attr('src', imagedata.href)
                .attr('alt', imagename)
                .attr('title', imagedata.caption);
            tmpwrapper = this.iwcurrent;
            this.iwcurrent = this.iwnext;
            this.iwnext = this.iwprevious;
            this.iwprevious = tmpwrapper;
            this.iwprevious.addClass('psg-hidden');
        } else if (this.index < this.oldindex || (this.index === this.items.length - 1 && this.oldindex === 0)) {
            this.iwprevious.children('img')
                .attr('src', imagedata.href)
                .attr('alt', imagename)
                .attr('title', imagedata.caption);
            tmpwrapper = this.iwcurrent;
            this.iwcurrent = this.iwprevious;
            this.iwprevious = this.iwnext;
            this.iwnext = tmpwrapper;
            this.iwnext.addClass('psg-hidden');
        } else {
            this.iwcurrent.children('img')
                .attr('src', imagedata.href)
                .attr('alt', imagename)
                .attr('title', imagedata.caption);
        };
        this.iwcurrent.removeClass('psg-hidden');
        this.iwcurrent.removeClass('psg-previous psg-next').addClass('psg-current');
        this.iwnext.removeClass('psg-previous psg-current').addClass('psg-next');
        this.iwprevious.removeClass('psg-current psg-next').addClass('psg-previous');
        
        this.caption.html(this.items[this.index].caption);
        this.kofn.html((this.index+1) + '/' + this.items.length);
        if (this.filmstrip){
            this.filmstrip.find('.psg_currentimage').removeClass('psg_currentimage');
            this.filmstrip.find('[data-psgstripindex="'+this.index+'"]').addClass('psg_currentimage');
        };
    };
    
    /**
     * Close the show mode
     */
    Psgallery.prototype.close = function(){
        this.wrapper.removeClass('psg-visible');
    };
    
    /**
     * Change to the fullscreen mode
     */
    Psgallery.prototype.fullscreen = function(){
        this.wrapper.toggleClass('psg_fullscreen');
    };
    
    /**
     * Show the next image
     */
    Psgallery.prototype.next = function(){
        this.oldindex = this.index;
        this.index = (this.index + 1) % this.items.length;
        this.showImage();
    };

    /**
     * Show the previous image
     */
    Psgallery.prototype.previous = function(){
        this.oldindex = this.index;
        this.index = (this.index - 1 + this.items.length) % this.items.length;
        this.showImage();
    };
    
    Psgallery.templates = {
        content: [
            '<div class="psgallery_imagewrapper psg-previous"></div>',
            '<div class="psgallery_imagewrapper psg-current"></div>',
            '<div class="psgallery_imagewrapper psg-next"></div>',
            '<div class="psgallery_captionwrapper">',
            '    <span class="psgallery_kofn"></span>',
            '    <div class="psgallery_caption"></div>',
            '</div>',
            '<div class="psgallery_toolwrapper"></div>'
        ].join('\n')
    };
    
    Psgallery.icons = {
        fullscreen_yes: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 30 30" class="pssicon pssicon-fullscreen"><path style="stroke: none;" fill="black" d="M1 1 l9 0 l-3 3 l4 5 l-2 2 l-5 -4 l-3 3z M1 29 l0 -9 l3 3 l5 -4 l2 2 l-4 5 l3 3z M29 1 l0 9 l-3 -3 l-5 4 l-2 -2 l4 -5 l-3 -3z M29 29 l-9 0 l3 -3 l-4 -5 l2 -2 l5 4 l3 -3z"></path></svg>',
        fullscreen_no: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 30 30" class="pssicon pssicon-fullscreenoff"><path style="stroke: none;" fill="black" d="M18 18 l9 0 l-3 3 l4 5 l-2 2 l-5 -4 l-3 3z M18 12 l0 -9 l3 3 l5 -4 l2 2 l-4 5 l3 3z M12 18 l0 9 l-3 -3 l-5 4 l-2 -2 l4 -5 l-3 -3z M12 12 l-9 0 l3 -3 l-4 -5 l2 -2 l5 4 l3 -3z"></path></svg>',
        close: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 30 30" class="pssicon pssicon-galleryclose"><path style="stroke: none;" fill="black" d="M15 1 a14 14 0 0 0 0 28 a14 14 0 0 0 0 -28z m0 1 a13 13 0 0 1 0 26 a13 13 0 0 1 0 -26z M7 11 a2 2 0 0 1 4 -4 l4 4 l4 -4 a2 2 0 0 1 4 4 l-4 4 l4 4 a2 2 0 0 1 -4 4 l-4 -4 l-4 4 a2 2 0 0 1 -4 -4 l4 -4z"></path></svg>',
        previous: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 30 30" class="pssicon pssicon-galleryprevious"><path style="stroke: none;" fill="black" d="M15 1 a14 14 0 0 0 0 28 a14 14 0 0 0 0 -28z m0 1 a13 13 0 0 1 0 26 a13 13 0 0 1 0 -26z m5 3 l-2 10 l2 10 l-13 -10z"></path></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 30 30" class="pssicon pssicon-gallerynext"><path style="stroke: none;" fill="black" d="M15 1 a14 14 0 0 0 0 28 a14 14 0 0 0 0 -28z m0 1 a13 13 0 0 1 0 26 a13 13 0 0 1 0 -26z m-5 3 l13 10 l-13 10 l2 -10z"></path></svg>'
    }

    Psgallery.images = {
        film: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAACCCAYAAABGtuhTAAAABHNCSVQICAgI',
            'fAhkiAAAAAlwSFlzAAAN0gAADdIBb5L+jgAAABl0RVh0U29mdHdhcmUAd3d3',
            'Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVGiB7do9SkNREMXx/9E0IqTRVEJq',
            'S7vsIV0gC4i4C7sUtu7C0hUIFtmEuIYQEEkRCGFsUoR450rCCyRypryH+b2P',
            '++6rRsAnDdZZk5jBZqr1R74EFltrF7W+GvgCPEfEfHNRUht4BAalJpF/h72I',
            '+Co2SV3grZSl7zDD1pVmx7/LBg8ISrqs9KVZ7Q4fJJ0XLtQC7tMbof7HngKz',
            'rbUOcLUvuHOd8C4bNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjw/4K1',
            'OYdv4J3fgxO3wN2u4AroR8S0FEp6AoalLHvkjwxb1yQLMnBVwar58e+ywcOB',
            'N6UZh43qZkF2Uq6BsaRXykdvlIGeczC4R/0A4KktmD84w2YAAAAASUVORK5C',
            'YII='
        ].join('')
    };
    
    Psgallery.css = [
        // Thumbnail gallery
        'ul.psgallery {list-style: none; margin: 0.5em; padding: 0; text-align: center; font-family: helvetica,Arial,sans-serif;}',
        'ul.psgallery li {margin: 0em; padding: 0; display: inline-block; vertical-align: top;}',
        'ul.psgallery img.psg_thumbnail {width: auto; height: auto;}',

        // Image show wrapper
        '.psgimage_wrapper {position: fixed; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0,0,0,0.5); text-align: center; z-index: 10; font-family: helvetica,Arial,sans-serif; display: none;}',
        '.psgimage_wrapper.psg-visible {display: block;}',

        // Imagewrapper
        '.psgallery_imagewrapper {position: absolute; top: 0.5em; left: 0.5em; right: 0.5em; bottom: 6em;}',
        '.psgallery_imagewrapper img.psgimg {max-height: 100%; max-width: 100%; height: auto; width: auto;}',
        '.psgallery_imagewrapper.psgimg-hidden img.psgimg {display: none;}',
        
        // Effects (fade)
        '.psgimage_wrapper[data-psgeffect="fade"] .psgallery_imagewrapper.psg-previous img.psgimg, .psgimage_wrapper[data-psgeffect="fade"] .psgallery_imagewrapper.psg-next img.psgimg {display: inline-block;}',
        '.psgimage_wrapper[data-psgeffect="fade"] .psgallery_imagewrapper {opacity: 1; transition: opacity 0.5s; z-index: 2;}',
        '.psgimage_wrapper[data-psgeffect="fade"] .psgallery_imagewrapper.psg-previous, .psgimage_wrapper[data-psgeffect="fade"] .psgallery_imagewrapper.psg-next {opacity: 0; transition: opacity 0.5s; z-index: 1;}',

        // Effects (resize)
        '.psgimage_wrapper[data-psgeffect="resize"] .psgallery_imagewrapper.psg-previous img.psgimg, .psgimage_wrapper[data-psgeffect="resize"] .psgallery_imagewrapper.psg-next img.psgimg {display: inline-block;}',
        '.psgimage_wrapper[data-psgeffect="resize"] .psgallery_imagewrapper {top: 0; bottom: 0; transition: top 0.5s 0.5s, bottom 0.5s 0.5s; z-index: 2;}',
        '.psgimage_wrapper[data-psgeffect="resize"] .psgallery_imagewrapper.psg-previous, .psgimage_wrapper[data-psgeffect="resize"] .psgallery_imagewrapper.psg-next {top: 50%; bottom: 50%; transition: top 0.5s, bottom 0.5s; z-index: 1;}',

        // Effects (flip)
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper.psgimg-hidden img.psgimg {display: inline-block;}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper {overflow: visible; perspective: 1000px;}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper img {transition: 1s; transform-style: preserve-3d; position: relative; backface-visibility: hidden;}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper.psg-previous img {transform: rotateY(-180deg);}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper.psg-current img {transform: rotateY(0deg);}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper.psg-next img {transform: rotateY(180deg);}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper.psg-previous.psg-hidden img {visibility: hidden; transform: rotateY(-180deg);}',
        '.psgimage_wrapper[data-psgeffect="flip"] .psgallery_imagewrapper.psg-next.psg-hidden img {visibility: hidden; transform: rotateY(180deg);}',

        // Caption
        '.psgallery_captionwrapper {margin: 0; padding: 0 0.5em; position: absolute; bottom: 0.5em; left: 0; right: 0; background-color: black; box-shadow: 0 -10px 5px black,0 10px 5px black;}',
        '.psgallery_caption {margin: 0; padding: 0.5em 0.5em 0.5em 4em; border: 1px solid black; border-radius: 0 0.5em 0.5em 0.5em; background-color: #f0f0f0; box-shadow: inset 5px 5px 10px rgba(0,0,0,0.3); height: 3em; overflow: auto;}',
        '.psgallery_kofn {background-color: black; color: white; font-weight: bold; display: inline-block; position: absolute; top: 0; left: 0.5em; border-bottom: 1px solid black; border-right: 1px solid black; box-shadow: 5px 5px 5px rgba(0,0,0,0.3); padding: 0.3em; border-radius: 0 0 0.5em 0;}',

        // Navigation
        '.psgallery_toolwrapper a svg {width: 40px; height: 40px;}',
        'a.psgallery_previous, a.psgallery_next {display: block; margin: 0; padding: 0; border-radius: 50%; box-shadow: 5px 5px 5px rgba(0,0,0,0.5); position: absolute; top: 46%; background-color: white; color: black!important; opacity: 0.2; width: 40px; height: 40px;}',
        'a.psgallery_previous {left: -20px;}',
        'a.psgallery_next {right: -20px;}',
        '.psg_firstimage a.psgallery_previous {display: none;}',
        '.psg_lastimage a.psgallery_next {display: none;}',
        'a.psgallery_close {display: block; margin: 0; height: 40px; width: 40px; padding: 0; border-radius: 50%; position: absolute; top: -10px; right: -10px; background-color: white;}',
        'a.psgallery_fullscreen span.psg-fsoff {display: none;}',
        'a.psgallery_fullscreen svg {height: 30px; width: 30px;}',
        'a.psgallery_fullscreen {display: inline-block; margin: 0; height: 30px; width: 30px; padding: 0; background-color: white; border-radius: 4px; text-decoration: none; position: absolute; top: 0; left: 0;}',
        'a.psgallery_next:hover, a.psgallery_previous:hover, a.psgallery_close:hover {opacity: 1;}',

        // Image container
        '.psgimage_container {position: absolute; top: 3em; bottom: 3em; left: 10em; right: 10em; margin: 0; display: inline-block; padding: 1em 1em 5em 1em; background-color: white; border: 3px solid black; border-radius: 0.5em; box-shadow: 8px 8px 8px rgba(0,0,0,0.5);}',
        '.psgimage_container {background: rgb(76,76,76); /* Old browsers */\n'
            +'background: -moz-linear-gradient(top,  rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%); /* FF3.6+ */\n'
            +'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(76,76,76,1)), color-stop(12%,rgba(89,89,89,1)), color-stop(25%,rgba(102,102,102,1)), color-stop(39%,rgba(71,71,71,1)), color-stop(50%,rgba(44,44,44,1)), color-stop(51%,rgba(0,0,0,1)), color-stop(60%,rgba(17,17,17,1)), color-stop(76%,rgba(43,43,43,1)), color-stop(91%,rgba(28,28,28,1)), color-stop(100%,rgba(19,19,19,1))); /* Chrome,Safari4+ */\n'
            +'background: -webkit-linear-gradient(top,  rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%); /* Chrome10+,Safari5.1+ */\n'
            +'background: -o-linear-gradient(top,  rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%); /* Opera 11.10+ */\n'
            +'background: -ms-linear-gradient(top,  rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%); /* IE10+ */\n'
            +'background: linear-gradient(to bottom,  rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%); /* W3C */\n'
            +'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#4c4c4c", endColorstr="#131313",GradientType=0 ); /* IE6-9 */}',

        // Fullscreen
        '.psgimage_wrapper.psg_fullscreen .psgimage_container {top: 0; bottom: 0; left: 0; right: 0; border-radius: 0; box-shadow: none;}',
        '.psgimage_wrapper.psg_fullscreen .psgallery_captionwrapper {opacity: 0; transition: opacity 0.5s;}',
        '.psgimage_wrapper.psg_fullscreen .psgallery_captionwrapper:hover {opacity: 1; background-color: rgba(0,0,0,0.5); box-shadow: 0 -10px 5px rgba(0,0,0,0.5), 0 10px 5px rgba(0,0,0,0.5);}',
        '.psgimage_wrapper.psg_fullscreen .psgallery_captionwrapper:hover .psgallery_caption {opacity: 1; background-color: rgba(255,255,255,0.7); text-shadow: 0 0 5px white;}',
        '.psgimage_wrapper.psg_fullscreen .psgallery_imagewrapper {top: 0; bottom: 0; left: 0; right: 0;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_next {right: 0; font-size: 100%;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_previous {left: 0; font-size: 100%;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_close {right: 0; top: 0; font-size: 80%; opacity: 0.3;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_close:hover {opacity: 1;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_fullscreen {left: 0; top: 0; background-color: white; opacity: 0.3;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_fullscreen span.psg-fsoff {display: block;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_fullscreen span.psg-fson {display: none;}',
        '.psgimage_wrapper.psg_fullscreen a.psgallery_fullscreen:hover {opacity: 1;}',

        // Filmstrip
        '.psgallery_filmstrip {position: absolute; top: 5px; left: 0; right: 0; height: 130px; background: transparent url('+Psgallery.images.film+') left top repeat-x; list-style: none; margin: 0; padding: 0; overflow: hidden; white-space: nowrap; opacity: 0; transition: opacity 0.5s;}',
        '.psgallery_filmstrip:hover {opacity: 1;}',
        '.psgallery_filmstrip li {display: inline-block; margin: 25px 5px; padding: 2px; background-color: white; border-radius: 2px; height: 76px; cursor: pointer;}',
        '.psgallery_filmstrip li.psg_currentimage {background-color: gold; box-shadow: 0 0 5px gold;}',
        '.psgallery_filmstrip li:hover {background-color: red; box-shadow: 0 0 5px red;}',
        '.psgallery_filmstrip li a {display: inline-block; margin: 0; padding: 0; border: none; text-decoration: none; color: black;}',
        '.psgallery_filmstrip li img {display: inline-block; margin: 0; padding: 0; border: none; height: 76px; width: auto; color: black;}',
        
        // Mobile rules
        '@media screen and (max-device-width: 640px) {.psgimage_wrapper .psgimage_container {top: 0; bottom: 0; left: 0; right: 0; border-radius: 0; box-shadow: none;}}'
    ].join('\n');

})(jQuery);
