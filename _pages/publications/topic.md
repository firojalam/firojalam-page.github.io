---
layout: single
permalink: /publications/topic/
author_profile: true
years: [2021,2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007]
title: Publication
toc: true
redirect_from:
  - /publications.html
  - /publications/

---

<p>
You can also find my articles on my
<a href= "{{site.data.profile.googlescholar}}" target="_blank"> Google Scholar profile</a>.  
</p>

<!-- <a href="/publications/topic/"><button type="button" class="btn" style="outline:none">By Topic </button></a> -->
<!-- <a href="/publications/year"><button type="button" class="btn" style="outline:none">By Year  </button></a> -->

<!-- book -->
<h3  class="pubyear">Book chapters</h3>
{% bibliography -f book %}

<!-- Applications in Biology -->
<h3  class="pubyear">Journals</h3>
{% bibliography -f journal %}


<!-- High Dimensional Statistics -->
<h3  class="pubyear">Conferences/Workshops</h3>
{% bibliography -f conferences %}
