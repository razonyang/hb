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
  path="modules/syntax-highlighting/styles/$module"
  git tag "$path/$1"
  git push origin "$path/$1"
done
