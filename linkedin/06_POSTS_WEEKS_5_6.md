# بوستات LinkedIn — الأسبوعان 5 و6

نصوص إنجليزية جاهزة تحريريًا، وليست موافقة إفصاح. انسخ مربع text فقط بعد مراجعة الشرط. لا تستخدم Unicode bold أو صور بيانات خاصة. ما فيش ادعاء إن أفضل وقت نشر مثبت لحسابك. تفاصيل الصور والـalt text في ملف 08. الروابط داخل المتن للوضوح، وليس لافتراض ميزة خوارزمية.

## P13 | 2026-12-21 | Ownership is a data problem

**قبل النشر:** مشروط بحق عرض وصف governance. لا أرقام حسابات ولا أسماء داخلية ولا cover AI كـscreenshot. لا تضع رابط repo قبل فحصه للـsecrets.

```text
An account registry can be a data-governance problem before it is a publishing problem.

My social-media governance project focuses on questions such as: which business account exists, who owns it, who has access, and what requires approval?

The proposed system combines a PostgreSQL registry with workflow automation and reporting using n8n and Metabase.

The important modeling distinction is between:
• The asset itself.
• The business owner responsible for it.
• The people or roles granted access.
• The process used to approve changes.

Putting credentials directly into a reporting table would mix responsibilities that should remain separate.

This is a useful connection to data engineering: a central table does not automatically become a trustworthy source of truth. Ownership, update rules, access boundaries, and recovery processes matter too.

I would rather explain those responsibilities clearly than reduce governance to “one dashboard for everything.”

How do you represent ownership separately from access in your systems?

#DataGovernance #PostgreSQL #DataEngineering
```

## P14 | 2026-12-22 | Replay as a design review

**قبل النشر:** تأمل تقني في capstone؛ لا تنسب تنفيذ idempotency أو recovery tests للمشروع. نص فقط مناسب للعطلات.

```text
The happy-path architecture is only half the conversation.
What should happen when the same data arrives again?

Looking at the batch and streaming paths in our CryptoPulse capstone, replay is one of the most useful design-review topics.

A retry might repeat an API response. A historical load might overlap existing data. A downstream consumer might need to rebuild a derived result.

Before promising reliable recovery, I would want clear answers about:
• The business key and event time.
• Append versus merge behavior.
• Duplicate handling at each boundary.
• Checkpoints and restart behavior.
• How a reviewer can verify the final state.

This is a checklist for evaluating and improving the design, not a claim that the capstone already guarantees exactly-once behavior across all services.

I like portfolio discussions that include both the current implementation and the next experiment needed to build confidence.

What failure scenario would you test first in a mixed batch/streaming pipeline?

#DataEngineering #Streaming #DataQuality
```

## P15 | 2026-12-23 | Economics as context, not title inflation

**قبل النشر:** تأكد من التخرج يونيو2026. تأمل شخصي: عدّل الجمل لو مش بتعبر عنك. لا أسماء أبحاث غير محسومة.

```text
My Economics degree is not a substitute for engineering practice.
It gives me a useful set of questions to bring to it.

When I see a metric, I want to know how it is defined, which population it represents, and what decision someone intends to make with it.

When I see a data pipeline, the engineering questions follow: how is the source captured, which transformations change its meaning, and what evidence says the result is fit to use?

I graduated from Cairo University’s Faculty of Economics and Political Science in 2026. Since then, my professional direction has become clearer: data engineering supported by practical software-building experience.

The work I want to do sits between business context and technical delivery—not just moving rows, and not just presenting charts.

That is the connection I’m trying to make visible through my pipeline, warehouse, and business-system case studies.

How has your original field of study shaped the way you review data systems?

#DataEngineering #Economics #DataModeling
```

## P16 | 2026-12-28 | A portfolio map for technical reviewers

**قبل النشر:** لا تدّعي حداثة الإطلاق؛ المشاريع سبق إعلانها. روابط الريبو العامة تتأكد منها يوم النشر.

```text
If you review my work for a Data Engineering role, these are the three places I would suggest starting.

1. CryptoPulse — our DEPI team capstone.
Look at how streaming and historical ingestion connect to lakehouse processing, analytical models, and serving layers. Ask me about my contribution separately from the team’s overall architecture.

2. SQL Server warehouse — a portfolio project using simulated ERP and CRM data.
Look at the Bronze/Silver/Gold separation, transformation logic, and fact/dimension views.

3. MongoDB stock pipeline — a portfolio project separating ingestion, Change Streams processing, and FastAPI serving.
Look at the service boundaries, and distinguish source freshness from processing responsiveness.

My ASP.NET Core business-system work provides additional context on where operational data comes from, but these three are the clearest starting points for the data-engineering discussion.

I’m interested in reviews that examine assumptions and limitations as well as the architecture.

Project map: https://amrw.me

#DataEngineering #SQL #Python
```

## P17 | 2026-12-29 | Failure modes: what I want to demonstrate next

**قبل النشر:** أسئلة مستقبلية فقط؛ لا توحي بإنجاز reliability tests غير موجودة. وقت مناسب نص قصير بدل إطلاق جديد.

```text
A useful next step for a portfolio is not always another project.
Sometimes it is making one existing project easier to trust.

For my data-engineering work, the review checklist I want to strengthen includes:

• Freshness: can a consumer tell when data last arrived?
• Recovery: can a failed step be rerun without corrupting the result?
• Quality: are invalid records visible rather than silently dropped?
• Reproducibility: can another person follow the setup?
• Ownership: is the responsible service or person clear?
• Evidence: can each claim be traced to code, a test, or a documented run?

This is a development direction, not an announcement that every project already implements every item.

I would rather improve one failure path and show the evidence than add another technology name to the headline.

Which single reliability improvement would make a small data-engineering portfolio more convincing to you?

#DataEngineering #DataQuality #SoftwareEngineering
```

## P18 | 2026-12-30 | Explicit job-search invitation

**قبل النشر:** راجع التوافر الفعلي. لا يذكر relocation أو work authorization غير مؤكدين. لو السوق المستهدف في عطلة أجّله لأول أسبوع عمل مناسب بدل إهداره.

```text
I’m exploring early-career Data Engineer and ETL/Data Integration opportunities with international teams.

I’m based in Cairo and currently work as a Software Engineer at Uni Group. My background combines Python and SQL data projects with hands-on ASP.NET Core business-system work.

The most relevant examples in my portfolio are:
• CryptoPulse, a DEPI team capstone covering batch/streaming ingestion, processing, modeling, and serving.
• A SQL Server warehouse portfolio project with layered transformations and a fact/dimension model.
• A Python/MongoDB/FastAPI pipeline with event-driven processing after ingestion.

I also bring finance-reporting experience with Power Query and DAX, and experience explaining data-engineering concepts as an instructor.

I’m particularly interested in roles where I can contribute to SQL/Python pipelines, data integration, and reliable analytical datasets while growing within an engineering team.

If your team has a relevant opening, I’d welcome a conversation about the role’s scope and requirements.

Portfolio: https://amrw.me
Contact: amrw0109@gmail.com

#DataEngineering #ETL #OpenToWork
```
