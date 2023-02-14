{{- $ctx := dict
    "vendor" "bootstrap"
    "name" (default "rocket" .Site.Params.hb.back_to_top.icon_name)
    "width" (default "2em" .Site.Params.hb.back_to_top.icon_width)
    "height" (default "2em" .Site.Params.hb.back_to_top.icon_height)
    "className" "hb-back-to-top-icon"
}}
{{ $icon := partial "icons/icon" $ctx }}
import Button from "./button";

(() => {
    'use strict'

    window.addEventListener('DOMContentLoaded', () => {
        const btn = new Button(`{{ $icon }}`)
    })
})();
