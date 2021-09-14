---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: true
---

<ul>
{%- for item in site.resources -%}
    <li>{{item.title}}</li>
{%- endfor -%}
</ul>
