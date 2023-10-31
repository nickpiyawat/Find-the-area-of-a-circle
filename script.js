let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const radius = parseFloat(document.getElementById('radius').value);
    const result = document.getElementById('output');
    let radius_status=false;

    if(radius === '' || isNaN(radius) || (radius <= 0)){
        document.getElementById('radius_error').innerHTML = 'กรุณากรอกตัวเลขให้ถูกต้อง';
    }else{
        document.getElementById('radius_error').innerHTML = '';
        radius_status=true;
    }
    if(radius_status){
        const area = (3.14*radius).toFixed(2);
        result.innerHTML = 'พื้นที่วงกลมคือ : ' + area;
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});