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

<!-- Preprints -->
<h3  class="pubyear">In the Pipeline</h3>
{% bibliography -f prpr %}

<!-- Applications in Biology -->
<h3  class="pubyear">Applications in Biology</h3>
{% bibliography -f cb %}


<!-- High Dimensional Statistics -->
<h3  class="pubyear">High Dimensional Statistics</h3>
{% bibliography -f hds %}

<!-- Social Network Analysis --> 
<h3  class="pubyear">Social Network Analysis</h3>
{% bibliography -f sna %}

<!-- General Machine Learning --> 
<h3  class="pubyear">General Machine Learning</h3>
{% bibliography -f gml %}
