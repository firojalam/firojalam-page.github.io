---
layout: single
permalink: /publications/topic/
author_profile: true
title: Publication
toc: true
---

<p>
You can also find my articles on my
<a href= "{{site.data.profile.googlescholar}}" target="_blank"> Google Scholar profile</a>.  
</p>
<p>
* Indicates equal contribution.
</p>
<a href="/publications/topic/"><button type="button" class="btn" style="outline:none">By Topic </button></a>
<a href="/publications/year"><button type="button" class="btn" style="outline:none">By Year  </button></a>

<!-- book -->
<h3  class="pubyear">Book chapters</h3>
{% bibliography -f book %}

<!-- Applications in Biology -->
<h3  class="pubyear">Journals</h3>
{% bibliography -f journal %}


<!-- High Dimensional Statistics -->
<h3  class="pubyear">Conferences/Workshops</h3>
{% bibliography -f conferences %}
