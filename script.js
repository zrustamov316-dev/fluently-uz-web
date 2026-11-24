const curriculumData = {
  en: {
    title: "Ingliz tilidan IELTS 9.0 va CEFR B2–C2 darajasiga chiqing",
    desc: "Barcha grammatika qoidalari, akademik so'z boyligi va IELTS Writing/Speaking strategiyalari bir joyda.",
    langCode: "en-US",
    lessons: [
      {
        level: "B2–C1 / IELTS 8.0+",
        title: "1. Mixed Conditionals & Inversion",
        summary: "O'tmish va hozirgi zamon bog'langan shart gaplar, inversiya formulalari va imtihon tuzoqlari.",
        content: `
          <h4>Nima uchun IELTS 8.0–9.0 da inversiya va mixed conditionals muhim?</h4>
          <p>Ko'pchilik o'quvchilar matn davomida faqat oddiy <i>If... will...</i> yoki <i>Because...</i> gaplar yozadi. Grammatik diapazon (<b>Grammatical Range and Accuracy</b>) da yuqori ball olish uchun murakkab shart gaplar va inversiyani tabiiy joyda qo'llash kerak.</p>
          <h4>1. Mixed Conditionals (Aralash shart gaplar)</h4>
          <p>O'tmishdagi harakatning hozirgi natijasini (yoki hozirgi holatning o'tmishdagi natijasini) ifodalaydi:</p>
          <div class="example-box">
            • <b>Past ➔ Present:</b> If + Past Perfect, would/could/might + V1<br>
            <i>"If governments had invested in public transit earlier, traffic congestion <b>would be</b> far lower today."</i><br>
            (Tarjimasi: Agar hukumatlar jamoat transportiga oldinroq sarmoya kiritganida, bugun tirbandlik ancha kam bo'lar edi.)<br><br>
            • <b>Present ➔ Past:</b> If + Past Simple, would/could/might + have + V3<br>
            <i>"If people <b>were</b> more aware of digital scams, fewer users <b>would have lost</b> their savings last year."</i><br>
            (Tarjimasi: Agar odamlar raqamli firibgarliklardan ko'proq xabardor bo'lganida, o'tgan yili kamroq foydalanuvchi jamg'armasini yo'qotgan bo'lar edi.)
          </div>
          <h4>2. Inversion (Inversiya qoidasi)</h4>
          <p>Inkor yoki cheklov ma'nosidagi ifoda gap boshiga chiqsa, savol gap tartibi qo'llanadi (yordamchi fe'l egadan oldin keladi):</p>
          <div class="example-box">
            ❌ <i>Not only the policy failed, it also wasted funds.</i><br>
            ✅ <i><b>Not only did the policy fail</b>, but it also wasted substantial public funds.</i><br>
            (Tarjimasi: Bu siyosat nafaqat muvaffaqiyatsiz tugadi, balki katta davlat mablag'larini ham sovurdi.)<br><br>
            ✅ <i><b>Under no circumstances should</b> personal data be shared with unverified platforms.</i><br>
            (Tarjimasi: Hech qanday holatda shaxsiy ma'lumotlar tekshirilmagan platformalar bilan ulashilmasligi kerak.)
          </div>
        `
      },
      {
        level: "C1 / IELTS 8.5–9.0",
        title: "2. IELTS Writing Task 2: Band 9 Essay Masterclass",
        summary: "Savol turlari, kirish (Thesis), PEEL paragraf modeli va mantiqiy bog'lanish (Cohesion).",
        content: `
          <h4>Asosiy Essay savol turlari</h4>
          <p>Savolni to'g'ri tushunmaslik (<b>Task Response</b>) eng katta xatolardan biridir. Savollar 4 asosiy turga bo'linadi:</p>
          <ul>
            <li><b>Agree / Disagree:</b> Pozitsiyangizni boshidan oxirigacha aniq ushlang.</li>
            <li><b>Discuss both views & give your opinion:</b> Har ikki tomonni alohida tahlil qiling va o'z fikringizni aniq bildiring.</li>
            <li><b>Problem & Solution:</b> Sabab/muammolarni va ularga mos aniq yechimlarni yozing.</li>
            <li><b>Two-part question:</b> Ikkala savolga ham alohida va to'liq javob bering.</li>
          </ul>
          <h4>Kirish (Introduction) va PEEL modeli</h4>
          <div class="example-box">
            • <b>P (Point):</b> Paragrafning asosiy g'oyasi.<br>
            • <b>E (Explain):</b> Nima uchun bunday bo'lishining mantiqiy izohi.<br>
            • <b>E (Example):</b> Aniq misol (masalan, masofaviy ta'lim yoki qayta tayyorlash kurslari).<br>
            • <b>L (Link):</b> Xulosa qilib, asosiy tezisga bog'lash.
          </div>
        `
      },
      {
        level: "C1–C2 / IELTS 9.0",
        title: "3. IELTS Writing Task 1: Data, Maps & Processes",
        summary: "Grafiklar, jadvallar, xaritalar va jarayonlarni faktlar asosida Band 9 darajasida tasvirlash.",
        content: `
          <h4>Task 1 ning oltin qoidasi</h4>
          <p>Task 1 da <b>shaxsiy fikr, taxmin yoki sabab o'ylab topish mumkin emas</b>. Faqat grafik, jadval, xarita yoki sxemada ko'rsatilgan ma'lumot tasvirlanadi.</p>
          <h4>4 qismli tuzilma</h4>
          <ul>
            <li><b>Introduction:</b> Savol matnini o'z so'zlaringiz bilan qayta yozing.</li>
            <li><b>Overview:</b> Eng yuqori/eng past qiymatlar, umumiy o'sish yoki kamayish.</li>
            <li><b>Body Paragraph 1 & 2:</b> Raqamlar, foizlar va taqqoslashlar bilan guruhlab yozing.</li>
          </ul>
          <div class="example-box">
            • <b>O'sish:</b> rose gradually, surged dramatically, reached a peak of...<br>
            • <b>Pasayish:</b> declined steadily, plummeted, dropped to a low of...<br>
            • <b>Taqqoslash:</b> ...was nearly <b>twice as high as</b>..., ...accounted for <b>the largest share</b>...
          </div>
        `
      },
      {
        level: "B2–C2 / IELTS Reading",
        title: "4. IELTS Reading: High-Accuracy Strategies",
        summary: "TRUE/FALSE/NOT GIVEN farqi, Matching Headings va vaqtni to'g'ri taqsimlash.",
        content: `
          <h4>TRUE vs FALSE vs NOT GIVEN</h4>
          <div class="example-box">
            • <b>TRUE:</b> Matndagi fikr savol bilan bir xil (ko'pincha sinonimlar bilan yozilgan bo'ladi).<br>
            • <b>FALSE:</b> Matn savoldagi fikrni to'g'ridan-to'g'ri inkor etadi yoki unga zid ma'lumot beradi.<br>
            • <b>NOT GIVEN:</b> Matnda bu haqida aniq ma'lumot yo'q.
          </div>
          <h4>Vaqt boshqaruvi (60 daqiqa)</h4>
          <ul>
            <li><b>Passage 1:</b> ~15–17 daqiqa.</li>
            <li><b>Passage 2:</b> ~20 daqiqa.</li>
            <li><b>Passage 3:</b> ~20–23 daqiqa.</li>
          </ul>
        `
      },
      {
        level: "B2–C2 / IELTS Listening",
        title: "5. IELTS Listening: Traps, Accents & Note Completion",
        summary: "Spiker tuzoqlari (distractors), imlo aniqligi va bo'sh joylarni to'g'ri to'ldirish.",
        content: `
          <h4>Distractor (Chalg'ituvchi ma'lumot) nima?</h4>
          <p>Listening'da ko'pincha avval bitta variant aytiladi, keyin esa tuzatiladi:</p>
          <div class="example-box">
            <i>"We initially booked the conference hall for <b>May 12th</b>, but due to renovations it's been shifted to <b>May 19th</b>."</i><br>
            ➔ To'g'ri javob: <b>19th May</b> / <b>May 19</b>.
          </div>
        `
      },
      {
        level: "B2–C2 / IELTS Speaking",
        title: "6. IELTS Speaking Parts 1, 2 & 3: Band 9 Framework",
        summary: "Qisqa va uzun javoblar muvozanati, Cue Card tuzilmasi va abstrakt muhokama.",
        content: `
          <h4>Speaking bo'limlari bo'yicha yondashuv</h4>
          <ul>
            <li><b>Part 1:</b> 2–3 gap bilan aniq javob + qisqa sabab yoki misol.</li>
            <li><b>Part 2:</b> 1 daqiqa tayyorgarlikda kalit so'zlar yozing va 1–2 daqiqa ravon gapiring.</li>
            <li><b>Part 3:</b> Shaxsiy tajribadan umumiy jamiyat/iqtisod/ta'lim tahliliga o'ting.</li>
          </ul>
        `
      },
      {
        level: "C1–C2 Grammar",
        title: "7. Subjunctive Mood & Passive Reporting Verbs",
        summary: "Rasmiy va akademik uslubda muhimlik, tavsiya va umumiy fikrni ifodalash.",
        content: `
          <h4>Mandative Subjunctive</h4>
          <div class="example-box">
            ✅ It is vital that every applicant <b>submit</b> the documents on time.<br>
            ✅ The committee recommended that the budget <b>be revised</b>.
          </div>
          <h4>Passive Reporting Verbs</h4>
          <div class="example-box">
            • <i>"It is widely acknowledged that early childhood education shapes lifelong skills."</i><br>
            • <i>"Renewable energy costs <b>are projected to fall</b> further."</i>
          </div>
        `
      },
      {
        level: "B2–C2 Grammar",
        title: "8. Participle Clauses, Cleft Sentences & Fronting",
        summary: "Gaplarni ixchamlashtirish, urg'u berish va uslubiy xilma-xillik.",
        content: `
          <h4>Participle Clauses va Cleft Sentences</h4>
          <div class="example-box">
            • <i>"<b>Having analyzed</b> the survey data, the researchers published their findings."</i><br>
            • <i>"<b>What matters most in language learning is</b> consistent daily practice."</i><br>
            • <i>"<b>It is</b> long-term habits, rather than cramming, <b>that</b> produce lasting results."</i>
          </div>
        `
      },
      {
        level: "B2–C1 Grammar",
        title: "9. Modals of Deduction, Speculation & Past Regret",
        summary: "Taxmin, ishonch darajasi va o'tmishdagi afsus/imkoniyatni aniq ifodalash.",
        content: `
          <h4>Taxmin va O'tmishdagi holat</h4>
          <div class="example-box">
            • <b>must / must have + V3:</b> Yuqori ishonch.<br>
            • <b>can't / can't have + V3:</b> Inkor ishonch.<br>
            • <b>should have + V3:</b> Qilinishi kerak edi, lekin qilinmadi.<br>
            • <b>needn't have + V3:</b> Kerak emas edi, lekin qilib qo'yildi.
          </div>
        `
      },
      {
        level: "C1–C2 Style",
        title: "10. Relative Clauses & Nominalisation (Academic Style)",
        summary: "Qo'shimcha ma'lumot berish va fe'l/sifatlarni otga aylantirib akademik uslub yaratish.",
        content: `
          <h4>Non-defining Relative Clauses & Nominalisation</h4>
          <div class="example-box">
            ❌ <i>Because city populations are growing rapidly, housing prices are increasing.</i><br>
            ✅ <i><b>Rapid urban population growth</b> has driven <b>a steady rise in housing prices</b>.</i>
          </div>
        `
      },
      {
        level: "C1–C2 Vocabulary",
        title: "11. Advanced Hedging & Nuanced Vocabulary",
        summary: "Akademik ehtiyotkorlik (Hedging) va nozik ma'noli B2–C2 so'z boyligi.",
        content: `
          <h4>Hedging va Collocations</h4>
          <div class="example-box">
            • <b>Hedging:</b> <i>tend to, appear to, seem likely, largely, predominantly</i><br>
            • <b>Collocations:</b> <i>pose a significant threat, foster critical thinking, bridge the gap</i>
          </div>
        `
      },
      {
        level: "B2–C2 / Band 9 Fixes",
        title: "12. Common Band 7 -> Band 9 Grammar & Lexical Fixes",
        summary: "Eng ko'p uchraydigan xatolarni aniqlash va ularni yuqori ball darajasiga ko'tarish.",
        content: `
          <h4>Asosiy tuzatishlar</h4>
          <div class="example-box">
            ❌ <i>informations, advices, researches, equipments</i><br>
            ✅ <i><b>information, advice, research, equipment</b></i><br><br>
            ❌ <i>Traffic is worsening, governments should act.</i> (Comma splice)<br>
            ✅ <i>Traffic is worsening<b>; therefore,</b> governments should act.</i>
          </div>
        `
      }
    ],
    words: [
      { word: "Ubiquitous", trans: "Hamma joyda uchraydigan (o'qilishi: yubikvitas)", level: "C1 / IELTS 8.5" },
      { word: "Mitigate", trans: "Yumshatmoq, kamaytirmoq (o'qilishi: miti-geyt)", level: "B2 / IELTS 8.0" },
      { word: "Exacerbate", trans: "Yanada og'irlashtirmoq (o'qilishi: ig-zas-er-beyt)", level: "C1 / IELTS 9.0" },
      { word: "Inevitable", trans: "Muqarrar, qochib bo'lmaydigan (o'qilishi: in-ev-i-tibl)", level: "B2 / IELTS 7.5" },
      { word: "Scrutinize", trans: "Sinchkovlik bilan tekshirmoq (o'qilishi: skru-ti-nayz)", level: "C2 / IELTS 9.0" },
      { word: "Plummet", trans: "Keskin pasaymoq (o'qilishi: plamit)", level: "C1 / IELTS 8.5" },
      { word: "Alleviate", trans: "Yengillashtirmoq (o'qilishi: a-li-vi-eyt)", level: "C1 / IELTS 8.5" },
      { word: "Detrimental", trans: "Zararli, ziyon yetkazuvchi (o'qilishi: det-ri-men-tl)", level: "B2 / IELTS 8.0" }
    ],
    quiz: [
      {
        q: "1. IELTS 9.0 darajasidagi to'g'ri inversiya gapni toping:",
        options: [
          "Not only he passed the exam, but he also got 9.0.",
          "Not only did he pass the exam, but he also got 9.0.",
          "Not only passed he the exam, he got 9.0."
        ],
        correct: 1,
        exp: "Inkor ibora ('Not only') gap boshida kelsa, yordamchi fe'l ('did') egadan oldinga o'tadi."
      },
      {
        q: "2. IELTS Reading'da matnda umuman aytilmagan ma'lumot qanday belgilanadi?",
        options: ["FALSE", "NOT GIVEN", "UNKNOWN"],
        correct: 1,
        exp: "Matnda tasdiqlanmagan va inkor ham etilmagan ma'lumot har doim NOT GIVEN bo'ladi."
      },
      {
        q: "3. Subjunctive mood qoidasiga ko'ra qaysi gap to'g'ri?",
        options: [
          "It is essential that every student submits the essay.",
          "It is essential that every student submit the essay.",
          "It is essential that every student submitting the essay."
        ],
        correct: 1,
        exp: "'Essential', 'crucial', 'insist' kabi so'zlardan keyin fe'l qo'shimchasiz (submit) ishlatiladi."
      },
      {
        q: "4. 'Plummeted' so'zi IELTS Writing Task 1 da nimani anglatadi?",
        options: ["Keskin ko'tarilishni", "Keskin tushib ketishni", "Bir tekis turishni"],
        correct: 1,
        exp: "Plummet — grafikdagi ko'rsatkichning juda tez va keskin pastga tushishini bildiradi."
      },
      {
        q: "5. Mixed Conditional gapni to'g'ri to'ldiring: 'If I ____ harder at university, I would have a better job now.'",
        options: ["studied", "had studied", "would study"],
        correct: 1,
        exp: "O'tmishdagi shart (If + had V3) va hozirgi natija (would + V1) birlashganda Mixed Conditional bo'ladi."
      },
      {
        q: "6. IELTS Writing Task 2 da 'However' so'zining C1/C2 darajasidagi muqobili qaysi?",
        options: ["Conversely / Notwithstanding this", "Also / Besides", "Therefore / Thus"],
        correct: 0,
        exp: "'Conversely' va 'Notwithstanding this' qarama-qarshi fikrni akademik tarzda bog'laydi."
      },
      {
        q: "7. 'A double-edged sword' idiomasi qanday ma'noni beradi?",
        options: [
          "Juda xavfli qurol",
          "Ham ijobiy, ham salbiy tomoni bor narsa",
          "Tez hal bo'ladigan muammo"
        ],
        correct: 1,
        exp: "Masalan, texnologiya yoki sun'iy intellekt haqida gapirganda 'double-edged sword' ishlatiladi."
      },
      {
        q: "8. Passive Reporting Verb qoidasiga mos C1/C2 gapni toping:",
        options: [
          "People are believing climate change is fast.",
          "Climate change is widely believed to be accelerating.",
          "It believes that climate change accelerates."
        ],
        correct: 1,
        exp: "'Subject + is widely believed + to infinitive' — akademik yozuvdagi kuchli qoliplardan biri."
      },
      {
        q: "9. IELTS Writing Task 1 (Academic) da qaysi birini yozish QAT'IYAN MUMKIN EMAS?",
        options: [
          "Asosiy trendlarni taqqoslash",
          "Shaxsiy fikr bildirish (In my opinion...)",
          "Foiz va raqamlarni keltirish"
        ],
        correct: 1,
        exp: "Task 1 faqat vizual ma'lumotni obyektiv tasvirlaydi; shaxsiy fikr ballni tushiradi."
      },
      {
        q: "10. 'Exacerbate' so'zining sinonimini toping:",
        options: ["Alleviate (yengillashtirmoq)", "Aggravate / Worsen (og'irlashtirmoq)", "Eliminate (yo'q qilmoq)"],
        correct: 1,
        exp: "Exacerbate — mavjud muammo yoki vaziyatni yanada yomonlashtirish."
      },
      {
        q: "11. Cleft Sentence (urg'u beruvchi gap) qaysi qatorda to'g'ri tuzilgan?",
        options: [
          "What governments need to prioritize is education.",
          "What governments need to prioritize are education.",
          "That governments need to prioritize is education."
        ],
        correct: 0,
        exp: "'What + clause + is + noun' konstruksiyasi fikrga kuchli urg'u beradi."
      },
      {
        q: "12. 'Ubiquitous' so'zi qaysi gapda to'g'ri qo'llangan?",
        options: [
          "Smartphones have become ubiquitous in modern society.",
          "This rare flower is ubiquitous because it only grows in one cave.",
          "He was very ubiquitous during the silent meeting."
        ],
        correct: 0,
        exp: "Ubiquitous — hamma joyda mavjud, keng tarqalgan degan ma'noni anglatadi."
      }
    ]
  },

  ru: {
    title: "Rus tilini 0 dan A1+ (Erkin muloqot) darajasigacha o'rganing",
    desc: "Har bir so'zning o'zbekcha o'qilishi va ma'nosi bilan rod, zamon, kelishiklar va kundalik muloqot.",
    langCode: "ru-RU",
    lessons: [
      {
        level: "A1 Boshlang'ich",
        title: "1. Rus tilida Rod (Jins) va Ko'plik shakli",
        summary: "Erkak, ayol va o'rta jinsni (rodni) oxirgi harfidan ajratish hamda ko'plik shaklini o'rganish.",
        content: `
          <h4>Rod (jins) nima va nega kerak?</h4>
          <p>Rus tilida har bir ot <b>3 ta jinsdan (roddan)</b> biriga tegishli bo'ladi. Gap tuzishda sifat va fe'llar shu jinsga qarab o'zgaradi.</p>
          <div class="example-box">
            • <b>Erkak jinsi (Мужской род):</b> Undosh harf yoki <b>-й</b> bilan tugaydi:<br>
              — <i>дом</i> (o'qilishi: <b>dom</b>) — uy<br>
              — <i>стол</i> (o'qilishi: <b>stol</b>) — stol<br>
              — <i>чай</i> (o'qilishi: <b>chay</b>) — choy<br><br>
            • <b>Ayol jinsi (Женский род):</b> <b>-а</b> yoki <b>-я</b> bilan tugaydi:<br>
              — <i>книга</i> (o'qilishi: <b>kniga</b>) — kitob<br>
              — <i>вода</i> (o'qilishi: <b>vada</b>) — suv<br>
              — <i>семья</i> (o'qilishi: <b>simya</b>) — oila<br><br>
            • <b>O'rta jins (Средний род):</b> <b>-о</b> yoki <b>-е</b> bilan tugaydi:<br>
              — <i>окно</i> (o'qilishi: <b>akno</b>) — deraza<br>
              — <i>море</i> (o'qilishi: <b>more</b>) — dengiz
          </div>
          <h4>Ko'plik shakli</h4>
          <div class="example-box">
            • <i>стол</i> (<b>stol</b> — stol) ➔ <i>столы</i> (<b>stali</b> — stollar)<br>
            • <i>книга</i> (<b>kniga</b> — kitob) ➔ <i>книги</i> (<b>knigi</b> — kitoblar)<br>
            • <i>дом</i> (<b>dom</b> — uy) ➔ <i>дома</i> (<b>dama</b> — uylar)
          </div>
        `
      },
      {
        level: "A1 Asosiy",
        title: "2. Salomlashish, Tanishuv va Muloyim Muloqot",
        summary: "Kundalik hayotda eng ko'p ishlatiladigan salomlashish, tanishuv va yordam so'rash iboralari.",
        content: `
          <h4>Salomlashish va Xayrlashish</h4>
          <div class="example-box">
            • <i>Здравствуйте!</i> (o'qilishi: <b>zdravstvuyte</b>) — Assalomu alaykum!<br>
            • <i>Привет!</i> (o'qilishi: <b>privet</b>) — Salom!<br>
            • <i>Доброе утро</i> (o'qilishi: <b>dobroye utro</b>) — Xayrli tong<br>
            • <i>До свидания!</i> (o'qilishi: <b>da svidaniya</b>) — Xayr, ko'rishguncha!<br>
            • <i>Пока!</i> (o'qilishi: <b>paka</b>) — Xayr!
          </div>
          <h4>Tanishuv va Hol-ahvol</h4>
          <div class="example-box">
            • <i>Как вас зовут?</i> (o'qilishi: <b>kak vas zavut</b>) — Ismingiz nima?<br>
            • <i>Меня зовут...</i> (o'qilishi: <b>minya zavut...</b>) — Mening ismim...<br>
            • <i>Как дела?</i> (o'qilishi: <b>kak dila</b>) — Ishlar qalay? ➔ <i>Хорошо</i> (<b>xarasho</b> — yaxshi)
          </div>
        `
      },
      {
        level: "A1+ Grammatika",
        title: "3. Hozirgi Zamon va Fe'l Tuslanishi",
        summary: "Men, sen, u, biz, siz, ular bilan fe'llarni to'g'ri o'zgartirish va inkor gap yasash.",
        content: `
          <h4>Fe'l shaxslarga qarab qanday o'zgaradi?</h4>
          <div class="example-box">
            • <i>Я работаю</i> (o'qilishi: <b>ya rabotayu</b>) — Men ishlayman<br>
            • <i>Ты работаешь</i> (o'qilishi: <b>ti rabotayesh</b>) — Sen ishlaysan<br>
            • <i>Он / Она работает</i> (o'qilishi: <b>on / ana rabotayet</b>) — U ishlaydi<br>
            • <i>Мы работаем</i> (o'qilishi: <b>mi rabotayem</b>) — Biz ishlaymiz<br>
            • <i>Вы работаете</i> (o'qilishi: <b>vi rabotayete</b>) — Siz ishlaysiz<br>
            • <i>Они работают</i> (o'qilishi: <b>ani rabotayut</b>) — Ular ishlaydilar
          </div>
        `
      },
      {
        level: "A1+ Grammatika",
        title: "4. O'tgan va Kelasi Zamon",
        summary: "Bo'lib o'tgan ish-harakat va kelajakdagi rejalarni rus tilida aytish qoidalari.",
        content: `
          <h4>O'tgan va Kelasi zamon</h4>
          <div class="example-box">
            • <i>Он читал</i> (o'qilishi: <b>on chital</b>) — U (erkak) o'qidi<br>
            • <i>Она читала</i> (o'qilishi: <b>ana chitala</b>) — U (ayol) o'qidi<br>
            • <i>Они читали</i> (o'qilishi: <b>ani chitali</b>) — Ular o'qidilar<br>
            • <i>Я буду работать завтра</i> (o'qilishi: <b>ya budu rabotat zavtra</b>) — Men ertaga ishlayman
          </div>
        `
      },
      {
        level: "A1+ Kelishiklar",
        title: "5. Asosiy Kelishiklar: Nimani? va Qayerda?",
        summary: "'Kitobni o'qiyapman' va 'Toshkentda yashayman' kabi gaplardagi qo'shimchalar siri.",
        content: `
          <h4>Nimani? va Qayerda?</h4>
          <div class="example-box">
            • <i>Я читаю книгу</i> (o'qilishi: <b>ya chitayu knigu</b>) — Men kitobni o'qiyapman<br>
            • <i>Я пью воду</i> (o'qilishi: <b>ya pyu vodu</b>) — Men suv ichyapman<br>
            • <i>Я живу в Ташкенте</i> (o'qilishi: <b>ya jivu v Tashkente</b>) — Men Toshkentda yashayman<br>
            • <i>Книга на столе</i> (o'qilishi: <b>kniga na stale</b>) — Kitob stol ustida
          </div>
        `
      },
      {
        level: "A1+ Kelishiklar",
        title: "6. 'Menda Bor / Yo'q' va 'Kimga?' Qoidalari",
        summary: "Eng ko'p ishlatiladigan 'У меня есть / нет' va 'Мне / Тебе' iboralarini o'zbekcha tushunish.",
        content: `
          <h4>Menda bor / Menda yo'q / Kimga?</h4>
          <div class="example-box">
            • <i>У меня есть время</i> (o'qilishi: <b>u minya yest vremya</b>) — Menda vaqt bor<br>
            • <i>У меня нет времени</i> (o'qilishi: <b>u minya net vremeni</b>) — Menda vaqt yo'q<br>
            • <i>Помоги мне</i> (o'qilishi: <b>pamagi mne</b>) — Menga yordam ber<br>
            • <i>Я звоню другу</i> (o'qilishi: <b>ya zvanyu drugu</b>) — Men do'stimga qo'ng'iroq qilyapman
          </div>
        `
      },
      {
        level: "A1+ Muloqot",
        title: "7. Piyoda Yurish va Transportda Yurish Farqi",
        summary: "'Идти / Ходить' va 'Ехать / Ездить' fe'llarini adashtirmaslik uchun aniq qo'llanma.",
        content: `
          <h4>Piyoda vs Transport</h4>
          <div class="example-box">
            • <i>Я иду домой</i> (o'qilishi: <b>ya idu damoy</b>) — Men uyga piyoda ketyapman<br>
            • <i>Я еду на работу</i> (o'qilishi: <b>ya yedu na rabotu</b>) — Men ishga transportda ketyapman<br>
            • <i>Я хожу в зал</i> (o'qilishi: <b>ya xaju v zal</b>) — Men zalga muntazam borib turaman
          </div>
        `
      },
      {
        level: "A1+ Grammatika",
        title: "8. Sifatlar va Mening / Sening / Uning So'zlari",
        summary: "Yangi, katta, yaxshi kabi sifatlarni va egalik so'zlarini to'g'ri moslashtirish.",
        content: `
          <h4>Sifatlar va Egalik so'zlari</h4>
          <div class="example-box">
            • <i>новый телефон</i> (<b>noviy telefon</b> — yangi telefon)<br>
            • <i>новая машина</i> (<b>novaya mashina</b> — yangi mashina)<br>
            • <i>новое окно</i> (<b>novoye akno</b> — yangi deraza)<br>
            • <i>мой брат</i> (<b>moy brat</b>) / <i>моя сестра</i> (<b>maya sistra</b>)<br>
            • <i>его машина</i> (<b>yivo mashina</b> — uning mashinasi)
          </div>
        `
      },
      {
        level: "A1+ Kundalik hayot",
        title: "9. Soat, Vaqt va Do'konda Narx So'rash",
        summary: "Soat necha bo'lganini so'rash, bugun/ertaga va narx-navo haqida gaplashish.",
        content: `
          <h4>Vaqt va Narx</h4>
          <div class="example-box">
            • <i>Который час?</i> (o'qilishi: <b>katoriy chas</b>) — Soat necha bo'ldi?<br>
            • <i>Сегодня</i> (<b>sivodnya</b> — bugun), <i>вчера</i> (<b>fchira</b> — kecha), <i>завтра</i> (<b>zavtra</b> — ertaga)<br>
            • <i>Сколько это стоит?</i> (o'qilishi: <b>skolka eta stayit</b>) — Bu qancha turadi?
          </div>
        `
      },
      {
        level: "A1+ Amaliyot",
        title: "10. Muloqotda Eng Ko'p Xatolar va Foydali Iboralar",
        summary: "O'zbekcha so'zma-so'z tarjima qilmaslik va suhbatni davom ettirish iboralari.",
        content: `
          <h4>Xatolar va Foydali iboralar</h4>
          <div class="example-box">
            ❌ <i>Я думаю о твоя проблема</i><br>
            ✅ <i>Я думаю о твоей проблеме</i> (<b>ya dumayu a tvayey prableme</b> — Men sening muammong haqida o'ylayapman)<br><br>
            • <i>Повторите, пожалуйста, помедленнее</i> (<b>paftarite, palusta, pamidleneye</b>) — Iltimos, sekinroq qaytaring<br>
            • <i>Я вас понял / поняла</i> (<b>ya vas panyal / panyala</b>) — Sizni tushundim
          </div>
        `
      }
    ],
    words: [
      { word: "Спасибо", trans: "Rahmat (o'qilishi: spasibo)", level: "A1" },
      { word: "Пожалуйста", trans: "Arzimaydi / Iltimos (o'qilishi: palusta)", level: "A1" },
      { word: "Понимаю", trans: "Tushunaman (o'qilishi: panimayu)", level: "A1" },
      { word: "Сегодня", trans: "Bugun (o'qilishi: sivodnya)", level: "A1+" },
      { word: "Обязательно", trans: "Albatta (o'qilishi: abyazatelna)", level: "A1+" },
      { word: "В магазине", trans: "Do'konda (o'qilishi: v magazine)", level: "A1+" },
      { word: "Ехать", trans: "Transportda bormoq (o'qilishi: yexat)", level: "A1+" },
      { word: "Большой", trans: "Katta (o'qilishi: balshoy)", level: "A1" }
    ],
    quiz: [
      {
        q: "1. 'Книга' (kitob) so'zi qaysi rodga tegishli?",
        options: ["Мужской род", "Женский род", "Средний род"],
        correct: 1,
        exp: "'-А' harfi bilan tugagan otlar Женский род (ayol jinsi) bo'ladi."
      },
      {
        q: "2. 'Men Toshkentda yashayman' qanday to'g'ri tarjima qilinadi?",
        options: ["Я живу в Ташкент", "Я живу в Ташкенте", "Я живу на Ташкента"],
        correct: 1,
        exp: "Предложный падеж (qayerda?) savoliga javob berganda joy nomiga '-е' qo'shiladi: в Ташкенте."
      },
      {
        q: "3. Transportda (mashina yoki avtobusda) ketayotgan bo'lsangiz qaysi fe'l ishlatiladi?",
        options: ["Я иду", "Я еду", "Я хожу"],
        correct: 1,
        exp: "'Идти' — piyoda yurish, 'Ехать' — transportda harakatlanish uchun ishlatiladi."
      },
      {
        q: "4. 'Yangi mashina' (машина — женский род) qanday to'g'ri yoziladi?",
        options: ["Новый машина", "Новое машина", "Новая машина"],
        correct: 2,
        exp: "Женский род otlari bilan sifatlar '-ая' qo'shimchasini oladi: новая машина."
      },
      {
        q: "5. 'Окно' (deraza) so'zi qaysi rodga kiradi?",
        options: ["Мужской род", "Женский род", "Средний род"],
        correct: 2,
        exp: "'-О' yoki '-Е' bilan tugaydigan otlar Средний род (o'rta jins) hisoblanadi."
      },
      {
        q: "6. 'Ular ishlaydilar' (Они ...) fe'lining to'g'ri shaklini toping:",
        options: ["Они работаем", "Они работают", "Они работает"],
        correct: 1,
        exp: "'Они' olmoshi bilan I tuslanish fe'llari '-ют' yoki '-ут' qo'shimchasini oladi."
      },
      {
        q: "7. Винительный падеж: 'Men suv ichyapman' qanday aytiladi? (вода — suv)",
        options: ["Я пью вода", "Я пью воду", "Я пью воде"],
        correct: 1,
        exp: "Nimani ichyapman? (Винительный падеж): '-а' harfi '-у' ga o'zgaradi ➔ воду."
      },
      {
        q: "8. O'tgan zamon: 'U (ayol kishi) kitob o'qidi' qanday bo'ladi?",
        options: ["Она читал книгу", "Она читала книгу", "Она читали книгу"],
        correct: 1,
        exp: "O'tgan zamonda ayol jinsi (Она) uchun fe'lga '-ла' qo'shiladi."
      },
      {
        q: "9. Do'konda narx so'rash uchun qaysi ibora ishlatiladi?",
        options: ["Который час?", "Сколько это стоит?", "Как вас зовут?"],
        correct: 1,
        exp: "'Сколько это стоит?' — Bu qancha turadi? degan ma'noni beradi."
      },
      {
        q: "10. 'Stol ustida' (стол) iborasi Предложный падеж da qanday yoziladi?",
        options: ["На столе", "В стол", "На столу"],
        correct: 0,
        exp: "Ustida ma'nosida 'на' predlogi va '-е' qo'shimchasi ishlatiladi: на столе."
      },
      {
        q: "11. 'Katta uy' (дом — мужской род) birikmasini toping:",
        options: ["Большая дом", "Большое дом", "Большой дом"],
        correct: 2,
        exp: "'Дом' — мужской род, shuning uchun 'большой' sifatidan foydalaniladi."
      },
      {
        q: "12. 'Bugun' va 'Ertaga' so'zlarining ruscha tarjimasi qaysi qatorda to'g'ri?",
        options: ["Вчера и сегодня", "Сегодня и завтра", "Завтра и послезавтра"],
        correct: 1,
        exp: "Сегодня — bugun, Завтра — ertaga (Вчера — kecha)."
      }
    ]
  }
};

let currentTrack = "en";
let wordIndex = 0;
let shuffledQuiz = [];
let currentQuestionPos = 0;
let correctAnswersCount = 0;
let xp = 0;

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startNewQuizSession() {
  shuffledQuiz = shuffleArray(curriculumData[currentTrack].quiz);
  currentQuestionPos = 0;
  correctAnswersCount = 0;
  renderQuiz();
}

function switchTrack(track) {
  currentTrack = track;
  wordIndex = 0;

  document.getElementById("btn-en").classList.toggle("active", track === "en");
  document.getElementById("btn-ru").classList.toggle("active", track === "ru");

  const data = curriculumData[track];
  document.getElementById("hero-title").textContent = data.title;
  document.getElementById("hero-desc").textContent = data.desc;

  renderLessons();
  renderWord();
  startNewQuizSession();
}

function renderLessons() {
  const grid = document.getElementById("lessons-grid");
  const lessons = curriculumData[currentTrack].lessons;
  grid.innerHTML = lessons.map((lesson, idx) => `
    <div class="lesson-card" onclick="openLesson(${idx})">
      <span class="lesson-badge">${lesson.level}</span>
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
    </div>
  `).join("");
}

function openLesson(index) {
  const lesson = curriculumData[currentTrack].lessons[index];
  document.getElementById("modal-badge").textContent = lesson.level;
  document.getElementById("modal-title").textContent = lesson.title;
  document.getElementById("modal-body").innerHTML = lesson.content;
  document.getElementById("lesson-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("lesson-modal").classList.add("hidden");
}

function completeLesson() {
  xp += 50;
  document.getElementById("xp-count").textContent = xp;
  closeModal();
}

function renderWord() {
  const item = curriculumData[currentTrack].words[wordIndex];
  document.getElementById("card-level").textContent = item.level;
  document.getElementById("card-word").textContent = item.word;
  const transEl = document.getElementById("card-translation");
  transEl.textContent = item.trans;
  transEl.classList.add("hidden");
}

function flipCard() {
  document.getElementById("card-translation").classList.toggle("hidden");
}

function nextWord() {
  const words = curriculumData[currentTrack].words;
  wordIndex = (wordIndex + 1) % words.length;
  renderWord();
}

function speakWord() {
  const item = curriculumData[currentTrack].words[wordIndex];
  const lang = curriculumData[currentTrack].langCode;
  const feedbackId = "card-audio-status";

  let statusEl = document.getElementById(feedbackId);
  if (!statusEl) {
    statusEl = document.createElement("p");
    statusEl.id = feedbackId;
    statusEl.style.fontSize = "0.85rem";
    statusEl.style.color = "#94a3b8";
    statusEl.style.marginTop = "10px";
    document.querySelector(".flashcard-box").appendChild(statusEl);
  }

  function playFallbackAudio() {
    const tl = lang.startsWith("ru") ? "ru" : "en";
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(item.word)}&tl=${tl}&client=tw-ob`;
    const audio = new Audio(audioUrl);

    statusEl.style.color = "#10b981";
    statusEl.textContent = `🔊 Talaffuz qilinmoqda (onlayn audio): "${item.word}"`;

    audio.play().catch(() => {
      statusEl.style.color = "#ef4444";
      statusEl.textContent =
        "⚠️ Ovoz chiqmadi. Internet aloqasini yoki Windows ovoz paketlarini tekshiring.";
    });

    audio.onended = () => {
      statusEl.textContent = "";
    };
  }

  if (!("speechSynthesis" in window)) {
    playFallbackAudio();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(item.word);
  utterance.lang = lang;
  utterance.rate = 0.95;

  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find((v) =>
    v.lang.toLowerCase().startsWith(lang.split("-")[0].toLowerCase())
  );

  if (!matchedVoice && voices.length === 0) {
    playFallbackAudio();
    return;
  }

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  let started = false;
  utterance.onstart = () => {
    started = true;
    statusEl.style.color = "#10b981";
    statusEl.textContent = `🔊 Talaffuz qilinmoqda: "${item.word}"`;
  };

  utterance.onend = () => {
    statusEl.textContent = "";
  };

  utterance.onerror = () => {
    if (!started) {
      playFallbackAudio();
    }
  };

  window.speechSynthesis.speak(utterance);

  setTimeout(() => {
    if (!started) {
      playFallbackAudio();
    }
  }, 500);
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

function renderQuiz() {
  const total = shuffledQuiz.length;
  document.getElementById("quiz-score").textContent = `To'g'ri javoblar: ${correctAnswersCount} / ${total}`;

  if (currentQuestionPos >= total) {
    document.getElementById("quiz-progress").textContent = `Yakunlandi: ${total} / ${total}`;
    document.getElementById("quiz-question").textContent = "🎉 Tabriklaymiz! Barcha savollar takrorlanmasdan yakunlandi.";
    document.getElementById("quiz-options").innerHTML = `
      <button class="btn primary" onclick="startNewQuizSession()">🔄 Testni qaytadan boshlash</button>
    `;
    document.getElementById("quiz-feedback").style.color = "#10b981";
    document.getElementById("quiz-feedback").textContent = `Siz ${total} ta savoldan ${correctAnswersCount} tasini to'g'ri topdingiz!`;
    return;
  }

  const qObj = shuffledQuiz[currentQuestionPos];
  document.getElementById("quiz-progress").textContent = `Savol: ${currentQuestionPos + 1} / ${total}`;
  document.getElementById("quiz-question").textContent = qObj.q;
  document.getElementById("quiz-feedback").textContent = "";

  const optContainer = document.getElementById("quiz-options");
  optContainer.innerHTML = qObj.options.map((opt, i) => `
    <button class="option-btn" onclick="checkAnswer(${i})">${opt}</button>
  `).join("");
}

function checkAnswer(selected) {
  const qObj = shuffledQuiz[currentQuestionPos];
  const fb = document.getElementById("quiz-feedback");
  const buttons = document.querySelectorAll(".option-btn");

  if (selected === qObj.correct) {
    buttons.forEach(btn => btn.disabled = true);
    buttons[selected].style.borderColor = "#10b981";
    buttons[selected].style.background = "rgba(16, 185, 129, 0.15)";

    xp += 20;
    correctAnswersCount++;
    document.getElementById("xp-count").textContent = xp;
    document.getElementById("quiz-score").textContent = `To'g'ri javoblar: ${correctAnswersCount} / ${shuffledQuiz.length}`;

    fb.style.color = "#10b981";
    fb.innerHTML = `✅ To'g'ri! (+20 XP)<br><small style="color:#cbd5e1;">💡 Izoh: ${qObj.exp}</small>`;

    setTimeout(() => {
      currentQuestionPos++;
      renderQuiz();
    }, 1800);
  } else {
    buttons[selected].style.borderColor = "#ef4444";
    buttons[selected].style.background = "rgba(239, 68, 68, 0.15)";
    fb.style.color = "#ef4444";
    fb.textContent = "❌ Xato! Qaytadan urinib ko'ring.";
  }
}

switchTrack("en");