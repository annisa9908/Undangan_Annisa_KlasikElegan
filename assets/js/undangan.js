function bukaUndangan(){
    const s1 = document.querySelector('#cover');
    const s2 = document.querySelector('#quotes');
    const s3 = document.querySelector('#profil');
    const s4 = document.querySelector('#tanggal');
    const s5 = document.querySelector('.gallery');
    const s6 = document.querySelector('.tamu');
    const s7 = document.querySelector('#rsvp');
    const s8 = document.querySelector('.story');
    const s9 = document.querySelector('.hadiah');
    const s10 = document.querySelector('#pesan');
    const s11 = document.querySelector('#thanks');
    const s12 = document.querySelector('#navbar_wrapper');

    s1.style.display = 'none';
    s2.style.display = 'block';
    s3.style.display = 'block';
    s4.style.display = 'block';
    s5.style.display = 'block';
    s6.style.display = 'block';
    s7.style.display = 'block';
    s8.style.display = 'block';
    s9.style.display = 'block';
    s10.style.display = 'block';
    s11.style.display = 'block';
    s12.style.display = 'block';
    

    const musik = document.querySelector('#kotak-musik');
    musik.style.display = 'block';

    const lagu = document.querySelector('#lagu');
    lagu.play();
}

