---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true

---

<p> 
You can also find my articles on my 
<a href= "##"> Google Scholar profile</a>.  
</p> 
<p>
* Indicates equal contribution.
</p> 
<a href="/publicationbytopic/"><button type="button" class="btn" style="outline:none">By Topic </button></a> 
<a href="/publicationbyyear/"><button type="button" class="btn" style="outline:none">By Year  </button></a> 

<h3  class="pubyear">In the Pipeline</h3>
{% bibliography -f prpr %}

{% for y in page.years %}
  <h3  id="{{y}}" class="pubyear">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

