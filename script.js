// 顶部 CTA 简单滚动
document.getElementById('ctaTop').addEventListener('click',()=>location.hash="#join");

// 英雄区数字递增动画
function countUp(el, end) {
  let cur = 0;
  const step = Math.ceil(end/60);
  const t = setInterval(()=>{
    cur += step; if (cur >= end){cur=end; clearInterval(t);}
    el.textContent = cur.toLocaleString();
  }, 16);
}
countUp(document.getElementById('stat1'), 120); // 吨/天
countUp(document.getElementById('stat2'), 200); // 岗位
countUp(document.getElementById('stat3'), 300); // 儿童

// 轻量“联系表单”
const form = document.getElementById('contactForm');
const title = document.getElementById('formTitle');
const msg = document.getElementById('formMsg');
window.openForm = (type) => {
  form.classList.remove('hidden');
  title.textContent = `联系表单 · ${type}`;
  form.scrollIntoView({behavior:'smooth', block:'start'});
};
window.submitForm = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  msg.textContent = `已收到，${data.name}！我们会尽快回复到：${data.email}`;
  e.target.reset();
};
