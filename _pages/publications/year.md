---
layout: archive
title: "Publications"
permalink: /publications/year/
author_profile: true
years: [2020, 2019, 2018, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2008]
toc: true
redirect_from:
  - /publications.html
  - /publications/
---

<p>
You can also find my articles on my
<a href= "{{site.data.profile.googlescholar}}" target="_blank"> Google Scholar profile</a>.  
</p>

<a href="/publications/topic/"><button type="button" class="btn" style="outline:none">By Topic </button></a>
<a href="/publications/year"><button type="button" class="btn" style="outline:none">By Year  </button></a>


{% for y in page.years %}
  <h3  id="{{y}}" class="pubyear">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
