---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
years: [2020, 2019, 2018, 2016, 2015, 2013, 2012]
toc: true 
---

<p> 
You can also find my articles on my 
<a href= "{{site.data.profile.googlescholar}}" target="_blank"> Google Scholar profile</a>.  
</p> 
<p>
* Indicates equal contribution.
</p> 
<a href="/publications/bytopic/"><button type="button" class="btn" style="outline:none">By Topic </button></a> 
<a href="/publications/"><button type="button" class="btn" style="outline:none">By Year  </button></a> 

<h3  class="pubyear">In the Pipeline</h3>
{% bibliography -f prpr %}

{% for y in page.years %}
  <h3  id="{{y}}" class="pubyear">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

