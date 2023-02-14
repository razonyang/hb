{{- $ctx := dict
    "vendor" "bootstrap"
    "name" "rocket"
    "width" "2rem"
    "height" "2rem"
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
