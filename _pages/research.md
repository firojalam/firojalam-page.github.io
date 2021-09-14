---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---


<ul>
{%- for item in site.research -%}
    <li><a href="{{site.base_url}}{{item.url}}">{{item.title}}</a></li>
{%- endfor -%}
</ul>
