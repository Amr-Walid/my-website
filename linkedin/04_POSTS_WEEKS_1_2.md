# بوستات LinkedIn — الأسبوعان 1 و2

نصوص إنجليزية جاهزة تحريريًا، وليست موافقة إفصاح. انسخ مربع text فقط بعد مراجعة الشرط. لا تستخدم Unicode bold أو صور بيانات خاصة. ما فيش ادعاء إن أفضل وقت نشر مثبت لحسابك. تفاصيل الصور والـalt text في ملف 08. الروابط داخل المتن للوضوح، وليس لافتراض ميزة خوارزمية.

## P01 | 2026-11-23 | What connects my work

**قبل النشر:** Public portfolio؛ راجع صحة دورك الحالي والتخرج. صورة الموقع اختيارية، وتجنب counters/tests غير المدققة.

```text
The common thread in my work is not a single tool.
It is moving data from where it is created to where someone can use it.

My portfolio includes data pipelines, a SQL Server warehouse, business applications, and reporting workflows. The connection between them matters more to me than the number of technologies involved.

Working on software helps me understand how operational data is produced: transactions, returns, permissions, and validation. Data engineering adds the next questions: how should that data be moved, modeled, and served?

Over the next few weeks, I’ll share focused breakdowns from this work: the problem, the architecture, one design decision, and the limitations.

Some examples are portfolio projects; others relate to professional work and will only be shared where disclosure is appropriate.

I’m a Cairo-based Software Engineer focusing my career on Data Engineering and ETL/Data Integration roles with international teams.

Selected work: https://amrw.me

#DataEngineering #Python #SQL
```

## P02 | 2026-11-25 | CryptoPulse: the end-to-end view

**قبل النشر:** مشروع فريق DEPI؛ النص لا ينسب كل التنفيذ لك. استخدم الرسم بعد تصحيح مسار historical batch وتبسيط Gold. مساهمتك الدقيقة تُضاف فقط لو موثقة.

```text
A price feed is not yet an analytics platform.

CryptoPulse, our DEPI team capstone, connects market data with historical records and news/sentiment inputs, then takes that data through processing and serving layers.

The architecture combines:
• Kafka for event ingestion where appropriate.
• Spark and Delta Lake on Azure ADLS Gen2 for Bronze/Silver processing.
• PostgreSQL and dbt for analytical models.
• Airflow for scheduled workflows.
• FastAPI and Next.js for consumption.

Historical batch ingestion follows a different path from the live event feeds. That distinction matters: “real-time project” does not mean every component should be streaming.

The useful design question is not “How many tools can fit in the diagram?” It is “What responsibility does each boundary own?”

This was a learning capstone, not a claim of operating a financial service with a production SLA. Team credit and implementation details are in the repository.

https://github.com/Amr-Walid/Depi-Project/tree/main/crypto-pulse

#DataEngineering #Kafka #Azure
```

## P03 | 2026-11-26 | Warehouse layers and business definitions

**قبل النشر:** README وGold SQL اتراجعوا انتقائيًا. مشروع portfolio ببيانات ERP/CRM محاكاة، لا تدّعي عميل. لو تابع tutorial اذكر المصدر الحقيقي قبل النشر.

```text
A star schema is easier to draw than to define correctly.

In my SQL Server warehouse portfolio project, simulated ERP and CRM data move through three layers:

Bronze: preserve the source data.
Silver: clean, standardize, and integrate it.
Gold: expose a business-facing fact/dimension model for analysis.

The Gold implementation uses SQL views. That is an important detail: an analytical model does not automatically mean a physically materialized warehouse layer.

The questions I want a reviewer to ask are practical:
• What does one row represent?
• Which system owns each attribute?
• How are missing or conflicting values handled?
• Can an analyst trace a metric back to its source?

The project demonstrates layered transformations and dimensional modeling on sample data. It does not claim a production deployment, historical dimension tracking, or benchmarked performance gains.

Code and documentation:
https://github.com/Amr-Walid/Sqlserver-DataWarehouse-Project

Which modeling assumption do you document before writing the transformation?

#SQL #DataModeling #DataEngineering
```

## P04 | 2026-11-30 | Operational quality begins upstream

**قبل النشر:** مشروط بحق مشاركة وصف POS. لا تستخدم screenshot خام أو رقم tests. بديل آمن إذا الإذن غير متاح: P07 مكانه مع ترحيل P04.

```text
Some reporting problems begin before the ETL job runs.

A retail transaction needs more context than a product and a price. Returns, discounts, inventory movements, and user permissions all affect what “sales” should mean downstream.

My retail POS work in ASP.NET Core and SQL Server connects those operational workflows with reporting and audit logs.

It is a useful reminder for data engineering: downstream cleaning cannot always recover business meaning that the source system never captured.

Before designing a sales model, I would clarify:
• Is a return stored as a separate event or an update?
• Is the discount represented before or after tax?
• Which user or role can change a transaction?
• What happens to inventory after a partial return?

These are modeling and requirements questions, not claims that a particular design guarantees perfect data.

Building operational software has made me more interested in the source contracts behind analytical pipelines.

Where do data-quality issues usually start in your systems: capture, transformation, or metric definition?

#DataEngineering #SQLServer #SoftwareEngineering
```

## P05 | 2026-12-02 | MongoDB: event driven versus source freshness

**قبل النشر:** README يقول poll كل 60 ثانية. لا تستخدم تعبير milliseconds أو exchange-grade latency. صورة mongodb-pipeline اختيارية.

```text
Event-driven processing does not make the data source real-time.

My stock-data pipeline portfolio project separates three responsibilities:

1. A Python ingestor polls the source API periodically.
2. A processor reacts to new MongoDB records through Change Streams and updates analytical results.
3. FastAPI exposes those results to consumers.

The source polling interval is described as 60 seconds in the project README. Change Streams reduce the need for the processor to keep checking for new records, but they cannot make source data arrive earlier.

That is why I would describe this as event-driven processing after ingestion, rather than promise tick-by-tick market coverage.

The next reliability questions are equally important: resume behavior, duplicate handling, source limits, and whether consumers can see data freshness.

Those are review questions, not features I am claiming are all implemented.

Project:
https://github.com/Amr-Walid/real-time-stock-pipeline

#MongoDB #DataEngineering #FastAPI
```

## P06 | 2026-12-03 | Financial metrics before charts

**قبل النشر:** مشروط بتأكيد وصف خبرة finance وحق الإفصاح. النص يتجنب اسم Kidana. لا صور مالية حقيقية؛ استخدم جدول synthetic. المثال تعريف مقترح مش تعريف العميل المثبت.

```text
Before choosing a chart, define what the metric actually means.

My finance reporting work involved payment performance and bank guarantees, using Power Query, data models, and DAX.

A label such as “payment cycle” sounds simple. The difficult part is agreeing on the start and end events, the unit of measurement, and what happens to missing or incomplete records.

For example, a proposed metric might count calendar days between invoice receipt and payment. Another team might start from approval instead. Both can be calculated correctly and still answer different questions.

The same applies to bank-guarantee reporting: exposure, expiry, and review priority need explicit business definitions before they become dashboard colors.

My approach is to make the definition visible alongside the calculation and the refresh context.

The lesson carries directly into data engineering: a trustworthy pipeline delivers understandable data, not just valid rows.

What is the first question you ask when a KPI has more than one interpretation?

#BusinessIntelligence #DataModeling #DataEngineering
```
