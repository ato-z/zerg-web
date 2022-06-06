/* 手机稿字体重置 */
;(function (window, document) {
    document.onreadystatechange = function (e) {
        if (document.body) {
            document.onreadystatechange = null
            resize()
        }
    }
    window.onresize = resize
    function resize () {
        var html = document.documentElement
        var rect = html.getBoundingClientRect()
        var deviceWidth = rect.width
        var targetWidth = 750
        var fontSize = Math.min(deviceWidth / targetWidth * 100, 100)
        html.style.fontSize = fontSize  + 'px'
    }
})(window, document)