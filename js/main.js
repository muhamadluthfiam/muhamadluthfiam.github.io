const judul = document.querySelector('h1');
const tombol = document.getElementById('tombol');
tombol.onclick = function () {
    document.body.style.backgroundColor = "black";
    document.body.classList.toggle('white');
    judul.style.color = 'white';

}

const tombolacak = document.createElement('button');
const texttombolacak = document.createTextNode('shuffle');
tombolacak.appendChild(texttombolacak);
tombolacak.setAttribute('type', 'button');
tombol.after(tombolacak);

tombolacak.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'; 
});

const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');

merah.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

hijau.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

biru.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});