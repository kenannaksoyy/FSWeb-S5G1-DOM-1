const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

let anchors=document.querySelectorAll("a");
for(let i=0;i<anchors.length;i++){
  anchors[i].classList.add("italic");
  let key=`nav-item-${i+1}`;
  anchors[i].textContent=siteContent["nav"][key];
}/*en üst linkler*/
document.querySelector("#logo-img").setAttribute("src",siteContent["images"]["logo-img"]); /*sağ üst logo*/

document.querySelector("h1").textContent=siteContent["cta"]["h1"];/*Ana başlık*/
document.querySelector("button").textContent=siteContent["cta"]["button"];/*baslık buttom*/
document.querySelector("#cta-img").setAttribute("src",siteContent["images"]["cta-img"]);/*Baslık resim*/

let govdeBasliklar=document.querySelectorAll("h4");
for(let i=0;i<govdeBasliklar.length;i++){
  let key=`nav-item-${i+1}`;
  govdeBasliklar[i].textContent=siteContent["nav"][key];
}
document.querySelector(".middle-img").setAttribute("src",siteContent["images"]["accent-img"]);
let tumP=document.querySelectorAll("p");
tumP[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];
tumP[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];
tumP[2].textContent=siteContent["ana-içerik"]["servisler-içeriği"];
tumP[3].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];
tumP[4].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];
tumP[5].textContent=siteContent["iletisim"]["adres"];
tumP[6].textContent=siteContent["iletisim"]["telefon"];
tumP[7].textContent=siteContent["iletisim"]["email"];





