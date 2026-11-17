# الأصول البصرية وتجهيز النشر

## 1. الحالة الحالية

الموجود هنا ملفات Markdown ونصوص وخطة صور، **مش 18 تصميمًا أو carousel PDF جاهزًا**. الصور الأصلية موجودة في [public/assets](../public/assets). يمكن النشر text-only لو تجهيز الرسم سيؤخر بوستًا جيدًا. لا نحتاج توليد صور مدفوع للبداية، ولا نستخدم stock images لتوحي بأن نظامًا فعليًا تم بناؤه.

أسماء الملفات أدناه مأخوذة من المشروع؛ وجود الملف لا يعني أن بياناته مصرح بنشرها أو أن كل جزئية بالرسم دقيقة. الـalt text المقترح يتعدل ليصف الصورة النهائية فعلًا. لا تضع رابط GitHub blob مكان رفع الصورة إلى LinkedIn؛ ارفع النسخة المنقحة بنفسك.

## 2. الغلاف وصورة البروفايل

- الصورة الحالية رسمية ومناسبة من الصور المرسلة؛ احتفظ بها ما لم توجد نسخة أوضح. لا حاجة لتعديل الوجه بالـAI.
- غلاف مقترح 1584×396 كبداية تصميم؛ راجع معاينة الموبايل والكمبيوتر لأن القص ومكان الصورة يختلفان مع اللغة والواجهة.
- اترك منطقة الصورة الشخصية بلا نص مهم؛ اختبر RTL/LTR بدل افتراض أنها دائمًا يسار أو يمين.
- النص المقترح:

```text
Amr Walid Maher
Data Engineering, Backed by Software Engineering
Python • SQL • Data Pipelines • Data Modeling
amrw.me
```

- ألوان navy/blue/teal من الموقع، خط واضح، بلا شعارات 15 أداة، بلا “Expert” أو سنوات مجمعة. Grids بسيطة أفضل من collage صغير غير مقروء.

## 3. خريطة الـ18 بوست

أي بوست text-only لا يحتاج alt text. المقترحات ليست وصفًا مؤكدًا لصورة لم تُنتج بعد.

| ID | الشكل المقترح | الملف/المادة الموجودة | التعديل أو الرسالة البصرية | Alt text مقترح للصورة النهائية |
|---|---|---|---|---|
| P01 | صورة واحدة أو نص | screenshot جديد للموقع العام بعد فحصه | 3 مربعات: Ingest → Model → Serve؛ بلا ادعاء 20 shipped | Portfolio overview connecting data pipelines, analytical models and software delivery. |
| P02 | رسم مبسط أو carousel | [cryptopulse-architecture.webp](../public/assets/cryptopulse-architecture.webp) و[نسخة 2](../public/assets/cryptopulse-architecture-2.webp) | افصل historical batch؛ لا تستخدم أرقام streams/containers المتعارضة | CryptoPulse team architecture: event and historical inputs, Spark/Delta processing, PostgreSQL/dbt models and API consumption. |
| P03 | رسم schema أو carousel | [sql-star-schema.webp](../public/assets/sql-star-schema.webp)، [sql-architecture.webp](../public/assets/sql-architecture.webp) | Sample ERP/CRM؛ سمّ Gold fact/dimension views | SQL Server portfolio warehouse from simulated source data through Bronze and Silver to Gold fact and dimension views. |
| P04 | صورتان منقحتان أو text | [pos-03_pos_modal.webp](../public/assets/pos-03_pos_modal.webp)، [pos-06_admin_reports.webp](../public/assets/pos-06_admin_reports.webp) | إذن + استبدال العملاء والأرقام ببيانات synthetic؛ لا رقم tests | Sanitized retail workflow showing how transaction events connect to sales reporting. |
| P05 | رسم واحد | [mongodb-pipeline.webp](../public/assets/mongodb-pipeline.webp) | أضف periodic API poll؛ لا أسهم توحي source ticks | Python ingestion, MongoDB Change Streams processing and FastAPI serving; source data is polled periodically. |
| P06 | جدول KPI synthetic | [payment-dashboard-1.webp](../public/assets/payment-dashboard-1.webp)، [نسخة 2](../public/assets/payment-dashboard-2.webp) كمرجع خاص فقط | الأفضل إعادة رسم مثال تعليمي بلا اسم بنك/مورد/رصيد | Illustrative KPI definition card showing start event, end event and missing-value rules for a payment metric. |
| P07 | مخطط حاويتين أو نص | [project-workflow.webp](../public/assets/project-workflow.webp) | Python ETL + PostgreSQL؛ caption: containerization is not HA | Docker Compose separates a Python ETL service from PostgreSQL; operational checks are listed separately. |
| P08 | رسم generic أو نص | [ats-assets.webp](../public/assets/ats-assets.webp) كمرجع لا يُرفع خامًا | Tenant context → app filter → authorized query؛ ليس DB RLS | Application query filters carry tenant context, while authorization and database-level controls remain separate concerns. |
| P09 | نص أو صورة شهادة | [cert-asl-outstanding-instructor.webp](../public/assets/cert-asl-outstanding-instructor.webp) | اختياري: اقتصاص بيانات/توقيعات غير لازمة؛ label July 2026 | Outstanding Instructor Certificate of Excellence awarded by ASL, FEPS, Cairo University, in July 2026. |
| P10 | رسم API→CSV أو نص | [project-etl.webp](../public/assets/project-etl.webp) | Cron intended schedule، لا guaranteed availability | Scheduled CoinGecko extraction, Pandas transformation and timestamped CSV storage using GitHub Actions. |
| P11 | schematic أو carousel | [m365-architecture.webp](../public/assets/m365-architecture.webp)، [flow](../public/assets/m365-flow-attendance-sync.webp) | إزالة emails/tenant URLs/IDs؛ اعرض validation flow مبسط | Forms capture data, Power Automate validates it, SharePoint stores it and Power Query/DAX support reporting. |
| P12 | screenshot demo أو نص | [nextjs-dashboard-1.webp](../public/assets/nextjs-dashboard-1.webp) | تأكد من dataset غير حساس؛ label AI evaluation questions | Arabic analytics interface combining charts with an AI assistant; answer verification is a separate requirement. |
| P13 | ER sketch توضيحي أو نص | PostgreSQL registry من وصف المشروع، رسم جديد | Owner ≠ Access grant؛ لا vault paths أو حسابات فعلية | Illustrative governance model separating a digital asset, its business owner, access grants and approval workflow. |
| P14 | نص | لا أصل لازم | لو رسم: Retry → duplicate? → verify state؛ label Review checklist | Review checklist for replay, duplicate handling and recovery in batch and streaming systems. |
| P15 | نص | لا أصل لازم | تأمل شخصي، لا صورة شهادة تخرج كاملة مطلوبة | A conceptual link between business metric definitions and data-engineering implementation. |
| P16 | index card | أسماء 3 مشاريع وروابطها | 3 عناوين و3 أسئلة للمراجع | Three starting points for reviewing the portfolio: CryptoPulse, the SQL Server warehouse and the MongoDB pipeline. |
| P17 | نص أو checklist card | قائمة reliability من نص P17 | خطط مستقبلية لا features shipped | Proposed review checklist covering freshness, recovery, quality, reproducibility, ownership and evidence. |
| P18 | نص | رابط الموقع والإيميل | لا صورة fake offer أو شركة مستهدفة | Career-interest summary for early-career Data Engineering and ETL/Data Integration roles. |

الأغلفة project-unigroup-crm.webp وproject-ftd-techzone.webp وproject-social-governance.webp وproject-fleet-pulse.webp وproject-qrcard-pro.webp موضحة في مصدر الموقع كـAI cover art. لو استخدمتها اكتب “Concept illustration”؛ الأفضل رسوم تقنية بسيطة بدلها، ولا تقدمها screenshots فعلية.

## 4. Storyboard اختياري جاهز لثلاثة carousels

ممكن تعملها يدويًا في PowerPoint/Canva ثم تصدّر PDF بعد مراجعة preview. مقاس 1080×1350 مناسب كبداية portrait، وليس شرطًا أو ضمان وصول. 4–5 slides، عنوان وفكرة واحدة لكل slide، وخط كبير. PDF هنا لم يتم إنتاجه.

### Carousel A — P02: CryptoPulse / 5 slides

1. **A price feed is not an analytics platform**
   “CryptoPulse — DEPI team capstone. From market inputs to usable analytical data.”
2. **Different sources need different ingestion paths**
   “Event feeds use Kafka where appropriate. Historical OHLCV follows a batch path.”
3. **Separate processing from serving**
   “Spark + Delta on ADLS Gen2 for Bronze/Silver; PostgreSQL + dbt for analytical models.”
4. **Make the result usable**
   “Airflow coordinates scheduled work; FastAPI and Next.js expose the outputs. This is an architecture summary, not an SLA.”
5. **What would you review next?**
   “Replay, freshness, data quality and ownership. Team repository: github.com/Amr-Walid/Depi-Project/tree/main/crypto-pulse.”

التسمية أسفل كل slide: “DEPI team project | Amr Walid | Architecture summary”. لا تقول كل المصدر عبر Kafka أو Gold كله Delta. عدّل الرسم ليتسق مع الـcommit الذي تعرضه، واذكر الفريق بدل الإيحاء بتنفيذ فردي.

### Carousel B — P03: SQL Warehouse / 5 slides

1. **Before the chart: define the row**
   “A SQL Server warehouse portfolio project using simulated ERP and CRM data.”
2. **Bronze: keep the source understandable**
   “Raw source ingestion preserves a reference for later transformations.”
3. **Silver: resolve meaning, not just formatting**
   “Cleaning, standardization and source integration belong to explicit transformation steps.”
4. **Gold: expose a business-facing model**
   “Fact and dimension views support analysis. A logical star schema does not imply physical materialization.”
5. **Review the assumptions**
   “Grain, join cardinality, attribute ownership and missing values. Code: github.com/Amr-Walid/Sqlserver-DataWarehouse-Project.”

لا تضع test pass/row counts أو performance claims بدون run. لو المشروع tutorial-based أضف credit فعلي بدل كلمة “from scratch” المطلقة.

### Carousel C — P11: Validation / 4 slides

1. **Validate before the dashboard**
   “An illustrative workflow based on an M365 project-management and attendance case study.”
2. **Capture and validate**
   “Forms → Power Automate. Check project identifiers and the business definition of duplicate submissions.”
3. **Store and report**
   “SharePoint Lists → Power Query / DAX → management view. Corrections need a path too.”
4. **Ask what happens on retry**
   “Duplicate detection is not automatically exactly-once processing. Concurrency and error handling need review.”

استخدم shapes وبيانات وهمية موسومة “Illustrative / synthetic data”، مش snapshots من التشغيل الداخلي. لو ممنوع وصف العمل أصلًا، انشر المثال كمناقشة عامة بدون نسبته لعميل أو ادعاء بنائه.

## 5. Checklist النشر

- [ ] اتأكدت من تاريخ الحدث ومن “I” مقابل “we” ومين صاحب الكود؟
- [ ] عندي حق النشر للوصف والصورة؟ الرابط العام وحده مش إذن.
- [ ] أخفيت الأسماء والإيميلات والهواتف وvendor IDs وfinancial amounts وtenant URLs وAPI keys والـQR/barcodes الحساسة؟ الأفضل بيانات synthetic بدل blur قابل للعكس أو ناقص.
- [ ] لا company logo/endorsement أو اسم عميل من غير إذن؛ لا screenshot يفضح browser tabs/notifications.
- [ ] الصورة screenshot فعلي ولا concept illustration؟ وهل الـcaption واضح؟
- [ ] أي metric له مصدر وcommit/run date؟ لو لا، اتحذف.
- [ ] النص لا يخلط اقتراح future work مع feature منفذة؟
- [ ] الرابط يفتح incognito وعلى الموبايل؛ README واضح ومش private؛ endpoint HTTP 200 وحده مش backend-health proof.
- [ ] الافتتاحية مفهومة في سطرين، والنص يعبر عن صوتي، وفيه دعوة واحدة مش 4 CTAs.
- [ ] رفعت الصورة المنقحة وكتبت alt text مطابق للنسخة النهائية، ولو PDF اختبرت ترتيب الصفحات ووضوحها.
- [ ] مفيش [Name] أو تعليمات عربية أو code fences داخل النص المنسوخ للنشر.
- [ ] جاهز أجاوب بصدق عن grain والـfailure paths ومساهمتي، وأقول لا أعرف عند اللزوم.
- [ ] سجلت URL وتاريخ النشر؛ هقيس عند 24/72 ساعة إن analytics متاحة.

## 6. بعد الحملة

أعد استخدام الموضوع الأقوى كفيديو screen recording قصير أو case-study PDF بعد تحضير demo نظيف، مش repost بنفس النص. اختار evidence جديد حقيقي: run log أو اختبار retry أو شرح join. لا تنتج performance benchmark بلا تشغيل، ولا تحوّل صور الجوائز لبديل عن البرهان التقني.
