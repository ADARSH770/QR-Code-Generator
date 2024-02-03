
function res(){
    let con2 = document.getElementById('images')
    while(con2.firstChild){
        con2.removeChild(con2.lastChild)
    }
    
    let val = document.getElementById('input').value
    let api =`http://api.qrserver.com/v1/create-qr-code/?data=${val}&size=100x100`;
    let ele = document.createElement("img")
    ele.style.marginLeft="110px"
    ele.style.width="100px"
    ele.style.height="100px"
    ele.style.border="0.5px outset gray"
    ele.style.padding="6px"
    ele.style.borderRadius="3px"
    ele.setAttribute("src",api)
    let con = document.getElementById('images')
    con.appendChild(ele)
}

