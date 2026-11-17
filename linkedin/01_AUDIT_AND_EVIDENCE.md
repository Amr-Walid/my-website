# مراجعة البروفايل والموقع وسجل الأدلة

مرجع المراجعة: 2026-11-17. أي تقييم أدناه تشخيص تحريري، مش LinkedIn score ولا تقييم تقني مستقل.

## 1. أنا فهمتك إزاي

- خريج اقتصاد من FEPS، جامعة القاهرة، يونيو 2026 حسب الموقع والـCV. الخلفية الاقتصادية تفيد في فهم المقاييس وتعريفات الأعمال، مش بديل عن البرهان الهندسي.
- Software Engineer في Uni Group من أكتوبر 2025 حسب الموقع والـCV: CRM وPOS وتتبع أصول وأتمتة وحوكمة حسابات.
- Data Analyst & BI Developer عن بُعد في Kidana، مارس–مايو 2026: payments وbank guarantees وPower Query وDAX؛ خبرة business-facing مهمة.
- DEPI Microsoft Data Engineer track، نوفمبر 2025–يوليو 2026: شهادة إتمام مسار، ومشروع جماعي CryptoPulse يجمع streaming وbatch وserving.
- Data Engineering Instructor في ASL: دليل قوي على التواصل؛ صورة شهادة Outstanding Instructor مقروءة ومؤرخة يوليو 2026.
- تدريبات EMAM وCAPMAS وKun Safiran وخلفية بحثية. لا نجمع فترات التدريب المتزامنة ونبيعها كسنوات خبرة مستقلة.

الزاوية المقترحة: **Data Engineer with hands-on software engineering experience: from ingestion and modeling to usable APIs and business systems.**

## 2. المقارنة المباشرة

| العنصر | الصور/الجزء العام من LinkedIn | الموقع والـCV | الإجراء |
|---|---|---|---|
| الهوية | Junior Data Engineer، pipelines وSQL/Python/Spark/Power BI | Data Engineer & Full-Stack، دور Uni Group حالي | ابدأ Data Engineer؛ خلّي .NET/الأنظمة عامل تميّز لا قائمة وظائف |
| About | طويل، عام، قوائم تقنيات كثيرة، إيميل جامعي | case studies وأنظمة أعمال وخبرة أحدث | افتح بتخصص وقيمة ثم 3 أدلة وإيميل موحد |
| Featured | إعلان الموقع ولوحتا Excel ظاهران في الصور | CryptoPulse وwarehouse وPOS وATS أقوى للمسار | قدّم data architecture ثم modeling ثم business evidence |
| Experience | صور التفاصيل تبرز DEPI وEMAM وتدريبات أقدم | Uni Group وKidana وASL متاحون بالموقع | راجع الحساب الحالي؛ لو ناقصين أضفهم، لا نفترض الغياب من صور جزئية |
| المنشورات | نمط شهادات/إنجازات، reposts ومشاريع سبق إعلانها | تفاصيل هندسية أعمق | انشر قرارًا أو trade-off بدل إعادة launch |
| التوصيات | الجزء العام أظهر توصية Mohamed Mustafa Shaban عن DEPI والقيادة | الموقع لا يغني عنها | احتفظ بها؛ اطلب توصية محددة من مدير/متعاون بإذنه |
| صورة الغلاف | الاسم كبير، النص قرب صورة البروفايل | هوية بصرية أوضح بالموقع | غلاف بسيط برسالة مقروءة ومجال آمن للصورة |
| جمهور الحساب | 828 متابعًا ظاهرين بالصور والجزء العام | لا توجد analytics متاحة | baseline تقريبي، مش عدد حديث مضمون ولا مقياس توظيف |

الصور المرجعية: mkSnBW7c للبروفايل، 37PZ7hp1 للـAbout، CAiSUpxX للـFeatured، jS0ULV8v وما بعدها للنشاط، 8afMrEJg وOz3XrLMU للخبرات. الصور مرسلة من المستخدم؛ بعض اللقطات بتاريخ 17 نوفمبر 2026 ظاهرًا في شريط النظام. لم نقرأ كل كلمة صغيرة أو كل منشور مقصوص باعتباره حقيقة مؤكدة.

## 3. خريطة المشاريع كلها

المصدر الأساسي [src/data.ts](../src/data.ts)، مع [CV](../cv/cv.html) و[README](../README.md). عبارة «موصوف بالموقع» لا تعني شغّلنا النظام أو تحققنا من كل ادعاء.

| المشروع / ID | دليل المراجعة | دوره في الحملة وحدوده |
|---|---|---|
| CryptoPulse / cryptopulse-azure-lakehouse | موقع + رسم + README عام داخل crypto-pulse | flagship، شغل جماعي؛ حدد مساهمتك ولا تدعي SLA |
| SQL Warehouse / sql-server-data-warehouse | README عام + scripts/gold/ddl_gold.sql | modeling أساسي؛ ERP/CRM بيانات محاكاة، Gold views لا جداول مادية هنا |
| MongoDB stocks / real-time-stock-pipeline | README عام يشرح 3 خدمات وpoll كل 60 ثانية | event-driven processing بعد ingestion، مش tick-by-tick ولا latency مثبت |
| Crypto ETL / crypto-etl-pipeline | README عام، CoinGecko→Pandas→CSV→Actions | مثال صغير وقرارات حدود الحجم، cron hourly مش uptime مضمون |
| Docker ETL / docker-etl-pipeline | README عام قصير | reproducibility تعليمي، مش دليل HA أو production deployment |
| POS / retail-pos-system | وصف + CV + صور محلية؛ الكود غير مراجع | ربط transaction بالanalytics، رقم 179 tests يُحذف لحين test report حديث |
| ATS / asset-tracking-system | وصف + صور محلية | lifecycle وquery filters؛ ليست database-native RLS |
| CRM / unigroup-crm | وصف معماري؛ غلاف توضيحي | isolation/permissions بعد إذن، لا نقدمه كبرهان اختبارات أمان |
| M365 / m365-project-management-system | وصف + dashboard/flow assets | validation وduplicate prevention موصوفة؛ اعرض بعد إخفاء PII |
| Finance / payment-bg-analytics-dashboard | وصف + صورتا dashboard + خبرة Kidana | KPI definitions؛ بيانات مالية لا تنشر قبل تصريح وتنقيح |
| AI dashboard / ai-powered-nextjs-dashboard | وصف + صور + رابط حي HTTP 200 | serving وتجربة المستخدم؛ لا تقول إن إجابات AI صحيحة دائمًا |
| AdventureWorks / adventure-works-dashboard | وصف + صور + مستودع مرتبط لم يراجع كوده | تدريب تحليلي ببيانات sample، لا تربطه بعميل حقيقي |
| Social governance / social-media-governance-center | وصف + غلاف توضيحي + repo مرتبط لم يراجع كوده | زاوية data ownership؛ رقم 40–120 نطاق بالمشكلة مش نتيجة مثبتة |
| WhatsApp / whatsapp-marketing-system | وصف + صور + repo مرتبط لم يراجع كوده | RFM فقط لاحقًا؛ تجنب «anti-ban» وضمان الالتزام دون مراجعة |
| FTD / ftd-techzone-ecommerce | وصف + غلاف توضيحي + repo مرتبط | بديل backend؛ لا تنشر تفاصيل audit محرجة لجهة العمل |
| Fleet Pulse / fleet-pulse-tracking | status=System Design في المصدر | تصميم فقط، ليس تطبيقًا منتشرًا ولا تكاليف مثبتة |
| Greenio Energy / greenio-energy-wordpress | وصف وصور | احتياطي freelance، خارج أول حملة Data Engineer |
| Greenio Honey / greenio-honey-wordpress | وصف وصور | كتالوج theme، لا تفترض checkout/payments حقيقية |
| AeroWind / aerowind-energy-wordpress | وصف وصور | احتياطي freelance؛ counter/testimonials مش أثر بيئي موثّق |
| QRCard / qrcard-pro | وصف وغلاف توضيحي ورابط GitHub Pages | أداة static، روابط تحمل بياناتها؛ لا تعرض بيانات أشخاص |

## 4. تعارضات لازم تتصلّح أو تتأكد

| الموضوع | اللي اتشاف | القرار قبل النشر |
|---|---|---|
| DEPI | الشهادة: Nov 2025–Jul 2026، issuer MCIT/DEPI | لا تكتب Microsoft Certified أو DP-700/DP-203 إلا credential رسمي منفصل |
| CryptoPulse streams | المصدر يقول Five ثم impact يقول 4، README يقول four ويسرد 5 أنواع | استخدم «market, historical and news/sentiment inputs» بدون رقم |
| CryptoPulse containers | الموقع ~15 وREADME داخل المشروع 16 | لا رقم في البوستات؛ احسب من compose/commit محدد لو محتاج |
| CryptoPulse architecture | Gold عبر PostgreSQL/dbt، وليس كله Delta على Azure | الرسم والنص يوضحوا Bronze/Silver Delta ثم PostgreSQL/dbt Gold؛ historical batch ليس كله عبر Kafka |
| CAPMAS | الصور تبدو تعرض Apr–May 2025؛ الموقع/CV Jul–Aug 2025 | راجع الشهادة/خطاب التدريب؛ لا تختار تاريخًا لمجرد أنه أحدث ملف |
| EMAM | المصدر 2025 عام، CV Feb–Oct 2025، لقطة التفاصيل تبدو مختلفة | أثبت البداية والنهاية من مستندك قبل تعبئة الأشهر |
| ASL | المصدر 2026–Aug، CV May–Aug، الشهادة July 2026 | الجائزة مثبتة بصريًا، تاريخ الوظيفة يحتاج تأكيد |
| التعليم | CV June 2026، public/llm.txt ما زال student/present | استخدم June 2026 لو الوثيقة تؤكده؛ حدّث الملف لاحقًا |
| موضوع التخرج | لقطة نشاط مقتطعة تذكر Impact of Workers...، LinkedIn Projects العام بحث renewable energy China | قد يكونان مشروعين مختلفين؛ لا تخلطهما ولا تنسب موضوع تخرج بدون تأكيد |
| البريد | LinkedIn/llm إيميل جامعي، الموقع/CV Gmail | وحّد amrw0109@gmail.com بعد تأكيدك لاستقبال الرسائل |
| مسميات قديمة | الصور تتضمن Hayah Karima وCIB ووزارة الصناعة، مش في timeline الموقع الحالي | لا تحذف خبرة صحيحة؛ أكد مسماها ومدتها وانقل الأقل صلة خارج أول ترتيب |
| أرقام POS | 179/179 بالموقع/CV، بلا test run في هذه المراجعة | لا نستخدم العدد كدليل مدقق؛ اطلب تقرير tests من commit حديث |

## 5. مخاطر الموقع التي تضعف الثقة — توصيات، لم تُنفّذ

1. وصف «20 projects shipped» يضم System Design: الأفضل «20 portfolio projects & case studies» وفصل Built / Learning / Design.
2. skill percentages زي Python 92% مش معيار قابل للمقارنة؛ استبدلها بأدلة استخدام لاحقًا.
3. public/llm.txt فيه تعليم قديم وإيميل قديم وادعاء mini-orchestrator غير ظاهر في القائمة الحالية، وعبارات Expert؛ وحّده لاحقًا مع CV.
4. «DEPI-certified Microsoft Data Engineer» على الموقع قابل للالتباس؛ الأدق completed DEPI's Microsoft Data Engineer track.
5. EF Core Global Query Filters تعمل على مستوى استعلامات التطبيق؛ ليست DB-enforced isolation أو بديل authorization واختبارات cross-tenant.
6. الصور project-ftd-techzone وproject-unigroup-crm وproject-social-governance وproject-fleet-pulse وproject-qrcard-pro مصنفة أغلفة AI بالمصدر، ليست screenshots.
7. «24/7»، «100% reproducible»، «instant accurate AI» و«anti-ban» أوسع من الإثبات المتاح. استبدلها بوصف implementation وحدود التشغيل.
8. crawler أظهر counters بصفر قبل JavaScript؛ مش دليل إن الزائر يشوف صفر. راجع browser/SEO لاحقًا قبل اعتبارها bug.

## 6. مصادر الويب اللي اتراجعت فعليًا

- https://www.linkedin.com/in/amrwalidmaher/ — جزء عام محدود: About مبتور، followers، بحث واحد، وتوصية؛ لم يوفر مراجعة كاملة لحسابك أو analytics.
- https://amrw.me — نص الصفحة الحية، projects وtimeline؛ HTTP 200.
- https://amrw.me/assets/Amr_Walid_CV.pdf — HTTP 200؛ تمت قراءة مصدر الـCV المحلي، وليس تدقيق كل حرف في PDF المنشور.
- https://github.com/Amr-Walid/Depi-Project/tree/main/crypto-pulse — README وملفات المجلد؛ root ليس به README ولذلك readme endpoint الأول أعطى 404، المستودع نفسه عام ومتاح.
- https://github.com/Amr-Walid/Sqlserver-DataWarehouse-Project — README وGold SQL انتقائيًا؛ الاستعلامات تستخدم views وROW_NUMBER surrogate keys، لا تفترض SCD2 أو incremental strategy.
- https://github.com/Amr-Walid/real-time-stock-pipeline — README.
- https://github.com/Amr-Walid/docker-etl-pipeline — README.
- https://github.com/Amr-Walid/crypto-price-analyzer — README.
- https://cryptopulse-five-red.vercel.app/ وhttps://dashboard.amrw.me/ — HTTP 200 فقط، ليس تحققًا من freshness أو backend health.

لم يتم تشغيل هذه المشاريع أو فحص أداء/أمان لها. المصادر والمشاريع قد تتغير بعد تاريخ المراجعة.
