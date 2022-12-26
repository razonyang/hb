// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
{{- range resources.Match "hb/modules/*/js/index.ts" }}
  import '{{ .Name }}';
{{- end }}
