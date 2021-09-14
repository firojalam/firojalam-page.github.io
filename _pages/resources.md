---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: true
---

<ul>
{%- for item in site.resources -%}
    <li><a href="{{site.base_url}}{{item.url}}">{{item.title}}</a></li>
{%- endfor -%}
</ul>
