#!/bin/bash
styles=(abap algol algol_nu arduino autumn average base16-snazzy borland bw catppuccin-frappe catppuccin-latte 
  catppuccin-macchiato catppuccin-mocha colorful doom-one doom-one2 dracula emacs friendly fruity github-dark github 
  gruvbox-light gruvbox hr_high_contrast hrdark igor lovelace manni modus-operandi modus-vivendi monokai monokailight 
  murphy native nord onedark onesenterprise paraiso-dark paraiso-light pastie perldoc pygments rainbow_dash 
  rose-pine-dawn rose-pine-moon rose-pine rrt solarized-dark solarized-dark256 solarized-light swapoff tango 
  trac vim vs vulcan witchhazel xcode-dark xcode)
for style in "${styles[@]}"
do
  module=$(echo "$style" | sed "s/_/-/g")
  dir="modules/syntax-highlighting/styles/$module"
  mkdir -p "$dir/assets/hb/modules/syntax-highlighting/scss/"

  if [ ! -f "$dir/go.mod" ]
  then
    cat <<EOT >> "$dir/go.mod"
module github.com/razonyang/hb/modules/syntax-highlighting/styles/$module

go 1.18
EOT
  fi

  if [ ! -f "$dir/hugo.toml" ]
  then
    cat <<EOT >> "$dir/hugo.toml"
[[module.imports]]
path = "github.com/razonyang/hb"
EOT
  fi

  style="$dir/assets/hb/modules/syntax-highlighting/scss/index.scss"
  hugo gen chromastyles --style="$style" > "$style"
  
  echo -e "/*! purgecss start ignore */\n$(cat $style)\n/*! purgecss end ignore */" > $style
done