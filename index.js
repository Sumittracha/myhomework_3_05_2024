function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง Gosoft เป็นบริษัท ด้าน ไอที";
        result.style.color = 'green';
 
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    checkTotal();
}

function checkAnswer2(answer) {
    const result2 = document.getElementById("result2")
    if (answer === 'all'){
        result2.textContent = "ถูกต้องนะค๊าฟฟฟฟ!!";
        result2.style.color = 'green';
        
    } else {
        result2.textContent = "เอ๊ะ ไม่น่าจะอยู่ในเครือนี้";
        result2.style.color = 'red';
    }
    checkTotal();
}

function checkTotal(){
    const check1 = document.getElementById('result');
    const check2 = document.getElementById("result2");
    if (check1.textContent == "ถูกต้อง Gosoft เป็นบริษัท ด้าน ไอที " && check2.textContent == "ถูกต้องนะค๊าฟฟฟฟ!!") {
        document.getElementById("sumTotal").textContent = "ตอบถูกทั้ง 2 ข้อ";
        document.getElementById("sumTotal").style.color = 'green';
        document.getElementById("sumTotal").style.fontWeight = "bold";
    } else if(check1.textContent == "ถูกต้อง Gosoft เป็นบริษัท ด้าน ไอที" || check2.textContent == "ถูกต้องนะค๊าฟฟฟฟ!!") {
        document.getElementById("sumTotal").textContent = "ตอบถูกทั้ง 1 ข้อ";
        document.getElementById("sumTotal").style.color = 'green';
        document.getElementById("sumTotal").style.fontWeight = "normal";
    } else {
        document.getElementById("sumTotal").textContent = "ลองใหม่นะ";
        document.getElementById("sumTotal").style.color = "red"
    }
}