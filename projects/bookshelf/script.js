let rak1 = [];
let rak2 = [];

const form = document.querySelector('#kirim');
const belom = document.querySelector('#belom');
const sudah = document.querySelector('#sudah');

const rakBuku1 = JSON.parse(localStorage.getItem("Selesai dibaca"));
const rakBuku2 = JSON.parse(localStorage.getItem("Belum selesai dibaca"));


const hapuskan = document.querySelector('#hapuskan');
const hapuskanSemua = document.querySelector('#hapuskanSemua');
const hapuskan2 = document.querySelector('#hapuskan2');
const hapuskanSemua2 = document.querySelector('#hapuskanSemua2');
const pindahkan = document.querySelector('#pindahkan');
const pindahkan2 = document.querySelector('#pindahkan2')
const pindahkanSemua = document.querySelector('#pindahkanSemua')
const pindahkanSemua2 = document.querySelector('#pindahkanSemua2')







// MENGHAPUS BUKU
hapuskanSemua.onclick = (e) =>{
    e.preventDefault();
    if (!rakBuku1){
        alert('Rak 1 masih kosong')
        
    } else {
    const konfirm = confirm("Anda akan menghapus seluruh Buku di Rak!")
    if (konfirm == true){
        localStorage.removeItem('Selesai dibaca')
        alert('Semua buku telah dihapus')
        location.reload();
    }}
    
}

hapuskanSemua2.onclick = (e) =>{
    e.preventDefault();
    if (!rakBuku2){
        Swal.fire(
            'Rak 2 Masih Kosong!'
          )
    } else {
    const konfirm = confirm("Anda akan menghapus seluruh Buku di Rak!")
    if (konfirm == true){
        localStorage.removeItem('Belum selesai dibaca')
        alert('Semua buku telah dihapus')
        location.reload();
    }}
    
}


hapuskan.onclick = (e)=>{
e.preventDefault();
const hapus = parseInt(document.querySelector('#hapus').value) - 1;
if (hapus+1 == 100){
    const konfirm = confirm("Anda akan menghapus seluruh Buku!")
    if (konfirm == true){
        localStorage.removeItem('Selesai dibaca')
        location.reload();
    }
    
} if (hapus+1 <= 0){
    return undefined;
}
const lahh = rakBuku1[hapus].isComplete
const konfirmasi = confirm(`Anda akan menghapus No.${hapus + 1}?`)
if (konfirmasi == true){
if (lahh == true){
    rak1.splice(hapus, 1);
    localStorage.setItem("Selesai dibaca", '['+rak1+']')
    alert(`No.${hapus+1} berhasil dihapus`)
    location.reload();
}
} else {
    alert('Operasi dibatalkan')
} 
}

hapuskan2.onclick = (e)=>{
    e.preventDefault();
    const hapus2 = parseInt(document.querySelector('#hapus2').value) - 1;
    if (hapus2+1 == 100){
        const konfirm = confirm("Anda akan menghapus seluruh Buku!")
        if(konfirm == true){
            localStorage.removeItem('Belum selesai dibaca')
            location.reload();
        }
        
    } if (hapus2+1 <= 0){
        return undefined;
    }
    const lahh2 = rakBuku2[hapus2].isComplete
    const konfirmasi2 = confirm(`Anda akan menghapus No.${hapus2 + 1}?`)
    if (konfirmasi2 == true){
    if (lahh2 == false){
        
        rak2.splice(hapus2, 1);
        localStorage.setItem("Belum selesai dibaca", '['+rak2+']')
        alert(`No.${hapus2+1} berhasil dihapus`)
        location.reload();
    }} else {
        alert('Operasi dibatalkan')
    } 
}







// MEMINDAHKAN BUKU
pindahkan.onclick = (e)=>{
    e.preventDefault();
    const pindah = parseInt(document.querySelector('#pindah').value) - 1;
    if (pindah+1 <= 0){
        return undefined;
    }
    const lahh = rakBuku1[pindah].isComplete
    const konfirmasi = confirm(`Anda akan memindah No.${pindah + 1}?`)
    if (konfirmasi == true){
    if (lahh == true){
        const one = JSON.parse(rak1[pindah]);
        one.isComplete = false;
        const two = JSON.stringify(one);
        rak2.push(two)
        localStorage.setItem("Belum selesai dibaca", '['+rak2+']')
        rak1.splice(pindah, 1);
        localStorage.setItem("Selesai dibaca", '['+rak1+']')
        alert(`No.${pindah+1} berhasil dipindah`)
        location.reload();
    }
    } else {
        alert('Operasi dibatalkan')
    }
    }

    pindahkanSemua.onclick = (e)=>{
        e.preventDefault();
        if (!rakBuku1){
            alert('Rak 1 Masih kosong')
        } else {
        const konfirmasi = confirm(`Anda akan memindah semua Buku ke Rak 2!`)
        if (konfirmasi == true){
            for (i = 0; i < rak1.length; i++){
            const one = JSON.parse(rak1[i]);
            one.isComplete = false;
            const two = JSON.stringify(one);
            rak2.push(two)} 
            localStorage.setItem("Belum selesai dibaca", '['+rak2+']')
            localStorage.removeItem("Selesai dibaca")
            alert(`Semua buku berhasil dipindah`)
            location.reload();
        } else {
            alert('Operasi dibatalkan')
        }}
        }

    pindahkan2.onclick = (e)=>{
        e.preventDefault();
        const pindah2 = parseInt(document.querySelector('#pindah2').value) - 1;
        if (pindah2+1 <= 0){
            return undefined;
        }
        const lahh2 = rakBuku2[pindah2].isComplete
        document.forms[0].reset();
        const konfirmasi2 = confirm(`Anda akan memindah No.${pindah2 + 1}?`)
        if (konfirmasi2 == true){
        if (lahh2 == false){
        const one = JSON.parse(rak2[pindah2]);
        one.isComplete = true;
        const two = JSON.stringify(one);
            rak1.push(two)
            localStorage.setItem("Selesai dibaca", '['+rak1+']')
            rak2.splice(pindah2, 1);
            localStorage.setItem("Belum selesai dibaca", '['+rak2+']')
            alert(`No.${pindah2+1} berhasil dipindah`)
            location.reload();
        }} else {
            alert('Operasi dibatalkan')
        }
    }

    pindahkanSemua2.onclick = (e)=>{
        e.preventDefault();
        if (!rakBuku2){
            alert('Rak 2 Masih kosong')
        } else {
        const konfirmasi = confirm(`Anda akan memindah semua Buku ke Rak 1!`)
        if (konfirmasi == true){
            for (i = 0; i < rak2.length; i++){
            const one = JSON.parse(rak2[i]);
            one.isComplete = true;
            const two = JSON.stringify(one);
            rak1.push(two)} 
            localStorage.setItem("Selesai dibaca", '['+rak1+']')
            localStorage.removeItem("Belum selesai dibaca")
            alert(`Semua buku berhasil dipindah`)
            location.reload();
        } else {
            alert('Operasi dibatalkan')
        }}
        }







// MENAMPILKAN DATA BUKU
if (rakBuku1){
for(i = 0; i < rakBuku1.length; i++){
const sdh = document.createTextNode(
`${i+1}.  ID : ${(rakBuku1[i]).id}
    Judul : ${(rakBuku1[i]).title}
    Penulis : ${(rakBuku1[i]).author}
    Tahun : ${(rakBuku1[i]).year}

`)
const rakSatu = {
    id: (rakBuku1[i]).id,
    title: (rakBuku1[i]).title,
    author: (rakBuku1[i]).author,
    year: (rakBuku1[i]).year,
    isComplete: (rakBuku1[i]).isComplete
    }
const ngerak = JSON.stringify(rakSatu);
rak1.push(ngerak)
        sudah.appendChild(sdh)
        
    }
}

if (rakBuku2){
for(i = 0; i < rakBuku2.length; i++){
const blm = document.createTextNode(
`${i+1}.  ID : ${(rakBuku2[i]).id}
    Judul : ${(rakBuku2[i]).title}
    Penulis : ${(rakBuku2[i]).author}
    Tahun : ${(rakBuku2[i]).year}

`)
const rakDua = {
    id: (rakBuku2[i]).id,
    title: (rakBuku2[i]).title,
    author: (rakBuku2[i]).author,
    year: (rakBuku2[i]).year,
    isComplete: (rakBuku2[i]).isComplete
    }
const ngerak1 = JSON.stringify(rakDua);
rak2.push(ngerak1)
        belom.appendChild(blm)
    }
}





// MENAMBAH BUKU DI RAK 1 & 2
form.onclick = (e)=>{
    e.preventDefault();
    if (document.querySelector('#judulBuku').value == "" || document.querySelector('#penulisBuku').value == ""){
        return Error;
    }
    let bukunya = {
        id: Date.now(),
        title: document.querySelector('#judulBuku').value,
        author: document.querySelector('#penulisBuku').value,
        year: document.querySelector('#tahunBuku').value,
        isComplete: document.querySelector('#bacaBuku').checked
        }
    
    if (bukunya.isComplete == true){
    const yes = JSON.stringify(bukunya);
    rak1.push(yes);
    localStorage.setItem("Selesai dibaca", '['+rak1+']')}
    else {
    const yes = JSON.stringify(bukunya);
    rak2.push(yes);
    localStorage.setItem("Belum selesai dibaca",'['+rak2+']')
    }
    document.forms[0].reset();
    const anu1 = JSON.parse(localStorage.getItem("Selesai dibaca"));
    const anu2 = JSON.parse(localStorage.getItem("Belum selesai dibaca"));
if (bukunya.isComplete == true){
for(i = 0; i < anu1.length; i++){
if (anu1.length > 1){
    const sdh = document.createTextNode(`
${rak1.length}.  ID : ${(anu1[anu1.length - 1]).id}
    Judul : ${(anu1[anu1.length - 1]).title}
    Penulis : ${(anu1[anu1.length - 1]).author}
    Tahun : ${(anu1[anu1.length - 1]).year}
        
`)
        sudah.appendChild(sdh)
        i = anu1.length;
        location.reload();
}
const sdh = document.createTextNode(
`${rak1.length}.  ID : ${(anu1[i]).id}
    Judul : ${(anu1[i]).title}
    Penulis : ${(anu1[i]).author}
    Tahun : ${(anu1[i]).year}

`)
        
        sudah.appendChild(sdh)
        location.reload();
    }
} else {
for(i = 0; i < anu2.length; i++){
if (anu2.length > 1){
const blm = document.createTextNode(`
${rak2.length}.   ID : ${(anu2[anu2.length - 1]).id}
    Judul : ${(anu2[anu2.length - 1]).title}
    enulis : ${(anu2[anu2.length - 1]).author}
    Tahun : ${(anu2[anu2.length - 1]).year}
    
`)
        belom.appendChild(blm)
        i = anu2.length;
        location.reload();
}
const blm = document.createTextNode(
`${rak2.length}.  ID : ${(anu2[i]).id}
    Judul : ${(anu2[i]).title}
    Penulis : ${(anu2[i]).author}
    Tahun : ${(anu2[i]).year}

`)
        
        belom.appendChild(blm)
        location.reload();
    }
}
}






