/* WebUploader 0.1.6 */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=a(window),c=function(b,d){d=a.isPlainObject(d)?d:{},this.$image=a(b),this.defaults=a.extend({},c.defaults,this.$image.data(),d),this.init()};c.prototype={construstor:c,init:function(){this.setAspectRatio(this.defaults.aspectRatio),this.render()},render:function(b){var d,e,f=this,g=this.$image;this.active||(this.$clone&&this.$clone.remove(),e=g.attr("src"),d=a('<img src="'+e+'">'),d.on("load",function(){var a;d.off("load"),this.naturalWidth&&this.naturalHeight?a={naturalHeight:this.naturalHeight,naturalWidth:this.naturalWidth}:(c.fn.size(d,{height:"auto",width:"auto"}),a=c.fn.size(d),a={naturalHeight:a.height,naturalWidth:a.width}),c.fn.size(d,{height:"100%",width:"100%"}),a.aspectRatio=a.naturalWidth/a.naturalHeight,f.src=e,f.image=a,f.active=!0,f.createCropper()}),a.isFunction(b)&&g.on("ready.cropper",b),this.$clone=d,g.after(d))},unrender:function(){this.active&&(this.active=!1,this.removeCropper(),this.src="",this.image=null,this.cropper=null,this.dragger=null)},rerender:function(){this.unrender(),this.render()},resize:function(){clearTimeout(this.resizing),this.resizing=setTimeout(a.proxy(this.rerender,this),200)},createCropper:function(){this.$cropper=a(c.template),this.$dragger=this.$cropper.find(".cropper-dragger"),c.fn.toggle(this.$image),this.$image.after(this.$cropper),this.$cropper.prepend(this.$clone),this.defaults.modal||c.fn.toggle(this.$cropper.find(".cropper-modal")),this.setPreview(),this.addListener()},removeCropper:function(){this.removeListener(),this.$preview=null,this.$clone.remove(),this.$clone=null,this.$dragger=null,this.$cropper.remove(),this.$cropper=null,c.fn.toggle(this.$image)},addListener:function(){this.$cropper.bind("mousedown touchstart",a.proxy(this.dragstart,this)),this.$cropper.bind("mousemove touchmove",a.proxy(this.dragmove,this)),this.$cropper.bind("mouseup mouseleave touchend touchleave",a.proxy(this.dragend,this)),b.on("resize",a.proxy(this.resize,this))},removeListener:function(){this.$cropper.unbind("mousedown touchstart",this.dragstart),this.$cropper.unbind("mousemove touchmove",this.dragmove),this.$cropper.unbind("mouseup mouseleave touchend touchleave",this.dragend),b.off("resize",this.resize)},setPreview:function(){var a=this.defaults.preview;this.$preview=this.$cropper.find(".cropper-preview"),"string"==typeof a&&a.length>0&&(this.$preview=this.$preview.add(a)),this.$preview.html('<img src="'+this.src+'">'),this.setCropper()},setCropper:function(){var b,d=this.$image.parent(),e=c.fn.size(d),f=this.image;f.naturalWidth*e.height/f.naturalHeight-e.width>=0?(b={height:e.width/f.aspectRatio,width:e.width,left:0},b.top=(e.height-b.height)/2):(b={height:e.height,width:e.height*f.aspectRatio,top:0},b.left=(e.width-b.width)/2),a.each(b,function(a,c){b[a]=Math.round(c)}),f.height=b.height,f.width=b.width,f.ratio=f.width/f.naturalWidth,c.fn.position(d),this.$cropper.css({height:b.height,left:b.left,top:b.top,width:b.width}),this.cropper=b,this.setDragger()},setDragger:function(){var a,b=this.cropper,d=this.defaults.aspectRatio||this.image.aspectRatio;a=b.height*d-b.width>=0?{height:b.width/d,width:b.width,left:0,top:(b.height-b.width/d)/2,maxWidth:b.width,maxHeight:b.width/d}:{height:b.height,width:b.height*d,left:(b.width-b.height*d)/2,top:0,maxHeight:b.height,maxWidth:b.height*d},a.height*=.8,a.width*=.8,a.left=(b.width-a.width)/2,a.top=(b.height-a.height)/2,this.dragger=c.fn.round(a),this.setData(this.defaults.data),this.$image.trigger("ready.cropper").off("ready.cropper")},resetDragger:function(){var a=this.dragger,b=this.cropper;a.width=a.width>a.maxWidth?a.maxWidth:Math.abs(a.width),a.height=a.height>a.maxHeight?a.maxHeight:Math.abs(a.height),a.maxLeft=b.width-a.width,a.maxTop=b.height-a.height,a.left=a.left<0?0:a.left>a.maxLeft?a.maxLeft:a.left,a.top=a.top<0?0:a.top>a.maxTop?a.maxTop:a.top,a=c.fn.round(a),this.$dragger.css({height:a.height,left:a.left,top:a.top,width:a.width}),this.dragger=a,this.preview(),this.output()},dragging:function(){var a=this.direction,b=this.dragger,c=this.defaults.aspectRatio,d={x:this.endX-this.startX,y:this.endY-this.startY};switch(c&&(d.X=d.y*c,d.Y=d.x/c),a){case"e":b.width+=d.x,c&&(b.height=b.width/c,b.top-=d.Y/2),b.width<0&&(this.direction="w",b.width=0);break;case"n":b.height-=d.y,b.top+=d.y,c&&(b.width=b.height*c,b.left+=d.X/2),b.height<0&&(this.direction="s",b.height=0);break;case"w":b.width-=d.x,b.left+=d.x,c&&(b.height=b.width/c,b.top+=d.Y/2),b.width<0&&(this.direction="e",b.width=0);break;case"s":b.height+=d.y,c&&(b.width=b.height*c,b.left-=d.X/2),b.height<0&&(this.direction="n",b.height=0);break;case"ne":b.height-=d.y,b.top+=d.y,c?b.width=b.height*c:b.width+=d.x,b.height<0&&(this.direction="sw",b.height=0,b.width=0);break;case"nw":b.height-=d.y,b.top+=d.y,c?(b.width=b.height*c,b.left+=d.X):(b.width-=d.x,b.left+=d.x),b.height<0&&(this.direction="se",b.height=0,b.width=0);break;case"sw":b.width-=d.x,b.left+=d.x,c?b.height=b.width/c:b.height+=d.y,b.width<0&&(this.direction="ne",b.height=0,b.width=0);break;case"se":b.width+=d.x,c?b.height=b.width/c:b.height+=d.y,b.width<0&&(this.direction="nw",b.height=0,b.width=0);break;default:b.left+=d.x,b.top+=d.y}this.resetDragger(),this.startX=this.endX,this.startY=this.endY},output:function(){this.defaults.done(this.getData())},preview:function(){var b=this,d=b.cropper,e=b.dragger;this.$preview.each(function(){var b=a(this),f=b.outerWidth()/e.width,g={height:d.height,marginLeft:-e.left,marginTop:-e.top,width:d.width};b.css({overflow:"hidden"}),b.find("img").css(c.fn.round(g,function(a){return a*f}))})},enable:function(a){this.render(a)},disable:function(){this.unrender()},setAspectRatio:function(b){("auto"===b||a.isNumeric(b)&&b>0)&&(this.defaults.aspectRatio="auto"===b?0/0:b,this.active&&this.setDragger())},setData:function(b){var d=this.cropper,e=this.dragger,f=this.defaults.aspectRatio,g=function(a){return"number"==typeof a};this.active&&(a.isPlainObject(b)&&!a.isEmptyObject(b)&&(b=c.fn.transformData(b,this.image.ratio),g(b.x1)&&b.x1<=d.width&&(e.left=b.x1),g(b.y1)&&b.y1<=d.height&&(e.top=b.y1),f?g(b.width)&&b.width<=d.width?(e.width=b.width,e.height=e.width/f):g(b.height)&&b.height<=d.height?(e.height=b.height,e.width=e.height*f):g(b.x2)&&b.x2<=d.width?(e.width=b.x2-e.left,e.height=e.width/f):g(b.y2)&&b.y2<=d.height&&(e.height=b.y2-e.top,e.width=e.height*f):(g(b.width)&&b.width<=d.width?e.width=b.width:g(b.x2)&&b.x2<=d.width&&(e.width=b.x2-e.left),g(b.height)&&b.height<=d.height?e.height=b.height:g(b.y2)&&b.height<=d.height&&(e.height=b.y2-e.top))),this.dragger=e,this.resetDragger())},getData:function(){var a=this.dragger,b={};return this.active&&(b={x1:a.left,y1:a.top,width:a.width,height:a.height,x2:a.left+a.width,y2:a.top+a.height},b=c.fn.transformData(b,1/this.image.ratio)),b},setImgSrc:function(a){"string"==typeof a&&a.length>0&&a!==this.src&&(this.$image.attr("src",a),this.rerender())},getImgInfo:function(){return this.image||{}},dragstart:function(b){var d,e,f=c.fn.getOriginalEvent(b).touches,g=b;f&&1===f.length&&(g=f[0],this.touchId=g.identifier,d=!0),e=a(g.target).data().direction,c.fn.isDirection(e)&&(this.startX=g.pageX,this.startY=g.pageY,this.direction=e,this.$image.trigger("dragstart"),d&&b.preventDefault())},dragmove:function(a){var b,d=c.fn.getOriginalEvent(a).changedTouches,e=a;d&&1===d.length&&(e=d[0],b=!0,e.identifier!==this.touchId)||this.direction&&(this.$image.trigger("dragmove"),b&&a.preventDefault(),this.endX=e.pageX,this.endY=e.pageY,this.dragging())},dragend:function(a){var b,d=c.fn.getOriginalEvent(a).changedTouches,e=a;d&&1===d.length&&(e=d[0],b=!0,e.identifier!==this.touchId)||this.direction&&(this.direction="",this.$image.trigger("dragend"),b&&a.preventDefault())}},c.fn={toggle:function(a){a.toggleClass("cropper-hidden")},position:function(a,b){var c=a.css("position");"static"===c&&a.css("position",b||"relative")},size:function(b,c){return a.isPlainObject(c)?(b.css(c),void 0):{height:b.height(),width:b.width()}},round:function(b,c){var d,e;for(e in b)d=b[e],b.hasOwnProperty(e)&&"number"==typeof d&&(b[e]=Math.round(a.isFunction(c)?c(d):d));return b},transformData:function(b,c){var d=this,e={};return a.each(b,function(b,f){d.isDataOption(b)&&a.isNumeric(f)&&f>=0&&(e[b]=Math.round(f*c))}),e},getOriginalEvent:function(a){return a&&"undefined"!=typeof a.originalEvent&&(a=a.originalEvent),a},isDataOption:function(a){return/^(x1|y1|x2|y2|width|height)$/i.test(a)},isDirection:function(a){return/^(\*|e|n|w|s|ne|nw|sw|se)$/i.test(a)}},c.template=['<div class="cropper-container">','<div class="cropper-modal"></div>','<div class="cropper-dragger">','<span class="cropper-preview"></span>','<span class="cropper-dashed dashed-h"></span>','<span class="cropper-dashed dashed-v"></span>','<span class="cropper-face" data-direction="*"></span>','<span class="cropper-line line-e" data-direction="e"></span>','<span class="cropper-line line-n" data-direction="n"></span>','<span class="cropper-line line-w" data-direction="w"></span>','<span class="cropper-line line-s" data-direction="s"></span>','<span class="cropper-point point-e" data-direction="e"></span>','<span class="cropper-point point-n" data-direction="n"></span>','<span class="cropper-point point-w" data-direction="w"></span>','<span class="cropper-point point-s" data-direction="s"></span>','<span class="cropper-point point-ne" data-direction="ne"></span>','<span class="cropper-point point-nw" data-direction="nw"></span>','<span class="cropper-point point-sw" data-direction="sw"></span>','<span class="cropper-point point-se" data-direction="se"></span>',"</div>","</div>"].join(""),c.defaults={aspectRatio:"auto",data:{},done:function(){},modal:!0,preview:""},c.setDefaults=function(b){a.extend(c.defaults,b)},a.fn.cropper=function(b,d){var e=this;return this.each(function(){var f=a(this),g=f.data("cropper");g||(g=new c(this,b),f.data("cropper",g)),"string"==typeof b&&a.isFunction(g[b])&&(e=g[b](d))}),"undefined"!=typeof e?e:this},a.fn.cropper.Constructor=c,a.fn.cropper.setDefaults=c.setDefaults,a(function(){a("img[cropper]").cropper()})});

(function( factory ) {
    if ( !window.jQuery ) {
        alert('jQuery is required.')
    }

    jQuery(function() {
        factory.call( null, jQuery );
    });
})(function( $ ) {
// -----------------------------------------------------
// ------------ START ----------------------------------
// -----------------------------------------------------

// ---------------------------------
// ---------  Uploader -------------
// ---------------------------------
var Uploader = (function() {

    // -------setting-------
    // 如果使用原始大小，超大的图片可能会出现 Croper UI 卡顿，所以这里建议先缩小后再crop.
    var FRAME_WIDTH = 1600;


    var _ = WebUploader;
    var Uploader = _.Uploader;
    var uploaderContainer = $('.uploader-container');
    var uploader, file;

    if ( !Uploader.support() ) {
        alert( 'Web Uploader 不支持您的浏览器！');
        throw new Error( 'WebUploader does not support the browser you are using.' );
    }

    // hook,
    // 在文件开始上传前进行裁剪。
    Uploader.register({
        'before-send-file': 'cropImage'
    }, {

        cropImage: function( file ) {

            var data = file._cropData,
                image, deferred;

            file = this.request( 'get-file', file );
            deferred = _.Deferred();

            image = new _.Lib.Image();

            deferred.always(function() {
                image.destroy();
                image = null;
            });
            image.once( 'error', deferred.reject );
            image.once( 'load', function() {
                image.crop( data.x, data.y, data.width, data.height, data.scale );
            });

            image.once( 'complete', function() {
                var blob, size;

                // 移动端 UC / qq 浏览器的无图模式下
                // ctx.getImageData 处理大图的时候会报 Exception
                // INDEX_SIZE_ERR: DOM Exception 1
                try {
                    blob = image.getAsBlob();
                    size = file.size;
                    file.source = blob;
                    file.size = blob.size;

                    file.trigger( 'resize', blob.size, size );

                    deferred.resolve();
                } catch ( e ) {
                    console.log( e );
                    // 出错了直接继续，让其上传原始图片
                    deferred.resolve();
                }
            });

            file._info && image.info( file._info );
            file._meta && image.meta( file._meta );
            image.loadFromBlob( file.source );
            return deferred.promise();
        }
    });

    return {
        init: function( selectCb ) {
            uploader = new Uploader({
                pick: {
                    id: '#filePicker',
                    multiple: false
                },

                // 设置用什么方式去生成缩略图。
                thumb: {
                    quality: 70,

                    // 不允许放大
                    allowMagnify: false,

                    // 是否采用裁剪模式。如果采用这样可以避免空白内容。
                    crop: false
                },
                accept: {
                    title: 'image',
                    extensions: 'gif,jpg,jpeg,png',
                    mimeTypes: 'image/*'
                },
                // 禁掉分块传输，默认是开起的。
                chunked: false,

                // 禁掉上传前压缩功能，因为会手动裁剪。
                compress: false,

                fileSingleSizeLimit: 5 * 1024 * 1024,

                server: '../../server/fileupload.php',
                swf: '../../dist/Uploader.swf',
                fileNumLimit: 1
            });

            uploader.on('fileQueued', function( _file ) {
                file = _file;

                uploader.makeThumb( file, function( error, src ) {

                    if ( error ) {
                        alert('不能预览');
                        return;
                    }

                    selectCb( src );

                }, FRAME_WIDTH, 1 );   // 注意这里的 height 值是 1，被当成了 100% 使用。

                $(picker).on("click",function(){
                    uploader.removeFile(file)
                })
            });
            uploader.on("error",function(type){
                switch(type)
                {
                    case "Q_TYPE_DENIED":
                        alert("文件类型错误！")
                        break;
                    case "F_EXCEED_SIZE":
                        alert("文件超出限定大小！")
                        break;
                }
            });
//            uploader.on('beforeFileQueued', function(file) {
//                // 返回false， 文件不会被加入队列，返回true则会加入，可在此最文件做过滤
//                return false;
//            });
//            uploader.addButton({
//                id: '#btnContainer',
//                innerHTML: '重新选择'
//            })
        },

        crop: function( data ) {

            var scale = Croper.getImageSize().width / file._info.width;
            data.scale = scale;

            file._cropData = {
                x: data.x1,
                y: data.y1,
                width: data.width,
                height: data.height,
                scale: data.scale
            };
        },

        upload: function() {

            uploader.upload();
        }
    }
})();

// ---------------------------------
// ---------  Crpper ---------------
// ---------------------------------
var Croper = (function() {
    var container = $('.cropper-wraper');
    var $image = container.find('.img-container img');
    var btn = $('.upload-btn');
    var isBase64Supported, callback;

    $image.cropper({
        aspectRatio: 1,
        preview: ".img-preview",
        done: function(data) {
            // console.log(data);
        }
    });

    function srcWrap( src, cb ) {

        // we need to check this at the first time.
        if (typeof isBase64Supported === 'undefined') {
            (function() {
                var data = new Image();
                var support = true;
                data.onload = data.onerror = function() {
                    if( this.width != 1 || this.height != 1 ) {
                        support = false;
                    }
                }
                data.src = src;
                isBase64Supported = support;
            })();
        }

        if ( isBase64Supported ) {
            cb( src );
        } else {
            // otherwise we need server support.
            // convert base64 to a file.
            $.ajax('../../server/preview.php', {
                method: 'POST',
                data: src,
                dataType:'json'
            }).done(function( response ) {
                if (response.result) {
                    cb( response.result );
                } else {
                    alert("预览出错");
                }
            });
        }
    }

    btn.on('click', function() {
        callback && callback($image.cropper("getData"));
        return false;
    });

    return {
        setSource: function( src ) {

            // 处理 base64 不支持的情况。
            // 一般出现在 ie6-ie8
            srcWrap( src, function( src ) {
                $image.cropper("setImgSrc", src);
            });

            container.removeClass('webuploader-element-invisible');

            return this;
        },

        getImageSize: function() {
            var img = $image.get(0);
            return {
                width: img.naturalWidth,
                height: img.naturalHeight
            }
        },

        setCallback: function( cb ) {
            callback = cb;
            return this;
        },

        disable: function() {
            $image.cropper("disable");
            return this;
        },

        enable: function() {
            $image.cropper("enable");
            return this;
        }
    }

})();


// ------------------------------
// -----------logic--------------
// ------------------------------
var container = $('.uploader-container');

Uploader.init(function( src ) {

    Croper.setSource( src );
//    console.log(123)
    // 隐藏选择按钮。
//    container.addClass('webuploader-element-invisible');

    // 当用户选择上传的时候，开始上传。
    Croper.setCallback(function( data ) {
        Uploader.crop(data);
        Uploader.upload();
    });
});



// -----------------------------------------------------
// ------------ END ------------------------------------
// -----------------------------------------------------
});