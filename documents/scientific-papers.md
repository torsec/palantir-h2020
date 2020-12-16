---
title: Scientific papers
layout: base
---

<h1 class="titlecustom">Scientific Papers</h1>

<div class="pcustom">
<h3>Papers published by the <strong>PALANTIR</strong> project:</h3>

{% assign doc_items = (site.data.documents.scientific-papers) %}
<br/>
<ul>
{% for doc in doc_items %}
	<li>
		{{ doc.authors }},
		<b>
		{% if doc.file  %}
			<a href="{{ site.baseurl | append: '/documents/scientific-papers/' | append: doc.file }}" title="{{ site.title }} - {{ doc.title }}"> <i class="fa fa-globe" aria-hidden="true"></i> {{ doc.title }}</a>,
		{% else %}
			{{ doc.title i}},
		{% endif %}		
		</b>
		<i>{{ doc.how }}</i>,
		{% if doc.where %}
			{{ doc.where }},
		{% endif %}
			{{ doc.date }},
		{% if doc.pages %}
			pp. {{ doc.pages }},
		{% endif %}
		{% if doc.issn %}
			ISSN: {{ doc.issn }},
		{% endif %}
		{% if doc.doi %}
			DOI:
			<a href="{{ 'https://dx.doi.org/' | append: doc.doi }}"
				title="{{ site.title }} - {{ doc.title }}">
				<i class="fa fa-globe" aria-hidden="true"></i> {{ doc.doi }}
			</a>
		{% endif %}

	</li>

{% endfor %}
</ul>
</div>
