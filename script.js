/* ============================= VERİ MODELİ ============================= */
function daysAgoISO(n){
  const d = new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10);
}
function seedHistory(historyArr, kod, guncel, dunku, hafta, yil, ucYil){
  historyArr.push(
    {kod, tarih: daysAgoISO(1095), fiyat: ucYil},
    {kod, tarih: daysAgoISO(365), fiyat: yil},
    {kod, tarih: daysAgoISO(7), fiyat: hafta},
    {kod, tarih: daysAgoISO(1), fiyat: dunku},
    {kod, tarih: daysAgoISO(0), fiyat: guncel},
  );
}

const PORTFOLIOS = {
  bist: {
    label:"BIST Portföy", currency:"TL", accent:"#d9a441", idLabel:"Hisse Kodu",
    rows:[
      {id:1, kod:"ASELS", adet:500, alis:62.50, alisTarihi:"2025-03-10", guncel:68.90, kategori:"ALFA"},
      {id:2, kod:"THYAO", adet:200, alis:275.00, alisTarihi:"2025-06-02", guncel:298.50, kategori:"DELTA"},
      {id:3, kod:"OTOKAR", adet:50, alis:1450.00, alisTarihi:"2024-11-20", guncel:1620.00, kategori:"DELTA"},
      {id:4, kod:"LOGO", adet:300, alis:38.20, alisTarihi:"2025-01-15", guncel:41.10, kategori:"BETA"},
      {id:5, kod:"PGSUS", adet:100, alis:410.00, alisTarihi:"2025-05-05", guncel:455.00, kategori:"ALFA"},
    ],
    history:[],
    sold:[],
    targetWeights: {ALFA:30, BETA:25, DELTA:25, KATILIM:20},
  },
  abd: {
    label:"ABD Portföy", currency:"$", accent:"#4f8fd1", idLabel:"Hisse Kodu",
    rows:[
      {id:1, kod:"AAPL", adet:20, alis:175.00, alisTarihi:"2025-02-10", guncel:214.50},
      {id:2, kod:"MSFT", adet:15, alis:340.00, alisTarihi:"2025-04-05", guncel:415.00},
      {id:3, kod:"NVDA", adet:30, alis:480.00, alisTarihi:"2025-01-20", guncel:890.00},
      {id:4, kod:"TSLA", adet:10, alis:210.00, alisTarihi:"2025-06-12", guncel:245.00},
      {id:5, kod:"AMZN", adet:12, alis:145.00, alisTarihi:"2025-03-18", guncel:188.00},
    ],
    history:[],
    sold:[],
  },
  fon: {
    label:"Fon Portföy", currency:"TL", accent:"#3fb6a8", idLabel:"Fon Kodu",
    rows:[
      {id:1, kod:"AFT", adet:1500, alis:1.85, alisTarihi:"2025-02-20", guncel:2.10},
      {id:2, kod:"TTE", adet:800, alis:3.40, alisTarihi:"2025-05-15", guncel:3.72},
      {id:3, kod:"GPB", adet:2000, alis:0.92, alisTarihi:"2025-01-08", guncel:1.05},
      {id:4, kod:"IPJ", adet:600, alis:5.10, alisTarihi:"2025-06-25", guncel:5.55},
      {id:5, kod:"MAC", adet:1200, alis:2.30, alisTarihi:"2025-03-30", guncel:2.48},
    ],
    history:[],
    sold:[],
  },
  kripto: {
    label:"Kripto Portföy", currency:"$", accent:"#e0954f", idLabel:"Kripto Kodu",
    rows:[
      {id:1, kod:"BTC", adet:0.25, alis:52000.00, alisTarihi:"2025-02-05", guncel:68500.00},
      {id:2, kod:"ETH", adet:3.5, alis:2800.00, alisTarihi:"2025-04-12", guncel:3450.00},
      {id:3, kod:"SOL", adet:40, alis:110.00, alisTarihi:"2025-05-20", guncel:158.00},
      {id:4, kod:"XRP", adet:2000, alis:0.55, alisTarihi:"2025-03-08", guncel:0.72},
      {id:5, kod:"BNB", adet:8, alis:410.00, alisTarihi:"2025-06-01", guncel:520.00},
    ],
    history:[],
    sold:[],
  },
};

seedHistory(PORTFOLIOS.kripto.history, "BTC", 68500.00, 67800.00, 65200.00, 42000.00, 18500.00);
seedHistory(PORTFOLIOS.kripto.history, "ETH", 3450.00, 3400.00, 3200.00, 2200.00, 1200.00);
seedHistory(PORTFOLIOS.kripto.history, "SOL", 158.00, 155.00, 145.00, 85.00, 22.00);
seedHistory(PORTFOLIOS.kripto.history, "XRP", 0.72, 0.71, 0.66, 0.48, 0.32);
seedHistory(PORTFOLIOS.kripto.history, "BNB", 520.00, 515.00, 495.00, 340.00, 210.00);

seedHistory(PORTFOLIOS.bist.history, "ASELS", 68.90, 68.20, 66.10, 45.30, 22.10);
seedHistory(PORTFOLIOS.bist.history, "THYAO", 298.50, 301.00, 290.00, 260.00, 130.00);
seedHistory(PORTFOLIOS.bist.history, "OTOKAR", 1620.00, 1600.00, 1580.00, 1100.00, 650.00);
seedHistory(PORTFOLIOS.bist.history, "LOGO", 41.10, 40.80, 39.50, 30.00, 18.50);
seedHistory(PORTFOLIOS.bist.history, "PGSUS", 455.00, 450.00, 430.00, 350.00, 210.00);

seedHistory(PORTFOLIOS.abd.history, "AAPL", 214.50, 213.00, 208.00, 180.00, 130.00);
seedHistory(PORTFOLIOS.abd.history, "MSFT", 415.00, 412.50, 400.00, 340.00, 250.00);
seedHistory(PORTFOLIOS.abd.history, "NVDA", 890.00, 875.00, 820.00, 480.00, 140.00);
seedHistory(PORTFOLIOS.abd.history, "TSLA", 245.00, 250.00, 230.00, 180.00, 220.00);
seedHistory(PORTFOLIOS.abd.history, "AMZN", 188.00, 186.00, 178.00, 150.00, 95.00);

seedHistory(PORTFOLIOS.fon.history, "AFT", 2.10, 2.08, 2.02, 1.55, 0.95);
seedHistory(PORTFOLIOS.fon.history, "TTE", 3.72, 3.70, 3.60, 2.90, 1.80);
seedHistory(PORTFOLIOS.fon.history, "GPB", 1.05, 1.04, 1.00, 0.78, 0.48);
seedHistory(PORTFOLIOS.fon.history, "IPJ", 5.55, 5.50, 5.35, 4.20, 2.60);
seedHistory(PORTFOLIOS.fon.history, "MAC", 2.48, 2.46, 2.38, 1.95, 1.20);

let nextId = {bist:6, abd:6, fon:6, kripto:6};
let nextSoldId = {bist:1, abd:1, fon:1, kripto:1};
let usdTry = Number(localStorage.getItem("portfoy_usdTry")) || 34.50; // Manuel USD/TRY

const TAB_ORDER = ["bist","abd","fon","kripto","sold","overview","macro"];
let activeTab = "bist";
let editingId = {bist:null, abd:null, fon:null, kripto:null};
let searchTerm = {bist:"", abd:"", fon:"", kripto:""};
let sortState = {bist:{col:null,dir:1}, abd:{col:null,dir:1}, fon:{col:null,dir:1}, kripto:{col:null,dir:1}};
let historyEditor = null; // {key, rowId} açık olan fiyat geçmişi paneli
let sellEditor = null; // {key, rowId} açık olan satış paneli
let categoryFilter = {bist:""};

/* ---------- Makroekonomik Veriler (bağımsız bölüm) ---------- */
let macroNextId = 1;
function mi(isim){ return {id: macroNextId++, isim, incelendi:false, tarih:null}; }
const MACRO = {
  categories: [
    {key:"reel", label:"Reel Göstergeler", items:[
      mi("Gayri Safi Yurtiçi Hasıla"), mi("İstihdam/İşsizlik Oranları"), mi("Elektrik Tüketimi"),
      mi("Kapasite Kullanımı"), mi("Sanayi Üretim Endeksi"), mi("Perakende Satışlar/Tüketici Fiyatları"), mi("Tarımsal Üretim"),
    ]},
    {key:"mali", label:"Mali Göstergeler", items:[
      mi("ÜFE/TÜFE/Enflasyon"), mi("Faiz"), mi("Döviz Kurları"), mi("Bütçe Açığı"), mi("Kredilerdeki Değişim"),
      mi("Borsa Endeksi"), mi("Para Arzı"), mi("Cari İşlemler Açığı"), mi("İç/Dış Borç Stoku"),
      mi("Turizm Gelirleri"), mi("İthalat/İhracat Rakamları"),
    ]},
    {key:"diger", label:"Diğer Göstergeler", items:[
      mi("Derecelendirme Kuruluş Notu"), mi("IMF ve Dünya Bankası Raporları"),
      mi("Avrupa Birliği Ekonomik Raporları"), mi("Politik Risk"), mi("Seçim Dönemleri"),
    ]},
    {key:"oncu", label:"Öncü Göstergeler", items:[
      mi("Borsa Endeksleri"), mi("Yeni İşyerlerinin Açılması"), mi("İnşaat Ruhsatları"),
      mi("Stoklardaki Değişim"), mi("Sanayide İşe Çıkarma Oranları"), mi("Satınalma Performansı"),
    ]},
    {key:"destek", label:"Destekleyici Göstergeler", items:[
      mi("Sanayi Üretim Endeksleri"), mi("Sanayi ve Ticari Satışlar"), mi("Tarım Dışı İstihdam"),
    ]},
    {key:"gecikmeli", label:"Gecikmeli Göstergeler", items:[
      mi("Sanayi ve Ticaret Stokları"), mi("Birim İşgücü Maliyetlerindeki Değişim"),
      mi("Banka Faiz Oranları Değişimi"), mi("Tüketici Borç/Gelir Oranı"), mi("Ticari ve Sanayi Borçlarındaki Değişim"),
    ]},
  ],
};

/* ============================= KALICI SAKLAMA (localStorage) ============================= */
const STORAGE_KEY = "portfoyTakipData_v1";
let storageAvailable = true;

function buildPayload(){
  return {
    usdTry,
    nextId,
    nextSoldId,
    rows: { bist:PORTFOLIOS.bist.rows, abd:PORTFOLIOS.abd.rows, fon:PORTFOLIOS.fon.rows, kripto:PORTFOLIOS.kripto.rows },
    history: { bist:PORTFOLIOS.bist.history, abd:PORTFOLIOS.abd.history, fon:PORTFOLIOS.fon.history, kripto:PORTFOLIOS.kripto.history },
    sold: { bist:PORTFOLIOS.bist.sold, abd:PORTFOLIOS.abd.sold, fon:PORTFOLIOS.fon.sold, kripto:PORTFOLIOS.kripto.sold },
    bistTargetWeights: PORTFOLIOS.bist.targetWeights,
    macro: MACRO.categories,
    macroNextId,
  };
}

function applyPayload(payload){
  if(!payload) return false;
  if(payload.usdTry) usdTry = payload.usdTry;
  if(payload.nextId) Object.assign(nextId, payload.nextId);
  if(payload.nextSoldId) Object.assign(nextSoldId, payload.nextSoldId);
  if(payload.rows){
    // Kaydedilmiş boş liste de geçerli bir durumdur: kullanıcı tüm varlıkları sildiyse
    // sayfa yenilendiğinde örnek veriler geri gelmemelidir.
    ["bist","abd","fon","kripto"].forEach(k => {
      if(Array.isArray(payload.rows[k])) PORTFOLIOS[k].rows = payload.rows[k];
    });
  }
  if(payload.history){
    ["bist","abd","fon","kripto"].forEach(k => { if(Array.isArray(payload.history[k])) PORTFOLIOS[k].history = payload.history[k]; });
  }
  if(payload.sold){
    ["bist","abd","fon","kripto"].forEach(k => { if(Array.isArray(payload.sold[k])) PORTFOLIOS[k].sold = payload.sold[k]; });
  }
  if(payload.bistTargetWeights) PORTFOLIOS.bist.targetWeights = payload.bistTargetWeights;
  if(Array.isArray(payload.macro)) MACRO.categories = payload.macro;
  if(payload.macroNextId) macroNextId = payload.macroNextId;
  sanitizeIds();
  return true;
}

/* Bozuk/eksik ID'leri onarır (ör. eski bir yedekten geçersiz veya çakışan ID gelmişse) */
function sanitizeIds(){
  ["bist","abd","fon","kripto"].forEach(k => {
    const p = PORTFOLIOS[k];
    let maxId = 0;
    p.rows.forEach(r => { if(Number.isFinite(r.id)) maxId = Math.max(maxId, r.id); });
    if(!Number.isFinite(nextId[k]) || nextId[k] <= maxId) nextId[k] = maxId + 1;
    p.rows.forEach(r => { if(!Number.isFinite(r.id)) r.id = nextId[k]++; });

    let maxSoldId = 0;
    (p.sold||[]).forEach(s => { if(Number.isFinite(s.id)) maxSoldId = Math.max(maxSoldId, s.id); });
    if(!Number.isFinite(nextSoldId[k]) || nextSoldId[k] <= maxSoldId) nextSoldId[k] = maxSoldId + 1;
    (p.sold||[]).forEach(s => { if(!Number.isFinite(s.id)) s.id = nextSoldId[k]++; });
  });
}

function saveState(){
  if(storageAvailable){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(buildPayload())); }
    catch(e){ storageAvailable = false; }
  }
  pushToCloud();
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) applyPayload(JSON.parse(raw));
  } catch(e){ storageAvailable = false; }
}

function resetToSamples(){
  if(!confirm("Tüm veriler örnek başlangıç verilerine döndürülecek. Emin misiniz?")) return;
  try{ localStorage.removeItem(STORAGE_KEY); } catch(e){}
  location.reload();
}

/* ---------- JSON dosyasıyla dışa / içe aktarma ---------- */
function exportAllData(){
  const payload = buildPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const tarih = new Date().toISOString().slice(0,10);
  a.href = url; a.download = `portfoy_yedek_${tarih}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importAllData(file){
  const reader = new FileReader();
  reader.onload = (e) => {
    try{
      const payload = JSON.parse(e.target.result);
      if(!payload || !payload.rows) throw new Error("geçersiz dosya");
      applyPayload(payload);
      saveState();
      renderMain();
      alert("Veriler başarıyla içe aktarıldı.");
    } catch(err){
      alert("Dosya okunamadı — geçerli bir portföy yedek dosyası (.json) seçtiğinizden emin olun.");
    }
  };
  reader.readAsText(file);
}

document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("importFile");
  if(fileInput){
    fileInput.addEventListener("change", (e) => {
      if(e.target.files && e.target.files[0]) importAllData(e.target.files[0]);
      e.target.value = "";
    });
  }
});

/* ============================= BULUT SENKRON (JSONBin.io) ============================= */
const CLOUD_CONFIG_KEY = "portfoyCloudConfig_v1";
let cloudSyncing = false;
let cloudLastSync = null;

function getCloudConfig(){
  try{
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e){ return null; }
}
function setCloudConfig(cfg){
  try{ localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(cfg)); } catch(e){}
}
function clearCloudConfig(){
  try{ localStorage.removeItem(CLOUD_CONFIG_KEY); } catch(e){}
}

async function jsonbinRequest(url, options){
  const res = await fetch(url, options);
  if(!res.ok) throw new Error("JSONBin isteği başarısız: " + res.status);
  return res.json();
}

async function createCloudBin(apiKey){
  const data = await jsonbinRequest("https://api.jsonbin.io/v3/b", {
    method:"POST",
    headers:{ "Content-Type":"application/json", "X-Master-Key":apiKey, "X-Bin-Private":"true", "X-Bin-Name":"Portfoy Takip" },
    body: JSON.stringify(buildPayload()),
  });
  return data.metadata.id;
}

async function pushToCloud(){
  const cfg = getCloudConfig();
  if(!cfg || !cfg.apiKey || !cfg.binId) return;
  cloudSyncing = true; updateCloudStatus();
  try{
    await jsonbinRequest(`https://api.jsonbin.io/v3/b/${cfg.binId}`, {
      method:"PUT",
      headers:{ "Content-Type":"application/json", "X-Master-Key":cfg.apiKey },
      body: JSON.stringify(buildPayload()),
    });
    cloudLastSync = new Date();
  } catch(e){ console.warn("Buluta kaydedilemedi:", e.message); }
  cloudSyncing = false; updateCloudStatus();
}

async function pullFromCloud(silent){
  const cfg = getCloudConfig();
  if(!cfg || !cfg.apiKey || !cfg.binId) return false;
  cloudSyncing = true; updateCloudStatus();
  try{
    const data = await jsonbinRequest(`https://api.jsonbin.io/v3/b/${cfg.binId}/latest`, {
      headers:{ "X-Master-Key":cfg.apiKey },
    });
    applyPayload(data.record);
    cloudLastSync = new Date();
    cloudSyncing = false; updateCloudStatus();
    return true;
  } catch(e){
    cloudSyncing = false; updateCloudStatus();
    if(!silent) alert("Buluttan veri çekilemedi — API anahtarı/Bin ID doğru mu, internet bağlantınız var mı kontrol edin.");
    return false;
  }
}

function updateCloudStatus(){
  const el = document.getElementById("cloudStatus");
  if(!el) return;
  const cfg = getCloudConfig();
  if(!cfg || !cfg.apiKey || !cfg.binId){ el.textContent = "Bulut senkron kapalı"; return; }
  if(cloudSyncing){ el.textContent = "Senkronize ediliyor…"; return; }
  el.textContent = cloudLastSync ? `Son senkron: ${cloudLastSync.toLocaleTimeString("tr-TR")}` : "Bağlı — henüz senkron olmadı";
}

function toggleCloudPanel(){
  const el = document.getElementById("cloudPanel");
  el.style.display = el.style.display === "none" ? "block" : "none";
  if(el.style.display === "block") renderCloudPanel();
}

function renderCloudPanel(){
  const el = document.getElementById("cloudPanel");
  const cfg = getCloudConfig() || {apiKey:"", binId:""};
  el.innerHTML = `
    <div class="drawer open" style="max-width:520px;">
      <h3>☁ Bulut Senkron Ayarları (JSONBin.io)</h3>
      <p style="font-size:12.5px; color:var(--text-soft); margin-top:-6px;">
        jsonbin.io adresinden ücretsiz hesap açıp "X-Master-Key" alın. Aynı API Key ve Bin ID'yi tüm cihazlarınıza girerseniz
        veriler otomatik senkronize olur.
      </p>
      <div class="field-grid">
        <div class="field"><label>API Key (X-Master-Key)</label><input id="cfgApiKey" type="text" value="${cfg.apiKey||""}"></div>
        <div class="field"><label>Bin ID (varsa)</label><input id="cfgBinId" type="text" value="${cfg.binId||""}"></div>
      </div>
      <div class="drawer-actions" style="flex-wrap:wrap;">
        <button class="btn btn-accent" id="btnCreateBin">Yeni Bin Oluştur</button>
        <button class="btn" id="btnConnect">Kaydet ve Buluttan Yükle</button>
        <button class="btn" id="btnPushNow">Şimdi Buluta Gönder</button>
        <button class="btn btn-danger" id="btnDisconnect">Bağlantıyı Kaldır</button>
      </div>
      <div id="cloudStatus" style="margin-top:10px; font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--text-soft);"></div>
    </div>
  `;
  updateCloudStatus();

  document.getElementById("btnCreateBin").onclick = async () => {
    const apiKey = document.getElementById("cfgApiKey").value.trim();
    if(!apiKey){ alert("Önce API Key girin."); return; }
    try{
      const binId = await createCloudBin(apiKey);
      setCloudConfig({apiKey, binId});
      alert("Yeni bin oluşturuldu. Bin ID: " + binId + "\nBu ID'yi diğer cihazlarınıza da girin.");
      renderCloudPanel();
    } catch(e){ alert("Bin oluşturulamadı: " + e.message); }
  };
  document.getElementById("btnConnect").onclick = async () => {
    const apiKey = document.getElementById("cfgApiKey").value.trim();
    const binId = document.getElementById("cfgBinId").value.trim();
    if(!apiKey || !binId){ alert("API Key ve Bin ID girin."); return; }
    setCloudConfig({apiKey, binId});
    const ok = await pullFromCloud();
    if(ok){ renderMain(); renderCloudPanel(); }
  };
  document.getElementById("btnPushNow").onclick = () => pushToCloud();
  document.getElementById("btnDisconnect").onclick = () => {
    if(!confirm("Bulut bağlantısı kaldırılsın mı? (Bulutdaki veri silinmez, sadece bu cihazın bağlantısı kesilir.)")) return;
    clearCloudConfig();
    renderCloudPanel();
  };
}

/* ============================= HESAPLAMALAR ============================= */
function lookupHistoricalPrice(history, kod, daysAgo){
  const target = new Date();
  target.setHours(0,0,0,0);
  target.setDate(target.getDate()-daysAgo);
  let best = null, bestDate = null;
  history.forEach(h => {
    if(h.kod !== kod) return;
    const d = new Date(h.tarih);
    d.setHours(0,0,0,0);
    if(d.getTime() <= target.getTime() && (!bestDate || d.getTime() > bestDate.getTime())){
      best = h.fiyat; bestDate = d;
    }
  });
  return best;
}
function pctChange(current, past){
  if(past===null||past===undefined||past===0||current===null||current===undefined||isNaN(current)) return null;
  return (current-past)/past;
}
function computed(row, key){
  const maliyet = row.adet*row.alis;
  const guncelDeger = row.adet*row.guncel;
  const karZarar = guncelDeger-maliyet;
  const karZararPct = safeDiv(karZarar, maliyet);
  return {maliyet,guncelDeger,karZarar,karZararPct};
}
function safeDiv(a,b){ return b ? a/b : null; }

function portfolioTotals(key){
  const p = PORTFOLIOS[key];
  let maliyet=0, guncelDeger=0;
  p.rows.forEach(r => { const c = computed(r,key); maliyet+=c.maliyet; guncelDeger+=c.guncelDeger; });
  const karZarar = guncelDeger-maliyet;
  const karZararPct = safeDiv(karZarar, maliyet);
  return {maliyet, guncelDeger, karZarar, karZararPct};
}

/* ============================= FORMAT ============================= */
function fmtMoney(val, cur){
  if(val===null||val===undefined||isNaN(val)) return "—";
  const sign = val>0?"+":val<0?"-":"";
  return `${sign}${Math.abs(val).toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})} ${cur}`;
}
function fmtMoneyPlain(val, cur){
  if(val===null||val===undefined||isNaN(val)) return "—";
  return `${val.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})} ${cur}`;
}
function fmtPct(val){
  if(val===null||val===undefined||isNaN(val)) return "—";
  const sign = val>0?"+":val<0?"-":"";
  return `${sign}${Math.abs(val*100).toFixed(1)}%`;
}
function pctClass(val){ if(val===null||val===undefined||isNaN(val)) return ""; return val>0?"pos":val<0?"neg":""; }

/* ============================= TICKER ============================= */
function renderTicker(){
  const el = document.getElementById("tickerTape");
  let items = [];
  Object.entries(PORTFOLIOS).forEach(([key,p]) => {
    p.rows.forEach(r => {
      const c = computed(r,key);
      items.push(`<span class="tick-item ${pctClass(c.karZararPct)==='pos'?'up':pctClass(c.karZararPct)==='neg'?'down':''}"><b>${r.kod}</b>${fmtPct(c.karZararPct)}</span>`);
    });
  });
  el.innerHTML = items.join("") + items.join(""); // duplicate for seamless loop
  const bugun = new Date().toLocaleDateString("tr-TR", {day:"2-digit", month:"long", year:"numeric", weekday:"long"});
  document.getElementById("headerMeta").innerHTML = `${bugun}<br>Toplam ${Object.values(PORTFOLIOS).reduce((s,p)=>s+p.rows.length,0)} kayıt · USD/TRY: ${usdTry.toFixed(2)}`;
}

/* ============================= TABS ============================= */
function setUsdTry(value){
  const v = Number(String(value).replace(",", "."));
  if(!Number.isFinite(v) || v <= 0) return;
  usdTry = v;
  localStorage.setItem("portfoy_usdTry", String(v));
  saveState();
  renderMain();
}

function renderTabs(){
  const nav = document.getElementById("tabs");
  nav.innerHTML = "";
  let fx = document.getElementById("usdTryControl");
  if(!fx){
    fx = document.createElement("div");
    fx.id = "usdTryControl";
    fx.style.cssText = "margin:8px auto 14px; max-width:1280px; padding:0 28px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;";
    nav.parentElement.insertBefore(fx, nav);
  }
  fx.innerHTML = `<span style="font-size:12px;color:var(--text-soft);">USD/TRY Manuel:</span>
    <input id="usdTryInput" type="number" min="0.0001" step="0.01" value="${usdTry.toFixed(2)}" style="width:100px;">
    <button class="btn btn-sm">Güncelle</button>`;
  fx.querySelector("button").onclick = () => setUsdTry(fx.querySelector("input").value);
  const labels = {bist:"BIST Portföy", abd:"ABD Portföy", fon:"Fon Portföy", kripto:"Kripto Portföy", sold:"Satılanlar / Ana Bakiye", overview:"Genel Bakış", macro:"Makroekonomik Veriler"};
  TAB_ORDER.forEach(key => {
    const btn = document.createElement("button");
    btn.textContent = labels[key];
    btn.className = key===activeTab?"active":"";
    btn.style.setProperty("--accent", getTabAccent(key));
    btn.onclick = () => { activeTab = key; renderMain(); };
    nav.appendChild(btn);
  });
}
function getTabAccent(key){
  if(key==="overview") return "#e7ebee";
  if(key==="sold") return "#22b573";
  if(key==="macro") return "#c2703a";
  return PORTFOLIOS[key].accent;
}

/* ============================= MAIN RENDER ============================= */
function renderMain(){
  renderTabs();
  const main = document.getElementById("main");
  try{
    const panel = activeTab === "overview" ? renderOverview()
      : activeTab === "macro" ? renderMacroPanel()
      : activeTab === "sold" ? renderSoldBalancePanel()
      : renderPortfolioPanel(activeTab);
    main.innerHTML = "";
    main.appendChild(panel);
  } catch(err){
    console.error("Render hatası:", err);
    main.innerHTML = `<div style="padding:24px; color:var(--red); font-family:'IBM Plex Mono',monospace; font-size:13px;">
      Bir görüntüleme hatası oluştu: ${err.message}<br><br>
      <button class="btn" onclick="location.reload()">Sayfayı Yenile</button>
    </div>`;
  }
  renderTicker();
}

/* ============================= SATILANLAR / ANA BAKİYE ============================= */
function getRealizedSoldRows(){
  const rows = [];
  Object.entries(PORTFOLIOS).forEach(([key,p]) => {
    (p.sold||[]).forEach(s => {
      const adet = Number(s.adet) || 0;
      const alis = Number(s.alis) || 0;
      const satis = Number(s.satisFiyati) || 0;
      const karZarar = (satis - alis) * adet;
      const satisTutari = satis * adet;
      const karZararPct = safeDiv(karZarar, alis * adet);
      rows.push({key, portfolio:p.label, currency:p.currency, kod:s.kod, adet, alis, satis,
        satisTutari, karZarar, karZararPct, alisTarihi:s.alisTarihi, satisTarihi:s.satisTarihi});
    });
  });
  return rows.sort((a,b)=>String(b.satisTarihi).localeCompare(String(a.satisTarihi)));
}

function renderSoldBalancePanel(){
  const panel = document.createElement("div");
  panel.className = "panel active";
  panel.style.setProperty("--accent", "#22b573");

  const soldRows = getRealizedSoldRows();
  const tlValue = r => (r.currency === "$" ? r.satisTutari * usdTry : r.satisTutari);
  const tlProfit = r => (r.currency === "$" ? r.karZarar * usdTry : r.karZarar);
  const anaBakiye = soldRows.reduce((sum,r)=>sum+tlValue(r),0);
  const toplamKar = soldRows.reduce((sum,r)=>sum+tlProfit(r),0);
  const toplamSatis = soldRows.length;

  const cards = document.createElement("div");
  cards.className = "cards";
  cards.innerHTML = `
    <div class="card">
      <div class="label">ANA BAKİYE · Satışlardan Gelen</div>
      <div class="value pos">${fmtMoneyPlain(anaBakiye,"TL")}</div>
      <div class="sub">USD satışları USD/TRY ${usdTry.toFixed(2)} ile çevrilir</div>
    </div>
    <div class="card">
      <div class="label">Gerçekleşen Kâr / Zarar</div>
      <div class="value ${pctClass(toplamKar)}">${fmtMoney(toplamKar,"TL")}</div>
    </div>
    <div class="card">
      <div class="label">Toplam Satış İşlemi</div>
      <div class="value">${toplamSatis}</div>
    </div>
    <div class="card">
      <div class="label">USD/TRY</div>
      <div class="value">${usdTry.toFixed(2)}</div>
      <div class="sub">Ana bakiye hesaplamasında kullanılır</div>
    </div>
  `;
  panel.appendChild(cards);

  const title = document.createElement("div");
  title.innerHTML = `<div class="section-title">Satılan Varlıklar — Ana Bakiye Hareketleri</div>`;
  panel.appendChild(title);

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";
  if(!soldRows.length){
    tableWrap.innerHTML = `<table><tbody><tr class="empty-row"><td>Henüz satılmış bir varlık yok.</td></tr></tbody></table>`;
  } else {
    tableWrap.innerHTML = `
      <table>
        <thead><tr>
          <th>Portföy</th><th>Kod</th><th>Adet</th><th>Alış Fiyatı</th><th>Satış Fiyatı</th>
          <th>Satış Tutarı</th><th>Gerçekleşen Kâr/Zarar</th><th>Kâr/Zarar %</th><th>Satış Tarihi</th>
        </tr></thead>
        <tbody>
          ${soldRows.map(r=>`
            <tr>
              <td>${r.portfolio}</td>
              <td><span class="kod-pill">${r.kod}</span></td>
              <td>${r.adet.toLocaleString("tr-TR")}</td>
              <td>${fmtMoneyPlain(r.alis,r.currency)}</td>
              <td>${fmtMoneyPlain(r.satis,r.currency)}</td>
              <td>${fmtMoneyPlain(r.satisTutari,r.currency)}</td>
              <td class="${pctClass(r.karZarar)}">${fmtMoney(r.karZarar,r.currency)}</td>
              <td class="${pctClass(r.karZararPct)}">${fmtPct(r.karZararPct)}</td>
              <td>${r.satisTarihi}</td>
            </tr>`).join("")}
        </tbody>
      </table>`;
  }
  panel.appendChild(tableWrap);

  const note = document.createElement("p");
  note.style.cssText = "font-size:12px;color:var(--text-soft);margin-top:14px;";
  note.textContent = "Ana Bakiye, kaydedilmiş satışların brüt satış tutarlarının toplamıdır. Gerçekleşen Kâr/Zarar bu bakiyeden ayrı gösterilir.";
  panel.appendChild(note);

  return panel;
}

/* ============================= PORTFOLIO PANEL ============================= */
function renderPortfolioPanel(key){
  const p = PORTFOLIOS[key];
  const totals = portfolioTotals(key);
  const panel = document.createElement("div");
  panel.className = "panel active";
  panel.style.setProperty("--accent", p.accent);

  // ---- summary cards ----
  const cards = document.createElement("div");
  cards.className = "cards";
  cards.innerHTML = `
    <div class="card"><div class="label">Toplam Maliyet</div><div class="value">${fmtMoneyPlain(totals.maliyet,p.currency)}</div></div>
    <div class="card"><div class="label">Güncel Değer</div><div class="value">${fmtMoneyPlain(totals.guncelDeger,p.currency)}</div></div>
    <div class="card"><div class="label">Kar / Zarar</div><div class="value ${pctClass(totals.karZarar)}">${fmtMoney(totals.karZarar,p.currency)}</div><div class="sub ${pctClass(totals.karZararPct)}">${fmtPct(totals.karZararPct)}</div></div>
    <div class="card"><div class="label">Kayıt Sayısı</div><div class="value">${p.rows.length}</div><div class="sub">${p.idLabel}</div></div>
  `;
  panel.appendChild(cards);

  if(key==="bist") panel.appendChild(renderWeightSection());

  // ---- toolbar ----
  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";
  const left = document.createElement("div");
  left.className = "toolbar-left";
  const search = document.createElement("input");
  search.className="search"; search.placeholder="Kod ara…"; search.value = searchTerm[key];
  search.oninput = e => { searchTerm[key]=e.target.value; renderMain(); };
  const exportBtn = document.createElement("button");
  exportBtn.className="btn"; exportBtn.textContent="⭳ CSV indir";
  exportBtn.onclick = () => exportCSV(key);
  const clearHistBtn = document.createElement("button");
  clearHistBtn.className="btn"; clearHistBtn.textContent="🧹 Fiyat Geçmişini Sıfırla";
  clearHistBtn.title = "Yanlış/eski görünen değişim yüzdelerini düzeltmek için bu portföydeki TÜM hisselerin fiyat geçmişini temizler";
  clearHistBtn.onclick = () => {
    if(!confirm("Bu portföydeki TÜM hisselerin fiyat geçmişi silinecek (Günlük % değerleri sıfırlanacak). Silinen/yeniden eklenen hisselerde görülen yanlış yüzdeleri düzeltmek için kullanılır. Emin misiniz?")) return;
    PORTFOLIOS[key].history = [];
    saveState();
    renderMain();
  };
  left.appendChild(search); left.appendChild(exportBtn); left.appendChild(clearHistBtn);
  if(key==="bist"){
    const catFilter = document.createElement("select");
    catFilter.className = "search";
    catFilter.innerHTML = `<option value="">Tüm Kategoriler</option>` +
      Object.keys(BIST_CATEGORIES).map(k=>`<option value="${k}" ${categoryFilter.bist===k?'selected':''}>${k} · Risk ${BIST_CATEGORIES[k].risk}/10</option>`).join("");
    catFilter.value = categoryFilter.bist;
    catFilter.onchange = e => { categoryFilter.bist = e.target.value; renderMain(); };
    left.appendChild(catFilter);
  }
  const addBtn = document.createElement("button");
  addBtn.className="btn btn-accent"; addBtn.textContent="+ Yeni "+ (key==="fon"?"Fon":key==="kripto"?"Kripto":"Hisse");
  addBtn.onclick = () => { editingId[key]="new"; renderMain(); };
  toolbar.appendChild(left); toolbar.appendChild(addBtn);
  panel.appendChild(toolbar);

  // ---- table ----
  if(key==="bist"){
    const groups = ["ALFA","BETA","DELTA","KATILIM"];
    groups.forEach(group => {
      const section = document.createElement("div");
      section.className = "category-section";
      section.innerHTML = `<div class="section-title" style="margin-top:18px;">${group}</div>`;
      const originalRows = PORTFOLIOS.bist.rows;
      PORTFOLIOS.bist.rows = originalRows.filter(r => r.kategori === group);
      section.appendChild(renderTable(key));
      PORTFOLIOS.bist.rows = originalRows;
      panel.appendChild(section);
    });
  } else {
    panel.appendChild(renderTable(key));
  }

  // ---- drawer ----
  if(editingId[key]!==null){ panel.appendChild(renderDrawer(key, editingId[key])); }
  if(historyEditor && historyEditor.key===key){ panel.appendChild(renderHistoryDrawer(key, historyEditor.rowId)); }
  if(sellEditor && sellEditor.key===key){ panel.appendChild(renderSellDrawer(key, sellEditor.rowId)); }

  // ---- satılanlar (gerçekleşen kar/zarar) ----
  panel.appendChild(renderSoldSection(key));

  // ---- charts ----
  panel.appendChild(renderChartsSection(key));

  return panel;
}

const BIST_CATEGORIES = {
  ALFA: {risk:9, aciklama:"Yüksek risk, yüksek potansiyel; Yıldız Pazar/Ana Pazar'daki daha oynak şirketler.", color:"#e0554f"},
  BETA: {risk:8, aciklama:"Yeni halka arzlar ve büyüme hikâyeleri; fırsat odaklı.", color:"#e0954f"},
  KATILIM: {risk:4, aciklama:"Katılım endeksi, faizsiz yatırım prensipleri.", color:"#3fb6a8"},
  DELTA: {risk:5, aciklama:"BIST 100 içindeki köklü, bilanço gücü yüksek şirketler; daha düşük oynaklık hedefi.", color:"#4f8fd1"},
};

function renderWeightSection(){
  const p = PORTFOLIOS.bist;
  const enriched = p.rows.map(r => ({row:r, c: computed(r,"bist")}));
  const totalDeger = enriched.reduce((s,e)=>s+e.c.guncelDeger, 0);

  const cats = Object.keys(BIST_CATEGORIES);
  const current = {};
  cats.forEach(c => current[c] = 0);
  let kategorisiz = 0;
  enriched.forEach(e => {
    const k = e.row.kategori;
    if(k && current.hasOwnProperty(k)) current[k] += e.c.guncelDeger;
    else kategorisiz += e.c.guncelDeger;
  });

  const targetSum = cats.reduce((s,c)=> s + (p.targetWeights[c]||0), 0);

  const wrap = document.createElement("div");
  wrap.className = "weight-section";
  wrap.innerHTML = `
    <div class="section-title" style="margin-top:0;">Kategori Ağırlıkları — Hedef vs Mevcut
      ${targetSum!==100 ? `<span style="color:var(--red); font-weight:400; font-size:12px; margin-left:8px;">(Hedefler toplamı %${targetSum}, 100 olmalı)</span>` : ""}
    </div>
    <div class="weight-grid">
      ${cats.map(c => {
        const mevcutPct = totalDeger ? (current[c]/totalDeger*100) : 0;
        const hedefPct = p.targetWeights[c] || 0;
        const fark = mevcutPct - hedefPct;
        const farkClass = Math.abs(fark) <= 3 ? "pos" : Math.abs(fark) <= 7 ? "" : "neg";
        const cfg = BIST_CATEGORIES[c];
        return `
          <div class="weight-row">
            <div class="weight-label" style="color:${cfg.color};">${c}
              </div>
            <div class="weight-target">
              <label>Hedef</label>
              <input type="number" class="weight-input" min="0" max="100" step="1" value="${hedefPct}" data-cat="${c}">%
            </div>
            <div class="weight-bar-wrap">
              <div class="weight-bar-track">
                <div class="weight-bar-target" style="left:${Math.min(hedefPct,100)}%;"></div>
                <div class="weight-bar-fill" style="width:${Math.min(mevcutPct,100)}%; background:${cfg.color};"></div>
              </div>
              <div class="weight-bar-labels"><span>Mevcut: %${mevcutPct.toFixed(1)}</span><span class="${farkClass}">${fark>0?'+':''}${fark.toFixed(1)} puan</span></div>
            </div>
          </div>`;
      }).join("")}
      ${kategorisiz>0 ? `
        <div class="weight-row">
          <div class="weight-label" style="color:var(--text-soft);">Kategorisiz</div>
          <div class="weight-target"><span style="color:var(--text-soft); font-size:12px;">Hedef yok</span></div>
          <div class="weight-bar-wrap">
            <div class="weight-bar-track"><div class="weight-bar-fill" style="width:${totalDeger?Math.min(kategorisiz/totalDeger*100,100):0}%; background:var(--text-soft);"></div></div>
            <div class="weight-bar-labels"><span>Mevcut: %${totalDeger?(kategorisiz/totalDeger*100).toFixed(1):'0.0'}</span></div>
          </div>
        </div>` : ""}
    </div>
  `;

  wrap.querySelectorAll(".weight-input").forEach(inp => {
    inp.addEventListener("change", () => {
      p.targetWeights[inp.dataset.cat] = Number(inp.value)||0;
      saveState();
      renderMain();
    });
  });

  return wrap;
}

function renderKategoriBadge(kategori){
  if(!kategori || !BIST_CATEGORIES[kategori]) return `<span style="color:var(--text-soft);">—</span>`;
  const c = BIST_CATEGORIES[kategori];
  return `<span class="kategori-badge" style="background:${c.color}22; color:${c.color}; border-color:${c.color}55;" title="${c.aciklama} (Risk: ${c.risk}/10)">${kategori} · ${c.risk}/10</span>`;
}

function getCols(key){
  const base = [
    {key:"kod", label:"Kod"}, {key:"adet", label:"Adet"}, {key:"alis", label:"Alış Fiy."},
    {key:"alisTarihi", label:"Alış Tar."}, {key:"guncel", label:"Güncel Fiy."},
    {key:"maliyet", label:"Maliyet", derived:true}, {key:"guncelDeger", label:"Güncel Değer", derived:true},
    {key:"karZarar", label:"Kar/Zarar", derived:true}, {key:"karZararPct", label:"Kar/Zarar %", derived:true},
  ];
  if(key==="bist"){
    base.splice(1, 0, {key:"kategori", label:"Kategori"});
  }
  return base;
}

function renderTable(key){
  const p = PORTFOLIOS[key];
  const wrap = document.createElement("div");
  wrap.className = "table-wrap";
  const table = document.createElement("table");
  const COLS = getCols(key);

  const thead = document.createElement("thead");
  const trh = document.createElement("tr");
  COLS.forEach(c => {
    const th = document.createElement("th");
    th.textContent = c.label;
    if(sortState[key].col===c.key){ th.classList.add("sorted"); if(sortState[key].dir===-1) th.classList.add("asc"); }
    th.onclick = () => { toggleSort(key,c.key); };
    trh.appendChild(th);
  });
  const thAct = document.createElement("th"); thAct.textContent="İşlem"; thAct.style.cursor="default";
  trh.appendChild(thAct);
  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  let enriched = p.rows.map(r => ({row:r, c: computed(r,key)}));
  // filter
  const term = searchTerm[key].toLocaleLowerCase("tr");
  if(term) enriched = enriched.filter(e => e.row.kod.toLocaleLowerCase("tr").includes(term));
  if(key==="bist" && categoryFilter.bist) enriched = enriched.filter(e => e.row.kategori===categoryFilter.bist);
  // sort
  const {col,dir} = sortState[key];
  if(col){
    enriched.sort((a,b) => {
      const va = col in a.row ? a.row[col] : a.c[col];
      const vb = col in b.row ? b.row[col] : b.c[col];
      if(typeof va === "string") return va.localeCompare(vb,"tr")*dir;
      return ((va??-Infinity)-(vb??-Infinity))*dir;
    });
  }

  if(enriched.length===0){
    tbody.innerHTML = `<tr class="empty-row"><td colspan="${COLS.length+1}">Kayıt bulunamadı.</td></tr>`;
  } else {
    enriched.forEach(({row,c}) => {
      const badge = "";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="kod-pill">${row.kod}</span>${badge}</td>
        ${key==="bist" ? `<td>${renderKategoriBadge(row.kategori)}</td>` : ""}
        <td>${row.adet.toLocaleString("tr-TR")}</td>
        <td>${fmtMoneyPlain(row.alis,p.currency)}</td>
        <td>${row.alisTarihi}</td>
        <td>${fmtMoneyPlain(row.guncel,p.currency)}</td>
        <td>${fmtMoneyPlain(c.maliyet,p.currency)}</td>
        <td>${fmtMoneyPlain(c.guncelDeger,p.currency)}</td>
        <td class="${pctClass(c.karZarar)}">${fmtMoney(c.karZarar,p.currency)}</td>
        <td class="${pctClass(c.karZararPct)}">${fmtPct(c.karZararPct)}</td>
        <td class="row-actions">
          <button class="btn btn-sm" data-act="hist" data-id="${row.id}">Geçmiş</button>
          <button class="btn btn-sm" data-act="edit" data-id="${row.id}">Düzenle</button>
          <button class="btn btn-sm btn-accent" data-act="sell" data-id="${row.id}">Sat</button>
          <button class="btn btn-sm btn-danger" data-act="del" data-id="${row.id}">Sil</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }
  table.appendChild(tbody);
  wrap.appendChild(table);

  wrap.querySelectorAll("button[data-act]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if(btn.dataset.act==="edit"){ editingId[key]=id; renderMain(); }
      if(btn.dataset.act==="del"){ deleteRow(key,id); }
      if(btn.dataset.act==="hist"){ historyEditor = {key, rowId:id}; renderMain(); }
      if(btn.dataset.act==="sell"){ sellEditor = {key, rowId:id}; renderMain(); }
    });
  });
  return wrap;
}

function toggleSort(key,col){
  const s = sortState[key];
  if(s.col===col) s.dir *= -1; else { s.col=col; s.dir=1; }
  renderMain();
}

/* ============================= DRAWER ============================= */
function getFormFields(key){
  const base = [
    {key:"kod", label:"Kod", type:"text"},
    {key:"adet", label:"Adet", type:"number"},
    {key:"alis", label:"Alış Fiyatı", type:"number"},
    {key:"alisTarihi", label:"Alış Tarihi", type:"date"},
    {key:"guncel", label:"Güncel Fiyat", type:"number"},
  ];
  if(key==="bist"){
    base.push({key:"kategori", label:"Kategori (opsiyonel)", type:"select", optional:true,
      options:[{value:"", label:"— Seçiniz —"}, ...Object.keys(BIST_CATEGORIES).map(k=>({value:k, label:`${k} · Risk ${BIST_CATEGORIES[k].risk}/10`}))]});
  }
  return base;
}

function renderDrawer(key, id){
  const p = PORTFOLIOS[key];
  const isNew = id==="new";
  const row = isNew ? {} : p.rows.find(r=>r.id===id);
  const drawer = document.createElement("div");
  drawer.className = "drawer open";
  drawer.style.setProperty("--accent", p.accent);

  if(!isNew && !row){
    drawer.innerHTML = `<h3>Kayıt bulunamadı</h3>`;
    editingId[key] = null;
    return drawer;
  }

  drawer.innerHTML = `<h3>${isNew?"Yeni Kayıt":"Kaydı Düzenle"} — ${p.label}</h3>`;

  const grid = document.createElement("div");
  grid.className = "field-grid";
  getFormFields(key).forEach(f => {
    const field = document.createElement("div");
    field.className="field";
    const label = document.createElement("label"); label.textContent=f.label;
    let input;
    if(f.type==="select"){
      input = document.createElement("select");
      f.options.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.value; opt.textContent = o.label;
        if((row[f.key]??"") === o.value) opt.selected = true;
        input.appendChild(opt);
      });
    } else {
      input = document.createElement("input");
      input.type = f.type; input.step="any";
      input.value = row[f.key] ?? "";
    }
    input.dataset.field = f.key;
    if(f.optional) input.dataset.optional = "1";
    field.appendChild(label); field.appendChild(input);
    grid.appendChild(field);
  });
  drawer.appendChild(grid);

  if(key==="bist"){
    const note = document.createElement("p");
    note.style.cssText = "font-size:12px; color:var(--text-soft); margin:10px 2px 0;";
    note.innerHTML = Object.entries(BIST_CATEGORIES).map(([k,c])=>`<b>${k}</b> (${c.risk}/10): ${c.aciklama}`).join("<br>");
    drawer.appendChild(note);
  }

  const actions = document.createElement("div");
  actions.className="drawer-actions";
  const saveBtn = document.createElement("button");
  saveBtn.className="btn btn-accent"; saveBtn.textContent = isNew?"Kaydet":"Güncelle";
  saveBtn.onclick = () => saveRow(key, isNew?null:id, grid);
  const cancelBtn = document.createElement("button");
  cancelBtn.className="btn"; cancelBtn.textContent="Vazgeç";
  cancelBtn.onclick = () => { editingId[key]=null; renderMain(); };
  actions.appendChild(saveBtn); actions.appendChild(cancelBtn);
  drawer.appendChild(actions);
  return drawer;
}

/* ---------- Fiyat Geçmişi paneli (değişim %'lerinin dayandığı kayıtlar) ---------- */
function renderHistoryDrawer(key, rowId){
  const p = PORTFOLIOS[key];
  const row = p.rows.find(r=>r.id===rowId);
  const drawer = document.createElement("div");
  drawer.className = "drawer open";
  drawer.style.setProperty("--accent", p.accent);

  if(!row){
    drawer.innerHTML = `<h3>Kayıt bulunamadı</h3>`;
    return drawer;
  }

  const entries = p.history.filter(h=>h.kod===row.kod).sort((a,b)=> b.tarih.localeCompare(a.tarih));

  drawer.innerHTML = `
    <h3>📅 ${row.kod} — Fiyat Geçmişi</h3>
    <p style="font-size:12.5px; color:var(--text-soft); margin-top:-6px;">
      Günlük değişim yüzdesi, buraya eklediğiniz geçmiş tarihli fiyatlara göre otomatik hesaplanır.
      Örn. günlük değişim için dünün tarihli bir fiyat kaydı yeterlidir.
    </p>
    <div class="field-grid" style="grid-template-columns:1fr 1fr auto auto;">
      <div class="field"><label>Tarih</label><input type="date" id="histTarih"></div>
      <div class="field"><label>Fiyat</label><input type="number" step="any" id="histFiyat"></div>
      <div class="field" style="align-self:flex-end;"><button class="btn btn-accent" id="btnAddHist">Ekle</button></div>
      <div class="field" style="align-self:flex-end;"><button class="btn" id="btnTodayHist">Bugünü Kaydet</button></div>
    </div>
    <div class="table-wrap" style="margin-top:16px;">
      <table>
        <thead><tr><th>Tarih</th><th>Fiyat</th><th>İşlem</th></tr></thead>
        <tbody>
          ${entries.length ? entries.map(h => `
            <tr>
              <td style="text-align:left;">${h.tarih}</td>
              <td>${fmtMoneyPlain(h.fiyat, p.currency)}</td>
              <td class="row-actions"><button class="btn btn-sm btn-danger" data-tarih="${h.tarih}">Sil</button></td>
            </tr>`).join("") : `<tr class="empty-row"><td colspan="3">Henüz geçmiş kaydı yok.</td></tr>`}
        </tbody>
      </table>
    </div>
    <div class="drawer-actions">
      <button class="btn" id="btnCloseHist">Kapat</button>
      <button class="btn btn-danger" id="btnClearHist">Tüm Geçmişi Temizle</button>
    </div>
  `;

  drawer.querySelector("#btnAddHist").onclick = () => {
    const tarih = drawer.querySelector("#histTarih").value;
    const fiyat = Number(drawer.querySelector("#histFiyat").value);
    if(!tarih || !fiyat){ alert("Tarih ve fiyat girin."); return; }
    addHistoryEntry(key, row.kod, tarih, fiyat);
    saveState();
    renderMain();
  };
  drawer.querySelector("#btnTodayHist").onclick = () => {
    const today = new Date().toISOString().slice(0,10);
    addHistoryEntry(key, row.kod, today, row.guncel);
    saveState();
    renderMain();
  };
  drawer.querySelector("#btnCloseHist").onclick = () => { historyEditor = null; renderMain(); };
  drawer.querySelector("#btnClearHist").onclick = () => {
    if(!confirm(`${row.kod} için kayıtlı tüm fiyat geçmişi silinecek (yanlış/eski kayıtları temizlemek için). Emin misiniz?`)) return;
    PORTFOLIOS[key].history = PORTFOLIOS[key].history.filter(h=>h.kod!==row.kod);
    saveState();
    renderMain();
  };
  drawer.querySelectorAll("button[data-tarih]").forEach(btn => {
    btn.onclick = () => {
      deleteHistoryEntry(key, row.kod, btn.dataset.tarih);
      saveState();
      renderMain();
    };
  });

  return drawer;
}

function addHistoryEntry(key, kod, tarih, fiyat){
  const history = PORTFOLIOS[key].history;
  const idx = history.findIndex(h=>h.kod===kod && h.tarih===tarih);
  if(idx>=0) history[idx].fiyat = fiyat;
  else history.push({kod, tarih, fiyat});
}
function deleteHistoryEntry(key, kod, tarih){
  PORTFOLIOS[key].history = PORTFOLIOS[key].history.filter(h=>!(h.kod===kod && h.tarih===tarih));
}

/* ---------- Satış (sat) paneli ---------- */
function renderSellDrawer(key, rowId){
  const p = PORTFOLIOS[key];
  const row = p.rows.find(r=>r.id===rowId);
  const drawer = document.createElement("div");
  drawer.className = "drawer open";
  drawer.style.setProperty("--accent", p.accent);

  if(!row){ drawer.innerHTML = `<h3>Kayıt bulunamadı</h3>`; return drawer; }

  drawer.innerHTML = `
    <h3>💰 ${row.kod} — Satış</h3>
    <p style="font-size:12.5px; color:var(--text-soft); margin-top:-6px;">
      Elinizde ${row.adet.toLocaleString("tr-TR")} adet var. Sattığınız adedi, satış fiyatını ve tarihini girin —
      gerçekleşen kar/zarar "Satılanlar" tablosunda görünecek.
    </p>
    <div class="field-grid">
      <div class="field"><label>Satılan Adet</label><input type="number" step="any" id="sellAdet" value="${row.adet}" max="${row.adet}"></div>
      <div class="field"><label>Satış Fiyatı (${p.currency})</label><input type="number" step="any" id="sellFiyat"></div>
      <div class="field"><label>Satış Tarihi</label><input type="date" id="sellTarih" value="${new Date().toISOString().slice(0,10)}"></div>
    </div>
    <div class="drawer-actions">
      <button class="btn btn-accent" id="btnConfirmSell">Satışı Kaydet</button>
      <button class="btn" id="btnCancelSell">Vazgeç</button>
    </div>
  `;

  drawer.querySelector("#btnConfirmSell").onclick = () => {
    const adet = Number(drawer.querySelector("#sellAdet").value);
    const fiyat = Number(drawer.querySelector("#sellFiyat").value);
    const tarih = drawer.querySelector("#sellTarih").value;
    if(!adet || adet<=0 || !fiyat || !tarih){ alert("Adet, satış fiyatı ve tarih girin."); return; }
    if(adet > row.adet){ alert("Satılan adet, elinizdeki adetten fazla olamaz."); return; }
    sellRow(key, rowId, adet, fiyat, tarih);
  };
  drawer.querySelector("#btnCancelSell").onclick = () => { sellEditor = null; renderMain(); };

  return drawer;
}

function sellRow(key, rowId, adet, fiyat, tarih){
  const p = PORTFOLIOS[key];
  const row = p.rows.find(r=>r.id===rowId);
  if(!row) return;
  // Kripto dahil tüm portföylerde gerçekleşen sonuç aynı birimde (portföy para birimi) hesaplanır.
  // Kar = (satış fiyatı - alış fiyatı) × satılan adet.
  const karZarar = (fiyat - row.alis) * adet;
  const karZararPct = safeDiv(karZarar, row.alis*adet);
  p.sold.push({
    id: nextSoldId[key]++, kod: row.kod, adet, alis: row.alis, alisTarihi: row.alisTarihi,
    satisFiyati: fiyat, satisTarihi: tarih, karZarar, karZararPct,
  });
  if(adet >= row.adet){
    // tamamı satıldı — pozisyonu kapat
    p.rows = p.rows.filter(r=>r.id!==rowId);
    if(!p.rows.some(r=>r.kod===row.kod)){ p.history = p.history.filter(h=>h.kod!==row.kod); }
  } else {
    row.adet -= adet;
  }
  sellEditor = null;
  saveState();
  renderMain();
}

function deleteSoldRecord(key, id){
  if(!confirm("Bu satış kaydı silinsin mi?")) return;
  PORTFOLIOS[key].sold = PORTFOLIOS[key].sold.filter(s=>s.id!==id);
  saveState();
  renderMain();
}

/* ---------- Satılanlar (gerçekleşen kar/zarar) tablosu ---------- */
function renderSoldSection(key){
  const p = PORTFOLIOS[key];
  const wrap = document.createElement("div");
  if(!p.sold || p.sold.length===0) return wrap; // hiç satış yoksa bölümü hiç gösterme

  // Gerçekleşen kar/zararı satış kaydının alış/satış fiyatlarından yeniden hesapla.
  // Böylece eski kayıtlarda saklanmış hatalı karZarar değeri ekranda yanlış görünmez.
  const realized = s => {
    const adet = Number(s.adet) || 0;
    const alis = Number(s.alis) || 0;
    const satis = Number(s.satisFiyati) || 0;
    const karZarar = (satis - alis) * adet;
    const karZararPct = safeDiv(karZarar, alis * adet);
    return { ...s, karZarar, karZararPct };
  };
  const realizedRows = p.sold.map(realized);
  const totalRealized = realizedRows.reduce((sum,s)=>sum+s.karZarar, 0);
  wrap.innerHTML = `<div class="section-title">Satılanlar (Gerçekleşen Kar/Zarar: <span class="${pctClass(totalRealized)}">${fmtMoney(totalRealized,p.currency)}</span>)</div>`;

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";
  const sorted = realizedRows.sort((a,b)=> b.satisTarihi.localeCompare(a.satisTarihi));
  tableWrap.innerHTML = `
    <table>
      <thead><tr>
        <th>Kod</th><th>Adet</th><th>Alış Fiy.</th><th>Alış Tar.</th>
        <th>Satış Fiy.</th><th>Satış Tar.</th><th>Kar/Zarar</th><th>Kar/Zarar %</th><th>İşlem</th>
      </tr></thead>
      <tbody>
        ${sorted.map(s => `
          <tr>
            <td style="text-align:left;"><span class="kod-pill">${s.kod}</span></td>
            <td>${s.adet.toLocaleString("tr-TR")}</td>
            <td>${fmtMoneyPlain(s.alis,p.currency)}</td>
            <td>${s.alisTarihi}</td>
            <td>${fmtMoneyPlain(s.satisFiyati,p.currency)}</td>
            <td>${s.satisTarihi}</td>
            <td class="${pctClass(s.karZarar)}">${fmtMoney(s.karZarar,p.currency)}</td>
            <td class="${pctClass(s.karZararPct)}">${fmtPct(s.karZararPct)}</td>
            <td class="row-actions"><button class="btn btn-sm btn-danger" data-sold-id="${s.id}">Sil</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  wrap.appendChild(tableWrap);

  tableWrap.querySelectorAll("button[data-sold-id]").forEach(btn => {
    btn.addEventListener("click", () => deleteSoldRecord(key, Number(btn.dataset.soldId)));
  });

  return wrap;
}

function saveRow(key, id, grid){
  const p = PORTFOLIOS[key];
  const inputs = grid.querySelectorAll("[data-field]");
  const data = {};
  let valid = true;
  inputs.forEach(inp => {
    let val = inp.value;
    if(!val && !inp.dataset.optional){ inp.style.borderColor="var(--red)"; valid=false; } else inp.style.borderColor="";
    if(inp.type==="number") val = Number(val);
    data[inp.dataset.field] = val;
  });
  if(!valid) return;
  if(id===null){ data.id = nextId[key]++; p.rows.push(data); }
  else { Object.assign(p.rows.find(r=>r.id===id), data); }
  editingId[key]=null;
  saveState();
  renderMain();
}

function deleteRow(key,id){
  if(!confirm("Bu kaydı silmek istediğinize emin misiniz?")) return;
  const p = PORTFOLIOS[key];
  const row = p.rows.find(r=>r.id===id);
  p.rows = p.rows.filter(r=>r.id!==id);
  // Bu koda ait başka satır kalmadıysa, o koda ait eski fiyat geçmişini de temizle
  // (aksi halde silinen hissenin geçmişi, aynı kodla eklenen yeni bir hisseye yanlışlıkla uygulanır)
  if(row && !p.rows.some(r=>r.kod===row.kod)){
    p.history = p.history.filter(h=>h.kod!==row.kod);
  }
  saveState();
  renderMain();
}

/* ============================= CSV EXPORT ============================= */
function exportCSV(key){
  const p = PORTFOLIOS[key];
  const headers = ["Kod","Adet","Alış Fiyatı","Alış Tarihi","Güncel Fiyat","Maliyet","Güncel Değer","Kar/Zarar","Kar/Zarar %"];
  const lines = [headers.join(";")];
  p.rows.forEach(r => {
    const c = computed(r,key);
    lines.push([r.kod,r.adet,r.alis,r.alisTarihi,r.guncel,
      c.maliyet.toFixed(2), c.guncelDeger.toFixed(2), c.karZarar.toFixed(2), pctStr(c.karZararPct)
    ].join(";"));
  });
  const blob = new Blob(["\uFEFF"+lines.join("\n")], {type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `${key}_portfoy.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function pctStr(v){ return v===null||v===undefined||isNaN(v) ? "" : (v*100).toFixed(1)+"%"; }

/* ============================= CHARTS (bağımsız SVG — CDN gerektirmez) ============================= */
function formatAxisVal(v){
  if(Math.abs(v)>=1000) return (v/1000).toFixed(1)+"k";
  return (Math.round(v*10)/10).toString();
}

function svgPie(container, labels, values, colors){
  const total = values.reduce((a,b)=>a+(b>0?b:0),0);
  const cx=50, cy=50, r=40;
  let angle=-90;
  let paths="";
  const legendItems=[];
  values.forEach((v,i) => {
    const pct = total ? Math.max(v,0)/total : 0;
    const sweep = pct*360;
    const color = colors[i%colors.length];
    if(total>0 && v>0){
      const x1 = cx + r*Math.cos(angle*Math.PI/180);
      const y1 = cy + r*Math.sin(angle*Math.PI/180);
      const endAngle = angle+sweep;
      const x2 = cx + r*Math.cos(endAngle*Math.PI/180);
      const y2 = cy + r*Math.sin(endAngle*Math.PI/180);
      const largeArc = sweep>180?1:0;
      paths += `<path d="M${cx},${cy} L${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${largeArc} 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z" fill="${color}" stroke="#0a0d10" stroke-width="0.5"><title>${labels[i]}: %${(pct*100).toFixed(1)}</title></path>`;
      angle = endAngle;
    }
    legendItems.push({label:labels[i], pct, color});
  });
  if(!paths){
    container.innerHTML = `<div class="empty-chart">Gösterilecek veri yok</div>`;
    return;
  }
  const svg = `<svg class="svg-chart" viewBox="0 0 100 100" style="max-width:190px;flex:0 0 auto;">${paths}</svg>`;
  const legend = `<ul class="chart-legend">${legendItems.map(it=>`<li><span class="swatch" style="background:${it.color}"></span>${it.label} · %${(it.pct*100).toFixed(1)}</li>`).join("")}</ul>`;
  container.innerHTML = svg + legend;
}

function svgBarGrouped(container, labels, datasets, opts={}){
  if(labels.length===0){ container.innerHTML = `<div class="empty-chart">Gösterilecek veri yok</div>`; return; }
  const suffix = opts.suffix || "";
  const W=600, H=240, padL=48, padR=14, padT=14, padB=32;
  const plotW=W-padL-padR, plotH=H-padT-padB;
  const allVals = datasets.flatMap(d=>d.data);
  let min = Math.min(0,...allVals), max = Math.max(0,...allVals);
  if(min===max) max = min+1;
  const range = max-min;
  const yForVal = v => padT + plotH - ((v-min)/range)*plotH;
  const zeroY = yForVal(0);
  const n = labels.length;
  const groupW = plotW/n;
  const gap=4;
  const barW = Math.max((groupW - gap*(datasets.length+1))/datasets.length, 2);

  let svg = `<svg class="svg-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;
  const steps=4;
  for(let i=0;i<=steps;i++){
    const v = min + (range*i/steps);
    const y = yForVal(v);
    svg += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>`;
    svg += `<text x="${padL-6}" y="${(y+3).toFixed(1)}" font-size="9.5" text-anchor="end">${formatAxisVal(v)}${suffix}</text>`;
  }
  svg += `<line x1="${padL}" y1="${zeroY.toFixed(1)}" x2="${W-padR}" y2="${zeroY.toFixed(1)}" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>`;

  labels.forEach((label,i) => {
    const groupX = padL + i*groupW;
    datasets.forEach((ds,j) => {
      const val = ds.data[i] ?? 0;
      const barX = groupX + gap + j*(barW+gap);
      const y1 = yForVal(val);
      const barY = Math.min(y1,zeroY);
      const barH = Math.max(Math.abs(y1-zeroY), 0.5);
      const color = ds.colors ? ds.colors[i] : (typeof ds.color === "function" ? ds.color(val) : ds.color);
      svg += `<rect x="${barX.toFixed(1)}" y="${barY.toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" fill="${color}" rx="2"><title>${label} · ${ds.label}: ${val}${suffix}</title></rect>`;
    });
    svg += `<text x="${(groupX+groupW/2).toFixed(1)}" y="${(H-padB+16).toFixed(1)}" font-size="10" text-anchor="middle">${label}</text>`;
  });
  svg += `</svg>`;

  const showLegend = datasets.length>1;
  const legend = showLegend ? `<ul class="chart-legend">${datasets.map(ds=>`<li><span class="swatch" style="background:${typeof ds.color==='function'?'#8992a0':ds.color}"></span>${ds.label}</li>`).join("")}</ul>` : "";
  container.innerHTML = svg + legend;
}

function pct100(v){ return v===null||v===undefined||isNaN(v) ? 0 : +(v*100).toFixed(1); }

function renderChartsSection(key){
  const p = PORTFOLIOS[key];
  const section = document.createElement("div");
  section.innerHTML = `<div class="section-title">Grafikler</div>`;

  const grid1 = document.createElement("div"); grid1.className="chart-grid";
  grid1.innerHTML = `
    <div class="chart-card"><h4>Portföy Dağılımı (Güncel Değere Göre)</h4><div class="canvas-box" id="box-${key}-pie"></div></div>
    <div class="chart-card"><h4>Hisse Bazında Kar/Zarar</h4><div class="canvas-box" id="box-${key}-pl"></div></div>
  `;
  section.appendChild(grid1);

  const grid2 = document.createElement("div"); grid2.className="chart-grid";
  grid2.innerHTML = `
    <div class="chart-card"><h4>Performans Karşılaştırması (%)</h4><div class="canvas-box" id="box-${key}-perf"></div></div>
    <div class="chart-card"><h4>Maliyet ve Güncel Değer</h4><div class="canvas-box" id="box-${key}-cv"></div></div>
  `;
  section.appendChild(grid2);

  requestAnimationFrame(() => drawCharts(key));
  return section;
}

function drawCharts(key){
  const p = PORTFOLIOS[key];
  const labels = p.rows.map(r=>r.kod);
  const enriched = p.rows.map(r=>({row:r,c:computed(r,key)}));
  const palette = ["#d9a441","#4f8fd1","#3fb6a8","#8a6fd6","#e0554f","#7d9c46","#c2703a","#c25a9e"];

  const pieBox = document.getElementById(`box-${key}-pie`);
  if(pieBox) svgPie(pieBox, labels, enriched.map(e=>e.c.guncelDeger), palette);

  const plBox = document.getElementById(`box-${key}-pl`);
  if(plBox) svgBarGrouped(plBox, labels, [
    {label:"Kar/Zarar", data:enriched.map(e=>e.c.karZarar), color:v=>v>=0?"#22b573":"#e0554f"}
  ], {suffix:""});

  const perfBox = document.getElementById(`box-${key}-perf`);
  if(perfBox){
    if(key==="bist"){
      const groups = ["ALFA","BETA","DELTA","KATILIM"];
      const data = groups.map(group => {
        const rows = p.rows.filter(r => r.kategori === group);
        const maliyet = rows.reduce((sum,r) => sum + (Number(r.adet)||0) * (Number(r.alis)||0), 0);
        const kar = rows.reduce((sum,r) => sum + ((Number(r.guncel)||0) - (Number(r.alis)||0)) * (Number(r.adet)||0), 0);
        return maliyet ? +(kar / maliyet * 100).toFixed(2) : 0;
      });
      svgBarGrouped(perfBox, groups, [
        {label:"Kâr/Zarar", data, color:v=>v>=0?"#22b573":"#e0554f"}
      ], {suffix:"%"});
    } else {
      perfBox.innerHTML = `<div class="empty-chart">Kategori performansı yalnızca BIST için gösterilir.</div>`;
    }
  }

  const cvBox = document.getElementById(`box-${key}-cv`);
  if(cvBox) svgBarGrouped(cvBox, labels, [
    {label:"Maliyet", data:enriched.map(e=>e.c.maliyet), color:"#5b6472"},
    {label:"Güncel Değer", data:enriched.map(e=>e.c.guncelDeger), color:p.accent},
  ], {suffix:""});
}

function getPortfolioRiskLevel(){
  const rows = PORTFOLIOS.bist.rows;
  const weights = {ALFA:0,BETA:0,DELTA:0,KATILIM:0};
  let total = 0;
  rows.forEach(r => {
    const value = (Number(r.adet)||0) * (Number(r.guncel)||0);
    total += value;
    if(weights[r.kategori] !== undefined) weights[r.kategori] += value;
  });
  if(!total) return {label:"Veri yok", score:0};
  const score = (weights.ALFA/total)*9 + (weights.BETA/total)*8 + (weights.DELTA/total)*5 + (weights.KATILIM/total)*4;
  return {score, label: score >= 7 ? "Yüksek" : score >= 5 ? "Orta" : "Düşük"};
}

function renderPortfolioSummary(){
  const wrap = document.createElement("div");
  wrap.className = "panel active";
  const b = portfolioTotals("bist");
  const a = portfolioTotals("abd");
  const f = portfolioTotals("fon");
  const k = portfolioTotals("kripto");
  const aTL = a.guncelDeger * usdTry;
  const kTL = k.guncelDeger * usdTry;
  const anaBakiye = getRealizedSoldRows().reduce((sum,r) =>
    sum + (r.currency === "$" ? r.satisTutari * usdTry : r.satisTutari), 0);
  const toplamYatirim = b.guncelDeger + aTL + f.guncelDeger + kTL;
  const toplamVarlik = toplamYatirim + anaBakiye;
  const risk = getPortfolioRiskLevel();

  wrap.innerHTML = `
    <div class="section-title">Portföy Özeti</div>
    <div class="cards">
      <div class="card"><div class="label">TOPLAM VARLIK</div><div class="value pos">${fmtMoneyPlain(toplamVarlik,"TL")}</div><div class="sub">Yatırımlar + Ana Bakiye</div></div>
      <div class="card"><div class="label">YATIRIMLAR</div><div class="value">${fmtMoneyPlain(toplamYatirim,"TL")}</div><div class="sub">BIST + ABD + Fon + Kripto</div></div>
      <div class="card"><div class="label">ANA BAKİYE</div><div class="value">${fmtMoneyPlain(anaBakiye,"TL")}</div><div class="sub">Satışlardan gelen brüt tutar</div></div>
      <div class="card"><div class="label">BIST RİSK DÜZEYİ</div><div class="value">${risk.label}</div><div class="sub">Tahmini skor: ${risk.score.toFixed(1)}/10</div></div>
    </div>
    <div class="section-title" style="margin-top:22px;">Portföy Dağılımı</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Portföy</th><th>Güncel Değer (TL)</th><th>Pay</th><th>Kâr/Zarar</th></tr></thead>
        <tbody>
          ${[
            ["BIST",b.guncelDeger,b.karZarar],
            ["ABD",aTL,a.karZarar*usdTry],
            ["Fon",f.guncelDeger,f.karZarar],
            ["Kripto",kTL,k.karZarar*usdTry]
          ].map(x=>`<tr><td><span class="kod-pill">${x[0]}</span></td><td>${fmtMoneyPlain(x[1],"TL")}</td><td>%${toplamYatirim ? (x[1]/toplamYatirim*100).toFixed(1) : "0.0"}</td><td class="${pctClass(x[2])}">${fmtMoney(x[2],"TL")}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>`;
  return wrap;
}

/* ============================= OVERVIEW ============================= */
function renderOverview(){
  const panel = document.createElement("div");
  panel.className = "panel active";

  const fxRow = document.createElement("div");
  fxRow.className = "fx-row";
  fxRow.innerHTML = `<label>USD/TRY Kuru</label><input type="number" step="0.01" id="fxInput" value="${usdTry}"> <span style="color:var(--text-soft); font-size:12px;">— ABD ve Kripto portföylerini TL'ye çevirmek için, kendi güncel kurunuzu girin</span>`;
  panel.appendChild(fxRow);
  requestAnimationFrame(() => {
    document.getElementById("fxInput").addEventListener("input", e => {
      usdTry = Number(e.target.value)||0; saveState(); renderMain();
    });
  });

  const bTot = portfolioTotals("bist"), aTot = portfolioTotals("abd"), fTot = portfolioTotals("fon"), kTot = portfolioTotals("kripto");
  const aTotTL = { maliyet:aTot.maliyet*usdTry, guncelDeger:aTot.guncelDeger*usdTry, karZarar:aTot.karZarar*usdTry };
  const kTotTL = { maliyet:kTot.maliyet*usdTry, guncelDeger:kTot.guncelDeger*usdTry, karZarar:kTot.karZarar*usdTry };
  const grandMaliyet = bTot.maliyet + aTotTL.maliyet + fTot.maliyet + kTotTL.maliyet;
  const grandDeger = bTot.guncelDeger + aTotTL.guncelDeger + fTot.guncelDeger + kTotTL.guncelDeger;
  const grandKZ = grandDeger - grandMaliyet;
  const grandKZPct = safeDiv(grandKZ, grandMaliyet);

  // Ana bakiye: satılmış varlıklardan gelen brüt satış tutarları.
  // USD satışları USD/TRY kuru ile TL'ye çevrilir.
  const soldRows = getRealizedSoldRows();
  const anaBakiye = soldRows.reduce((sum,r) => {
    return sum + (r.currency === "$" ? r.satisTutari * usdTry : r.satisTutari);
  }, 0);

  const cards = document.createElement("div");
  cards.className = "cards";
  cards.innerHTML = `
    <div class="card"><div class="label">ANA BAKİYE</div><div class="value pos">${fmtMoneyPlain(anaBakiye,"TL")}</div><div class="sub">Satılan varlıklardan gelen brüt nakit</div></div>
    <div class="card"><div class="label">Toplam Maliyet (TL eşd.)</div><div class="value">${fmtMoneyPlain(grandMaliyet,"TL")}</div></div>
    <div class="card"><div class="label">Toplam Güncel Değer (TL eşd.)</div><div class="value">${fmtMoneyPlain(grandDeger,"TL")}</div></div>
    <div class="card"><div class="label">Toplam Kar/Zarar</div><div class="value ${pctClass(grandKZ)}">${fmtMoney(grandKZ,"TL")}</div><div class="sub ${pctClass(grandKZPct)}">${fmtPct(grandKZPct)}</div></div>
  `;
  panel.appendChild(cards);
  panel.appendChild(renderPortfolioSummary());

  const section = document.createElement("div");
  section.innerHTML = `<div class="section-title">Portföyler Arası Dağılım (TL Eşdeğeri)</div>`;
  const grid = document.createElement("div"); grid.className="chart-grid";
  grid.innerHTML = `
    <div class="chart-card"><h4>Portföy Payları</h4><div class="canvas-box" id="box-ov-pie"></div></div>
    <div class="chart-card"><h4>Portföy Bazında Kar/Zarar (TL Eşd.)</h4><div class="canvas-box" id="box-ov-pl"></div></div>
  `;
  section.appendChild(grid);
  panel.appendChild(section);

  requestAnimationFrame(() => {
    const pieBox = document.getElementById("box-ov-pie");
    if(pieBox) svgPie(pieBox, ["BIST","ABD","Fon","Kripto"], [bTot.guncelDeger, aTotTL.guncelDeger, fTot.guncelDeger, kTotTL.guncelDeger], ["#d9a441","#4f8fd1","#3fb6a8","#e0954f"]);
    const plBox = document.getElementById("box-ov-pl");
    if(plBox) svgBarGrouped(plBox, ["BIST","ABD","Fon","Kripto"], [
      {label:"Kar/Zarar (TL)", data:[bTot.karZarar, aTotTL.karZarar, fTot.karZarar, kTotTL.karZarar], color:v=>v>=0?"#22b573":"#e0554f"}
    ], {suffix:""});
  });

  return panel;
}

/* ============================= MAKROEKONOMİK VERİLER (bağımsız bölüm) ============================= */
function macroCounts(){
  let total=0, done=0;
  MACRO.categories.forEach(cat => cat.items.forEach(it => { total++; if(it.incelendi) done++; }));
  return {total, done};
}

function renderMacroPanel(){
  const panel = document.createElement("div");
  panel.className = "panel active";
  panel.style.setProperty("--accent", "#c2703a");

  const {total, done} = macroCounts();
  const cards = document.createElement("div");
  cards.className = "cards";
  cards.innerHTML = `
    <div class="card"><div class="label">Toplam Gösterge</div><div class="value">${total}</div></div>
    <div class="card"><div class="label">İncelenen</div><div class="value pos">${done}</div></div>
    <div class="card"><div class="label">Bekleyen</div><div class="value">${total-done}</div></div>
    <div class="card"><div class="label">Tamamlanma</div><div class="value">%${total?Math.round(done/total*100):0}</div></div>
  `;
  panel.appendChild(cards);

  const grid = document.createElement("div");
  grid.className = "macro-grid";
  MACRO.categories.forEach(cat => {
    const catDone = cat.items.filter(i=>i.incelendi).length;
    const card = document.createElement("div");
    card.className = "macro-card";
    card.innerHTML = `
      <div class="macro-card-head">
        <h4>${cat.label}</h4>
        <span class="macro-count">${catDone}/${cat.items.length}</span>
      </div>
      <ul class="macro-list">
        ${cat.items.map(it => `
          <li class="macro-item ${it.incelendi?'done':''}" data-cat="${cat.key}" data-id="${it.id}">
            <label class="macro-check">
              <input type="checkbox" ${it.incelendi?'checked':''} data-act="toggle" data-cat="${cat.key}" data-id="${it.id}">
              <span>${it.isim}</span>
            </label>
            <div class="macro-item-right">
              ${it.incelendi
                ? `<input type="date" class="macro-date" value="${it.tarih||''}" data-act="date" data-cat="${cat.key}" data-id="${it.id}">`
                : `<span class="macro-date-empty">—</span>`}
              <button class="btn btn-sm btn-danger" data-act="del" data-cat="${cat.key}" data-id="${it.id}">✕</button>
            </div>
          </li>
        `).join("")}
      </ul>
      <div class="macro-add-row">
        <input type="text" class="macro-add-input" placeholder="Yeni gösterge adı…" data-cat="${cat.key}">
        <button class="btn btn-sm btn-accent" data-act="add" data-cat="${cat.key}">+ Ekle</button>
      </div>
    `;
    grid.appendChild(card);
  });
  panel.appendChild(grid);

  // ---- event wiring ----
  grid.querySelectorAll('input[data-act="toggle"]').forEach(cb => {
    cb.addEventListener("change", () => {
      toggleMacroItem(cb.dataset.cat, Number(cb.dataset.id), cb.checked);
    });
  });
  grid.querySelectorAll('input[data-act="date"]').forEach(inp => {
    inp.addEventListener("change", () => {
      setMacroDate(inp.dataset.cat, Number(inp.dataset.id), inp.value);
    });
  });
  grid.querySelectorAll('button[data-act="del"]').forEach(btn => {
    btn.addEventListener("click", () => {
      deleteMacroItem(btn.dataset.cat, Number(btn.dataset.id));
    });
  });
  grid.querySelectorAll('button[data-act="add"]').forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      const input = grid.querySelector(`.macro-add-input[data-cat="${cat}"]`);
      const isim = input.value.trim();
      if(!isim) return;
      addMacroItem(cat, isim);
    });
  });

  return panel;
}

function findMacroCat(catKey){ return MACRO.categories.find(c=>c.key===catKey); }

function toggleMacroItem(catKey, id, checked){
  const cat = findMacroCat(catKey); if(!cat) return;
  const item = cat.items.find(i=>i.id===id); if(!item) return;
  item.incelendi = checked;
  if(checked && !item.tarih) item.tarih = new Date().toISOString().slice(0,10);
  if(!checked) item.tarih = null;
  saveState();
  renderMain();
}
function setMacroDate(catKey, id, tarih){
  const cat = findMacroCat(catKey); if(!cat) return;
  const item = cat.items.find(i=>i.id===id); if(!item) return;
  item.tarih = tarih;
  saveState();
  renderMain();
}
function deleteMacroItem(catKey, id){
  const cat = findMacroCat(catKey); if(!cat) return;
  if(!confirm("Bu göstergeyi silmek istediğinize emin misiniz?")) return;
  cat.items = cat.items.filter(i=>i.id!==id);
  saveState();
  renderMain();
}
function addMacroItem(catKey, isim){
  const cat = findMacroCat(catKey); if(!cat) return;
  cat.items.push({id:macroNextId++, isim, incelendi:false, tarih:null});
  saveState();
  renderMain();
}

/* ============================= INIT ============================= */
loadState();
renderMain();
pullFromCloud(true).then(ok => { if(ok) renderMain(); });