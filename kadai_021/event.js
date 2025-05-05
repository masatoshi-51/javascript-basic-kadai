// ボタンのidを定数に入れる
const btn = document.getElementById('btn');
// テキストのidを定数に入れる
const text = document.getElementById('text');


btn.addEventListener('click',() =>{
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    },2000);
});
