# بوستات LinkedIn — الأسبوعان 3 و4

نصوص إنجليزية جاهزة تحريريًا، وليست موافقة إفصاح. انسخ مربع text فقط بعد مراجعة الشرط. لا تستخدم Unicode bold أو صور بيانات خاصة. ما فيش ادعاء إن أفضل وقت نشر مثبت لحسابك. تفاصيل الصور والـalt text في ملف 08. الروابط داخل المتن للوضوح، وليس لافتراض ميزة خوارزمية.

## P07 | 2026-12-07 | Docker helps, but it is not a production checklist

**قبل النشر:** مثال Docker ETL موصوف بالـREADME. الأسئلة المستقبلية لا تنسب ميزات غير منفذة للمشروع.

```text
“It runs in Docker” is a useful starting point, not a reliability guarantee.

My Dockerized ETL portfolio project packages a Python workflow and PostgreSQL using Docker Compose. It makes the environment easier to set up and gives the application and database clear service boundaries.

But containerization does not answer every operational question:
• Does the loader wait for database readiness?
• What happens if the job runs twice?
• Where do credentials come from?
• What persists when a container is recreated?
• How would a failed run be diagnosed?

These are the next checks I would apply before extending a small ETL exercise into a service other people depend on.

I find this distinction helpful in portfolio reviews: explain what the implementation demonstrates, then be equally clear about the work still needed.

Reproducible setup is one layer of reliability. It is not the whole system.

https://github.com/Amr-Walid/docker-etl-pipeline

#Docker #ETL #DataEngineering
```

## P08 | 2026-12-09 | Multi-tenant boundaries

**قبل النشر:** مشروط بإذن مشاركة وصف ATS/CRM. لا تقول DB isolation أو security guarantee. Generic diagram بدل صورة ببيانات عملاء.

```text
A company filter is not the whole multi-tenancy security model.

In my asset-tracking work, company-scoped queries are implemented with EF Core Global Query Filters. They help apply a tenant constraint consistently in application queries.

But query filters are not database-native row-level security, and they are not a substitute for authorization.

The review questions I would ask include:
• Where does the tenant context come from?
• Can a background job run without the expected context?
• Can a query bypass the filter?
• Do exports and reports respect the same boundary?
• Are cross-tenant access attempts covered by tests?

That last list is a review checklist, not a claim that every path has already been independently security-audited.

This matters for data engineering too. A reporting pipeline can accidentally erase application boundaries if tenant identifiers and access rules are not carried forward deliberately.

How do you keep tenant context visible from operational storage to analytics?

#DataEngineering #DotNet #DataGovernance
```

## P09 | 2026-12-10 | Teaching: make the dataflow explainable

**قبل النشر:** الشهادة البصرية July 2026. انشر صورة منقحة أو text-only؛ لا أعداد طلاب أو نسب نجاح. راجع الوصف الفعلي لدورك.

```text
Teaching data engineering gives me a useful test for technical explanations:
Can someone follow the data without memorizing the tools?

At the Applied Statistics Lab, I taught concepts involving SQL, Python, databases, and ETL/ELT workflows, and received an Outstanding Instructor Certificate of Excellence in July 2026.

For a short technical explanation, I now like to use five questions:
1. Where does the data originate?
2. What does one record mean?
3. What changes during processing?
4. Where does the result live?
5. Who uses it, and for what decision?

A diagram with those answers is often more useful than a slide full of logos.

That does not remove the need for implementation detail. It gives the detail a structure that another engineer or stakeholder can question.

Clear communication is part of the engineering work, especially when a pipeline crosses teams.

What question tells you whether an architecture explanation is actually clear?

#DataEngineering #TechnicalCommunication #SQL
```

## P10 | 2026-12-14 | A small scheduled ETL and its limits

**قبل النشر:** لا تدّعي uptime أو ضمان موعد GitHub Actions. لا تذكر تشغيلًا حديثًا بدون مراجعة Actions وقت النشر.

```text
A small scheduled ETL can be a good learning system—if its limits are explicit.

My crypto-price tracker fetches CoinGecko data, transforms it with Python and Pandas, adds a UTC timestamp, and appends the results to a CSV dataset. GitHub Actions provides the scheduled trigger.

That keeps the initial workflow easy to inspect: API response, transformation, stored rows, and workflow logs.

It also creates useful design questions:
• How do we recognize a duplicate observation?
• What if the API fails or returns a partial response?
• When does a CSV become the wrong storage choice?
• How do we distinguish scheduled time from actual run time?

An hourly cron expression is an intended schedule, not a guarantee of exact execution or continuous availability.

The project is valuable to me as a bounded ETL example. Its next step should follow an actual requirement—not adding infrastructure for the diagram.

https://github.com/Amr-Walid/crypto-price-analyzer

#Python #ETL #GitHubActions
```

## P11 | 2026-12-16 | Validation before the dashboard

**قبل النشر:** مشروط بإذن مشاركة M365. flows والصور قد تعرض إيميلات وtenant URLs؛ استخدم schematic أو synthetic. لا تدّعي exactly once.

```text
A dashboard should not be the first place an invalid record is discovered.

In my Microsoft 365 project-management and attendance workflow, Forms capture inputs, Power Automate handles workflow logic, SharePoint Lists store records, and Power Query/DAX support reporting.

The project description includes project-ID validation and duplicate check-in detection. Those checks sit before management reporting, rather than relying only on visual cleanup at the end.

The broader design question is how business rules travel across the workflow:
• What identifies a valid project?
• What makes two attendance submissions duplicates?
• Who receives an error notification?
• How should corrections reach the reporting layer?

A duplicate check is not the same as a proof of exactly-once processing. Concurrency and retry behavior still deserve explicit review.

This is one reason I see low-code automation and data engineering as related disciplines: both need reliable contracts between steps.

Where do you prefer to validate a record, and which checks do you repeat downstream?

#DataQuality #PowerAutomate #DataEngineering
```

## P12 | 2026-12-17 | AI dashboard: delivery versus trust

**قبل النشر:** رابط حي أعطى 200 فقط. جرّب demo قبل النشر؛ لا تعِد بصحة AI أو إنجازات قياس. الصورة اختيارية من بيانات demo.

```text
A streaming AI answer can feel fast and still be wrong.

My analytics dashboard project combines Next.js, React, charts, and a Gemini-powered assistant with an Arabic interface. It explores another part of the data journey: helping people consume and question the data.

The implementation includes streaming responses and data summarization to manage the request context.

But a useful review has to go beyond interface responsiveness:
• Which dataset version is the answer based on?
• Can the user inspect the metric definition?
• Does a generated number agree with a deterministic calculation?
• What should happen when the question cannot be answered from the available data?

These are evaluation questions—not a claim that the assistant has passed a comprehensive accuracy assessment.

For me, AI-assisted analytics makes the data foundation more important, not less. A confident explanation cannot repair an ambiguous metric or a stale dataset.

Project: https://dashboard.amrw.me/

#DataEngineering #Analytics #Nextjs
```
