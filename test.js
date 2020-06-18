//////////////// For downloading image

// var image;
// // var button = document.querySelector("#capture");
// var downl = document.querySelector("#btn-download");

// function doCapture() {
//     // window.scrollTo(0, 0);

//     html2canvas(document.querySelector(".container")).then(function (canvas) {
//         image = canvas.toDataURL("", "image/jpeg", 0.9);
//         // console.log(image);
//         imgElem.setAttribute("src", image);

//         let link = document.createElement('a');
//         link.download = 'hello.png';

//         let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

//         // link.href = URL.createObjectURL(blob);
//         link.href = image

//         link.click();

//         URL.revokeObjectURL(link.href);


//         // document.write('<img src="'+image+'"/>');
//         // button.setAttribute("href", image);
//         // downl.href = image;
//         // downl.download = 'ScreenShot.png';
//     });
// }

// downl.onclick = function() {
//     doCapture();
// };
/////////////////////////////

// function fbs_click(TheImg) {
//     u=TheImg.src;
//     console.log(u);
//     // var image = new Image();
//     // image.src = 'data:image/png;base64,iVBORw0K...';
//     // document.body.appendChild(image);
//     // console.log(u)
//     t=TheImg.getAttribute('alt');
//     // console.log(t);
//     window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
// }




var image;
// var button = document.querySelector("#capture");
var downl = document.querySelector("#btn-download");
var url;

function fixBinary (bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }


function doCapture() {
    // window.scrollTo(0, 0);

    html2canvas(document.querySelector(".container")).then(function (canvas) {
        image = canvas.toDataURL("", "image/png", 0.9);
        // console.log(image);
        imgElem.setAttribute("src", image);

        // let link = document.createElement('a');
        // link.download = 'hello.png';
        
        // // var binary = fixBinary(atob(image));
        var blob = new Blob([image], {type: 'image/png'});
        url = URL.createObjectURL(blob);
        console.log(url);

        // let link = document.createElement('a');
        // link.download = 'hello.txt';

        // let blob = new Blob(['Hello, world!'], {type: 'text/plain'});
        // // console.log(blob);
        // link.href = URL.createObjectURL(blob);
        // console.log(link.href);
        // link.click();

        // URL.revokeObjectURL(link.href);




    });
}

downl.onclick = function() {
    doCapture();
};



function fbs_click(TheImg) {
    u=TheImg.src;
    console.log("url value is: ", url.slice(5, -1));
    um = url.slice(5, -1);
    // var image = new Image();
    // image.src = 'data:image/png;base64,iVBORw0K...';
    // document.body.appendChild(image);
    // console.log(u)
    t=TheImg.getAttribute('alt');
    console.log("T value is: ", t);
    // window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
    window.open('http://www.facebook.com/sharer.php?href='+encodeURIComponent(um)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
    
}









