export function scrollToBottom() {
    var divtopfive = document.getElementById("topfive");
    divtopfive.scrollTop = divtopfive.scrollHeight;
}
var autoScroll = true;
export function somedo() {
  var scrollTop = this.scrollTop;
    var scrollHeight = this.scrollHeight;
    var height = this.clientHeight;
 
    if (autoScroll) {
        if (scrollTop &lt; scrollHeight - height) {
            autoScroll = false;
        }
    } else {
        if (scrollTop + height &gt;= scrollHeight) {
            autoScroll = true;
        }
    }
}
