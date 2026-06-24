document.body.insertAdjacentHTML('afterbegin', `
  <div id="xss-poc-overlay" style="
    position:fixed;
    inset:0;
    z-index:999999;
    background:rgba(0,0,0,.55);
    backdrop-filter:blur(3px);
    color:#00ff88;
    font-family:monospace;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:32px;
    text-align:left;
  ">
    <div style="
      max-width:820px;
      border:1px solid rgba(0,255,136,.8);
      border-radius:18px;
      padding:32px;
      box-shadow:0 0 35px rgba(0,255,136,.45);
      background:rgba(5,5,5,.72);
    ">
      <div style="font-size:13px;opacity:.75;margin-bottom:12px;">
        responsible disclosure / harmless visual PoC
      </div>

      <h1 style="margin-top:0;color:#00ff88;">
        XSS підтверджено
      </h1>

      <p>Михайле, доброго дня.</p>

      <p>
        Я — етичний хакер. Знайшов XSS-вразливість і використав її лише для
        безпечної демонстрації.
      </p>

      <p>
        Дані не чіпав. Шкоди не завдавав. Хочу попросити коротку зустріч,
        щоб показати, як українські хакери можуть допомагати державі швидше
        знаходити й закривати такі ризики.
      </p>

      <p>
        Готовий відповідально передати технічні деталі команді.
      </p>

      <p style="margin-bottom:0;">— Богдан</p>
    </div>
  </div>
`);
